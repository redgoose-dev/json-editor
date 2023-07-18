<div
  bind:innerText={value}
  contenteditable="true"
  data-placeholder={placeholder}
  class:value={type === 'value'}
  class:key={type === 'key'}
  on:keydown={onInput}/>

<script>
export let type = 'value'
export let value = ''
export let placeholder = 'empty'

function onInput(e)
{
  switch (e.keyCode)
  {
    case 13:
      if (type === 'key') return e.preventDefault()
      break
    default:
      break
  }
  if (!(e.ctrlKey || e.metaKey)) return
  switch(e.keyCode)
  {
    case 66: case 98: // ctrl+B or ctrl+b
      e.preventDefault()
      break
    case 73: case 105: // ctrl+I or ctrl+i
      e.preventDefault()
      break
    case 85: case 117: // ctrl+U or ctrl+u
      e.preventDefault()
      break
  }
}
</script>

<style lang="scss">
div {
  display: block;
  margin: -4px 0;
  padding: 4px 6px;
  min-width: var(--label-min-width, unset);
  min-height: 24px;
  outline: none;
  font-size: var(--json-editor-font-size);
  line-height: 1.42;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: hsla(0 0% 0% / 0%);
  box-shadow: 0 0 0 .5px hsla(0 0% 0% / 0%);
  transition: background-color 160ms ease-out, box-shadow 200ms ease-out;
  cursor: text;
  &.key {
    //display: flex;
  }
  &.value {}
  &:hover,
  &:focus {
    background-color: var(--json-editor-color-active);
  }
  &:focus {
    box-shadow: 0 0 0 .5px hsla(0 0% 0% / 25%);
  }
  &:empty:before {
    content: attr(data-placeholder);
    color: var(--json-editor-color-blur);
  }
}
</style>
