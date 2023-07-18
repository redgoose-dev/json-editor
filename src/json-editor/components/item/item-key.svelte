<div class="item-key">
  {#if useSort}
    <button type="button" class="sort">
      <IconSort/>
    </button>
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
        <Label type={labelType} bind:value={label}/>
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
.item-key {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 6px;
}
.sort {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-sizing: border-box;
  outline: none;
  cursor: move;
}
.fold {
  margin: 0 0 0 4px;
}
.type {
  display: block;
  margin: -2px;
  padding: 2px;
  box-sizing: border-box;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  transition: opacity 120ms ease-out;
  &:active {
    opacity: .5;
  }
}
.label {
  --label-min-width: 42px;
}
.count {
  display: block;
  margin: 0;
  pointer-events: none;
  em {
    display: block;
    //font-family: var(--json-editor-font-eng);
    color: var(--json-editor-color-blur);
    font-style: normal;
    user-select: none;
    font-size: 14px;
  }
}
</style>
