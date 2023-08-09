<div class="modal" on:click={onClickClose}>
  <div class="modal__wrap" on:click|stopPropagation>
    <slot/>
    <button type="button" class="modal__close" on:click={onClickClose}>
      <Icon name="x"/>
    </button>
  </div>
</div>

<script>
import { createEventDispatcher } from 'svelte'
import Icon from '../assets/icon.svelte'

const dispatch = createEventDispatcher()

function onClickClose()
{
  dispatch('close')
}
</script>

<style lang="scss">
@use './index';
</style>
