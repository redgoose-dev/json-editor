<div
  bind:innerText={value}
  contenteditable="true"
  data-placeholder={placeholder}
  class:value={mode === 'value'}
  class:key={mode === 'key'}
  on:keydown={onKeydown}
  on:keypress={onKeypress}/>

<script>
export let mode = 'value'
export let value = ''
export let placeholder = 'empty'
export let type = ''

function onKeydown(e)
{
  // enter
  if (mode === 'key' && e.keyCode === 13)
  {
    return e.preventDefault()
  }
  // shortcut
  if (e.ctrlKey || e.metaKey)
  {
    switch(e.keyCode)
    {
      // ctrl+b
      case 66:
      case 98:
        e.preventDefault()
        break
      // ctrl+i
      case 73:
      case 105:
        e.preventDefault()
        break
      // ctrl+u
      case 85:
      case 117:
        e.preventDefault()
        break
    }
  }
}
function onKeypress(e)
{
  if (type === 'number')
  {
    if (e.code === 'Period')
    {
      if (value.indexOf('.') > -1) return e.preventDefault()
      return
    }
    if (isNaN(String.fromCharCode(e.which))) return e.preventDefault()
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
    display: flex;
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
