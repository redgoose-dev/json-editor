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
import Icon from '../assets/icon.svelte'
export let items = []

function onClickItem(e)
{
  const key = e.currentTarget.dataset.key
  console.log('onClickItem()', key)
}
</script>

<style lang="scss">
@use '../../assets/scss/mixins';

.sub-menu {
  display: grid;
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 150px;
  background: hsl(0 0% 100%);
  border-radius: 4px;
  box-shadow:
    0 4px 16px 0 hsla(0 0% 0% / 20%),
    0 0 0 1px hsl(0 0% 86.67%);
}
li {
  &:nth-child(n+2) {
    box-shadow: 0 -1px 0 hsl(0 0% 88%);
  }
  &:first-child button {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-child button {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
button {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 36px;
  margin: 0;
  padding: 0 24px 0 16px;
  text-align: left;
  box-sizing: border-box;
  border-radius: 0;
  border: none;
  background: none;
  color: var(--color-base);
  transition: background 120ms ease-out;
  cursor: pointer;
  //outline: none;
  font-size: 13px;
  line-height: 1.15;
  font-weight: 500;
  white-space: nowrap;
  --icon-size: 14px;
  --icon-color: hsl(0 0% 30%);
  &:focus-visible {
    outline: 2px solid red;
    outline-offset: -2px;
  }
  @include mixins.hover() {
    background: hsl(0 0% 94%);
  }
}
</style>