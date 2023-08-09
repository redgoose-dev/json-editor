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

{#if $visibleManageJson}
  <div
    transition:fade={{
      duration: 160,
      easing: cubicInOut,
    }}
    class="modal-manage-json">
    <Modal on:close={closeManageJson}>
      <ManageJson/>
    </Modal>
  </div>
{/if}

{#if $visibleAbout}
  <div
    transition:fade={{
      duration: 160,
      easing: cubicInOut,
    }}
    class="modal-about">
    <Modal on:close={closeAbout}>
      <About/>
    </Modal>
  </div>
{/if}

<script>
import { fade } from 'svelte/transition'
import { cubicInOut } from 'svelte/easing'
import { visiblePreview, visibleManageJson, visibleAbout } from './store/visible.js'
import { theme } from './store/service.js'
import Header from './components/header/index.svelte'
import Editor from './components/editor/index.svelte'
import Preview from './components/preview/index.svelte'
import ManageJson from './components/manage-json/index.svelte'
import About from './components/about/index.svelte'
import Modal from './components/modal-window/index.svelte'

let _editor
let _preview

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
        case 'import':
          break
        case 'export':
          break
        case 'copy-clipboard':
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
          $visiblePreview = !$visiblePreview
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

function closeManageJson()
{
  $visibleManageJson = false
}

function closeAbout()
{
  $visibleAbout = false
}
</script>

<style lang="scss">
@import './app';
</style>
