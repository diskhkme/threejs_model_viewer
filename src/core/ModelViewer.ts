import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";
import { SceneManager } from "./SceneManager";
import { ControlsManager } from "./ControlsManager";
import { ModelLoader, LoaderCallbacks } from "../loaders/ModelLoader";
import { LoadingIndicator } from "../components/LoadingIndicator";
import { TestControls } from "../components/TestControls";
import { MessageHandler } from "../utils/MessageHandler";

export class ModelViewer {
  private sceneManager: SceneManager;
  private controlsManager: ControlsManager;
  private loadingIndicator: LoadingIndicator;
  private messageHandler: MessageHandler;
  private stats: Stats;
  private currentModel: THREE.Object3D | null = null;

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
    this.messageHandler = new MessageHandler(this.loadModel.bind(this));

    // 테스트 컨트롤 초기화
    new TestControls();

    // Stats 초기화
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    // 애니메이션 시작
    this.animate();
  }

  public loadModel(url: string): void {
    if (!url) {
      console.warn("모델 URL이 제공되지 않았습니다.");
      return;
    }

    // 로더 표시
    this.loadingIndicator.show();

    // 기존 모델 제거
    if (this.currentModel) {
      this.sceneManager.getScene().remove(this.currentModel);
      this.currentModel = null;
    }

    const callbacks: LoaderCallbacks = {
      onLoad: (model) => {
        this.currentModel = model;
        this.sceneManager.getScene().add(model);

        // 모델 경계 상자 계산
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // 모델 중심 이동
        model.position.sub(center);

        // 카메라 위치 조정
        const maxDim = Math.max(size.x, size.y, size.z);
        const camera = this.sceneManager.getCamera();
        camera.position.z = maxDim * 2;
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // 컨트롤 타겟 업데이트
        this.controlsManager.setTarget(0, 0, 0);

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

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.controlsManager.update();
    this.sceneManager.render();
    this.stats.update();
  }
}
