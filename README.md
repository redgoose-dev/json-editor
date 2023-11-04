# JSON Editor

"json-editor"는 웹브라우저에서 json 데이터를 편집하는 에디터입니다.  
텍스트 편집툴을 사용할 수 없거나 json 데이터를 손쉽게 다루기 위하여 만들어진 프로그램 입니다.
이 에디터는 독립적으로 동작하며 메서드를 실행하여 에디터의 기능을 조작할 수 있습니다.

권장되는 사용환경은 다음과 같습니다.

- 데스크탑
- 큰 화면의 태블릿

에디터가 어떻게 사용되는지 데모를 확인해볼 수 있습니다. 데모페이지에서 임시로 에디터로 사용할 수 있습니다.

> 데모링크: https://redgoose-dev.github.io/json-editor/


## Using

javascript와 css를 불러와서 클래스 인스턴스를 만드는 방식으로 시작합니다.

```javascript
import JsonEditor from '@redgoose/json-editor'
import '@redgoose/json-editor/css'

const jsonEditor = new JsonEditor(document.getElementById('target'), {
  live: true,
  theme: 'system',
  edit: 'all',
})
```


## Options

컴포넌트를 사용할때에 사용하는 옵션값입니다.

- `live` / (true,false)  
  이 값을 사용하면 데이터가 업데이트 될때마다 `update` 메서드가 호출되면서 업데이트 이벤트를 호출합니다.
- `theme` / (system,light,dark)  
  다크모드를 사용하는지에 대한 값입니다.
- `edit` / (all,value,none)  
  컨트롤할 수 있는 범위를 정합니다.


## Methods

인스턴스에서 사용할 수 있는 메서드들이며 필요할때에 적절히 사용할 수 있습니다. (아니면 클래스 프로토타입으로 미리 확장해둘 수 있습니다.)  
사용할 수 있는 공개 메서드들은 다음과 같습니다.

> ps. 먼저 소스코드는 다음과 같이 정의합니다.
> 
> ```javascript
> const jsonEditor = new JsonEditor()
> const node = document.querySelector('.node') // node
> ```

### addNode

`object`, `array` 노드에서 자식 노드를 추가합니다.

```javascript
jsonEditor.addNode(node, data, options, useUpdate, useUpdateCount)
```

- `node`: 데이터를 추가할 노드 엘리먼트
- `data`: 추가할 데이터
- `options`: 추가옵션
- `useUpdate`: 노드를 추가하고 업데이트 메서드를 실행합니다.
- `useUpdateCount`: 부모노드 데이터 갯수를 업데이트합니다.

다음과 같이 사용할 수 있습니다.

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

다음과 같이 사용할 수 있습니다.

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

다음과 같이 사용할 수 있습니다.

```javascript
jsonEditor.changeType(node, 'boolean', true)
```

### changeKey

노드의 `key`를 변경합니다.

```javascript
jsonEditor.changeKey(node, keyword)
```

- `node`: 타입을 변경할 노드 엘리먼트
- `keyword`: 키워드

### changeValue

노드의 `value`를 변경합니다.

```javascript
jsonEditor.changeValue(node, value)
```

- `node`: 타입을 변경할 노드 엘리먼트
- `value`: 값

### duplicate

노드를 복제합니다.

```javascript
jsonEditor.duplicate(node, useUpdate)
```

- `node`: 복제할 노드 엘리먼트
- `useUpdate`: 실행하고 업데이트 메서드를 실행합니다.

다음과 같이 사용할 수 있습니다.

```javascript
jsonEditor.duplicate(node, true)
```

### fold

노드를 접거나 펼칩니다.

```javascript
jsonEditor.fold(node, true)
```

### import

데이터를 가져옵니다.

```javascript
jsonEditor.import(node, data, useUpdate, useUpdateCount)
```

- `node`: 데이터를 추가할 노드 엘리먼트
- `data`: 가져올 데이터
- `useUpdate`: 노드를 추가하고 업데이트 메서드를 실행합니다.
- `useUpdateCount`: 부모노드 데이터 갯수를 업데이트합니다.

다음과 같이 사용할 수 있습니다.

```javascript
jsonEditor.import(node, { foo: 'bar' }, true, true)
```

### replace

데이터를 모두 교체합니다.

```javascript
jsonEditor.replace(data, useUpdate)
```

- `data`: 새로 교체할 데이터
- `useUpdate`: 노드를 수정하고 업데이트 메서드를 실행합니다.

다음과 같이 사용할 수 있습니다.

```javascript
jsonEditor.replace({ foo: 'bar' }, true)
```

### export

에디터의 데이터를 가져옵니다.

```javascript
jsonEditor.export(node, json, space)
```

- `node`: 가져올 데이터의 노드 엘리먼트
- `json`: json 형식의 데이터 변환여부
- `space`: json 공백

다음과 같이 사용할 수 있습니다.

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


## Events

에디터에서 일어난 일들을 외부에서 이벤트리스너로 받아올 수 있습니다.

> ps. 먼저 소스코드는 다음과 같이 정의합니다.
>
> ```javascript
> const jsonEditor = new JsonEditor()
> const wrap = jsonEditor.el.wrap.get(0) // wrap element
> ```

### update

에디터의 내용이 수정된다면 실행되는 이벤트입니다.

```javascript
wrap.addEventListener('update', ({ detail }) => {
  console.log('updated data', src)
})
```

- `detail`: 데이터 객체

### context

컨텍스트 메뉴가 열릴때마다 실행되는 이벤트입니다.
메뉴를 커스터마이즈 할 수 있으며 제공된 파라메터 값을 이용하여 상황에 맞게 메뉴를 조작할 수 있습니다.

```javascript
wrap.addEventListener('context', ({ detail: { body, node, type, isRoot, $ } }) => {
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
})
```

- `body`: 열린 컨텍스트 메뉴 영역. 이 엘리먼트에다 항목을 조작하면 됩니다.
- `node`: 선택된 노드 엘리먼트
- `type`: 선택된 노드의 타입
- `isRoot`: 현재 선택된 노드가 루트인지 구분하는 값
- `$`: 컴포넌트 내부에서 사용하는 [Cash](https://github.com/fabiospampinato/cash)를 이용하여 손쉽게 dom을 다룰 수 있습니다.


## Exports guide

다음 경로를 참고하여 모듈들을 import 기능을 이용하는데 참고할 수 있습니다.

- `@redgoose/json-editor`: 코어 라이브러리
- `@redgoose/json-editor/css`: 스타일시트
- `@redgoose/json-editor/lib/umd`: 코어 라이브러리 UMD


## Custom style

에디터의 디자인을 수정할 수 있는 요소들을 변수화 시켰습니다.  
다음과 같이 외부 영역에서 에디터 스타일을 커스터마이즈 할 수 있습니다.

```css
.editor {
  --json-editor-color-base: red;
  --json-editor-color-focus: blue;
}
@media (prefers-color-scheme: dark) {
  .editor {
    --json-editor-color-base: green;
    --json-editor-color-focus: yellow;
  }
}
```

[main.scss](https://github.com/redgoose-dev/json-editor/blob/main/src/json-editor/assets/main.scss) 파일의 코드를 참고하여 직접 스타일을 편집할 수 있습니다.


## Extention language

클래스 메서드를 교체하여 에디터 텍스트를 변경할 수 있습니다.

```javascript
JsonEditor.prototype.updateLanguage = function()
{
  this.lang = Object.assign(this.lang, {
    nodeChangeSort: '노드 순서변경',
    nodeContextMenu: '노드메뉴',
    nodeFold: '접기/펼치기',
    contextChangeType: '타입변경',
    contextInsertNode: '노드추가',
    contextTypeObject: '객체',
    contextTypeArray: '배열',
    contextTypeString: '문자',
    contextTypeNumber: '번호',
    contextTypeBoolean: '부울',
    contextTypeNull: '널',
    contextDuplicate: '노드복제',
    contextRemove: '노드삭제',
  })
}
```


## Developing a wrapper

`JSON Editor` 에디터를 `web component`, `react`, `vue`, `svelte` 같은 환경에서 사용할 수 있도록 컴포넌트를 래핑할 수 있습니다.  
다음 링크를 참고하여 개발할 수 있습니다.

- [web component](https://github.com/redgoose-dev/json-editor/wiki/json%E2%80%90editor-for-web-component)
- [react](https://github.com/redgoose-dev/json-editor/wiki/json%E2%80%90editor-for-react)
- [vue](https://github.com/redgoose-dev/json-editor/wiki/json%E2%80%90editor-for-vue)
- [svelte](https://github.com/redgoose-dev/json-editor/wiki/json%E2%80%90editor-for-svelte)
