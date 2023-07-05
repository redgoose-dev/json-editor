<svelte:options
  customElement={{
    tag: null,
    shadow: 'none',
    props: {},
  }}/>

<div class="foo">
json-editor component123123 => {foo}
</div>

<script>
export let foo = ''
</script>

<style lang="scss">
.foo {
  font-size: 36px;
  font-weight: 700;
  color: red;
}
</style>