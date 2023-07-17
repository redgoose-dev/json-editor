<span
  bind:textContent={value}
  contenteditable="true"
  data-placeholder={placeholder}
  on:keydown={onInput}/>

<script>
export let value = ''
export let placeholder = 'empty'

function onInput(e)
{
  if (e.ctrlKey || e.metaKey)
  {
    switch(e.keyCode)
    {
      //ctrl+B or ctrl+b
      case 66:
      case 98:
        e.preventDefault()
        break
      //ctrl+I or ctrl+i
      case 73:
      case 105:
        e.preventDefault()
        break
      //ctrl+U or ctrl+u
      case 85:
      case 117:
        e.preventDefault()
        break
    }
  }
}
</script>

<style lang="scss">
span {
  display: flex;
  align-items: center;
  margin: -4px 0;
  padding: 4px 6px;
  min-width: var(--label-min-width, unset);
  min-height: 24px;
  outline: none;
  font-size: 13px;
  line-height: 1.42;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: hsla(0 0% 0% / 0%);
  box-shadow: 0 0 0 .5px hsla(0 0% 0% / 0%);
  transition: background-color 160ms ease-out, box-shadow 200ms ease-out;
  cursor: text;
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
