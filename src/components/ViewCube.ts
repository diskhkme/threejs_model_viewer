import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export class ViewCube {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private axesHelper!: THREE.AxesHelper;
  private axesLabels: THREE.Sprite[] = [];
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private mainCamera: THREE.Camera;
  private mainControls: OrbitControls;
  private cameraDistance: number = 3.5;

  constructor(mainCamera: THREE.Camera, mainControls: OrbitControls) {
    this.mainCamera = mainCamera;
    this.mainControls = mainControls;

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

    // 레이캐스터 설정
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // 이벤트 리스너
    this.renderer.domElement.addEventListener("click", this.onClick.bind(this));

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

  private onClick(event: MouseEvent): void {
    // 마우스 위치 계산
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // 레이캐스팅
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // 축 방향 결정을 위한 가상 영역 생성
    const virtualBoxSize = 0.5;
    const boxes = [
      { name: "x+", position: new THREE.Vector3(virtualBoxSize, 0, 0) },
      { name: "x-", position: new THREE.Vector3(-virtualBoxSize, 0, 0) },
      { name: "y+", position: new THREE.Vector3(0, virtualBoxSize, 0) },
      { name: "y-", position: new THREE.Vector3(0, -virtualBoxSize, 0) },
      { name: "z+", position: new THREE.Vector3(0, 0, virtualBoxSize) },
      { name: "z-", position: new THREE.Vector3(0, 0, -virtualBoxSize) },
    ];

    // 가장 가까운 방향 찾기
    const mouseRay = new THREE.Ray();
    this.raycaster.ray.at(10, mouseRay.origin); // 레이 원점에서 10 단위 떨어진 지점
    mouseRay.direction = this.raycaster.ray.direction;

    let closestBox = null;
    let minDistance = Infinity;

    boxes.forEach((box) => {
      const distance = mouseRay.origin.distanceTo(box.position);
      if (distance < minDistance) {
        minDistance = distance;
        closestBox = box;
      }
    });

    if (closestBox) {
      this.setMainCameraByDirection(closestBox.name);
    }
  }

  private setMainCameraByDirection(direction: string): void {
    const distance = 20; // 카메라 거리

    switch (direction) {
      case "x+":
        this.mainCamera.position.set(distance, 0, 0);
        break;
      case "x-":
        this.mainCamera.position.set(-distance, 0, 0);
        break;
      case "y+":
        this.mainCamera.position.set(0, distance, 0);
        break;
      case "y-":
        this.mainCamera.position.set(0, -distance, 0);
        break;
      case "z+":
        this.mainCamera.position.set(0, 0, distance);
        break;
      case "z-":
        this.mainCamera.position.set(0, 0, -distance);
        break;
    }

    this.mainCamera.lookAt(0, 0, 0);
    this.mainControls.target.set(0, 0, 0);
    this.mainControls.update();
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
