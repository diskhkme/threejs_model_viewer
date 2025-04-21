import * as THREE from "three";

export class ModelInfoPanel {
  private container: HTMLElement;
  private infoItems: { [key: string]: HTMLElement } = {};

  constructor() {
    // 컨테이너 생성
    this.container = document.createElement("div");
    this.container.id = "model-info-panel";
    this.container.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    this.container.style.color = "white";
    this.container.style.padding = "10px";
    this.container.style.borderRadius = "5px";
    this.container.style.fontFamily = "Arial, sans-serif";
    this.container.style.fontSize = "12px";
    this.container.style.width = "250px";
    this.container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

    // 기본 정보 항목 생성
    this.addInfoItem("fileName", "파일명: ");
    this.addInfoItem("vertices", "정점 수: ");
    this.addInfoItem("triangles", "삼각형 수: ");
    this.addInfoItem("materials", "재질 수: ");
    this.addInfoItem("dimensions", "치수: ");

    // 초기에는 숨김
    this.hide();
  }

  private addInfoItem(id: string, label: string): void {
    const item = document.createElement("div");
    item.style.margin = "5px 0";

    const labelSpan = document.createElement("span");
    labelSpan.textContent = label;
    labelSpan.style.fontWeight = "bold";

    const valueSpan = document.createElement("span");
    valueSpan.id = `info-${id}`;

    item.appendChild(labelSpan);
    item.appendChild(valueSpan);

    this.container.appendChild(item);
    this.infoItems[id] = valueSpan;
  }

  public updateModelInfo(model: THREE.Object3D, fileName: string): void {
    // 모델 정보 계산
    let vertexCount = 0;
    let triangleCount = 0;
    let materialCount = 0;
    const materials = new Set<THREE.Material>();

    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const geometry = child.geometry;

        if (geometry instanceof THREE.BufferGeometry) {
          const position = geometry.getAttribute("position");
          if (position) {
            vertexCount += position.count;

            if (geometry.index) {
              triangleCount += geometry.index.count / 3;
            } else {
              triangleCount += position.count / 3;
            }
          }
        }

        if (Array.isArray(child.material)) {
          child.material.forEach((mat) => materials.add(mat));
        } else if (child.material) {
          materials.add(child.material);
        }
      }
    });

    materialCount = materials.size;

    // 바운딩 박스 계산
    const boundingBox = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    boundingBox.getSize(size);

    // 정보 업데이트
    this.infoItems["fileName"].textContent = fileName;
    this.infoItems["vertices"].textContent = vertexCount.toLocaleString();
    this.infoItems["triangles"].textContent = triangleCount.toLocaleString();
    this.infoItems["materials"].textContent = materialCount.toString();
    this.infoItems["dimensions"].textContent = `X: ${size.x.toFixed(
      2
    )}, Y: ${size.y.toFixed(2)}, Z: ${size.z.toFixed(2)}`;
  }

  public hide(): void {
    this.container.style.display = "none";
  }

  public show(): void {
    this.container.style.display = "block";
  }

  public getElement(): HTMLElement {
    return this.container;
  }
}
