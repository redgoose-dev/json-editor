<button type="button" on:click={onClickButton}>
  <svg
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class:open={open}>
    <g transform="rotate(-90, 10, 10)">
      <path d="M7 9L10 12L13 9" fill="currentColor"/>
      <path d="M7 9L10 12L13 9H7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </svg>
</button>

<script>
import { createEventDispatcher } from 'svelte'

const dispatch = createEventDispatcher()
export let open = false

function onClickButton()
{
  dispatch('click')
}
</script>

<style lang="scss">
button {
  display: block;
  width: 32px;
  height: 32px;
  margin: -8px -4px -8px 2px;
  padding: 0;
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  &:active {
    opacity: .5;
  }
}
svg {
  display: block;
  margin: 0 auto;
  width: var(--fold-arrow-size, 20px);
  rotate: 0;
  box-sizing: border-box;
  transition: rotate, 160ms ease-out;
  &.open {
    rotate: 90deg;
  }
}
</style>
