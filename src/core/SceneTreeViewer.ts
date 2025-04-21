import * as THREE from "three";

export class SceneTreeViewer {
  private container: HTMLElement;
  private selectedNodeElement: HTMLElement | null = null; // 현재 선택된 노드 참조

  // 노드 선택 시 호출될 콜백 함수 타입 정의
  public onNodeSelected: ((uuid: string | null) => void) | null = null;
  public onNodeVisibilityChange:
    | ((uuid: string, isVisible: boolean) => void)
    | null = null; // 가시성 변경 콜백 추가

  // 로드된 모델만 표시하기 위한 옵션 (또는 다른 필터링 기준)
  private readonly modelIdentifier = "mainModel"; // 예시: ModelViewer에서 설정한 userData.type

  constructor(containerId: string = "scene-tree-container") {
    let containerElement = document.getElementById(containerId);
    if (!containerElement) {
      containerElement = document.createElement("div");
      containerElement.id = containerId;
      document.body.appendChild(containerElement);
    }
    this.container = containerElement;
    // CSS 파일에서 스타일을 관리한다고 가정하고 JS 스타일 적용 제거 또는 주석 처리
    // this.applyStyles();
    this.container.classList.add("scene-tree-container"); // CSS 클래스 추가

    // 컨테이너 클릭 시 선택 해제 (선택 사항)
    this.container.addEventListener("click", (event) => {
      // 클릭된 요소가 노드 자체가 아닐 경우 선택 해제
      if (
        event.target === this.container ||
        (event.target instanceof HTMLElement &&
          event.target.closest(".scene-tree-node") === null)
      ) {
        this.deselectNode();
      }
    });
  }

  /**
   * 로드된 모델 목록을 기반으로 HTML 트리를 생성하고 표시합니다.
   * @param loadedModels 표시할 로드된 모델(Object3D) 배열
   */
  public buildTree(loadedModels: THREE.Object3D[]): void {
    // 이전 트리 내용 삭제
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }

    // 새로운 트리 생성 시작
    const rootUl = document.createElement("ul");
    rootUl.classList.add("scene-tree-root");
    this.selectedNodeElement = null; // 트리 재빌드 시 선택 초기화

    // 로드된 모델 목록을 순회하며 노드 생성
    loadedModels.forEach((model) => {
      // 최상위 모델 노드 생성 (isRoot 플래그 추가)
      const nodeElement = this.createTreeNode(model, true); // isRoot = true 전달
      if (nodeElement) {
        rootUl.appendChild(nodeElement);
      }
    });

    this.container.appendChild(rootUl);
  }

  /**
   * Object3D 객체를 위한 HTML 리스트 아이템(<li>) 노드를 재귀적으로 생성합니다.
   * 루트 노드 앞에 체크박스를 추가합니다.
   * @param object 노드를 생성할 Object3D 객체
   * @param isRoot 이 노드가 buildTree에서 직접 전달된 최상위 모델인지 여부
   * @returns 생성된 HTMLElement (<li>) 또는 null
   */
  private createTreeNode(
    object: THREE.Object3D,
    isRoot: boolean = false
  ): HTMLElement | null {
    // 필터링: 특정 타입의 객체는 트리에 표시하지 않음
    if (
      object instanceof THREE.Light || // 모든 종류의 조명 제외
      object instanceof THREE.Camera || // 카메라 제외
      object.type === "GridHelper" || // 그리드 헬퍼 제외
      object.type === "AxesHelper" || // 축 헬퍼 제외
      object.name === "ViewCube" // 뷰큐브 이름 확인 필요
      // || object.userData.type === 'Helper' // 필요시 주석 해제 및 사용
    ) {
      return null; // 이 객체 및 하위는 트리에 추가하지 않음
    }

    const listItem = document.createElement("li");
    listItem.classList.add("scene-tree-node");
    // listItem.dataset.uuid = object.uuid; // 루트가 아니어도 UUID 저장 가능 (디버깅용)

    if (isRoot) {
      listItem.classList.add("scene-tree-root-model");
      listItem.dataset.uuid = object.uuid;

      // --- 체크박스 생성 및 이벤트 리스너 추가 ---
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = object.visible; // 현재 모델 가시성 반영
      checkbox.title = "모델 표시/숨기기"; // 툴팁
      checkbox.addEventListener("change", (event) => {
        event.stopPropagation(); // 클릭 이벤트 전파 중지
        const isVisible = (event.target as HTMLInputElement).checked;
        if (this.onNodeVisibilityChange) {
          this.onNodeVisibilityChange(object.uuid, isVisible);
        }
        // 시각적 피드백 즉시 반영 (선택 사항)
        // nodeContent.style.opacity = isVisible ? '1' : '0.5';
      });
      // listItem 앞에 체크박스 추가
      listItem.appendChild(checkbox);

      // 루트 노드 클릭 이벤트 리스너는 아래 span 요소에 추가됨
    }

    const nodeContent = document.createElement("span");
    // 객체 이름이 없으면 타입을, 둘 다 없으면 UUID 앞부분 표시
    const displayName =
      object.name || object.type || `Object (${object.uuid.substring(0, 6)})`;
    nodeContent.textContent = `${displayName}`;
    // nodeContent.style.opacity = object.visible ? '1' : '0.5'; // 초기 가시성 반영 (선택 사항)

    // 루트 노드이고 클릭 콜백이 설정된 경우, span에 클릭 리스너 추가
    if (isRoot && this.onNodeSelected) {
      nodeContent.addEventListener("click", (event) => {
        event.stopPropagation();
        // nodeElement 대신 listItem을 찾아 전달해야 함
        const nodeElement = (event.target as HTMLElement).closest(
          ".scene-tree-root-model"
        );
        if (nodeElement instanceof HTMLElement) {
          this.selectNode(nodeElement, object.uuid);
        }
      });
    }
    listItem.appendChild(nodeContent);

    // 자식 노드가 있으면 재귀적으로 생성 (필터링 포함)
    if (!isRoot && object.children.length > 0) {
      const childrenUl = document.createElement("ul");
      childrenUl.classList.add("scene-tree-children");
      let hasVisibleChildren = false; // 보이는 자식이 있는지 확인
      object.children.forEach((child) => {
        const childNode = this.createTreeNode(child, false); // 자식은 isRoot=false
        if (childNode) {
          childrenUl.appendChild(childNode);
          hasVisibleChildren = true;
        }
      });
      // 보이는 자식 노드가 있는 경우에만 childrenUl을 추가
      if (hasVisibleChildren) {
        listItem.appendChild(childrenUl);
      }
    }

    return listItem;
  }

  // --- 제거 또는 주석 처리 (CSS 파일에서 관리) ---
  // /**
  //  * 트리 뷰 컨테이너에 기본적인 CSS 스타일을 적용합니다.
  //  */
  // private applyStyles(): void {
  //   this.container.style.position = 'absolute';
  //   this.container.style.left = '10px';
  //   this.container.style.top = '150px'; // 기존 버튼 아래에 위치하도록 조정 (필요시 변경)
  //   this.container.style.width = '250px';
  //   this.container.style.maxHeight = 'calc(100vh - 170px)'; // 화면 높이에 따라 조절
  //   this.container.style.backgroundColor = 'rgba(240, 240, 240, 0.8)';
  //   this.container.style.border = '1px solid #ccc';
  //   this.container.style.overflowY = 'auto';
  //   this.container.style.padding = '10px';
  //   this.container.style.fontFamily = 'monospace';
  //   this.container.style.fontSize = '12px';
  //   this.container.style.zIndex = '100'; // 다른 UI 요소 위에 오도록
  //   this.container.style.color = '#333';
  // }

  // 트리를 보이거나 숨기는 메서드 (선택 사항)
  public show(): void {
    this.container.style.display = "block";
  }

  public hide(): void {
    this.container.style.display = "none";
  }

  // 노드 선택 처리 로직
  private selectNode(nodeElement: HTMLElement, uuid: string): void {
    // 이미 선택된 노드를 다시 클릭하면 선택 해제 (선택 사항)
    if (this.selectedNodeElement === nodeElement) {
      this.deselectNode();
      return;
    }

    // 다른 노드가 선택되어 있었다면 해제
    this.deselectNode();

    // 새 노드 선택
    this.selectedNodeElement = nodeElement;
    this.selectedNodeElement.classList.add("selected"); // 선택 클래스 추가

    // 콜백 호출 (선택된 노드의 UUID 전달)
    if (this.onNodeSelected) {
      this.onNodeSelected(uuid);
    }
  }

  // 노드 선택 해제 로직
  private deselectNode(): void {
    if (this.selectedNodeElement) {
      this.selectedNodeElement.classList.remove("selected");
      this.selectedNodeElement = null;

      // 콜백 호출 (선택 해제 알림)
      if (this.onNodeSelected) {
        this.onNodeSelected(null);
      }
    }
  }
}
