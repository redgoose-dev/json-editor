<svelte:options customElement={{
  tag: null,
  shadow: 'none',
  props: {},
}}/>

<div class="json-editor">
  <Body/>
</div>

<script>
import Body from './components/body.svelte'
</script>

<style lang="scss">
.json-editor {
  --json-editor-font-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  --json-editor-font-eng: 'Helvetica Neue', sans-serif;
  --json-editor-color-base: hsl(0 0% 13%);
  --json-editor-color-blur: hsl(0 0% 67%);
  --json-editor-color-object: hsl(174 66% 39%);
  --json-editor-color-array: hsl(191 75% 53%);
  --json-editor-color-string: hsl(5 87% 59%);
  --json-editor-color-number: hsl(33 89% 55%);
  --json-editor-color-boolean: hsl(45 89% 54%);

  font-family: var(--json-editor-font-base);
  color: var(--json-editor-color-base);
  font-size: 16px;
  line-height: 1.15;
}
</style>
