# json-editor for web-component

`json-editor`를 `web component`로 만들어 사용할 수 있습니다.
다음과 같이 모듈을 불러서 웹 컴포넌트로 만들 수 있습니다.

```javascript
import JsonEditor from '@redgoose/json-editor/wc'

// register custom element
customElements.define('json-editor', JsonEditor)
```

마지막으로 엘리먼트를 만들고 엘리먼트를 삽입합니다.

```javascript
const jsonEditor = document.createElement('json-editor')
jsonEditor.setAttribute('src', '{"foo": "bar"}')
jsonEditor.setAttribute('theme', 'system')
jsonEditor.setAttribute('live', 'true')
document.getElementById('app').append(jsonEditor)
```


## Attribute

- `src`: JSON.stringify 형태의 데이터 값 (마운트 하는 시점에만 사용합니다!)
- `theme`: 다크모드에 대한 값
- `live`: 데이터가 업데이트 될때마다 `update`이벤트를 실행할지에 대한 여부

> `src` 속성값과 에디터의 내용은 서로 분리되어 있기 때문에 `src` 값이 변한다고 에디터에 자동으로 업데이트 되지 않습니다.  
> 에디터의 내용은 그대로 두고 외부에서 에디터의 내용을 변경하려면 `change()`메서드를 사용하거나 라이브러리 메서드를 이용하는것을 권장드립니다.


## Methods

### change

데이터 내용을 변경합니다.  
속성과 에디터의 내용을 강제로 변경하기 때문에 주의해주세요.

```javascript
jsonEditor.change({ foo: 'bar' })
```


## Events

커스텀 이벤트

### update

에디터 내용이 업데이트 되면 호출되는 이벤트

```javascript
jsonEditor.addEventListener('update', e => {
  console.log('update json-editor', e.detail.data)
})
```


## Access core instance

에디터 코어 메서드나 요소에 접근하여 기능을 사용할 수 있습니다.

```javascript
const element = document.querySelector('json-editor')
const data = element.core.export(true, 2)
console.log('export data', data)
```
