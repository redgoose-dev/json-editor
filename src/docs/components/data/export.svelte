<article class="data">
  <div class="data__wrap">
    <header class="data__header">
      <h1>{$_language.exportTitle}</h1>
      <p>{@html $_language.exportDescription}</p>
    </header>
    <div class="source-result scroll-area" on:click={onClickSource}>
      <pre>{_source}</pre>
    </div>
    <nav class="nav-submit">
      <div>
        <label class="select-code-style">
          <select bind:value={style}>
            <option value="2space">2 Space</option>
            <option value="4space">4 Space</option>
            <option value="tab">Tab</option>
            <option value="minify">Minify</option>
          </select>
          <i><Icon name="chevron-down"/></i>
        </label>
      </div>
      <div>
        <Button
          type="button"
          on:click={() => dispatch('close')}>
          <Icon name="x"/>
          <span>{$_language.close}</span>
        </Button>
        <Button
          type="button"
          color="key"
          on:click={onClickSaveFile}>
          <Icon name="save"/>
          <span>{$_language.exportSaveFile}</span>
        </Button>
      </div>
    </nav>
  </div>
</article>

<script>
import { createEventDispatcher } from 'svelte'
import { _language } from '../../store/service.js'
import { selectText, saveFileText, dateFormat } from '../../libs/util.js'
import Button from '../assets/button.svelte'
import Icon from '../assets/icon.svelte'

const dispatch = createEventDispatcher()
export let source = { foo: 'bar' }
let style = '2space'

$: _source = renderSource(source, style)

function renderSource(source, style)
{
  switch (style)
  {
    case '2space':
      return JSON.stringify(source, null, 2)
    case '4space':
      return JSON.stringify(source, null, 4)
    case 'tab':
      return JSON.stringify(source, null, '\t')
    case 'minify':
      return JSON.stringify(source, null)
  }
}

function onClickSource(e)
{
  selectText(e.currentTarget.children[0])
}

function onClickSaveFile()
{
  if (!confirm('Do you really want to download this data as a file?')) return
  saveFileText(_source, `data-${dateFormat(new Date(), '{yyyy}{MM}{dd}-{hh}{mm}{ss}')}.json`)
}
</script>

<style lang="scss">
@import './common';
</style>
