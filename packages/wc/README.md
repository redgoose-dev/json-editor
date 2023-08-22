# json-editor for web-component

`json-editor`는 `web component`로 만들어 사용할 수 있습니다.
다음과 같이 모듈을 불러서 웹 컴포넌트로 만들 수 있습니다.

```javascript
import JsonEditorWebComponent from '@redgoose/json-editor/wc'

// register custom element
customElements.define('json-editor', JsonEditorWebComponent)
```

### attribute

- `src`  
  JSON.stringify 형태의 데이터 값
- `theme`  
  다크모드에 대한 값 (`Options`섹션 참고)
- `live`  
  데이터가 업데이트 될때마다 `preview`메서드를 실행할지에 대한 여부 (`Options`섹션 참고)

### events

커스텀 이벤트

```javascript
const element = document.querySelector('json-editor')
// update event
element.addEventListener('update', e => {
  console.log('update json-editor', e.detail.data)
})
```

### access core

에디터 코어 메서드나 요소에 접근하여 기능을 사용할 수 있습니다.

```javascript
const element = document.querySelector('json-editor')
const data = element.core.export(true, 2)
console.log('export data', data)
```
