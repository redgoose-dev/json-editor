<div
  class="layout"
  class:layout--preview={$visiblePreview}>
  <div class="layout__header">
    <Header on:select-menu={menuRouting}/>
  </div>
  <div class="layout__editor">
    <Editor
      on:init={onInitEditor}
      on:update={onUpdateEditor}/>
  </div>
  {#if $visiblePreview}
    <div class="layout__preview">
      <Preview/>
    </div>
  {/if}
</div>

{#if $visibleLoadJson}
  <div
    transition:fade={modalTransition}
    class="modal-data">
    <Modal on:close={() => { $visibleLoadJson = false }}>
      <LoadData
        bind:source={jsonSource.load}
        on:submit={onLoadData}
        on:close={() => $visibleLoadJson = false}/>
    </Modal>
  </div>
{/if}

{#if $visibleSaveJson}
  <div
    transition:fade={modalTransition}
    class="modal-data">
    <Modal on:close={() => { $visibleSaveJson = false }}>
      <SaveData
        source={jsonSource.save}
        on:close={() => $visibleSaveJson = false}/>
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
import { fade } from 'svelte/transition'
import { cubicInOut } from 'svelte/easing'
import { visiblePreview, visibleLoadJson, visibleSaveJson, visibleAbout } from './store/visible.js'
import { theme, source } from './store/service.js'
import { copyClipboard } from './libs/util.js'
import Header from './components/header/index.svelte'
import Editor from './components/editor/index.svelte'
import Preview from './components/preview/index.svelte'
import { LoadData, SaveData } from './components/data/index.js'
import About from './components/about/index.svelte'
import Modal from './components/modal-window/index.svelte'

let cash
let editor
let jsonSource = {
  load: '',
  save: undefined,
}
const modalTransition = { duration: 160, easing: cubicInOut }

function menuRouting(e)
{
  const { main, sub } = e.detail
  let nodes
  // console.log('menuRouting()', main, sub)
  switch (main)
  {
    case 'data':
      switch (sub)
      {
        case 'new':
          editor.replace({})
          break
        case 'load':
          jsonSource.load = ''
          $visibleLoadJson = true
          break
        case 'save':
          jsonSource.save = Object.assign({}, $source)
          $visibleSaveJson = true
          break
        case 'clipboard':
          try
          {
            copyClipboard(JSON.stringify($source, null, 2))
              .then(() => alert('Success copy clipboard.'))
          }
          catch (e)
          {
            alert('Failed copy clipboard.')
          }
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
    case 'theme':
      theme.change(sub)
      break
    case 'about':
      $visibleAbout = true
      break
  }
}

function onLoadData(e)
{
  const { source } = e.detail
  try
  {
    let parsedSource = JSON.parse(source)
    $visibleLoadJson = false
    editor.replace(parsedSource)
  }
  catch (e)
  {
    alert('Failed load JSON data.')
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
</script>

<style lang="scss">
@import './app';
</style>
