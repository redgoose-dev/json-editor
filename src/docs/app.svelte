<div
  class="layout"
  class:layout--preview={$visiblePreview}>
  <div class="layout__header">
    <Header on:select-menu={menuRouting}/>
  </div>
  <div class="layout__editor">
    <Editor
      on:init={onInitEditor}
      on:update={onUpdateEditor}
      on:action={menuRouting}/>
  </div>
  {#if $visiblePreview}
    <div class="layout__preview">
      <Preview/>
    </div>
  {/if}
</div>

{#if dataImport.visible}
  <div
    transition:fade={modalTransition}
    class="modal-data">
    <Modal on:close={() => { dataImport.visible = false }}>
      <ImportData
        bind:source={dataImport.source}
        on:submit={onImportData}
        on:close={() => { dataImport.visible = false }}/>
    </Modal>
  </div>
{/if}

{#if dataExport.visible}
  <div
    transition:fade={modalTransition}
    class="modal-data">
    <Modal on:close={() => { dataExport.visible = false }}>
      <ExportData
        source={dataExport.source}
        on:close={() => dataExport.visible = false}/>
    </Modal>
  </div>
{/if}

{#if $visibleAbout}
  <div
    transition:fade={modalTransition}
    class="modal-about">
    <Modal on:close={() => $visibleAbout = false}>
      <About/>
    </Modal>
  </div>
{/if}

<script>
import { onMount } from 'svelte'
import { fade } from 'svelte/transition'
import { cubicInOut } from 'svelte/easing'
import { visiblePreview, visibleAbout } from './store/visible.js'
import { theme, source, language } from './store/service.js'
import { getRandomApi } from './libs/util.js'
import Header from './components/header/index.svelte'
import Editor from './components/editor/index.svelte'
import Preview from './components/preview/index.svelte'
import { ImportData, ExportData } from './components/data/index.js'
import About from './components/about/index.svelte'
import Modal from './components/modal-window/index.svelte'

let cash
let editor
let dataImport = { source: '', visible: false, node: undefined }
let dataExport = { source: undefined, visible: false, node: undefined }
const modalTransition = { duration: 160, easing: cubicInOut }

function menuRouting(e)
{
  const { main, sub, node } = e.detail
  let nodes
  switch (main)
  {
    case 'data':
      switch (sub)
      {
        case 'new':
          editor.clear()
          break
        case 'import':
          dataImport.source = ''
          dataImport.node = undefined
          dataImport.visible = true
          break
        case 'export':
          dataExport.source = Object.assign({}, $source)
          dataExport.node = undefined
          dataExport.visible = true
          break
      }
      break
    case 'view':
      switch (sub)
      {
        case 'fold':
        case 'unfold':
          nodes = editor.el.tree.children().find('.node[data-type=object],.node[data-type=array]')
          editor.fold(nodes, sub === 'unfold')
          break
        case 'toggle-live-preview':
          visiblePreview.change(!$visiblePreview)
          break
      }
      break
    case 'language':
      language.change(sub)
      break
    case 'theme':
      theme.change(sub)
      break
    case 'about':
      $visibleAbout = true
      break
    case 'editor':
      switch (sub) {
        case 'import':
          dataImport.source = ''
          dataImport.node = node
          dataImport.visible = true
          break
        case 'export':
          dataExport.source = editor.export(node, false)
          dataExport.node = node
          dataExport.visible = true
          break
      }
      break
  }
}

function onImportData(e)
{
  const { source } = e.detail
  try
  {
    let parsedSource = JSON.parse(source)
    dataImport.visible = false
    if (dataImport.node)
    {
      editor.fold(dataImport.node, true)
      editor.import(dataImport.node, parsedSource)
    }
    else
    {
      editor.replace(parsedSource)
    }
  }
  catch (e)
  {
    alert('Failed import JSON data.')
  }
}

function onInitEditor(e)
{
  const { instance } = e.detail
  editor = instance
  cash = editor.$
}

function onUpdateEditor(e)
{
  const { src } = e.detail
  // console.log('onUpdateEditor() in app.svelte', src)
}

onMount(async () => {
  if (!source.existStorageData())
  {
    const json = await getRandomApi()
    if (json) editor.replace(json)
  }
})
</script>

<style lang="scss">
@import './app';
</style>
