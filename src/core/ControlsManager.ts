import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import * as THREE from "three";
import { SceneManager } from "./SceneManager";

export class ControlsManager {
  private controls: OrbitControls;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private sceneManager: SceneManager;
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private sphereInter: THREE.Mesh;

  private isVertexSelectionMode = false;
  public selectedVertices = new Map<
    string,
    { object: THREE.Mesh; vertexIndex: number; worldPosition: THREE.Vector3 }
  >();
  private selectionHelpers = new Map<string, THREE.Mesh>();

  public onVertexSelected:
    | ((
        data: {
          uuid: string;
          object: THREE.Mesh;
          vertexIndex: number;
          worldPosition: THREE.Vector3;
        } | null
      ) => void)
    | null = null;

  constructor(
    camera: THREE.OrthographicCamera,
    renderer: THREE.WebGLRenderer,
    sceneManager: SceneManager
  ) {
    this.camera = camera;
    this.renderer = renderer;
    this.sceneManager = sceneManager;
    this.controls = new OrbitControls(camera, this.renderer.domElement);
    this.controls.enableDamping = true;

    const sphereGeometry = new THREE.SphereGeometry(0.05);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.sphereInter = new THREE.Mesh(sphereGeometry, sphereMaterial);
    this.sphereInter.visible = false;
    this.sceneManager.getScene().add(this.sphereInter);

    this.renderer.domElement.addEventListener(
      "pointerdown",
      this.onPointerDown.bind(this)
    );
  }

  public setVertexSelectionMode(enabled: boolean): void {
    this.isVertexSelectionMode = enabled;
    this.controls.enabled = !enabled;

    if (!enabled) {
      this.clearSelection();
      this.sphereInter.visible = false;
    }
    console.log(`Vertex selection mode: ${enabled ? "ON" : "OFF"}`);
  }

  public getVertexSelectionMode(): boolean {
    return this.isVertexSelectionMode;
  }

  public clearSelection(): void {
    this.selectedVertices.clear();
    this.selectionHelpers.forEach((helper) =>
      this.sceneManager.getScene().remove(helper)
    );
    this.selectionHelpers.clear();
    if (this.onVertexSelected) {
      this.onVertexSelected(null);
    }
  }

  private onPointerDown(event: PointerEvent): void {
    console.log("onPointerDown");

    if (!this.isVertexSelectionMode) return;

    const canvas = this.renderer.domElement;
    const rect = canvas.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.pointer.x = (x / rect.width) * 2 - 1;
    this.pointer.y = -(y / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);

    const loadedModels = this.sceneManager.getLoadedModels();
    const intersects = this.raycaster.intersectObjects(loadedModels, true);

    if (intersects.length > 0) {
      const intersection = intersects[0];
      const object = intersection.object;

      if (
        object instanceof THREE.Mesh &&
        object.geometry instanceof THREE.BufferGeometry
      ) {
        const mesh = object;
        const geometry = mesh.geometry;
        const positionAttribute = geometry.attributes
          .position as THREE.BufferAttribute;

        if (!positionAttribute) {
          console.warn("Mesh does not have position attribute.");
          return;
        }

        const intersectionPoint = intersection.point;
        let closestVertexIndex = -1;
        let minDistanceSq = Infinity;
        const vertex = new THREE.Vector3();
        let closestVertexWorldPosition = new THREE.Vector3();

        for (let i = 0; i < positionAttribute.count; i++) {
          vertex.fromBufferAttribute(positionAttribute, i);
          const worldVertex = vertex.clone().applyMatrix4(mesh.matrixWorld);
          const distanceSq = intersectionPoint.distanceToSquared(worldVertex);

          if (distanceSq < minDistanceSq) {
            minDistanceSq = distanceSq;
            closestVertexIndex = i;
            closestVertexWorldPosition.copy(worldVertex);
          }
        }

        if (closestVertexIndex !== -1) {
          console.log(
            `Selected vertex index: ${closestVertexIndex} on model: ${mesh.uuid}`
          );
          this.sphereInter.position.copy(closestVertexWorldPosition);
          this.sphereInter.visible = true;

          if (this.selectedVertices.has(mesh.uuid)) {
            this.removeSelectionHelper(mesh.uuid);
          }

          const selectionData = {
            object: mesh,
            vertexIndex: closestVertexIndex,
            worldPosition: closestVertexWorldPosition,
          };
          this.selectedVertices.set(mesh.uuid, selectionData);

          this.addOrUpdateSelectionHelper(
            mesh.uuid,
            closestVertexWorldPosition
          );

          if (this.onVertexSelected) {
            this.onVertexSelected({ uuid: mesh.uuid, ...selectionData });
          }
        }
      }
    } else {
      this.sphereInter.visible = false;
    }
  }

  private addOrUpdateSelectionHelper(
    uuid: string,
    position: THREE.Vector3
  ): void {
    let helper = this.selectionHelpers.get(uuid);
    if (!helper) {
      const geometry = new THREE.SphereGeometry(0.03);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        depthTest: false,
      });
      helper = new THREE.Mesh(geometry, material);
      helper.renderOrder = 999;
      this.sceneManager.getScene().add(helper);
      this.selectionHelpers.set(uuid, helper);
    }
    helper.position.copy(position);
  }

  private removeSelectionHelper(uuid: string): void {
    const helper = this.selectionHelpers.get(uuid);
    if (helper) {
      this.sceneManager.getScene().remove(helper);
      this.selectionHelpers.delete(uuid);
    }
  }

  public update(): void {
    this.controls.update();
  }

  public getControls(): OrbitControls {
    return this.controls;
  }

  public setTarget(x: number, y: number, z: number): void {
    this.controls.target.set(x, y, z);
    this.controls.update();
  }
}
