<article class="editor">
  <div bind:this={_editor} class="editor__body"></div>
</article>

<script>
import { onMount, onDestroy, createEventDispatcher } from 'svelte'
import { source, theme } from '../../store/service.js'
import JsonEditor from '../../../lib.js'

JsonEditor.prototype.preview = updateSource
JsonEditor.prototype.customContext = customContext

const dispatch = createEventDispatcher()
let _editor
let editor

theme.subscribe(value => {
  if (!editor) return
  editor.options.theme = value
})

function updateSource(src)
{
  console.log('qweqwe')
  source.update(src)
  dispatch('update', { src })
}

function customContext(body, { node, type, isRoot }, $)
{
  if (![ 'object', 'array' ].includes(type)) return
  const menuItems = [
    { key: 'import', label: 'Import JSON' },
    { key: 'export', label: 'Export JSON' },
  ]
  const $newItems = $(menuItems.map(o => (`<li><button type="button" data-mode="${o.key}"><em class="label">${o.label}</em></button></li>`)).join(''))
  $newItems.find('button').on('click', (e) => {
    editor.context.close()
    const mode = e.currentTarget.dataset.mode
    dispatch('action', {
      main: 'editor',
      sub: mode,
      node,
    })
  })
  if (isRoot)
  {
    $(body).find('& > ol').append($newItems)
  }
  else
  {
    $(body).find('& > ol > .remove').before($newItems)
  }
}

onMount(() => {
  editor = new JsonEditor(_editor, {
    live: true,
    theme: $theme,
  })
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
