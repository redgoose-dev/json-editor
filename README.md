# JSON Editor

`JSON`데이터를 편집하는 UI 에디터입니다.


## Using core

```javascript
import JsonEditor from '@redgoose/json-editor'
const jsonEditor = new JsonEditor(document.getElementById('target'), {
  live: true,
  theme: 'system',
})
```


## Options

- `live`: ..
- `theme`: ..


## Public methods

...

### addNode

### removeNode

### changeType

### duplicate

### fold

### replace

### import

### export

### replace

데이터를 모두 교체합니다.

```javascript
const data = { foo: 'bar' }
jsonEditor.replace(data)
```

### clear

### destroy

### preview

데이터가 업데이트할때마다 호출되는 메서드
공개 메서드를 오버라이딩하여 이벤트 훅으로 사용할 수 있습니다.

```javascript
jsonEditor.preview = (src) => {
  console.log('updated data', src)
}
```

- `src`: 메서드가 호출되는 타이밍에 만들어진 데이터

### custom context

컨텍스트 메뉴를 커스터마이즈 할 수 있다. 이 메서드는 컨텍스트 메뉴가 열릴때 호출됩니다.
메뉴가 열릴때마다 노드의 상태가 변하기 때문에 그 값으로 판단하여 엘리먼트를 직접 만들어서 추가해 줘야합니다. (유연하게 사용하기 위하여 규칙을 느슨하게 풀었습니다.)

```javascript
jsonEditor.customContext = (body, { node, type, isRoot }, $) => {
  if (!isRoot) return
  const $ul = $(body).children()
  const $items = $(`
    <li><button type="button" data-key="#1">custom #1</button></li>
    <li><button type="button" data-key="#2">custom #2</button></li>
  `)
  $items.find('button').on('click', (e) => {
    console.log('click item-key:', $(e.currentTarget).data('key'))
    jsonEditor.context.close()
  })
  $ul.append($items)
}
```

- `body`: 열린 컨텍스트 메뉴 영역. 이 엘리먼트에다 항목을 조작하면 됩니다.
- `node`: 선택된 노드 엘리먼트
- `type`: 선택된 노드의 타입
- `isRoot`: 현재 선택된 노드가 루트인지 구분하는 값
- `$`: 컴포넌트 내부에서 사용하는 [Cash](https://github.com/fabiospampinato/cash)를 이용하여 손쉽게 dom을 다룰 수 있습니다.


## Web component

`json-editor`는 `web component`로 만들어 사용할 수 있습니다.
다음과 같이 모듈을 불러서 웹 컴포넌트로 만들 수 있습니다.

```javascript
import JsonEditorComponent from '@redgoose/json-editor/web-component.js'

// register custom element
customElements.define('json-editor', JsonEditorComponent)
```

### attribute

- `src`: ..
- `theme`: ..
- `live`: ..

### events

```javascript
const element = document.querySelector('json-editor')

// update event
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

