<header>
  <h1>JsonEditor #dev</h1>
</header>

<Editor/>

<script>
import Editor from './editor.svelte'
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
}
</style>
