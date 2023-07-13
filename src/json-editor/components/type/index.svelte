<i
  class:object={name === 'object'}
  class:array={name === 'array'}
  class:string={name === 'string'}
  class:number={name === 'number'}
  class:boolean={name === 'boolean'}>
  <Icon name={name}/>
</i>

<script>
import Icon from './icon.svelte'
export let name = 'object'
</script>

<style lang="scss">
i {
  display: grid;
  width: var(--type-size, 24px);
  height: var(--type-size, 24px);
  place-content: center;
  box-sizing: border-box;
  border-radius: 4px;
  --type-icon-color: hsl(0 0% 100%);
  &.object {
    background: var(--json-editor-color-object);
  }
  &.array {
    background: var(--json-editor-color-array);
  }
  &.string {
    background: var(--json-editor-color-string);
  }
  &.number {
    background: var(--json-editor-color-number);
  }
  &.boolean {
    background: var(--json-editor-color-boolean);
  }
}
</style>
