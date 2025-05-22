import * as THREE from 'three';
// CSG import는 현재 사용되지 않으므로 주석 처리 또는 삭제 가능
// import { CSG } from '../../libs/CSGMesh';

export class DistanceManager {
  private debugScene?: THREE.Scene; // 디버그용 씬 (선택적)
  private jetPixelData: Uint8ClampedArray | null = null;
  private jetTextureWidth: number = 0;
  private jetTextureHeight: number = 0;
  private isJetTextureLoaded: boolean = false;

  constructor(jetTextureUrl: string, debugScene?: THREE.Scene) {
    this.debugScene = debugScene;
    this._loadJetTexture(jetTextureUrl);
  }

  private _loadJetTexture(url: string): void {
    const loader = new THREE.ImageLoader();
    loader.load(
      url,
      (image) => {
        this.jetTextureWidth = image.width;
        this.jetTextureHeight = image.height;

        const canvas = document.createElement('canvas');
        canvas.width = this.jetTextureWidth;
        canvas.height = this.jetTextureHeight;

        const context = canvas.getContext('2d');
        if (!context) {
          console.error('DistanceManager: 2D 컨텍스트를 가져올 수 없습니다.');
          return;
        }
        context.drawImage(image, 0, 0);
        this.jetPixelData = context.getImageData(0, 0, this.jetTextureWidth, this.jetTextureHeight).data;
        this.isJetTextureLoaded = true;
        console.log('DistanceManager: Jet 컬러맵 텍스처 로드 완료.', url);
      },
      undefined, // onProgress
      (error) => {
        console.error('DistanceManager: Jet 컬러맵 텍스처 로드 실패:', error, url);
      }
    );
  }

  /**
   * 두 메쉬에 대해 CSG Subtract 연산을 수행합니다 (meshA - meshB).
   * @param meshA 첫 번째 메쉬 (원본)
   * @param meshB 두 번째 메쉬 (제거할 부분)
   * @returns 연산 결과로 생성된 새로운 THREE.Mesh 또는 실패 시 null
   */

  public performDistanceCalculation(meshA: THREE.Mesh, meshB: THREE.Mesh): THREE.Mesh | null {
    if (!meshA || !meshB) {
      console.error('DistanceManager: 유효하지 않은 메쉬가 전달되었습니다.');
      return null;
    }

    try {
      meshA.updateMatrixWorld(true);
      meshB.updateMatrixWorld(true);
      
      const coloredMesh = this.colorizeMeshByDistance(meshA, meshB);
      return coloredMesh;
    } catch (error) {
      console.error('DistanceManager: 거리 계산 중 오류 발생', error);
      return null;
    }
  }

  private calculateVertexDistances(srcMesh: THREE.Mesh, targetMesh: THREE.Mesh): number[] {
    const srcGeometry = srcMesh.geometry;
    const srcPositionAttribute = srcGeometry.getAttribute('position') as THREE.BufferAttribute;
    const srcMatrixWorld = srcMesh.matrixWorld;

    const targetGeometry = targetMesh.geometry;
    const targetPositionAttribute = targetGeometry.getAttribute('position') as THREE.BufferAttribute;
    const targetIndexAttribute = targetGeometry.getIndex();
    const targetMatrixWorld = targetMesh.matrixWorld;
    
    const distances: number[] = [];
    const targetTriangle = new THREE.Triangle(); // 재사용할 Triangle 객체
    const closestPointOnTriangle = new THREE.Vector3(); // 재사용할 Vector3 객체

    // srcMesh의 각 정점에 대해
    for (let i = 0; i < srcPositionAttribute.count; i++) {
      const srcVertexWorld = new THREE.Vector3().fromBufferAttribute(srcPositionAttribute, i);
      srcVertexWorld.applyMatrix4(srcMatrixWorld); 
      
      let minDistanceSq = Infinity; // 제곱 거리를 사용하여 Math.sqrt 호출 최소화

      // targetMesh의 각 삼각형에 대해
      const numTargetVertices = targetPositionAttribute.count;
      if (targetIndexAttribute) {
        // 인덱싱된 지오메트리
        for (let j = 0; j < targetIndexAttribute.count; j += 3) {
          const vA_local = new THREE.Vector3().fromBufferAttribute(targetPositionAttribute, targetIndexAttribute.getX(j));
          const vB_local = new THREE.Vector3().fromBufferAttribute(targetPositionAttribute, targetIndexAttribute.getX(j + 1));
          const vC_local = new THREE.Vector3().fromBufferAttribute(targetPositionAttribute, targetIndexAttribute.getX(j + 2));
          
          // 각 정점을 월드 좌표로 변환
          const vA_world = vA_local.clone().applyMatrix4(targetMatrixWorld);
          const vB_world = vB_local.clone().applyMatrix4(targetMatrixWorld);
          const vC_world = vC_local.clone().applyMatrix4(targetMatrixWorld);

          targetTriangle.set(vA_world, vB_world, vC_world); // 월드 좌표계의 삼각형 사용

          targetTriangle.closestPointToPoint(srcVertexWorld, closestPointOnTriangle);
          const distSq = srcVertexWorld.distanceToSquared(closestPointOnTriangle);
          if (distSq < minDistanceSq) {
            minDistanceSq = distSq;
          }
        }
      } else {
        // 인덱싱되지 않은 지오메트리
        if (numTargetVertices % 3 !== 0) {
          console.error('DistanceManager: 인덱싱되지 않은 targetMesh의 정점 수가 3의 배수가 아닙니다.');
          // 이 경우, 이 srcVertex에 대한 거리는 Infinity로 남거나, 기본값을 설정할 수 있습니다.
          // 여기서는 일단 계속 진행하지만, 실제로는 오류 처리나 기본값 할당이 필요할 수 있습니다.
          distances.push(Infinity); // 또는 적절한 값
          continue; // 다음 srcVertex로
        }
        for (let j = 0; j < numTargetVertices; j += 3) {
          const vA_local = new THREE.Vector3().fromBufferAttribute(targetPositionAttribute, j);
          const vB_local = new THREE.Vector3().fromBufferAttribute(targetPositionAttribute, j + 1);
          const vC_local = new THREE.Vector3().fromBufferAttribute(targetPositionAttribute, j + 2);

          // 각 정점을 월드 좌표로 변환
          const vA_world = vA_local.clone().applyMatrix4(targetMatrixWorld);
          const vB_world = vB_local.clone().applyMatrix4(targetMatrixWorld);
          const vC_world = vC_local.clone().applyMatrix4(targetMatrixWorld);

          targetTriangle.set(vA_world, vB_world, vC_world); // 월드 좌표계의 삼각형 사용

          targetTriangle.closestPointToPoint(srcVertexWorld, closestPointOnTriangle);
          const distSq = srcVertexWorld.distanceToSquared(closestPointOnTriangle);
          if (distSq < minDistanceSq) {
            minDistanceSq = distSq;
          }
        }
      }
      distances.push(Math.sqrt(minDistanceSq));
    }
    return distances;
  }

  private colorizeMeshByDistance(srcMesh: THREE.Mesh, targetMesh: THREE.Mesh): THREE.Mesh {
    const clonedGeometry = srcMesh.geometry.clone();
    let newMaterial: THREE.Material | THREE.Material[];

    if (Array.isArray(srcMesh.material)) {
      console.warn('DistanceManager: 원본 메쉬의 재질이 배열입니다. 첫 번째 재질을 기반으로 새로운 MeshStandardMaterial을 생성하거나 단일 재질로 대체합니다.');
      const firstMaterial = srcMesh.material[0];
      if (firstMaterial instanceof THREE.MeshStandardMaterial) {
        newMaterial = firstMaterial.clone();
        (newMaterial as THREE.MeshStandardMaterial).vertexColors = true;
      } else {
        newMaterial = new THREE.MeshStandardMaterial({
            vertexColors: true,
            side: THREE.DoubleSide
        });
      }
    } else if (srcMesh.material instanceof THREE.MeshStandardMaterial) {
      newMaterial = srcMesh.material.clone();
      (newMaterial as THREE.MeshStandardMaterial).vertexColors = true;
    } else {
      newMaterial = new THREE.MeshStandardMaterial({
        vertexColors: true,
        side: srcMesh.material.side !== undefined ? srcMesh.material.side : THREE.DoubleSide
      });
    }
    if (!Array.isArray(newMaterial)) {
        newMaterial.needsUpdate = true;
    }
    
    const clonedMesh = new THREE.Mesh(clonedGeometry, newMaterial);
    clonedMesh.matrixAutoUpdate = false;
    clonedMesh.matrix.copy(srcMesh.matrixWorld);
    clonedMesh.matrixWorld.copy(srcMesh.matrixWorld);

    const distances = this.calculateVertexDistances(srcMesh, targetMesh);
    
    let maxDistance = Math.max(...distances.filter(d => isFinite(d))); // Infinity가 아닌 값들 중에서 최대값
    if (!isFinite(maxDistance) || maxDistance === 0) { // 모든 거리가 Infinity이거나 0인 경우
      maxDistance = 1; 
    }

    const normalizedDistances = distances.map(d => 
        isFinite(d) ? (1 - Math.min(d / maxDistance, 1)) : 0 // Infinity인 경우 0으로 (파란색 계열)
    );
    const colors = new Float32Array(normalizedDistances.length * 3);

    if (!this.isJetTextureLoaded || !this.jetPixelData) {
      console.warn('DistanceManager: Jet 컬러맵 텍스처가 아직 로드되지 않았습니다. 기본 색상을 사용합니다.');
      for (let i = 0; i < normalizedDistances.length; i++) {
        colors[i * 3] = 0.5; 
        colors[i * 3 + 1] = 0.5;
        colors[i * 3 + 2] = 0.5;
      }
    } else {
      for (let i = 0; i < normalizedDistances.length; i++) {
        const value = normalizedDistances[i];
        const u = Math.min(Math.floor(value * (this.jetTextureWidth -1) ), this.jetTextureWidth - 1);
        const v = Math.floor(this.jetTextureHeight / 2);
        const pixelIndex = (v * this.jetTextureWidth + u) * 4;
        colors[i * 3] = this.jetPixelData[pixelIndex] / 255;
        colors[i * 3 + 1] = this.jetPixelData[pixelIndex + 1] / 255;
        colors[i * 3 + 2] = this.jetPixelData[pixelIndex + 2] / 255;
      }
    }
    
    clonedMesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return clonedMesh;
  }
} 