<li class="item">
  {#if type === 'object'}
    <ItemKey
      type="object"
      fold={fold}
      count={children.length}
      label={keyName}
      useFold={true}
      useLabel={parentType === 'object'}
      useCount={true}
      useSort={true}
      on:fold={onChangeFold}
      on:context={onOpenContext}/>
  {:else if type === 'array'}
    <ItemKey
      type="array"
      fold={fold}
      count={children.length}
      label={keyName}
      useFold={true}
      useLabel={parentType === 'object'}
      useCount={true}
      useSort={true}
      on:fold={onChangeFold}
      on:context={onOpenContext}/>
  {:else if (type === 'string' || type === 'number' || type === 'boolean')}
    <ItemKey
      type={type}
      label={data}
      useFold={false}
      useLabel={true}
      useCount={false}
      useSort={true}
      on:fold={onChangeFold}
      on:context={onOpenContext}/>
  {/if}
  {#if children?.length > 0}
    <ul
      class="tree"
      class:show={fold}>
      {#each children as { key, value }}
        <Item
          root={root}
          parentType={type}
          keyName={key}
          data={value}/>
      {/each}
    </ul>
  {/if}
</li>

<script>
import { onMount, onDestroy } from 'svelte'
import { getTypeName } from '../../libs/object.js'
import ItemKey from './assets/item-key.svelte'
import Item from './index.svelte'

export let root
export let data
export let parentType = 'object'
export let keyName = ''
let type
let fold = true

$: type = getTypeName(data)
$: children = createChildren(data, type)

function createChildren(src, type)
{
  switch (type)
  {
    case 'object':
      return Object.entries(src).map(([ key, value ]) => ({
        key,
        value,
      }))
    case 'array':
      return src.map((value, key) => ({
        key,
        value,
      }))
    default:
      return []
  }
}

function onChangeFold({ detail })
{
  fold = detail
}

function onOpenContext()
{
  console.log('onClickOpenContext()')
}

function onChangeValue(e)
{
  root.dispatchEvent(new CustomEvent('json-editor', {
    detail: {
      foo: 'bar'
    },
  }))
}

onMount(() => {
  console.log(children)
})
</script>

<style lang="scss">
@use '../../assets/mixins';
.item {}
.tree {
  @include mixins.tree()
}
</style>
