export interface ModelLoadedMessage {
  type: "modelLoaded";
  success: boolean;
  error?: string;
}

export interface ModelUnloadedMessage {
  type: "modelUnloaded";
}

export type PostMessageData =
  | {
      type: "loadModel";
      modelUrl: string;
    }
  | {
      type: "unloadModel";
    }
  | ModelLoadedMessage
  | ModelUnloadedMessage;

export class MessageHandler {
  private onModelUrlReceived: (url: string) => void;
  private onModelUnload: () => void;

  constructor(
    onModelUrlReceived: (url: string) => void,
    onModelUnload: () => void
  ) {
    this.onModelUrlReceived = onModelUrlReceived;
    this.onModelUnload = onModelUnload;
    window.addEventListener("message", this.handleMessage.bind(this));

    // URL 파라미터 체크
    this.checkUrlParameters();
  }

  private handleMessage(event: MessageEvent<PostMessageData>): void {
    if (event.data && event.data.type === "loadModel" && event.data.modelUrl) {
      this.onModelUrlReceived(event.data.modelUrl);
    } else if (event.data && event.data.type === "unloadModel") {
      this.onModelUnload();
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

  public sendModelUnloadedMessage(): void {
    if (window.parent) {
      window.parent.postMessage(
        {
          type: "modelUnloaded",
        } as ModelUnloadedMessage,
        "*"
      );
    }
  }
}
