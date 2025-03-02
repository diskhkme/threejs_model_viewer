import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";

export class ControlsManager {
  private controls: OrbitControls;

  constructor(camera: THREE.Camera, domElement: HTMLElement) {
    this.controls = new OrbitControls(camera, domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
  }

  public getControls(): OrbitControls {
    return this.controls;
  }

  public update(): void {
    this.controls.update();
  }

  public setTarget(x: number, y: number, z: number): void {
    this.controls.target.set(x, y, z);
    this.controls.update();
  }
}
