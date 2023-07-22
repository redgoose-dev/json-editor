<div
  bind:this={self}
  tabindex="-1"
  class="context"
  on:click|stopPropagation>
  <ul>
    <li>
      <button type="button">
        <span>Change type</span>
        <i><IconArrowRight/></i>
      </button>
    </li>
    <li>
      <button type="button">
        <span>Duplicate item</span>
      </button>
    </li>
    <li>
      <button type="button">
        <span>Remove item</span>
      </button>
    </li>
  </ul>
</div>

<script>
import { createEventDispatcher, onMount, onDestroy } from 'svelte'
import IconArrowRight from '../../assets/icons/arrow-right.svelte'

const dispatch = createEventDispatcher()
let self

function onClick(e)
{
  dispatch('close')
}
function onKeyup(e)
{
  if (e.code === 'Escape') return dispatch('close')
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
.context {
  --context-border-radius: 4px;
  position: absolute;
  left: 20px;
  margin: 4px 0 0 0;
  z-index: 2;
  background: #fff;
  border-radius: var(--context-border-radius);
  box-shadow: 0 4px 32px 0 hsla(0 0% 0% / 10%), 0 2px 8px 0 hsla(0 0% 0% / 20%);
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  &:not(:first-child) {
    border-top: 1px solid hsl(0 0% 88%);
  }
}
button {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 0;
  padding: 8px 12px;
  min-width: 150px;
  text-align: left;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 0;
  transition: background-color 120ms ease-out;
  &:first-child {
    border-top-left-radius: var(--context-border-radius);
    border-top-right-radius: var(--context-border-radius);
  }
  &:last-child {
    border-bottom-left-radius: var(--context-border-radius);
    border-bottom-right-radius: var(--context-border-radius);
  }
  &:hover,
  &:active {
    background-color: hsl(0 0% 96%);
  }
  span {
    pointer-events: none;
    user-select: none;
  }
  i {
    display: block;
    margin: 0 -4px 0 0;
    pointer-events: none;
  }
}
</style>
