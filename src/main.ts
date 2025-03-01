import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Stats from 'three/addons/libs/stats.module.js'
import { GUI } from 'dat.gui'

// 인터페이스 및 타입 정의
interface ModelLoadedMessage {
  type: 'modelLoaded';
  success: boolean;
  error?: string;
}

type PostMessageData = {
  modelUrl?: string;
} | ModelLoadedMessage;

// DOM 요소를 안전하게 가져오는 함수
function getElementSafe<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id) as T;
  if (!element) {
    throw new Error(`Element with id '${id}' not found`);
  }
  return element;
}

// 메인 클래스
class ModelViewer {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private stats: Stats;
  private gui: GUI;
  private cube: THREE.Mesh;
  private cubeFolder: GUI;
  private loaderElement: HTMLElement;

  constructor() {
    // 씬 설정
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);
    
    // 카메라 설정
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 1.5;
    
    // 렌더러 설정
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    
    // 로더 요소 가져오기
    try {
      this.loaderElement = getElementSafe<HTMLElement>('loader');
    } catch (error) {
      // 로더 요소가 없는 경우 동적으로 생성
      this.loaderElement = document.createElement('div');
      this.loaderElement.id = 'loader';
      this.loaderElement.style.position = 'absolute';
      this.loaderElement.style.top = '50%';
      this.loaderElement.style.left = '50%';
      this.loaderElement.style.transform = 'translate(-50%, -50%)';
      this.loaderElement.style.color = 'white';
      this.loaderElement.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      this.loaderElement.style.padding = '20px';
      this.loaderElement.style.borderRadius = '10px';
      this.loaderElement.style.display = 'none';
      this.loaderElement.textContent = '모델 로딩 중...';
      document.body.appendChild(this.loaderElement);
    }
    
    // 창 크기 조정 이벤트 리스너
    window.addEventListener('resize', this.onWindowResize.bind(this));
    
    // 컨트롤 설정
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    
    // Stats 설정
    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);
    
    // GUI 설정
    this.gui = new GUI();
    
    // 기본 큐브 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial({ wireframe: true });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    
    // GUI 폴더 설정
    this.cubeFolder = this.gui.addFolder('임시 큐브');
    this.cubeFolder.add(this.cube.rotation, 'x', 0, Math.PI * 2);
    this.cubeFolder.add(this.cube.rotation, 'y', 0, Math.PI * 2);
    this.cubeFolder.add(this.cube.rotation, 'z', 0, Math.PI * 2);
    this.cubeFolder.open();
    
    const cameraFolder = this.gui.addFolder('카메라');
    cameraFolder.add(this.camera.position, 'z', 0, 20);
    cameraFolder.open();
    
    // 조명 추가
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);
    
    // 메시지 이벤트 리스너
    window.addEventListener('message', this.handleMessage.bind(this));
    
    // URL 파라미터 체크
    const urlParams = new URLSearchParams(window.location.search);
    const modelUrl = urlParams.get('modelUrl');
    if (modelUrl) {
      this.loadModel(modelUrl);
    }
    
    // 애니메이션 시작
    this.animate();
  }
  
  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  private handleMessage(event: MessageEvent<PostMessageData>): void {
    if (event.data && 'modelUrl' in event.data && event.data.modelUrl) {
      this.loadModel(event.data.modelUrl);
    }
  }
  
  public loadModel(url: string): void {
    if (!url) {
      console.warn('모델 URL이 제공되지 않았습니다.');
      return;
    }
    
    // 로더 표시
    this.loaderElement.style.display = 'block';
    
    // 파일 확장자 확인
    const extension = url.split('.').pop()?.toLowerCase() || '';
    
    // GLTF/GLB 로더 생성
    if (extension === 'glb' || extension === 'gltf') {
      const loader = new GLTFLoader();
      loader.load(
        url,
        (gltf) => {
          // 성공적으로 로드된 경우
          this.scene.remove(this.cube);
          this.gui.removeFolder(this.cubeFolder);
          
          const model = gltf.scene;
          this.scene.add(model);
          
          // 모델 경계 상자 계산
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          
          // 모델 중심 이동
          model.position.sub(center);
          
          // 카메라 위치 조정
          const maxDim = Math.max(size.x, size.y, size.z);
          this.camera.position.z = maxDim * 2;
          this.camera.lookAt(new THREE.Vector3(0, 0, 0));
          
          // 컨트롤 타겟 업데이트
          this.controls.target.set(0, 0, 0);
          this.controls.update();
          
          // 모델 GUI 폴더 추가
          const modelFolder = this.gui.addFolder('모델');
          modelFolder.add(model.rotation, 'x', 0, Math.PI * 2);
          modelFolder.add(model.rotation, 'y', 0, Math.PI * 2);
          modelFolder.add(model.rotation, 'z', 0, Math.PI * 2);
          modelFolder.open();
          
          // 로더 숨기기
          this.loaderElement.style.display = 'none';
          
          // 부모 프레임에 로드 완료 알림
          if (window.parent) {
            window.parent.postMessage({ 
              type: 'modelLoaded', 
              success: true 
            } as ModelLoadedMessage, '*');
          }
        },
        (xhr) => {
          // 로딩 중 진행 상황
          if (xhr.lengthComputable) {
            const percentage = Math.floor(xhr.loaded / xhr.total * 100);
            this.loaderElement.textContent = `모델 로딩 중... ${percentage}%`;
          }
        },
        (error) => {
          // 오류 발생
          console.error('모델 로드 중 오류 발생:', error);
          this.loaderElement.textContent = '모델 로드 실패';
          setTimeout(() => {
            this.loaderElement.style.display = 'none';
          }, 3000);
          
          // 부모 프레임에 오류 알림
          if (window.parent) {
            window.parent.postMessage({ 
              type: 'modelLoaded', 
              success: false, 
              error: error instanceof Error ? error.message : String(error)
            } as ModelLoadedMessage, '*');
          }
        }
      );
    } else {
      console.warn('지원하지 않는 파일 형식:', extension);
      this.loaderElement.textContent = `지원하지 않는 파일 형식: ${extension}`;
      setTimeout(() => {
        this.loaderElement.style.display = 'none';
      }, 3000);
    }
  }
  
  private animate(): void {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    this.stats.update();
  }
}

// --- Bubble Connect
window.addEventListener('DOMContentLoaded', () => {
  new ModelViewer();
});
