<header>dev-app-header</header>
<div id="foo"></div>
<!--<json-editor/>-->
<JsonEditor foo="111222"/>
<!--<json-editor foo="roo3425oooo"/>-->
<footer>dev-app-footer</footer>

<script>
import { onMount } from 'svelte'
import JsonEditor from '../json-editor/index.svelte'
import JsonEditor2 from './json-editor-lib.js'

onMount(() => {
  const foo = document.getElementById('foo')
  customElements.define('json-editor-2', JsonEditor2.element)
  foo.innerHTML = `<json-editor-2 foo="123123333"/>`

})
</script>
