<header>
  <h1>JSONEditor Development</h1>
</header>

<nav class="controller">
  <div class="controller__wrap">
    <button type="button" on:click={() => toktok(1)}>button #1</button>
    <button type="button" on:click={() => toktok(2)}>button #2</button>
    <button type="button">button #3</button>
  </div>
</nav>

<div class="container">
  <json-editor
    bind:this={self}
    src={_data}/>
</div>

<script>
import { onMount } from 'svelte'
import JsonEditor from '../json-editor/index.js'

let self
const elementName = 'json-editor'
const data1 = {
  foo: 1,
  foo2: '111',
  foo3: false,
  foo4: [
    1, 2, null, true,
  ],
  foo5: {
    1: 11,
    22: 22,
    3: 33,
    44: null,
  },
}
const data2 = [
  'apple',
  'banana',
  123123,
  false,
  'mango',
  [ 1, 2, 3 ],
  {
    foo: 'bar',
    colors: { apple: 'red', banana: 'yellow', mango: 'green' },
    empty: null,
  },
  ...(new Array(72).fill('apple')),
]
let data = data1
$: _data = JSON.stringify(data, null)

function toktok(key)
{
  switch (key) {
    case 1:
      data = data1
      break
    case 2:
      data = data2
      break
  }
}

onMount(() => {
  // define custom element
  // console.log(JsonEditor)
  if (customElements.get(elementName))
  {
    customElements.upgrade(self)
  }
  else
  {
    customElements.define(elementName, JsonEditor)
  }
})
</script>

<style lang="scss">
@import './app';
</style>
