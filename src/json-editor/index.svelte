<svelte:options customElement={{
  tag: null,
  shadow: 'open',
  props: {
    data: { reflect: true, type: 'String', attribute: 'data' },
  },
}}/>

<div bind:this={root} class="json-editor">
  {#if error}
    <div>.error</div>
  {:else if _data}
    <Item
      root={root}
      parentType={undefined}
      keyName={undefined}
      bind:data={_data}/>
  {/if}
</div>
<pre class="preview">{JSON.stringify(_data, null, 2)}</pre>

<script>
import { onMount, onDestroy, tick } from 'svelte'
import { getTypeName, pureObject } from './libs/object.js'
import Item from './components/item/index.svelte'

export let data
let root
let _data
let _type
let children
let error = undefined

$: updateData(data)

async function updateData(src)
{
  try
  {
    _data = undefined
    await tick()
    // convert data string to object
    _data = (typeof src === 'string') ? JSON.parse(src) : pureObject(src)
    // set type root item
    _type = getTypeName(_data)
    // set children items
    switch (_type)
    {
      case 'object':
        children = Object.entries(_data).map(([ key, value ]) => ({
          key,
          value,
        }))
        break
      case 'array':
        children = _data.map((value, key) => ({
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
    _data = undefined
    error = {
      message: e.message,
    }
  }
}
function onRootEvent({ detail })
{
  // TODO: 외부 이벤트
  const { foo } = detail
  console.log('onRootEvent', detail, foo)
}

onMount(() => {
  root.addEventListener('json-editor', onRootEvent)
})
onDestroy(() => {
  // TODO: 엘리먼트가 없어질때 호출
  console.log('on destroy json-editor')
  root.removeEventListener('json-editor', onRootEvent)
})
</script>

<style lang="scss">
@import './index';

.preview {
  position: absolute;
  right: 12px;
  bottom: 12px;
  border: 2px solid red;
  pointer-events: none;
}
</style>
