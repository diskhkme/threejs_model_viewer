export class LoadingIndicator {
  private element: HTMLElement;

  constructor() {
    this.element = document.createElement("div");
    this.element.id = "loader";
    this.setupStyles();
    this.hide();
    document.body.appendChild(this.element);
  }

  private setupStyles(): void {
    this.element.style.position = "absolute";
    this.element.style.top = "50%";
    this.element.style.left = "50%";
    this.element.style.transform = "translate(-50%, -50%)";
    this.element.style.color = "white";
    this.element.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    this.element.style.padding = "20px";
    this.element.style.borderRadius = "10px";
    this.element.style.zIndex = "1000";
  }

  public show(message: string = "모델 로딩 중..."): void {
    this.element.textContent = message;
    this.element.style.display = "block";
  }

  public updateProgress(percentage: number): void {
    this.element.textContent = `모델 로딩 중... ${percentage}%`;
  }

  public hide(): void {
    this.element.style.display = "none";
  }

  public showError(message: string): void {
    this.element.textContent = message;
    setTimeout(() => this.hide(), 3000);
  }
}
