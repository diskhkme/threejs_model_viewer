export interface ModelLoadedMessage {
  type: "modelLoaded";
  success: boolean;
  error?: string;
}

export type PostMessageData =
  | {
      modelUrl?: string;
    }
  | ModelLoadedMessage;

export class MessageHandler {
  private onModelUrlReceived: (url: string) => void;

  constructor(onModelUrlReceived: (url: string) => void) {
    this.onModelUrlReceived = onModelUrlReceived;
    window.addEventListener("message", this.handleMessage.bind(this));

    // URL 파라미터 체크
    this.checkUrlParameters();
  }

  private handleMessage(event: MessageEvent<PostMessageData>): void {
    if (event.data && "modelUrl" in event.data && event.data.modelUrl) {
      this.onModelUrlReceived(event.data.modelUrl);
    }
  }

  private checkUrlParameters(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const modelUrl = urlParams.get("modelUrl");
    if (modelUrl) {
      this.onModelUrlReceived(modelUrl);
    }
  }

  public sendModelLoadedMessage(success: boolean, error?: string): void {
    if (window.parent) {
      window.parent.postMessage(
        {
          type: "modelLoaded",
          success,
          error,
        } as ModelLoadedMessage,
        "*"
      );
    }
  }
}
