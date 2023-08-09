<div class="layout">
  <div class="layout__header">
    <Header/>
  </div>
  <div class="layout__editor">
    <Editor/>
  </div>
  <div class="layout__preview">
    <Preview/>
  </div>
</div>

<script>
import Header from './components/header/index.svelte'
import Editor from './components/editor/index.svelte'
import Preview from './components/preview/index.svelte'
</script>

<style lang="scss">
@import './app';
</style>
