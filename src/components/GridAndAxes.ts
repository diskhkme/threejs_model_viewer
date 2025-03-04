import * as THREE from "three";

export class GridAndAxes {
  private scene: THREE.Scene;
  private gridSize: number;
  private gridDivisions: number;
  private gridHelper!: THREE.GridHelper;
  private axesHelper!: THREE.AxesHelper;

  constructor(
    scene: THREE.Scene,
    gridSize: number = 20,
    gridDivisions: number = 20
  ) {
    this.scene = scene;
    this.gridSize = gridSize;
    this.gridDivisions = gridDivisions;

    this.createGrid();
    this.createAxes();
  }

  private createGrid(): void {
    // 그리드 생성
    this.gridHelper = new THREE.GridHelper(
      this.gridSize,
      this.gridDivisions,
      0x888888,
      0xcccccc
    );
    this.gridHelper.position.y = -0.01; // 약간 아래로 이동하여 z-fighting 방지
    this.scene.add(this.gridHelper);

    // 중앙 강조 선 추가
    const material = new THREE.LineBasicMaterial({
      color: 0x444444,
      linewidth: 2,
    });

    // X축 중앙 선
    const xGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-this.gridSize / 2, 0, 0),
      new THREE.Vector3(this.gridSize / 2, 0, 0),
    ]);
    const xLine = new THREE.Line(xGeometry, material);
    this.scene.add(xLine);

    // Z축 중앙 선
    const zGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -this.gridSize / 2),
      new THREE.Vector3(0, 0, this.gridSize / 2),
    ]);
    const zLine = new THREE.Line(zGeometry, material);
    this.scene.add(zLine);
  }

  private createAxes(): void {
    // 축 생성 (X: 빨강, Y: 초록, Z: 파랑)
    this.axesHelper = new THREE.AxesHelper(this.gridSize / 10);
    this.scene.add(this.axesHelper);

    // 축 라벨 추가 (선택 사항)
    this.addAxisLabels();
  }

  private addAxisLabels(): void {
    // 실제 구현에서는 HTML 요소나 스프라이트를 사용하여
    // X, Y, Z 라벨을 추가할 수 있습니다.
    // 간단한 예시로 생략합니다.
  }

  public setVisible(visible: boolean): void {
    this.gridHelper.visible = visible;
    this.axesHelper.visible = visible;
  }

  public setGridSize(size: number, divisions: number): void {
    this.scene.remove(this.gridHelper);
    this.gridSize = size;
    this.gridDivisions = divisions;
    this.createGrid();
  }
}
