<article class="preview">
  <header class="preview__header">
    <Icon name="code"/>
    <h1>Preview</h1>
  </header>
  <div class="preview__body">
    <pre>{_data}</pre>
  </div>
</article>

<script>
import Icon from '../assets/icon.svelte'

export let data = {}

$: _data = JSON.stringify(data, null, 2)
</script>

<style lang="scss">
@import './index';
</style>
