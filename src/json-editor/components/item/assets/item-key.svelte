<div class="item-key">
  {#if useSort}
    <button type="button" class="item-key__sort">
      <IconSort/>
    </button>
  {/if}
  <button
    type="button"
    class="item-key__type"
    on:click={onClickOpenContext}>
    <Type name={type}/>
  </button>
  {#if useFold}
    <p class="item-key__fold">
      <IconArrowFold open={fold} on:click={onClickFold}/>
    </p>
  {/if}
  {#if useLabel}
    <p class="item-key__label">
      <span contenteditable="true" bind:innerText={label}></span>
    </p>
  {/if}
  {#if useCount}
    <p class="item-key__count">
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
import Type from '../../type/index.svelte'
import IconArrowFold from '../../../assets/icons/arrow-fold.svelte'
import IconSort from '../../../assets/icons/sort.svelte'

const dispatch = createEventDispatcher()
export let type = 'object'
export let fold = false
export let count = 0
export let label = ''
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
  &__sort {
    display: block;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    box-sizing: border-box;
    outline: none;
    cursor: move;
  }
  &__type {
    display: block;
    margin: -2px;
    padding: 2px;
    box-sizing: border-box;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    &:active {
      opacity: .5;
    }
  }
  &__fold {
    margin: 0 0 0 6px;
  }
  &__label {
    margin: 0;
    min-width: 64px;
    padding: 2px 4px;
    box-shadow: 0 0 0 1px hsla(0 0% 0% / 0%);
    &:focus-within {
      box-shadow: 0 0 0 1px red;
    }
    span {
      display: block;
      outline: none;
      font-size: 14px;
      line-height: 1.15;
    }
  }
  &__count {
    display: block;
    margin: 0 0 0 2px;
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
}
</style>
