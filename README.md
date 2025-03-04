# threejs_model_viewer

## Bubble.io Setting

### HTML Element

- Bubble.io에서 HTML Element에 아래 코드 사용
- `Display as an iFrame` 체크 **안함**

```HTML
<div style="width: 100%; height: 500px; position: relative;">
    <iframe
        id="viewer-container"
        src="https://diskhkme.github.io/threejs_model_viewer/"
        style="width: 100%; height: 100%; border: none;"
        allowfullscreen>
    </iframe>
    <div id="loading-indicator" style="display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(0,0,0,0.7); color: white; padding: 15px; border-radius: 5px;">
        모델 로딩 중...
    </div>
</div>

<script>
    // 모델 로드 함수
    function loadModel(modelUrl, modelId = 'default') {
        const iframe = document.getElementById('viewer-container');
        iframe.contentWindow.postMessage({
            type: 'loadModel',
            modelUrl: modelUrl,
            modelId: modelId
        }, '*');
    }

    // 모델 언로드 함수
    function unloadModel(modelId = 'default') {
        const iframe = document.getElementById('viewer-container');
        iframe.contentWindow.postMessage({
            type: 'unloadModel',
            modelId: modelId
        }, '*');
    }

    // 메시지 이벤트 리스너
    window.addEventListener('message', function(event) {
        if (event.data) {
            switch(event.data.type) {
                case 'modelLoaded':
                    if (event.data.success) {
                        console.log('모델 로드 성공');
                        // Bubble.io 워크플로우 트리거
                        // bubble.triggerEvent('modelLoadSuccess');
                    } else {
                        console.error('모델 로드 실패:', event.data.error);
                        // bubble.triggerEvent('modelLoadError');
                    }
                    break;

                case 'modelUnloaded':
                    console.log('모델 언로드 완료');
                    // bubble.triggerEvent('modelUnloaded');
                    break;
            }
        }
    });

    // Bubble.io에서 사용할 수 있는 전역 함수로 노출
    window.loadModel = loadModel;
    window.unloadModel = unloadModel;
</script>
```

### Workflow Setting

- FileUploader의 값이 변하면,
- User의 3D 모델 URL에 파일업로더의 URL Set
- Run JS 플러그인을 사용하여 아래 함수 호출 (두 번째 인자는 모델의 ID(str))

```
loadModel('modelURL(dynamic data)', 'model1')
```
