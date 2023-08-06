<header>
  <h1>JSONEditor Development33</h1>
</header>

<nav class="controller">
  <div class="controller__wrap">
    <button type="button" on:click={() => toktok(1)}>button #1</button>
    <button type="button" on:click={() => toktok(2)}>button #2</button>
    <button type="button" on:click={() => toktok(3)}>{theme}</button>
    <button type="button" on:click={exportData}>Export</button>
  </div>
</nav>

<div class="container">
  <json-editor
    bind:this={self}
    src={_data}
    live="true"
    theme={theme}/>
</div>

<script>
import { onMount, onDestroy } from 'svelte'
import JsonEditor from '../web-component.js'
import { sampleObject, sampleArray } from './resource.js'

let self
const elementName = 'json-editor'
let theme = 'system'
let data = sampleObject
$: _data = JSON.stringify(data, null)

function toktok(key)
{
  switch (key) {
    case 1:
      data = sampleObject
      break
    case 2:
      data = sampleArray
      break
    case 3:
      switch (theme)
      {
        case 'system':
          theme = 'light'
          break
        case 'light':
          theme = 'dark'
          break
        case 'dark':
          theme = 'system'
          break
      }
      break
  }
}

function exportData()
{
  const data = self.core.export(true, 2)
  console.log('exportData()', data)
}

function onUpdateJsonEditor(e)
{
  console.warn('UPDATE:', e.detail.data)
  // data = e.detail.data
}

onMount(() => {
  // define custom element
  if (customElements.get(elementName))
  {
    customElements.upgrade(self)
  }
  else
  {
    customElements.define(elementName, JsonEditor)
  }
  self.addEventListener('update', onUpdateJsonEditor)
  self.core.customContext = (body, { node, type, isRoot }, $) => {
    if (isRoot) return
    const $ul = $(body).children()
    const $items = $(`
      <li><button type="button" data-key="#1">custom #1</button></li>
      <li><button type="button" data-key="#2">custom #2</button></li>
    `)
    $ul.append($items)
    $items.find('button').on('click', (e) => {
      console.log('click item-key:', e.currentTarget.dataset.key)
      self.core.context.close()
    })
  }
})
onDestroy(() => {
  self.removeEventListener('update', onUpdateJsonEditor)
})

</script>

<style lang="scss">
@import './app';
</style>
