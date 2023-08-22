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
    <button type="button" on:click={importData}>Import</button>
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
let theme = 'light'
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
  const data = jsonEditor.export(undefined, true, 2)
  console.log('exportData()', data)
}

function importData()
{
  const $node = jsonEditor.el.tree.find('.root.node')
  const data = {
    "4235235": "====@@=====@@===",
    "qqqq": 123123,
    "sdgsdg": null,
    "iouiouio": [ "qqq", "www", "eee" ],
    "foobar": { "foo": true, "bar": false },
  }
  jsonEditor.import($node, data, true, true)
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
  jsonEditor.customContext = (body, { node, type, isRoot }, $) => {
    const ul = $(body).children()
    let item
    // export node
    if ([ 'object', 'array' ].includes(type))
    {
      item = $(`<li><button type="button" data-key="export-node">Export Node</button></li>`)
      item.find('button').on('click', e => {
        const data = jsonEditor.export(node, false, 2)
        jsonEditor.context.close()
        console.log('export-node:', data)
      })
      ul.append(item)
    }
  }
})
onDestroy(() => {
  jsonEditor.destroy()
})
</script>
