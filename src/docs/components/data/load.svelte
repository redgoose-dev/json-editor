<article class="data">
  <div class="data__wrap">
    <header class="data__header">
      <h1>Load JSON Data</h1>
      <p>
        Bring the JSON data into the editor.<br/>
        Please enter the JSON formatted text in the following input field or attach a file.
      </p>
    </header>
    <form
      class="form"
      on:submit|preventDefault={onSubmit}>
      <fieldset class="source-input">
        <legend>source code field</legend>
        <textarea
          bind:value={source}
          placeholder="JSON source code"
          on:keydown={onKeydownSource}/>
        {#if error}
          <div class="help-message">
            <Icon name="alert-circle"/>
            <p>{error}</p>
          </div>
        {/if}
      </fieldset>
      <nav class="nav-submit">
        <div>
          <Button
            type="button"
            color="key"
            on:click={onClickUpload}>
            <Icon name="upload"/>
            <span>Upload JSON File</span>
          </Button>
        </div>
        <div>
          <Button
            type="button">
            <Icon name="x"/>
            <span>Close</span>
          </Button>
          <Button
            type="submit"
            color="key">
            <Icon name="check"/>
            <span>Load Data</span>
          </Button>
        </div>
      </nav>
    </form>
  </div>
</article>

<script>
import { createEventDispatcher } from 'svelte'
import Button from '../assets/button.svelte'
import Icon from '../assets/icon.svelte'

const dispatch = createEventDispatcher()
export let source = ''
let error = ''

function onKeydownSource(e)
{
  if (e.metaKey && e.key === 'Enter')
  {
    onSubmit()
  }
}

function onClickUpload()
{
  console.log('onClickUpload()')
}

function onSubmit()
{
  try
  {
    if (!source)
    {
      error = 'Please input data.'
      return
    }
    JSON.parse(source)
    error = ''
    dispatch('submit', { source })
  }
  catch (e)
  {
    error = e.message
  }
}
</script>

<style lang="scss">
@import './common';
</style>
