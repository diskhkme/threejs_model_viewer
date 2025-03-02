import * as THREE from "three";

export class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.OrthographicCamera;
  private renderer: THREE.WebGLRenderer;
  private viewportSize: number = 10;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);

    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.OrthographicCamera(
      (-this.viewportSize * aspect) / 2,
      (this.viewportSize * aspect) / 2,
      this.viewportSize / 2,
      -this.viewportSize / 2,
      0.1,
      1000
    );
    this.camera.position.set(10, 10, 10);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;

    this.setupLights();

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  private setupLights(): void {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    this.scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.7);
    mainLight.position.set(1, 1, 1);
    mainLight.castShadow = true;

    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 50;
    mainLight.shadow.bias = -0.001;

    this.scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-1, -1, -1);
    this.scene.add(fillLight);
  }

  private onWindowResize(): void {
    const aspect = window.innerWidth / window.innerHeight;

    this.camera.left = (-this.viewportSize * aspect) / 2;
    this.camera.right = (this.viewportSize * aspect) / 2;
    this.camera.top = this.viewportSize / 2;
    this.camera.bottom = -this.viewportSize / 2;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  public setViewportSize(size: number): void {
    this.viewportSize = size;
    const aspect = window.innerWidth / window.innerHeight;

    this.camera.left = (-this.viewportSize * aspect) / 2;
    this.camera.right = (this.viewportSize * aspect) / 2;
    this.camera.top = this.viewportSize / 2;
    this.camera.bottom = -this.viewportSize / 2;
    this.camera.updateProjectionMatrix();
  }

  public getScene(): THREE.Scene {
    return this.scene;
  }

  public getCamera(): THREE.OrthographicCamera {
    return this.camera;
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }

  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  public getDomElement(): HTMLCanvasElement {
    return this.renderer.domElement;
  }
}
