<article class="manage-json">
  <header class="manage-json__header">
    <h1>Load JSON Data</h1>
    <p>
      Bring the JSON data into the editor. Please enter the JSON formatted text in the following input field or attach a file.
    </p>
  </header>
  <form
    class="manage-json__form"
    on:submit|stopPropagation>
    <fieldset class="manage-json__source">
      <legend>source code field</legend>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </fieldset>
    <nav class="manage-json__nav">
      <div>
        <button type="button">
          Upload JSON File
        </button>
      </div>
      <div>
        <button type="button">
          Close
        </button>
        <button type="submit">
          Apply
        </button>
      </div>
    </nav>
  </form>
</article>

<script>
//
</script>

<style lang="scss">
@import './index';
</style>
