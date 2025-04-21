import * as THREE from "three";

export class SceneTreeViewer {
  private container: HTMLElement;
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

    // 로드된 모델 목록을 순회하며 노드 생성
    loadedModels.forEach((model) => {
      // 최상위 모델 노드 생성
      const nodeElement = this.createTreeNode(model);
      if (nodeElement) {
        rootUl.appendChild(nodeElement);
      }
    });

    this.container.appendChild(rootUl);
  }

  /**
   * Object3D 객체를 위한 HTML 리스트 아이템(<li>) 노드를 재귀적으로 생성합니다.
   * 특정 타입의 객체는 건너뛰니다.
   * @param object 노드를 생성할 Object3D 객체
   * @returns 생성된 HTMLElement (<li>) 또는 null
   */
  private createTreeNode(object: THREE.Object3D): HTMLElement | null {
    // 필터링: 특정 타입의 객체는 트리에 표시하지 않음
    if (
      object instanceof THREE.Light || // 모든 종류의 조명 제외
      object instanceof THREE.Camera || // 카메라 제외
      object.type === "GridHelper" || // 그리드 헬퍼 제외
      object.type === "AxesHelper" || // 축 헬퍼 제외
      // 필요한 다른 타입 추가
      object.name === "ViewCube" // 뷰큐브 관련 객체 제외 (이름 기반)
    ) {
      return null; // 이 객체 및 하위는 트리에 추가하지 않음
    }

    const listItem = document.createElement("li");
    listItem.classList.add("scene-tree-node");
    // listItem.dataset.uuid = object.uuid; // UUID 저장 (선택 기능 구현 시 유용)

    const nodeContent = document.createElement("span");
    // 객체 이름이 없으면 타입을, 둘 다 없으면 UUID 앞부분 표시
    const displayName =
      object.name || object.type || `Object (${object.uuid.substring(0, 6)})`;
    nodeContent.textContent = `${displayName}`;
    // nodeContent.title = object.uuid; // 툴팁으로 UUID 표시 (선택 사항)
    listItem.appendChild(nodeContent);

    // 자식 노드가 있으면 재귀적으로 생성 (필터링 포함)
    if (object.children.length > 0) {
      const childrenUl = document.createElement("ul");
      childrenUl.classList.add("scene-tree-children");
      let hasVisibleChildren = false; // 보이는 자식이 있는지 확인
      object.children.forEach((child) => {
        const childNode = this.createTreeNode(child); // 자식 노드 생성 시에도 필터링 적용
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
}
