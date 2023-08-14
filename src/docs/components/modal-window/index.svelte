<div class="modal" on:click={close}>
  <div class="modal__wrap" on:click|stopPropagation>
    <slot/>
    <button type="button" class="modal__close" on:click={close}>
      <Icon name="x"/>
    </button>
  </div>
</div>

<script>
import { createEventDispatcher, onMount, onDestroy } from 'svelte'
import Icon from '../assets/icon.svelte'

const dispatch = createEventDispatcher()

function close()
{
  dispatch('close')
}

function onKeyup(e)
{
  if (e.key === 'Escape') close()
}

onMount(() => {
  addEventListener('keyup', onKeyup)
})
onDestroy(() => {
  removeEventListener('keyup', onKeyup)
})
</script>

<style lang="scss">
@use './index';
</style>
