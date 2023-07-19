<div class="item-key">
  {#if useSort}
    <div class="sort">
      <IconSort/>
    </div>
  {/if}
  <button
    type="button"
    class="type"
    on:click={onClickOpenContext}>
    <Type name={type}/>
  </button>
  {#if useFold}
    <p class="fold">
      <IconArrowFold open={fold} on:click={onClickFold}/>
    </p>
  {/if}
  {#if useLabel}
    {#if labelType === 'null'}
      <Null/>
    {:else}
      <div class="label">
        <Label
          bind:value={label}
          mode={labelType}
          type={type}/>
      </div>
    {/if}
  {/if}
  {#if useCount}
    <p class="count">
      {#if type === 'array'}
        <em>{`[${count}]`}</em>
      {:else if type === 'object'}
        <em>{`{${count}}`}</em>
      {/if}
    </p>
  {/if}
</div>

<script>
import { createEventDispatcher } from 'svelte'
import Type from '../type/index.svelte'
import IconArrowFold from '../../assets/icons/arrow-fold.svelte'
import IconSort from '../../assets/icons/sort.svelte'
import Label from './label.svelte'
import Null from './null.svelte'

const dispatch = createEventDispatcher()
export let type = 'object'
export let fold = false
export let count = 0
export let label = ''
export let labelType = 'key'
export let useFold = false
export let useSort = false
export let useLabel = false
export let useCount = false

function onClickFold()
{
  dispatch('fold', !fold)
}
function onClickOpenContext()
{
  dispatch('context')
}
</script>

<style lang="scss">
@import './item-key';
</style>
