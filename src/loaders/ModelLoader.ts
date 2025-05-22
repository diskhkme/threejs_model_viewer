import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { STLLoader } from "three/addons/loaders/STLLoader.js";
import * as BufferGeometryUtils from 'three/addons/utils/BufferGeometryUtils.js';

export interface LoaderCallbacks {
  onLoad: (model: THREE.Object3D) => void;
  onProgress?: (percentage: number) => void;
  onError?: (error: any) => void;
}

export class ModelLoader {
  private static getSupportedExtension(url: string): string {
    return url.split(".").pop()?.toLowerCase() || "";
  }

  public static loadModel(url: string, callbacks: LoaderCallbacks): void {
    const extension = this.getSupportedExtension(url);

    if (extension === "glb" || extension === "gltf") {
      this.loadGLTF(url, callbacks);
    } else if (extension === "stl") {
      this.loadSTL(url, callbacks);
    } else {
      if (callbacks.onError) {
        callbacks.onError(`지원하지 않는 파일 형식: ${extension}`);
      }
    }
  }

  private static loadGLTF(url: string, callbacks: LoaderCallbacks): void {
    const loader = new GLTFLoader();

    loader.load(
      url,
      (gltf) => {
        callbacks.onLoad(gltf.scene);
      },
      (xhr) => {
        if (xhr.lengthComputable && callbacks.onProgress) {
          const percentage = Math.floor((xhr.loaded / xhr.total) * 100);
          callbacks.onProgress(percentage);
        }
      },
      (error) => {
        if (callbacks.onError) {
          callbacks.onError(error);
        }
      }
    );
  }

  private static loadSTL(url: string, callbacks: LoaderCallbacks): void {
    const loader = new STLLoader();

    loader.load(
      url,
      (geometry) => {
        // 거리 계산 등을 용이하게 하기 위해 강제로 indexed 형태로 변환
        //geometry = BufferGeometryUtils.mergeVertices(geometry);

        const material = new THREE.MeshPhongMaterial({
          color: 0xaaaaaa,
          specular: 0x111111,
          shininess: 200,
        });
        const mesh = new THREE.Mesh(geometry, material);
        callbacks.onLoad(mesh);
      },
      (xhr) => {
        if (xhr.lengthComputable && callbacks.onProgress) {
          const percentage = Math.floor((xhr.loaded / xhr.total) * 100);
          callbacks.onProgress(percentage);
        }
      },
      (error) => {
        if (callbacks.onError) {
          callbacks.onError(error);
        }
      }
    );
  }
}
