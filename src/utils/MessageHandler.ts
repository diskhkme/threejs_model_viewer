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
      modelId: string;
    }
  | {
      type: "unloadModel";
      modelId: string;
    }
  | {
      type: "testCSG";
    }
  | ModelLoadedMessage
  | ModelUnloadedMessage;

export class MessageHandler {
  private onModelUrlReceived: (url: string, modelId: string) => void;
  private onModelUnload: (modelId: string) => void;
  private onTestCSG?: () => void;

  constructor(
    onModelUrlReceived: (url: string, modelId: string) => void,
    onModelUnload: (modelId: string) => void,
    onTestCSG?: () => void
  ) {
    this.onModelUrlReceived = onModelUrlReceived;
    this.onModelUnload = onModelUnload;
    this.onTestCSG = onTestCSG;
    window.addEventListener("message", this.handleMessage.bind(this));

    // URL 파라미터 체크
    this.checkUrlParameters();
  }

  private handleMessage(event: MessageEvent<PostMessageData>): void {
    if (event.data?.type === "loadModel") {
      this.onModelUrlReceived(event.data.modelUrl, event.data.modelId);
    } else if (event.data?.type === "unloadModel") {
      this.onModelUnload(event.data.modelId);
    } else if (event.data?.type === "testCSG" && this.onTestCSG) {
      this.onTestCSG();
    }
  }

  private checkUrlParameters(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const modelUrl = urlParams.get("modelUrl");
    const modelId = urlParams.get("modelId") || "default";
    if (modelUrl) {
      this.onModelUrlReceived(modelUrl, modelId);
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
