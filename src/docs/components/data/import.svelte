<article class="data">
  <div class="data__wrap">
    <header class="data__header">
      <h1>Import JSON Data</h1>
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
          class="scroll-area"
          on:keydown={onKeydownSource}/>
        {#if error}
          <div class="help-message">
            <Icon name="alert-circle"/>
            <p>{error}</p>
          </div>
        {/if}
      </fieldset>
      <nav class="nav-submit">
        <div class="json-uploader">
          <input
            bind:this={_jsonFileUpload}
            type="file"
            accept="application/json"
            class="json-uploader__file"
            on:change={onChangeJsonUploader}>
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
            type="button"
            on:click={() => dispatch('close')}>
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
let _jsonFileUpload
let error = ''
export let source = ''

function onKeydownSource(e)
{
  if (e.metaKey && e.key === 'Enter') onSubmit()
}

function onClickUpload()
{
  _jsonFileUpload.click()
}

function onChangeJsonUploader(e)
{
  const target = e.target
  const file = e.target.files[0]
  if (!(file && file.type === 'application/json'))
  {
    alert('The file is not a valid JSON.')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    try
    {
      const jsonCode = String(e.target.result)
      JSON.parse(jsonCode)
      source = jsonCode
    }
    catch (e)
    {
      alert('The data is not valid JSON.')
    }
    target.value = ''
  }
  reader.onerror = (e) => {
    alert('File read error.')
    target.value = ''
  }
  reader.readAsText(file)
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
    dispatch('submit', { source })
    error = ''
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
