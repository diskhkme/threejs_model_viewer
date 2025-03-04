export class TestControls {
  private buttons: HTMLButtonElement[] = [];

  constructor() {
    this.createTestButton("Duck 모델 로드 테스트", "/test_models/Duck.glb");
    // 필요에 따라 더 많은 테스트 버튼 추가 가능
  }

  private createTestButton(text: string, modelUrl: string): void {
    const button = document.createElement("button");
    button.textContent = text;
    this.setupButtonStyles(button);

    button.addEventListener("click", () => {
      window.dispatchEvent(
        new MessageEvent("message", {
          data: { modelUrl },
        })
      );
    });

    document.body.appendChild(button);
    this.buttons.push(button);
  }

  private setupButtonStyles(button: HTMLButtonElement): void {
    button.style.position = "absolute";
    button.style.bottom = `${20 + this.buttons.length * 50}px`;
    button.style.left = "20px";
    button.style.padding = "10px";
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.cursor = "pointer";
    button.style.zIndex = "1000";
  }
}
