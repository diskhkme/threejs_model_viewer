import * as THREE from "three";

export class ViewCube {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private axesHelper!: THREE.AxesHelper;
  private axesLabels: THREE.Sprite[] = [];
  private mainCamera: THREE.Camera;
  private cameraDistance: number = 3.5;

  constructor(mainCamera: THREE.Camera) {
    this.mainCamera = mainCamera;

    // 뷰 큐브 씬 설정
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x222222);

    // 뷰 큐브 카메라 설정
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.camera.position.set(0, 0, this.cameraDistance);
    this.camera.lookAt(0, 0, 0);

    // 뷰 큐브 렌더러 설정
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(100, 100); // 작은 크기의 뷰 큐브
    this.renderer.setPixelRatio(window.devicePixelRatio);

    // 뷰 큐브 위치 설정
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.bottom = "20px";
    container.style.right = "20px";
    container.style.width = "100px";
    container.style.height = "100px";
    container.style.borderRadius = "5px";
    container.style.overflow = "hidden";
    container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    container.appendChild(this.renderer.domElement);
    document.body.appendChild(container);

    // 큐브 대신 축 생성
    this.createAxes();

    // 애니메이션
    this.animate();
  }

  private createAxes(): void {
    // 축 생성 (크기 조정)
    const axisLength = 1.0;
    this.axesHelper = new THREE.AxesHelper(axisLength);
    this.scene.add(this.axesHelper);

    // 축 레이블 생성
    this.createAxisLabel(
      "X",
      new THREE.Vector3(axisLength + 0.2, 0, 0),
      "#ff0000"
    );
    this.createAxisLabel(
      "Y",
      new THREE.Vector3(0, axisLength + 0.2, 0),
      "#00ff00"
    );
    this.createAxisLabel(
      "Z",
      new THREE.Vector3(0, 0, axisLength + 0.2),
      "#0000ff"
    );

    // 원점에 작은 구 추가 (원점 표시)
    const originGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const originMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const origin = new THREE.Mesh(originGeometry, originMaterial);
    this.scene.add(origin);

    // 조명 추가
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    this.scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
  }

  private createAxisLabel(
    text: string,
    position: THREE.Vector3,
    color: string
  ): void {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;

    const context = canvas.getContext("2d");
    if (context) {
      context.fillStyle = "rgba(255, 255, 255, 0)"; // 투명 배경
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.font = "bold 48px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = color;
      context.fillText(text, canvas.width / 2, canvas.height / 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
    });
    const sprite = new THREE.Sprite(material);

    sprite.position.copy(position);
    sprite.scale.set(0.5, 0.5, 0.5);

    this.scene.add(sprite);
    this.axesLabels.push(sprite);
  }

  public update(): void {
    // 메인 카메라의 방향에 따라 축 회전
    if (
      this.mainCamera instanceof THREE.OrthographicCamera ||
      this.mainCamera instanceof THREE.PerspectiveCamera
    ) {
      const position = new THREE.Vector3();
      position.copy(this.mainCamera.position).normalize();

      const cameraPosition = position.multiplyScalar(this.cameraDistance);
      this.camera.position.set(
        cameraPosition.x,
        cameraPosition.y,
        cameraPosition.z
      );
      this.camera.lookAt(0, 0, 0);

      // 레이블도 같이 회전
      this.axesLabels.forEach((label) => {
        label.rotation.copy(this.axesHelper.rotation);
      });
    }
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.update();
    this.renderer.render(this.scene, this.camera);
  }
}
