# JSON Editor

`JSON`데이터를 편집하는 UI 에디터


## Using core

```javascript
import JsonEditor from '@redgoose/json-editor'
const jsonEditor = new JsonEditor(document.getElementById('target'), {
  live: true,
  theme: 'system',
})
```


## Options

### live

### theme


## Public methods

...

### replace

```javascript
const data = { foo: 'bar' }
jsonEditor.replace(data)
```

### preview

데이터가 업데이트할때마다 호출되는 메서드
공개 메서드를 커스터마이즈하여 이벤트 훅으로 사용할 수 있다.

```javascript
jsonEditor.preview = (src) => {
  console.log('updated data', src)
}
```


## Web component

```javascript
import JsonEditorComponent from '@redgoose/json-editor/web-component.js'

// register custom element
customElements.define('json-editor', JsonEditorComponent)
```

### events

```javascript
const element = document.querySelector('json-editor')
element.addEventListener('update', e => {
  console.log('update json-editor', e.detail.data)
})
```

### access core

```javascript
const element = document.querySelector('json-editor')
const data = element.core.export(true, 2)
console.log('export data', data)
```

