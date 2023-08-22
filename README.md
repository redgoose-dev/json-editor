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

> ps. 먼저 소스코드는 다음과 같이 정의합니다.
> ```javascript
> const jsonEditor = new JsonEditor()
> const node = document.querySelector('.node') // node
> ```

### addNode

`Object`, `Array` 노드에서 자식 노드를 추가합니다.

```javascript
jsonEditor.addNode(node, data, options, useUpdate, useUpdateCount)
```

- `node`: 데이터를 추가할 노드 엘리먼트
- `data`: 추가할 데이터
- `options`: 추가옵션
- `useUpdate`: 노드를 추가하고 업데이트 메서드를 실행합니다.
- `useUpdateCount`: 부모노드 데이터 갯수를 업데이트합니다.

예제코드

```javascript
jsonEditor.addNode(
  node,
  { key: '', type: 'string', value: 'metal' },
  options,
  true,
  true
)
```

### removeNode

노드를 삭제합니다.

```javascript
jsonEditor.removeNode(node, useUpdate)
```

- `node`: 데이터를 추가할 노드 엘리먼트
- `useUpdate`: 노드를 삭제하고 업데이트 메서드를 실행합니다.

예제코드

```javascript
jsonEditor.removeNode(node, true)
```

### changeType

노드의 타입을 변경합니다.

```javascript
jsonEditor.changeType(node, type, useUpdate)
```

- `node`: 타입을 변경할 노드 엘리먼트
- `type`: 타입의 이름 (object,array,string,number,boolean,null)
- `useUpdate`: 노드 타입을 변경하고 업데이트 메서드를 실행합니다.

예제코드

```javascript
jsonEditor.changeType(node, 'boolean', true)
```

### duplicate

노드를 복제합니다.

```javascript
jsonEditor.duplicate(node, useUpdate)
```

- `node`: 복제할 노드 엘리먼트
- `useUpdate`: 노드 업데이트 메서드를 실행할지에 대한 여부

예제코드

```javascript
jsonEditor.duplicate(node, true)
```

### fold

노드를 접거나 펼칩니다.

```javascript
jsonEditor.fold(node, true)
```

### import

데이터를 에디터에다 가져옵니다.

```javascript
jsonEditor.import(node, data, useUpdate, useUpdateCount)
```

- `node`: 데이터를 추가할 노드 엘리먼트
- `data`: 가져올 데이터
- `useUpdate`: 노드를 추가하고 업데이트 메서드를 실행합니다.
- `useUpdateCount`: 부모노드 데이터 갯수를 업데이트합니다.

예제코드

```javascript
jsonEditor.import(node, { foo: 'bar' }, true, true)
```

### replace

데이터를 모두 교체합니다.

```javascript
jsonEditor.replace(data, useUpdate)
```

- `data`: 새로 교체할 데이터
- `useUpdate`: 노드 업데이트 메서드를 실행할지에 대한 여부

예제코드

```javascript
jsonEditor.replace({ foo: 'bar' }, true)
```

### export

에디터의 데이터를 가져옵니다.

```javascript
jsonEditor.export(node, json, space)
```

- `node`: 가져올 노드 엘리먼트
- `json`: json 형식의 데이터 변환여부
- `space`: json 데이터 공백

예제코드

```javascript
const space = 2 // null,2,'\t'
jsonEditor.export(node, true, space)
```

### clear

노드의 내용을 비웁니다.

```javascript
jsonEditor.clear()
```

### destroy

만들어진 인스턴스를 파괴합니다.

```javascript
jsonEditor.destroy()
```

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


## packages

코어 라이브러리를 이용하여 다른 프레임워크나 웹컴포넌트로 확장할 수 있습니다.

- `web-component`
- `react`
- `vue`
- `svelte`


## export guide

다음 경로를 참고하여 모듈들을 import 기능을 이용하는데 참고할 수 있습니다.

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
