# JSON Editor

"JSON EDITOR"는 웹브라우저에서 JSON 데이터를 편집하는 에디터입니다.
텍스트 편집툴을 사용할 수 없거나 JSON 데이터를 손쉽게 다루기 위하여 만들어진 프로그램 입니다.

이 에디터는 자바스크립트 클래스로 사용할 수 있으며 다른 웹 프로그램에서 `web component`, `vue`, `react`, `svelte` 컴포넌트로 만들어 삽입할 수 있습니다.


## Using

```javascript
import JsonEditor from '@redgoose/json-editor'
import '@redgoose/json-editor/css'
const jsonEditor = new JsonEditor(document.getElementById('target'), {
  live: true,
  theme: 'system',
})
```


## Options

컴포넌트를 사용할때에 사용하는 옵션값입니다.

- `live` / (boolean)
  이 값을 사용하면 데이터가 업데이트 될때마다 `preview` 메서드가 호출되면서 업데이트 이벤트를 호출합니다.
- `theme` / ('system'|'light'|'dark')
  다크모드를 사용하는지에 대한 값입니다.


## Methods

인스턴스에서 사용할 수 있는 메서드들이며 필요할때에 적절히 사용할 수 있습니다.
사용할 수 있는 메서드들은 다음과 같습니다.

### addNode

`Object`, `Array` 노드에서 자식 노드를 추가할 수 있습니다.
메서드의 파라메터에 대한 내용은 다음 하위섹션을 참고해주세요.

```javascript
jsonEditor.addNode(node, data, options, useUpdate, useUpdateCount)
```

전체적인 예제는 다음과 같습니다.

```javascript
jsonEditor.addNode(
  document.querySelector('.node'),
  { key: '', type: 'string', value: 'metal' },
  options,
  true,
  true
)
```

#### node

데이터를 추가할 노드 엘리먼트

- required
- type: `HTMLElement`

#### data

추가할 데이터

- required
- type: `array|object`
- value
  - `key`: (string) 키 이름
  - `value`: (any) 데이터 값
  - `type`: (string) 데이터 타입

#### options

- optional
- type: `object`
- value
  - `open`: (boolean) 노드를 추가하면서 하위 노드를 열지에 관한 여부
  - `callback`: (function) 노드를 추가하고 커스텀 액션을 위한 콜백함수

#### useUpdate

노드를 추가하고 업데이트 메서드를 실행합니다.

- optional
- type: `boolean`

#### useUpdateCount

부모노드 데이터 갯수를 업데이트합니다.

- optional
- type: `boolean`

### removeNode

노드를 삭제합니다.

```javascript
jsonEditor.removeNode(node, useUpdate)
```

#### node

삭제할 노드 엘리먼트

- required
- type: `HTMLElement`

#### useUpdate

노드를 삭제하고 업데이트 메서드를 실행합니다.

- optional
- type: `boolean`

### changeType

### duplicate

### fold

노드를 접었다 펼칩니다.

### import

데이터를 에디터에다 가져옵니다.

### replace

데이터를 모두 교체합니다.

```javascript
const data = { foo: 'bar' }
jsonEditor.replace(data)
```

### export

에디터의 데이터를 가져옵니다.

### clear

노드의 내용을 비웁니다.

### destroy

만들어진 인스턴스를 파괴합니다.

### preview

데이터가 업데이트할때마다 호출되는 메서드이며 메서드를 오버라이딩하여 이벤트 훅으로 사용할 수 있습니다.

```javascript
jsonEditor.preview = (src) => {
  console.log('updated data', src)
}
```

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
import JsonEditorWebComponent from '@redgoose/json-editor/wc'

// register custom element
customElements.define('json-editor', JsonEditorWebComponent)
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


## export guide

다음 경로를 참고하여 모듈들을 import 하는데 이용할 수 있습니다.

- `@redgoose/json-editor`  
  코어 라이브러리
- `@redgoose/json-editor/css`  
  스타일시트
- `@redgoose/json-editor/wc`  
  웹 컴포넌트 (스타일시드가 포함되어 있습니다.)
- `@redgoose/json-editor/vue`  
  vue 컴포넌트
- `@redgoose/json-editor/react`  
  react 컴포넌트
- `@redgoose/json-editor/svelte`  
  svelte 컴포넌트
- `@redgoose/json-editor/lib/json-editor.umd.cjs`  
  코어 라이브러리 UMD
- `@redgoose/json-editor/lib/json-editor.wc.umd.cjs`  
  웹 컴포넌트 UMD


