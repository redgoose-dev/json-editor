<nav class="controller">
  <div class="controller__wrap">
    <p>
      <button type="button" on:click={() => changeData(0)}>#object</button>
      <button type="button" on:click={() => changeData(1)}>#array</button>
    </p>
    <p>
      <button
        type="button"
        disabled={theme === 'system'}
        on:click={() => changeTheme('system')}>
        System
      </button>
      <button
        type="button"
        disabled={theme === 'light'}
        on:click={() => changeTheme('light')}>
        Light
      </button>
      <button
        type="button"
        disabled={theme === 'dark'}
        on:click={() => changeTheme('dark')}>
        Dark
      </button>
    </p>
    <button type="button" on:click={exportData}>Export</button>
  </div>
</nav>

<div
  class="container"
  class:theme--system={theme === 'system'}
  class:theme--light={theme === 'light'}
  class:theme--dark={theme === 'dark'}>
  <div bind:this={self} id="json-editor"></div>
</div>

<script>
import { onMount, onDestroy } from 'svelte'
import JsonEditor from '../../lib.js'
import { sampleObject, sampleArray } from '../assets/resource.js'
import '../../json-editor/assets/main.scss'

let self
let jsonEditor
let theme = 'system'
let data = sampleObject

function changeData(key)
{
  switch (key) {
    case 0:
      jsonEditor.replace(sampleObject)
      break
    case 1:
      jsonEditor.replace(sampleArray)
      break
  }
}

function changeTheme(value)
{
  theme = value
  jsonEditor.options.theme = value
}

function exportData()
{
  const data = jsonEditor.export(true, 2)
  console.log('exportData()', data)
}

onMount(() => {
  if (jsonEditor) jsonEditor.destroy()
  jsonEditor = new JsonEditor(self, {
    live: true,
    theme,
  })
  jsonEditor.replace(data)
  jsonEditor.preview = src => {
    console.warn('PREVIEW =>', src)
  }
})
onDestroy(() => {
  jsonEditor.destroy()
})
</script>
