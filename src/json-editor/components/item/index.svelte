<svelte:element
  this={!isRoot ? 'li' : 'div'}
  class="item"
  data-type={type}>
  <dl>
    <dt>
      {#if type === 'object'}
        <ItemKey
          type="object"
          fold={fold}
          count={children.length}
          label={keyName}
          labelType="key"
          useFold={true}
          useLabel={parentType === 'object'}
          useCount={true}
          useSort={!isRoot}
          on:fold={onChangeFold}
          on:context={onOpenContext}/>
      {:else if type === 'array'}
        <ItemKey
          type="array"
          fold={fold}
          count={children.length}
          label={keyName}
          labelType="key"
          useFold={true}
          useLabel={parentType === 'object'}
          useCount={true}
          useSort={!isRoot}
          on:fold={onChangeFold}
          on:context={onOpenContext}/>
      {:else if (type === 'string' || type === 'number' || type === 'boolean' || type === 'null')}
        {#if parentType === 'array'}
          <ItemKey
            type={type}
            label={data}
            labelType={type === 'null' ? 'null' : 'value'}
            useFold={false}
            useLabel={true}
            useCount={false}
            useSort={true}
            on:fold={onChangeFold}
            on:context={onOpenContext}/>
        {:else}
          <ItemKey
            type={type}
            label={keyName}
            labelType="key"
            useFold={false}
            useLabel={true}
            useCount={false}
            useSort={true}
            on:fold={onChangeFold}
            on:context={onOpenContext}/>
        {/if}
      {/if}
    </dt>
    {#if useValue}
      <dd>
        {#if type === 'null'}
          <Null/>
        {:else}
          <Label type="value" bind:value={data}/>
        {/if}
      </dd>
    {/if}
  </dl>
  {#if children?.length > 0}
    <ul class:show={fold}>
      {#each children as { key, value }}
        <Item
          root={root}
          parentType={type}
          keyName={key}
          data={value}/>
      {/each}
    </ul>
  {/if}
</svelte:element>

<script>
import { getTypeName } from '../../libs/object.js'
import ItemKey from './item-key.svelte'
import Label from './label.svelte'
import Item from './index.svelte'
import Context from '../context/index.svelte'
import Null from './null.svelte'

export let root
export let data
export let parentType
export let keyName = ''
let isRoot = !parentType
let fold = true
let type = getTypeName(data)
let children = createChildren(data, type)
let useValue = setUseValue(parentType, type)

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

function setUseValue(parentType, type)
{
  if (parentType !== 'object') return false
  switch (type)
  {
    case 'string':
    case 'number':
    case 'boolean':
    case 'null':
      return true
    default:
      return false
  }
}
</script>

<style lang="scss">
dl {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0 6px;
  dt {
    box-sizing: border-box;
  }
  dd {
    display: flex;
    align-items: center;
    gap: 0 3px;
    margin: 0;
    box-sizing: border-box;
    font-size: var(--json-editor-font-size);
    --label-min-width: 72px;
    &:before {
      content: ':';
    }
  }
}
ul {
  position: relative;
  display: none;
  margin: 6px 0 0;
  padding: 0 0 0 30px;
  list-style: none;
  gap: 6px 0;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 11px;
    top: 4px;
    bottom: 11px;
    width: 6px;
    border-width: 0 0 1px 1px;
    border-style: dashed;
    border-color: hsla(0 0% 72% / 100%);
    border-bottom-left-radius: 4px;
  }
  &.show {
    display: grid;
  }
}
</style>
