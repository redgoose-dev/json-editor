<svelte:options customElement={{
  tag: null,
  shadow: 'none',
  props: {
    data: { reflect: true, type: 'String', attribute: 'data' },
  },
}}/>

<div bind:this={root} class="json-editor">
  {#if error}
    <div>.error</div>
  {:else}
    <div class="item-root">
      <ItemKey
        type={type}
        fold={fold}
        count={children?.length || 0}
        useFold={true}
        useLabel={false}
        useCount={true}
        useSort={false}
        on:fold={onChangeFold}
        on:context={onOpenContext}/>
    </div>
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
  {/if}
</div>

<script>
import { onMount, onDestroy } from 'svelte'
import { getTypeName } from './libs/object.js'
import ItemKey from './components/item/assets/item-key.svelte'
import Item from './components/item/index.svelte'

export let data
let root
let fold = true
let type
let children
let error = undefined

$: {
  try
  {
    // convert data string to object
    if (typeof data === 'string') data = JSON.parse(data)
    // set type root item
    type = getTypeName(data)
    // set children items
    switch (type)
    {
      case 'object':
        children = Object.entries(data).map(([ key, value ]) => ({
          key,
          value,
        }))
        break
      case 'array':
        children = data.map((value, key) => ({
          key,
          value,
        }))
        break
    }
  }
  catch (e)
  {
    // TODO: ERROR
    console.error('ERROR =>', e)
    error = {
      message: e.message,
    }
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
function onRootEvent({ detail })
{
  const { foo } = detail
  console.log('onRootEvent', detail, foo)
}

onMount(() => {
  root.addEventListener('json-editor', onRootEvent)
})
onDestroy(() => {
  // TODO
  console.log('on destroy json-editor')
  root.removeEventListener('json-editor', onRootEvent)
})
</script>

<style lang="scss">
@import './index';
</style>
