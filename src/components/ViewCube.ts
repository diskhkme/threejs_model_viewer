import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export class ViewCube {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private mainCamera: THREE.Camera;
  private mainControls: OrbitControls;

  constructor(mainCamera: THREE.Camera, mainControls: OrbitControls) {
    this.mainCamera = mainCamera;
    this.mainControls = mainControls;

    // 뷰 큐브 씬 설정
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x222222);

    // 뷰 큐브 카메라 설정
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.camera.position.set(0, 0, 3.5);
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

    // 큐브 생성
    this.createCube();

    // 레이캐스터 설정
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // 이벤트 리스너
    this.renderer.domElement.addEventListener("click", this.onClick.bind(this));

    // 애니메이션
    this.animate();
  }

  private createCube(): void {
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // 각 면에 다른 색상과 라벨 적용
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x4285f4 }), // 오른쪽 - 파란색
      new THREE.MeshBasicMaterial({ color: 0xea4335 }), // 왼쪽 - 빨간색
      new THREE.MeshBasicMaterial({ color: 0xfbbc05 }), // 위 - 노란색
      new THREE.MeshBasicMaterial({ color: 0x34a853 }), // 아래 - 초록색
      new THREE.MeshBasicMaterial({ color: 0x9c27b0 }), // 앞 - 보라색
      new THREE.MeshBasicMaterial({ color: 0xff9800 }), // 뒤 - 주황색
    ];

    this.cube = new THREE.Mesh(geometry, materials);
    this.scene.add(this.cube);

    // 면 라벨 추가 (텍스처로 구현 가능)
    this.addFaceLabels();

    // 조명 추가
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1);
    this.scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
  }

  private addFaceLabels(): void {
    // 실제 구현에서는 Canvas를 사용하여 텍스처에 텍스트를 그리고
    // 각 면에 적용하는 방식으로 구현할 수 있습니다.
    // 간단한 예시로 생략합니다.
  }

  private onClick(event: MouseEvent): void {
    // 마우스 위치 계산
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // 레이캐스팅
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.cube);

    if (intersects.length > 0) {
      const face = intersects[0].face;
      if (!face) return;

      // 클릭한 면에 따라 메인 카메라 위치 변경
      this.setMainCameraByFace(face.normal);
    }
  }

  private setMainCameraByFace(normal: THREE.Vector3): void {
    // 클릭한 면의 법선 벡터에 따라 메인 카메라 위치 설정
    const distance = 20; // 카메라 거리

    if (normal.equals(new THREE.Vector3(1, 0, 0))) {
      // 오른쪽 면
      this.mainCamera.position.set(distance, 0, 0);
    } else if (normal.equals(new THREE.Vector3(-1, 0, 0))) {
      // 왼쪽 면
      this.mainCamera.position.set(-distance, 0, 0);
    } else if (normal.equals(new THREE.Vector3(0, 1, 0))) {
      // 위 면
      this.mainCamera.position.set(0, distance, 0);
    } else if (normal.equals(new THREE.Vector3(0, -1, 0))) {
      // 아래 면
      this.mainCamera.position.set(0, -distance, 0);
    } else if (normal.equals(new THREE.Vector3(0, 0, 1))) {
      // 앞 면
      this.mainCamera.position.set(0, 0, distance);
    } else if (normal.equals(new THREE.Vector3(0, 0, -1))) {
      // 뒤 면
      this.mainCamera.position.set(0, 0, -distance);
    }

    this.mainCamera.lookAt(0, 0, 0);
    this.mainControls.target.set(0, 0, 0);
    this.mainControls.update();
  }

  public update(): void {
    // 메인 카메라의 방향에 따라 뷰 큐브 회전
    if (
      this.mainCamera instanceof THREE.OrthographicCamera ||
      this.mainCamera instanceof THREE.PerspectiveCamera
    ) {
      const position = new THREE.Vector3();
      position.copy(this.mainCamera.position).normalize();

      // 큐브 회전 계산
      this.cube.rotation.y = Math.atan2(position.x, position.z);
      this.cube.rotation.x = Math.atan2(
        position.y,
        Math.sqrt(position.x * position.x + position.z * position.z)
      );
    }
  }

  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.update();
    this.renderer.render(this.scene, this.camera);
  }
}
