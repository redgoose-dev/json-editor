<header>
  <h1>dev-app-header</h1>
</header>

<div class="container">
  <JSONEditor data={data}/>
</div>

<script>
import JSONEditor from '../json-editor/index.svelte'

const data = {
  foo: 1,
  foo2: '111',
  foo3: false,
  foo4: [
    1, 2, true,
  ],
  foo5: {
    1: 11,
    2: 22,
    3: 33,
  },
}
// const data = new Array(88).fill('apple')
// const data = JSON.stringify([
//   'apple',
//   'banana',
//   123123,
//   false,
//   'mango',
//   [ 1, 2, 3 ],
//   {
//     foo: 'bar',
//     colors: { apple: 'red', banana: 'yellow', mango: 'green' },
//   },
//   ...(new Array(88).fill('apple')),
// ])
// const data = {}
</script>

<style>
.container {
  padding: 24px;
  box-sizing: border-box;
  border: 1px dashed #000;
}
</style>
