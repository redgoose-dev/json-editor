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
  <json-editor
    bind:this={self}
    src={_data}
    live="true"
    theme={theme}/>
</div>

<script>
import { onMount, onDestroy } from 'svelte'
import JsonEditor from '../../web-component.js'
import { sampleObject, sampleArray } from '../assets/resource.js'

let self
const elementName = 'json-editor'
let theme = 'system'
let data = sampleObject
$: _data = JSON.stringify(data, null)

function changeData(key)
{
  switch (key) {
    case 0:
      data = sampleObject
      break
    case 1:
      data = sampleArray
      break
  }
}

function changeTheme(value)
{
  theme = value
}

function exportData()
{
  const data = self.core.export(undefined, true, 2)
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
})
onDestroy(() => {
  self.removeEventListener('update', onUpdateJsonEditor)
})
</script>

<style lang="scss">
//
</style>
