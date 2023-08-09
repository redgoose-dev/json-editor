{#if name}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class={`icon icon--${name}`}>
    <use href={`${icons}#${name}`}/>
  </svg>
{/if}

<script>
import icons from 'feather-icons/dist/feather-sprite.svg'
export let name
</script>

<style>
svg {
  display: block;
  margin: var(--icon-margin, 0);
  color: var(--icon-color, var(--color-base));
  width: var(--icon-size, 24px);
  height: var(--icon-size, 24px);
  stroke-width: var(--icon-stroke, 2);
}
</style>