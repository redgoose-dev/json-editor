<article class="editor">
  <div bind:this={_editor} class="editor__body"></div>
</article>

<script>
import { onMount, onDestroy, createEventDispatcher } from 'svelte'
import { source, theme } from '../../store/service.js'
import JsonEditor from '../../../lib.js'

const dispatch = createEventDispatcher()
let _editor
let editor

theme.subscribe(value => {
  if (!editor) return
  editor.options.theme = value
})

function updateSource(src)
{
  source.update(src)
  dispatch('update', { src })
}

function customContext(body, { node, type, isRoot }, $)
{
  // TODO: 버튼을 삭입하고 import 기능 만들기
  console.group('customContext()')
  console.log(body)
  console.log(node)
  console.log(type)
  console.log(isRoot)
  console.groupEnd()
}

onMount(() => {
  editor = new JsonEditor(_editor, {
    live: true,
    theme: $theme,
  })
  editor.preview = updateSource
  editor.customContext = customContext
  editor.replace($source, false)
  dispatch('init', { instance: editor })
})

onDestroy(() => {
  editor.destroy()
})
</script>

<style lang="scss">
@import './index';
</style>
