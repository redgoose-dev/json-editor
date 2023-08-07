<header>
  <h1>JsonEditor #dev</h1>
  <nav>
    <button
      type="button"
      disabled={mode === 'script'}
      on:click={() => onClickPage('script')}>
      script
    </button>
    <button
      type="button"
      disabled={mode === 'component'}
      on:click={() => onClickPage('component')}>
      component
    </button>
  </nav>
</header>

<svelte:component this="{pages[mode].component}"/>

<script>
import Component from './pages/component.svelte'
import Script from './pages/script.svelte'

const uri = new URLSearchParams(window.location.search)
const pages = {
  component: { label: 'Component', component: Component },
  script: { label: 'Script', component: Script },
}
let mode = Object.keys(pages).indexOf(uri.get('page')) > -1 ? uri.get('page') : 'script'

function onClickPage(value)
{
  mode = value
  history.replaceState({}, '', `/?page=${mode}`)
}
</script>

<style lang="scss">
header {
  --padding: calc(var(--dev-padding) * -1);
  display: flex;
  margin: var(--padding) var(--padding) 0;
  padding: 12px var(--dev-padding);
  background: var(--dev-color-key);
  box-sizing: border-box;
  h1 {
    flex: 1;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -1.25px;
    line-height: 1.05;
    color: hsl(0 0% 100%);
    user-select: none;
  }
  nav {
    display: flex;
    align-items: center;
    gap: 2px;
    margin: 0;
    button {
      display: block;
      padding: 4px 6px;
      cursor: pointer;
      border-radius: 2px;
      border: none;
      background: transparent;
      font-size: 13px;
      font-weight: 600;
      line-height: 1.15;
      color: hsl(0 0% 100%);
      opacity: 1;
      user-select: none;
      &:disabled {
        cursor: default;
        text-decoration: underline;
      }
    }
  }
}
</style>
