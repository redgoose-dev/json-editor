<li
  class:dropdown={mode === 'dropdown'}
  class:remove={mode === 'remove'}
  class:type={mode === 'type'}>
  <button
    type="button"
    disabled={disabled}
    on:click={() => dispatch('select')}>
    {#if type}
      <span class="icon-type"><Type name={type}/></span>
    {/if}
    <em class="label">{label}</em>
    {#if mode === 'dropdown'}
      <span class="arrow"><IconArrowRight/></span>
    {/if}
  </button>
  <slot/>
</li>

<script>
import { createEventDispatcher } from 'svelte'
import IconArrowRight from '../../assets/icons/arrow-right.svelte'
import Type from '../type/index.svelte'

const dispatch = createEventDispatcher()
export let mode = undefined
export let type = undefined
export let label = ''
export let disabled = false
</script>

<style lang="scss">
@import 'item';
</style>
