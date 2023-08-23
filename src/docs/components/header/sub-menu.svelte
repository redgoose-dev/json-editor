<menu class="sub-menu">
  {#each items as { key, label, icon, active, disabled }}
    <li>
      <button
        type="button"
        data-key={key}
        disabled={disabled}
        class:active={active}
        on:click={onClickItem}>
        {#if icon}
          <Icon name={icon}/>
        {/if}
        {label}
      </button>
    </li>
  {/each}
</menu>

<script>
import { createEventDispatcher } from 'svelte'
import Icon from '../assets/icon.svelte'

const dispatch = createEventDispatcher()
export let items = []

function onClickItem(e)
{
  const key = e.currentTarget.dataset.key
  e.currentTarget.blur()
  dispatch('select', { key })
}
</script>

<style lang="scss">
@import './sub-menu';
</style>
