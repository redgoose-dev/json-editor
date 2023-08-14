<div
  class="layout"
  class:layout--preview={$visiblePreview}>
  <div class="layout__header">
    <Header on:select-menu={menuRouting}/>
  </div>
  <div class="layout__editor">
    <Editor bind:this={_editor}/>
  </div>
  {#if $visiblePreview}
    <div class="layout__preview">
      <Preview bind:this={_preview}/>
    </div>
  {/if}
</div>

{#if $visibleLoadJson}
  <div
    transition:fade={modalTransition}
    class="modal-data">
    <Modal on:close={() => { $visibleLoadJson = false }}>
      <ImportData
        bind:source={jsonSource.load}
        on:submit={onImportData}
        on:close={() => $visibleLoadJson = false}/>
    </Modal>
  </div>
{/if}

{#if $visibleSaveJson}
  <div
    transition:fade={modalTransition}
    class="modal-data">
    <Modal on:close={() => { $visibleSaveJson = false }}>
      <ExportData
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
import { theme } from './store/service.js'
import Header from './components/header/index.svelte'
import Editor from './components/editor/index.svelte'
import Preview from './components/preview/index.svelte'
import { ImportData, ExportData } from './components/data/index.js'
import About from './components/about/index.svelte'
import Modal from './components/modal-window/index.svelte'

let _editor
let _preview
let jsonSource = {
  load: '',
  save: undefined,
}
const modalTransition = { duration: 160, easing: cubicInOut }

function menuRouting(e)
{
  const { main, sub } = e.detail
  console.log('menuRouting()', main, sub)
  switch (main)
  {
    case 'data':
      switch (sub)
      {
        case 'new':
          break
        case 'load':
          jsonSource.load = ''
          $visibleLoadJson = true
          break
        case 'save':
          // TODO: Editor 컴포넌트에서 데이터를 가져오기
          jsonSource.save = {}
          $visibleSaveJson = true
          break
      }
      break
    case 'view':
      switch (sub)
      {
        case 'fold':
          break
        case 'unfold':
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

function onImportData(e)
{
  if (!confirm('Should I retrieve this data?')) return
  console.log('onImportData()', e.detail)
  $visibleLoadJson = false
  // TODO: 데이터를 객체로 변환하기
  // TODO: 객체를 Editor 컴포넌트로 교체하기
}
</script>

<style lang="scss">
@import './app';
</style>
