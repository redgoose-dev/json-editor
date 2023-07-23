<svelte:element
  this={!isRoot ? 'li' : 'div'}
  class="item"
  data-type={type}>
  <dl>
    <dt>
      {#if type === 'object' || type === 'array'}
        <ItemKey
          type={type}
          fold={fold}
          count={children.length}
          bind:label={keyName}
          labelType="key"
          useFold={true}
          useLabel={parentType === 'object'}
          useCount={true}
          useSort={!isRoot}
          openContext={!!context}
          on:fold={onChangeFold}
          on:context={onOpenContext}/>
      {:else if (type === 'string' || type === 'number' || type === 'boolean' || type === 'null')}
        <ItemKey
          type={type}
          bind:label={keyName}
          labelType={parentType === 'array' ? '' : 'key'}
          useFold={false}
          useLabel={parentType !== 'array'}
          useCount={false}
          useSort={true}
          openContext={!!context}
          on:fold={onChangeFold}
          on:context={onOpenContext}/>
      {/if}
      {#if context}
        <Context
          isRoot={isRoot}
          type={type}
          on:close={onCloseContext}
          on:select={onSelectContextItem}/>
      {/if}
    </dt>
    {#if useValue}
      <dd>
        {#if type === 'null'}
          <Null/>
        {:else if type === 'boolean'}
          <Switch bind:value={data}/>
        {:else}
          <Label
            bind:value={data}
            mode="value"
            type={type}/>
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
          bind:data={value}/>
      {/each}
    </ul>
  {/if}
</svelte:element>

<script>
import { tick } from 'svelte'
import { getTypeName, pureObject } from '../../libs/object.js'
import { newItemValue } from '../../libs/assets.js'
import ItemKey from './item-key.svelte'
import Label from './label.svelte'
import Item from './index.svelte'
import Context from '../context/index.svelte'
import Switch from './switch.svelte'
import Null from './null.svelte'

export let root
export let data
export let parentType
export let keyName = ''
let isRoot = !parentType
let fold = true
let context
let type = getTypeName(data)
$: children = createChildren(data, type)
$: useValue = setUseValue(parentType, type)

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

function setUseValue(parentType, type)
{
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

function onOpenContext(e)
{
  const { element } = e.detail
  if (context !== undefined)
  {
    onCloseContext()
    return
  }
  context = {}
}
function onSelectContextItem(e)
{
  switch (e.detail.action)
  {
    case 'change-type':
      changeType(e.detail.type)
      break
    case 'insert':
      insertItem(e.detail.type)
      break
    case 'duplicate':
      console.log('onSelectContextItem()', e.detail.action)
      break
    case 'remove':
      console.log('onSelectContextItem()', e.detail.action)
      break
  }
  onCloseContext()
}
function onCloseContext()
{
  context = undefined
}

function changeType(newType)
{
  switch (newType)
  {
    case 'object':
      switch (type)
      {
        case 'array':
          data = { ...data }
          break
        default:
          data = { 'key': data }
          break
      }
      break
    case 'array':
      switch (type)
      {
        case 'object':
          data = Object.values(data)
          break
        default:
          data = [ data ]
          break
      }
      break
    case 'string':
      data = String(data)
      break
    case 'number':
      data = isNaN(Number(data)) ? 0 : Number(data)
      break
    case 'boolean':
      data = Boolean(data)
      break
    case 'null':
      data = null
      break
  }
  type = newType
  tick().then()
}

function insertItem(targetType)
{
  let newItem = newItemValue(targetType)
  switch (type)
  {
    case 'object':
      data = { ...data, ...{ '': newItem } }
      tick()
      break
    case 'array':
      data = [ ...data, newItem ]
      break
  }
  tick().then()
}

function onChangeValue(e)
{
  root.dispatchEvent(new CustomEvent('json-editor', {
    detail: {
      foo: 'bar'
    },
  }))
}
</script>

<style lang="scss">
@import 'index';
</style>
