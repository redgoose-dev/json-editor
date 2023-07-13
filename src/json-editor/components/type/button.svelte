<button type="button" on:click={onClickOpenContext}>
  <slot/>
</button>

<script>
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()

function onClickOpenContext()
{
  dispatch('click')
}
</script>

<style lang="scss">
button {
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  border-radius: 0;
  box-sizing: border-box;
  cursor: pointer;
  &:active {
    opacity: .5;
  }
}
</style>
