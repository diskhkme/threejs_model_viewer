import * as THREE from 'three';
import { CSG } from '../../libs/CSGMesh'; // 사용자가 수정한 경로를 따름

export class CSGManager {
  constructor() {
    // 필요한 초기화 로직이 있다면 여기에 추가
  }

  /**
   * 두 메쉬에 대해 CSG Subtract 연산을 수행합니다 (meshA - meshB).
   * @param meshA 첫 번째 메쉬 (원본)
   * @param meshB 두 번째 메쉬 (제거할 부분)
   * @returns 연산 결과로 생성된 새로운 THREE.Mesh 또는 실패 시 null
   */
  public performSubtract(meshA: THREE.Mesh, meshB: THREE.Mesh): THREE.Mesh | null {
    if (!meshA || !meshB) {
      console.error('CSGManager: 유효하지 않은 메쉬가 전달되었습니다.');
      return null;
    }

    try {
      // CSG 연산을 위해 메쉬의 월드 매트릭스를 업데이트합니다.
      // CSG 연산은 메쉬의 현재 월드 변환을 기준으로 수행됩니다.
      meshA.updateMatrixWorld(true);
      meshB.updateMatrixWorld(true);

      // 1. 메쉬를 CSG 객체로 변환
      const csgA = CSG.fromMesh(meshA);
      const csgB = CSG.fromMesh(meshB);

      // 2. CSG Subtract 연산
      const csgResult = csgA.subtract(csgB);

      // 3. CSG 결과를 다시 THREE.Mesh로 변환
      // 결과 메쉬는 meshA의 월드 변환을 기준으로 생성됩니다.
      // 원본 메쉬의 재질을 사용하거나 새로운 재질을 적용할 수 있습니다.
      const resultMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0000, // 임시로 랜덤 색상
        roughness: 0.5,
        metalness: 0.1,
        // wireframe: true, // 디버깅 시 유용
      });
      const resultMesh = CSG.toMesh(csgResult, meshA.matrixWorld, resultMaterial);
      // resultMesh.material = meshA.material; // 또는 원본 재질 사용

      if (resultMesh) {
        console.log('CSGManager: Subtract 연산 성공');
        return resultMesh;
      } else {
        console.error('CSGManager: Subtract 연산 결과가 null입니다.');
        return null;
      }
    } catch (error) {
      console.error('CSGManager: Subtract 연산 중 오류 발생:', error);
      return null;
    }
  }
} 