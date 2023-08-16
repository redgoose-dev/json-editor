<article class="preview">
  <header class="preview__header">
    <Icon name="code"/>
    <h1>Preview</h1>
  </header>
  <div class="preview__body scroll-area">
    <pre>{_data}</pre>
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
