import * as THREE from "three";
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
import { AlignmentManager, SelectedVertexData } from "./AlignmentManager";
import { SceneTreeViewer } from "./SceneTreeViewer";

export class ModelViewer {
  private sceneManager: SceneManager;
  private controlsManager: ControlsManager;
  private alignmentManager: AlignmentManager;
  private loadingIndicator: LoadingIndicator;
  private messageHandler: MessageHandler;
  private viewCube: ViewCube;
  private standardViewButtons: StandardViewButtons;
  private gridAndAxes: GridAndAxes;
  private modelInfoPanel: ModelInfoPanel;
  private gui: GUI;
  private mainContentArea!: HTMLDivElement;
  private sceneTreeViewer!: SceneTreeViewer;
  private currentModelUUID: string | null = null;
  private models: Map<string, string> = new Map(); // key: modelId, value: UUID
  private currentlySelectedModelUUIDInTree: string | null = null;

  // 정렬 기능 버튼 참조 (초기화 오류 해결)
  private toggleSelectModeButton!: HTMLButtonElement;
  private clearSelectionButton!: HTMLButtonElement;
  private alignButton!: HTMLButtonElement;

  constructor() {
    // 씬 매니저 초기화
    this.sceneManager = new SceneManager(/* 컨테이너 전달 제거 */);
    this.mainContentArea = document.createElement("div");
    this.mainContentArea.classList.add("main-content-area");
    document.body.appendChild(this.mainContentArea);
    this.mainContentArea.appendChild(this.sceneManager.getDomElement());

    // 컨트롤 매니저 초기화 (OrthographicCamera 전달 확인)
    this.controlsManager = new ControlsManager(
      this.sceneManager.getCamera(), // 이제 OrthographicCamera 반환
      this.sceneManager.getRenderer(),
      this.sceneManager // sceneManager 인스턴스 전달
    );

    // AlignmentManager 초기화 (ControlsManager 전달)
    this.alignmentManager = new AlignmentManager(this.controlsManager);

    // SceneTreeViewer 초기화
    this.sceneTreeViewer = new SceneTreeViewer("scene-tree-container");
    this.sceneTreeViewer.onNodeSelected = this.handleNodeSelection.bind(this);
    this.sceneTreeViewer.onNodeVisibilityChange =
      this.handleNodeVisibilityChange.bind(this);

    // 로딩 인디케이터 초기화
    this.loadingIndicator = new LoadingIndicator();

    // 메시지 핸들러 초기화
    this.messageHandler = new MessageHandler(
      this.loadModel.bind(this),
      this.unloadModel.bind(this)
    );

    // 뷰 큐브 초기화
    this.viewCube = new ViewCube(this.sceneManager.getCamera());
    const viewCubeElement = document.getElementById("view-cube-container");
    if (viewCubeElement) {
      this.mainContentArea.appendChild(viewCubeElement);
    } else {
      console.warn("ViewCube element not found by ID 'view-cube-container'");
    }

    // 표준 뷰 버튼 초기화
    this.standardViewButtons = new StandardViewButtons(
      this.sceneManager.getCamera()
    );
    const stdViewButtonsElement = document.getElementById(
      "standard-view-buttons-container"
    );
    if (stdViewButtonsElement) {
      this.mainContentArea.appendChild(stdViewButtonsElement);
    } else {
      console.warn(
        "StandardViewButtons element not found by ID 'standard-view-buttons-container'"
      );
    }

    // 그리드 및 축 초기화
    this.gridAndAxes = new GridAndAxes(this.sceneManager.getScene());

    // 모델 정보 패널 초기화
    this.modelInfoPanel = new ModelInfoPanel();
    if (this.modelInfoPanel.getElement) {
      this.mainContentArea.appendChild(this.modelInfoPanel.getElement());
    } else {
      console.warn(
        "ModelInfoPanel does not have getElement method, attempting direct append."
      );
      try {
        this.mainContentArea.appendChild(
          this.modelInfoPanel as unknown as Node
        );
      } catch (e) {
        console.error("Failed to append ModelInfoPanel", e);
      }
    }

    // GUI 초기화
    this.gui = new GUI({ autoPlace: false });
    this.gui.domElement.style.position = "absolute";
    this.gui.domElement.style.bottom = "10px";
    this.gui.domElement.style.right = "10px";
    this.mainContentArea.appendChild(this.gui.domElement);
    this.setupGUI();

    // 애니메이션 시작
    this.animate();

    if (FEATURE_FLAGS.ENABLE_TEST_CONTROLS) {
      // @deprecated TestControls는 v1.0.0에서 제거될 예정입니다.
      new TestControls();
    }

    // ControlsManager 콜백 설정
    this.controlsManager.onVertexSelected =
      this.handleVertexSelection.bind(this);

    // AlignmentManager 콜백 설정 (정렬 완료 후 UI 업데이트 등)
    this.alignmentManager.onAlignmentComplete = () => {
      this.alignButton.disabled = true;
      this.clearSelectionButton.disabled = true;
    };

    this.createUI(); // UI 생성 함수 호출

    // 초기 트리 빌드 (로드된 모델 목록 기반)
    this.sceneTreeViewer.buildTree(this.sceneManager.getLoadedModels());

    // 리사이즈 핸들러 연결
    window.addEventListener("resize", this.onWindowResize.bind(this));
    this.onWindowResize(); // 초기 리사이즈 호출
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
    // this.unloadModel(modelId);

    const callbacks: LoaderCallbacks = {
      onLoad: (model) => {
        // 파일 이름 추출
        const fileName = url.split("/").pop() || `Model_${modelId}`;

        // 모델 이름 설정
        model.name = fileName;

        model.userData.type = "mainModel";
        this.models.set(modelId, model.uuid);
        this.sceneManager.addLoadedModel(model);

        // 모델 경계 상자 계산
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // 모델 중심 이동 (주석 처리 유지 또는 필요시 조정)
        // model.position.sub(center);

        // 카메라 위치 조정 (setViewportSize 사용으로 복원)
        const maxDim = Math.max(size.x, size.y, size.z);
        // const camera = this.sceneManager.getCamera();
        // const fitOffset = 1.5; // 모델 주위 여백
        // const distance = maxDim / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) * fitOffset;
        // camera.position.set(center.x, center.y, center.z + distance);
        // camera.lookAt(center); // 모델 중심을 바라보도록 설정
        this.sceneManager.setViewportSize(maxDim * 1.5); // 모델 크기에 맞게 viewport 크기 조절 (여백 추가)

        // 컨트롤 타겟 업데이트 (모델 중심으로 설정)
        this.controlsManager.setTarget(center.x, center.y, center.z);

        // 모델 정보 패널 업데이트
        this.modelInfoPanel.updateModelInfo(model, fileName);
        if (this.modelInfoPanel.show) {
          this.modelInfoPanel.show();
        }
        this.currentlySelectedModelUUIDInTree = model.uuid;

        // 로더 숨기기
        this.loadingIndicator.hide();

        // 부모 프레임에 로드 완료 알림
        this.messageHandler.sendModelLoadedMessage(true);

        // 모델 로드 후 트리 업데이트 (로드된 모델 목록 전달)
        this.sceneTreeViewer.buildTree(this.sceneManager.getLoadedModels());
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
        if (this.modelInfoPanel && this.modelInfoPanel.hide) {
          this.modelInfoPanel.hide();
        }
        this.currentlySelectedModelUUIDInTree = null;
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

      // 모델 언로드 후 트리 업데이트 (로드된 모델 목록 전달)
      this.sceneTreeViewer.buildTree(this.sceneManager.getLoadedModels());

      if (this.currentlySelectedModelUUIDInTree === uuid) {
        this.handleNodeSelection(null);
      }
    }
  }

  // 정점 선택 처리 콜백
  private handleVertexSelection(data: SelectedVertexData | null): void {
    if (data) {
      console.log("Vertex selected in ModelViewer:", data);
      // AlignmentManager에 선택 정보 업데이트 요청
      this.alignmentManager.updateSelection(data);

      // 기준점 설정 로직 (예: 첫 번째 선택을 기준으로)
      // 또는 UI를 통해 사용자가 기준점을 명시적으로 선택하게 할 수도 있음
      if (
        !this.alignmentManager.getReferenceModel() &&
        this.alignmentManager.getSelectedVertices().size === 1
      ) {
        this.alignmentManager.setReference(data);
        console.log(
          "Reference model set in ModelViewer based on first selection"
        );
        // TODO: 기준 모델 시각적 표시 변경 (버튼 활성화 등)
      }

      // 버튼 상태 업데이트
      this.updateAlignmentButtons();
    } else {
      // 선택이 초기화되었을 때 (ControlsManager에서 호출됨)
      // AlignmentManager의 clear가 ControlsManager.clearSelection을 호출하고,
      // ControlsManager.clearSelection이 이 콜백을 null로 호출
      console.log("Selection cleared notification in ModelViewer");
      // this.alignmentManager.clear(); // AlignmentManager 상태도 확실히 초기화
      this.updateAlignmentButtons();
    }
  }

  // 트리 노드 선택 처리 콜백
  private handleNodeSelection(uuid: string | null): void {
    console.log("Node selected in tree:", uuid);
    this.currentlySelectedModelUUIDInTree = uuid;

    if (uuid) {
      // 선택된 모델 객체 찾기
      const selectedModel = this.sceneManager
        .getScene()
        .getObjectByProperty("uuid", uuid);

      if (selectedModel) {
        // 정보 패널 업데이트 및 표시
        const modelName = selectedModel.name || `Model_${uuid.substring(0, 6)}`;
        this.modelInfoPanel.updateModelInfo(selectedModel, modelName);
        if (this.modelInfoPanel.show) this.modelInfoPanel.show(); // show 메서드 확인 후 호출
      } else {
        console.warn(`Selected model with UUID ${uuid} not found in scene.`);
        if (this.modelInfoPanel.hide) this.modelInfoPanel.hide(); // hide 메서드 확인 후 호출
      }
    } else {
      // 선택 해제 시 패널 숨김
      if (this.modelInfoPanel.hide) this.modelInfoPanel.hide(); // hide 메서드 확인 후 호출
    }
  }

  // --- 트리 노드 가시성 변경 처리 콜백 --- (메서드 추가)
  private handleNodeVisibilityChange(uuid: string, isVisible: boolean): void {
    console.log(`Node visibility change: UUID=${uuid}, Visible=${isVisible}`);
    const modelObject = this.sceneManager
      .getScene()
      .getObjectByProperty("uuid", uuid);
    if (modelObject) {
      modelObject.visible = isVisible;
      // 자식 객체들의 가시성도 함께 변경하려면 traverse 사용 (선택 사항)
      // modelObject.traverse(child => { child.visible = isVisible; });
    } else {
      console.warn(
        `Model object with UUID ${uuid} not found for visibility change.`
      );
    }
  }

  // UI 생성 (버튼 등) - 버튼들을 클래스 멤버에 할당
  private createUI(): void {
    const controlsContainer = document.createElement("div");
    controlsContainer.id = "controlsContainer";

    // --- 모델 정렬 버튼 ---
    this.toggleSelectModeButton = document.createElement("button");
    this.toggleSelectModeButton.textContent = "정점 선택 시작";
    this.toggleSelectModeButton.onclick = () => {
      const currentMode = this.controlsManager.getVertexSelectionMode();
      this.controlsManager.setVertexSelectionMode(!currentMode);
      this.toggleSelectModeButton.textContent = !currentMode
        ? "정점 선택 종료"
        : "정점 선택 시작";

      // 선택 모드 종료 시 버튼 상태 업데이트
      if (currentMode) {
        // 모드가 막 종료된 경우
        this.updateAlignmentButtons();
      } else {
        // 모드가 막 시작된 경우
        this.alignButton.disabled = true;
        this.clearSelectionButton.disabled = true;
      }
    };
    controlsContainer.appendChild(this.toggleSelectModeButton);

    // --- 선택 초기화 버튼 ---
    this.clearSelectionButton = document.createElement("button");
    this.clearSelectionButton.textContent = "선택 초기화";
    this.clearSelectionButton.disabled = true; // 초기 비활성화
    this.clearSelectionButton.onclick = () => {
      this.alignmentManager.clear(); // AlignmentManager의 초기화 함수 호출
      this.updateAlignmentButtons(); // 버튼 상태 업데이트
    };
    controlsContainer.appendChild(this.clearSelectionButton);

    // --- 정렬 실행 버튼 ---
    this.alignButton = document.createElement("button");
    this.alignButton.textContent = "모델 정렬";
    this.alignButton.disabled = true; // 초기 비활성화
    this.alignButton.onclick = () => {
      if (this.controlsManager.getVertexSelectionMode()) {
        alert("먼저 '정점 선택 종료' 버튼을 눌러주세요.");
        return;
      }
      // AlignmentManager의 정렬 함수 호출
      this.alignmentManager.performAlignment();
      // onAlignmentComplete 콜백에서 버튼 비활성화 처리됨
    };
    controlsContainer.appendChild(this.alignButton);

    // 메인 영역에 버튼 컨테이너 추가
    this.mainContentArea.appendChild(controlsContainer);
  }

  // 정렬 관련 버튼 상태 업데이트 로직
  private updateAlignmentButtons(): void {
    const canAlign = this.alignmentManager.canAlign();
    const hasSelection = this.alignmentManager.getSelectedVertices().size > 0;
    const isSelectionMode = this.controlsManager.getVertexSelectionMode();

    // 정점 선택 모드가 아닐 때만 버튼 활성화 고려
    this.alignButton.disabled = isSelectionMode || !canAlign;
    this.clearSelectionButton.disabled = isSelectionMode || !hasSelection;
  }

  // 리사이즈 핸들러: SceneManager에 메인 영역 크기 전달
  private onWindowResize(): void {
    const width = this.mainContentArea.clientWidth;
    const height = this.mainContentArea.clientHeight;
    this.sceneManager.onResize(width, height); // SceneManager에 리사이즈 위임
    // ViewCube 등 다른 요소 리사이즈 필요시 여기서 처리
    if (
      this.viewCube &&
      typeof (this.viewCube as any).onResize === "function"
    ) {
      (this.viewCube as any).onResize(width, height); // 임시 타입 캐스팅
    }
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.controlsManager.update();
    if (this.viewCube) this.viewCube.update(); // viewCube 존재 여부 확인 후 업데이트
    this.sceneManager.render();
  }
}
