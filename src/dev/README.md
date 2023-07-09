# dev

개발에 필요한 노트

## using build component

`lib`로 빌드하면 웹 컴포넌트 클래스로 사용할 수 있다.
다음은 빌드된 컴포넌트 클래스를 사용하는 예제

```sveltehtml
<div id="foo"></div>
<script>
import { onMount } from 'svelte'
import JsonEditor from './json-editor.js'
onMount(() => {
  const foo = document.getElementById('foo')
  if (!customElements.get('json-editor'))
  {
    customElements.define('json-editor', JsonEditor.element)
  }
  foo.innerHTML = `<json-editor foo="123123"/>`
})
</script>
```
