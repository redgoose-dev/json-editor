<article
  class="preview"
  class:preview--fold={$foldPreview}>
  <div class="preview__wrap">
    <header class="preview__header">
      <h1>
        <Icon name="code"/>
        <span>Preview</span>
      </h1>
    </header>
    {#if !$foldPreview}
      <div class="preview__body scroll-area">
        <pre>{_data}</pre>
      </div>
    {/if}
  </div>
</article>

<script>
import { source } from '../../store/service.js'
import { foldPreview } from '../../store/visible.js'
import Icon from '../assets/icon.svelte'

$: _data = JSON.stringify($source, null, 2)
</script>

<style lang="scss">
@import './index';
</style>
