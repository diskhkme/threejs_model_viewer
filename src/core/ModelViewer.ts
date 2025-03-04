import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { SceneManager } from "./SceneManager";
import { ControlsManager } from "./ControlsManager";
import { ModelLoader, LoaderCallbacks } from "../loaders/ModelLoader";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { TestControls } from "../components/_deprecated/TestControls";
import { MessageHandler } from "../utils/MessageHandler";
import { ViewCube } from "../components/ViewCube";
import { StandardViewButtons } from "../components/StandardViewButtons";
import { GridAndAxes } from "../components/GridAndAxes";
import { ModelInfoPanel } from "../components/ModelInfoPanel";
import { FEATURE_FLAGS } from "../config/features";

export class ModelViewer {
  private sceneManager: SceneManager;
  private controlsManager: ControlsManager;
  private loadingIndicator: LoadingIndicator;
  private messageHandler: MessageHandler;
  private viewCube: ViewCube;
  private readonly standardViewButtons: StandardViewButtons;
  private gridAndAxes: GridAndAxes;
  private modelInfoPanel: ModelInfoPanel;
  private stats: Stats;
  private gui: GUI;
  private currentModelUUID: string | null = null;
  private models: Map<string, string> = new Map(); // key: modelId, value: UUID

  constructor() {
    // 씬 매니저 초기화
    this.sceneManager = new SceneManager();
    document.body.appendChild(this.sceneManager.getDomElement());

    // 컨트롤 매니저 초기화
    this.controlsManager = new ControlsManager(
      this.sceneManager.getCamera(),
      this.sceneManager.getDomElement()
    );

    // 로딩 인디케이터 초기화
    this.loadingIndicator = new LoadingIndicator();

    // 메시지 핸들러 초기화
    this.messageHandler = new MessageHandler(
      this.loadModel.bind(this),
      this.unloadModel.bind(this)
    );

    // 뷰 큐브 초기화
    this.viewCube = new ViewCube(this.sceneManager.getCamera());

    // 표준 뷰 버튼 초기화
    this.standardViewButtons = new StandardViewButtons(
      this.sceneManager.getCamera()
    );

    // 그리드 및 축 초기화
    this.gridAndAxes = new GridAndAxes(this.sceneManager.getScene());

    // 모델 정보 패널 초기화
    this.modelInfoPanel = new ModelInfoPanel();

    // Stats 초기화
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    // GUI 초기화
    this.gui = new GUI();
    this.setupGUI();

    // 애니메이션 시작
    this.animate();

    if (FEATURE_FLAGS.ENABLE_TEST_CONTROLS) {
      // @deprecated TestControls는 v1.0.0에서 제거될 예정입니다.
      new TestControls();
    }
  }

  private setupGUI(): void {
    const viewFolder = this.gui.addFolder("뷰 설정");

    // 그리드 표시 설정
    const viewSettings = {
      showGrid: true,
      backgroundColor: "#f0f0f0",
    };

    viewFolder.add(viewSettings, "showGrid").onChange((value: boolean) => {
      this.gridAndAxes.setVisible(value);
    });

    viewFolder
      .addColor(viewSettings, "backgroundColor")
      .onChange((value: string) => {
        this.sceneManager.getScene().background = new THREE.Color(value);
      });

    viewFolder.open();
  }

  public loadModel(url: string, modelId: string): void {
    if (!url) {
      console.warn("모델 URL이 제공되지 않았습니다.");
      return;
    }

    // 로더 표시
    this.loadingIndicator.show();

    // 기존 모델 제거
    this.unloadModel(modelId);

    const callbacks: LoaderCallbacks = {
      onLoad: (model) => {
        // 모델에 식별자 설정
        model.name = "currentModel";
        model.userData.type = "mainModel";

        // UUID 저장
        this.models.set(modelId, model.uuid);

        this.sceneManager.getScene().add(model);

        // 모델 경계 상자 계산
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // 모델 중심 이동
        model.position.sub(center);

        // 카메라 위치 조정
        const maxDim = Math.max(size.x, size.y, size.z);
        this.sceneManager.setViewportSize(maxDim * 2.5);

        // 컨트롤 타겟 업데이트
        this.controlsManager.setTarget(0, 0, 0);

        // 모델 정보 패널 업데이트
        const fileName = url.split("/").pop() || "Unknown";
        this.modelInfoPanel.updateModelInfo(model, fileName);

        // 로더 숨기기
        this.loadingIndicator.hide();

        // 부모 프레임에 로드 완료 알림
        this.messageHandler.sendModelLoadedMessage(true);
      },
      onProgress: (percentage) => {
        this.loadingIndicator.updateProgress(percentage);
      },
      onError: (error) => {
        console.error("모델 로드 중 오류 발생:", error);
        this.loadingIndicator.showError("모델 로드 실패");

        // 부모 프레임에 오류 알림
        this.messageHandler.sendModelLoadedMessage(
          false,
          error instanceof Error ? error.message : String(error)
        );
      },
    };

    ModelLoader.loadModel(url, callbacks);
  }

  public unloadModel(modelId: string): void {
    const uuid = this.models.get(modelId);
    if (uuid) {
      const model = this.sceneManager
        .getScene()
        .getObjectByProperty("uuid", uuid);

      if (model) {
        // 재귀적으로 모든 자식 객체의 리소스 정리
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.geometry) {
              child.geometry.dispose();
            }

            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else if (child.material) {
              child.material.dispose();
            }
          }
        });

        // 씬에서 제거
        this.sceneManager.getScene().remove(model);
      }

      this.models.delete(modelId);
      this.messageHandler.sendModelUnloadedMessage();
    }
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.controlsManager.update();
    this.viewCube.update();
    this.sceneManager.render();
    this.stats.update();
  }
}
