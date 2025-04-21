import * as THREE from "three";
import { ControlsManager } from "./ControlsManager"; // ControlsManager 임포트

// 선택된 정점 데이터 타입 정의 (필요시 별도 types 파일로 이동 가능)
export interface SelectedVertexData {
  uuid: string;
  object: THREE.Mesh;
  vertexIndex: number;
  worldPosition: THREE.Vector3;
}

export class AlignmentManager {
  private selectedVerticesData = new Map<string, SelectedVertexData>();
  private referenceModelInfo: SelectedVertexData | null = null;
  private controlsManager: ControlsManager; // ControlsManager 참조 추가

  // Alignment 완료 후 ModelViewer에 알릴 콜백
  public onAlignmentComplete: (() => void) | null = null;

  constructor(controlsManager: ControlsManager) {
    this.controlsManager = controlsManager;
  }

  /**
   * 새로운 정점 선택 정보를 업데이트합니다.
   * @param data 선택된 정점 데이터
   */
  public updateSelection(data: SelectedVertexData): void {
    this.selectedVerticesData.set(data.uuid, data);
    console.log(
      "AlignmentManager: Selection updated",
      this.selectedVerticesData
    );
  }

  /**
   * 기준 모델 정보를 설정합니다.
   * @param data 기준점으로 사용할 정점 데이터
   */
  public setReference(data: SelectedVertexData): void {
    // 이미 기준이 설정되어 있고, 같은 정점을 다시 누른 경우 기준 해제 (선택 사항)
    // if (this.referenceModelInfo && this.referenceModelInfo.uuid === data.uuid) {
    //   this.referenceModelInfo = null;
    //   console.log('AlignmentManager: Reference cleared');
    //   // TODO: 기준 모델 시각적 표시 원래대로
    //   return;
    // }

    this.referenceModelInfo = data;
    console.log("AlignmentManager: Reference set", this.referenceModelInfo);
    // TODO: 기준 모델 시각적 표시 변경 (예: ControlsManager의 헬퍼 색상 변경 요청)
    // 예: this.controlsManager.highlightReferenceHelper(data.uuid);
  }

  /**
   * 선택된 정점 정보를 가져옵니다.
   */
  public getSelectedVertices(): Map<string, SelectedVertexData> {
    return this.selectedVerticesData;
  }

  /**
   * 기준 모델 정보를 가져옵니다.
   */
  public getReferenceModel(): SelectedVertexData | null {
    return this.referenceModelInfo;
  }

  /**
   * 정렬이 가능한 상태인지 확인합니다. (기준점 1개 + 다른 선택 1개 이상)
   */
  public canAlign(): boolean {
    return (
      this.referenceModelInfo !== null && this.selectedVerticesData.size >= 2
    );
  }

  /**
   * 모든 선택 정보와 기준 모델 설정을 초기화합니다.
   * ControlsManager의 시각적 표시도 초기화해야 합니다.
   */
  public clear(): void {
    this.selectedVerticesData.clear();
    this.referenceModelInfo = null;
    this.controlsManager.clearSelection(); // ControlsManager의 선택 초기화 호출
    console.log("AlignmentManager: Cleared all selections and reference.");
  }

  /**
   * 선택된 모델들을 기준 모델에 정렬합니다.
   * @returns 정렬 성공 여부
   */
  public performAlignment(): boolean {
    if (!this.canAlign()) {
      console.warn(
        "AlignmentManager: Cannot align. Reference or sufficient selections missing."
      );
      // 사용자에게 알림 (예: alert 또는 UI 메시지)
      if (!this.referenceModelInfo) {
        alert("기준 모델의 정점을 선택해주세요.");
      } else {
        alert("정렬할 다른 모델의 정점을 하나 이상 선택해주세요.");
      }
      return false;
    }

    console.log("AlignmentManager: Starting alignment...");
    const targetPosition = this.referenceModelInfo!.worldPosition.clone();

    this.selectedVerticesData.forEach((data) => {
      // 기준 모델은 건너뛰기
      if (data.uuid === this.referenceModelInfo!.uuid) return;

      // 모델 객체 찾기 (Mesh 또는 그 부모 그룹일 수 있음)
      // ControlsManager에서 저장된 object 참조를 사용
      //   const objectToAlign =
      //     data.object.parent instanceof THREE.Group
      //       ? data.object.parent
      //       : data.object;

      // 현재는 모델 전체를 단일 객체로 취급하고 그룹을 이동 (data.object는 Mesh, data.object.parent는 Group)
      const objectToAlign = data.object.parent;
      const currentVertexPosition = data.worldPosition.clone();

      // 이동 벡터 계산 (타겟 위치 - 현재 위치)
      const translation = new THREE.Vector3().subVectors(
        targetPosition,
        currentVertexPosition
      );

      console.log(
        `AlignmentManager: Aligning model ${data.uuid}: moving by`,
        translation
      );

      // 모델 전체를 이동
      objectToAlign.position.add(translation);

      // 중요: 이동 후 월드 매트릭스 업데이트
      objectToAlign.updateMatrixWorld(true);
    });

    console.log("AlignmentManager: Alignment finished.");

    // 정렬 후 선택 상태 초기화
    this.clear();

    // 완료 콜백 호출 (UI 업데이트 등)
    if (this.onAlignmentComplete) {
      this.onAlignmentComplete();
    }

    return true;
  }
}
