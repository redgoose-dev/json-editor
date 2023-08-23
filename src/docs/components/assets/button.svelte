<button
  type={type}
  disabled={disabled}
  class="button"
  class:button--color-key={color === 'key'}
  on:click={onClick}>
  <slot/>
</button>

<script>
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()
export let type = 'button'
export let disabled = false
export let color = undefined

function onClick(e)
{
  dispatch('click', { nativeEvent: e })
}
</script>

<style lang="scss">
@import 'button';
</style>