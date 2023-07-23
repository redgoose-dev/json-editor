<button
  type="button"
  class:on={_value === 'true'}
  class:off={_value === 'false'}
  on:click={() => { value = !value }}>
  <span><i>{_value}</i></span>
</button>

<script>
export let value
$: _value = value.toString()
</script>

<style lang="scss">
button {
  --switch-width: 36px;
  --switch-height: 18px;
  --switch-offset: 3px;
  --switch-speed: 100ms;
  --switch-unit-size: calc(var(--switch-height) - (var(--switch-offset) * 2));
  display: block;
  margin: 0 0 0 6px;
  padding: 2px 0;
  background: none;
  border: none;
  font-size: 0;
  cursor: pointer;
  &.off {
    --switch-unit-x: 0;
  }
  &.on {
    --switch-unit-x: calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size));
    i {
      background-color: var(--json-editor-color-object);
    }
  }
  &:active {
    span {
      box-shadow: inset 0 0 0 1px var(--json-editor-color-active);
    }
    &.off i {
      width: calc(var(--switch-unit-size) + 6px);
    }
    &.on i {
      width: calc(var(--switch-unit-size) + 6px);
      transform: translateX(calc(var(--switch-width) - (var(--switch-offset) * 2) - var(--switch-unit-size) - 6px));
    }
  }
  &:focus-visible {
    outline: none;
    span {
      outline: 2px solid var(--json-editor-color-focus);
      outline-offset: 1px;
    }
  }
}
span {
  display: block;
  position: relative;
  padding: var(--switch-offset);
  width: var(--switch-width);
  height: var(--switch-height);
  border-radius: calc(var(--switch-height) * .5);
  box-shadow: inset 0 0 0 1px var(--json-editor-color-blur);
  transition: box-shadow 160ms ease-out;
  box-sizing: border-box;
}
i {
  display: block;
  width: var(--switch-unit-size);
  height: var(--switch-unit-size);
  background-color: var(--json-editor-color-blur);
  border-radius: var(--switch-unit-size);
  pointer-events: none;
  transform: translateX(var(--switch-unit-x));
  transition:
    transform var(--switch-speed) ease-out,
    width var(--switch-speed) ease-out,
    background-color 240ms ease-out;
}
</style>
