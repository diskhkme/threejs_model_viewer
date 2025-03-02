import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export class StandardViewButtons {
  private container: HTMLElement;
  private camera: THREE.Camera;
  private controls: OrbitControls;

  constructor(camera: THREE.Camera, controls: OrbitControls) {
    this.camera = camera;
    this.controls = controls;

    // 컨테이너 생성
    this.container = document.createElement("div");
    this.container.style.position = "absolute";
    this.container.style.top = "20px";
    this.container.style.right = "20px";
    this.container.style.display = "flex";
    this.container.style.flexDirection = "column";
    this.container.style.gap = "5px";
    document.body.appendChild(this.container);

    // 표준 뷰 버튼 생성
    this.createViewButton("정면", () => this.setFrontView());
    this.createViewButton("후면", () => this.setBackView());
    this.createViewButton("좌측", () => this.setLeftView());
    this.createViewButton("우측", () => this.setRightView());
    this.createViewButton("상단", () => this.setTopView());
    this.createViewButton("하단", () => this.setBottomView());
    this.createViewButton("등각", () => this.setIsometricView());
  }

  private createViewButton(label: string, onClick: () => void): void {
    const button = document.createElement("button");
    button.textContent = label;
    button.style.padding = "8px 12px";
    button.style.backgroundColor = "#4285F4";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";
    button.style.fontWeight = "bold";
    button.style.width = "80px";
    button.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#3367D6";
    });

    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#4285F4";
    });

    button.addEventListener("click", onClick);

    this.container.appendChild(button);
  }

  private setFrontView(): void {
    this.setCameraPosition(0, 0, 20);
  }

  private setBackView(): void {
    this.setCameraPosition(0, 0, -20);
  }

  private setLeftView(): void {
    this.setCameraPosition(-20, 0, 0);
  }

  private setRightView(): void {
    this.setCameraPosition(20, 0, 0);
  }

  private setTopView(): void {
    this.setCameraPosition(0, 20, 0);
  }

  private setBottomView(): void {
    this.setCameraPosition(0, -20, 0);
  }

  private setIsometricView(): void {
    this.setCameraPosition(11.5, 11.5, 11.5);
  }

  private setCameraPosition(x: number, y: number, z: number): void {
    this.camera.position.set(x, y, z);
    this.camera.lookAt(0, 0, 0);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }
}
