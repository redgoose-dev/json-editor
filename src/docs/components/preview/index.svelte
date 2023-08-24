<article class="preview">
  <div class="preview__wrap">
    <header class="preview__header">
      <h1>
        <Icon name="code"/>
        <span>Preview</span>
      </h1>
    </header>
    <div class="preview__body scroll-area">
      <pre>{_data}</pre>
    </div>
  </div>
</article>

<script>
import { source } from '../../store/service.js'
import Icon from '../assets/icon.svelte'

$: _data = JSON.stringify($source, null, 2)
</script>

<style lang="scss">
@import './index';
</style>
