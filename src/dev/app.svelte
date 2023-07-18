<header>
  <h1>JSONEditor Development</h1>
</header>

<nav class="controller">
  <div class="controller__wrap">
    <button type="button">button #1</button>
    <button type="button">button #2</button>
    <button type="button">button #3</button>
  </div>
</nav>

<div class="container">
  <JSONEditor data={data}/>
</div>

<script>
import JSONEditor from '../json-editor/index.svelte'

// const data = {
//   foo: 1,
//   foo2: '111',
//   foo3: false,
//   foo4: [
//     1, 2, null, true,
//   ],
//   foo5: {
//     1: 11,
//     2: 22,
//     3: 33,
//     4: null,
//   },
// }
// const data = new Array(88).fill('apple')
const data = JSON.stringify([
  'apple',
  'banana',
  123123,
  false,
  'mango',
  [ 1, 2, 3 ],
  {
    foo: 'bar',
    colors: { apple: 'red', banana: 'yellow', mango: 'green' },
  },
  ...(new Array(88).fill('apple')),
])
// const data = {}
</script>

<style lang="scss">
@import './app';
</style>
