<div
  bind:this={self}
  tabindex="-1"
  class="context"
  class:is-root={isRoot}
  on:click|stopPropagation>
  <ul>
    <Item
      mode="dropdown"
      label="Change Type"
      disabled={true}>
      <div class="context">
        <ul>
          {#each chnageTypes as {key,label}}
            <Item
              mode="type"
              type={key}
              label={label}
              disabled={key === type}
              on:select={() => onClickItem('change-type', key)}/>
          {/each}
        </ul>
      </div>
    </Item>
    {#if useItemInsert}
      <Item
        mode="dropdown"
        label="Insert Item"
        disabled={true}>
        <div class="context">
          <ul>
            {#each types as {key,label}}
              <Item
                mode="type"
                type={key}
                label={label}
                on:select={() => onClickItem('insert', key)}/>
            {/each}
          </ul>
        </div>
      </Item>
    {/if}
    {#if useItemDuplicate}
      <Item
        label="Duplicate"
        on:select={() => onClickItem('duplicate')}/>
    {/if}
    {#if useItemRemove}
      <Item
        mode="remove"
        label="Remove"
        on:select={() => onClickItem('remove')}/>
    {/if}
  </ul>
</div>

<script>
import { createEventDispatcher, onMount, onDestroy } from 'svelte'
import IconArrowRight from '../../assets/icons/arrow-right.svelte'
import Type from '../type/index.svelte'
import Item from './item.svelte'

const dispatch = createEventDispatcher()
export let type
export let isRoot = false
let self

const types = [
  { key: 'object', label: 'Object' },
  { key: 'array', label: 'Array' },
  { key: 'string', label: 'String' },
  { key: 'number', label: 'Number' },
  { key: 'boolean', label: 'Boolean' },
  { key: 'null', label: 'Null' },
]

$: useItemInsert = (() => {
  if (type === 'object' || type === 'array') return true
  return false
})()
$: useItemDuplicate = (() => {
  if (isRoot) return false
  return true
})()
$: useItemRemove = (() => {
  if (isRoot) return false
  return true
})()
$: chnageTypes = (() => {
  return isRoot ? Object.assign([], types).splice(0,2) : types
})()

function onClick(e)
{
  dispatch('close')
}
function onKeyup(e)
{
  if (e.code === 'Escape') return dispatch('close')
}

function onClickItem(action, type)
{
  dispatch('select', { action, type })
}

onMount(() => {
  setTimeout(() => {
    window.addEventListener('click', onClick)
    window.addEventListener('keyup', onKeyup)
    self.focus()
  }, 60)
})
onDestroy(() => {
  window.removeEventListener('click', onClick)
  window.removeEventListener('keyup', onKeyup)
})
</script>

<style lang="scss">
@import 'index';
</style>
