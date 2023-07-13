<em>
  {#if type === 'array'}
    {`[${count}]`}
  {:else}
    {`{${count}}`}
  {/if}
</em>

<script>
export let type = 'object' // object|array
export let count = 0
</script>

<style lang="scss">
em {
  display: block;
  //font-family: var(--json-editor-font-eng);
  color: var(--json-editor-color-blur);
  font-style: normal;
  user-select: none;
}
</style>
