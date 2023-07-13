<header>
  <h1>dev-app-header</h1>
</header>

<div class="container">
  <JSONEditor/>
</div>

<script>
import JSONEditor from '../json-editor/index.svelte'

const foooooo = {
  foo: 1,
  foo2: '111',
  foo3: false,
  foo4: [
    1, 2, 3,
  ],
  foo5: {
    1: 11,
    2: 22,
    3: 33,
  },
}
</script>

<style>
.container {
  padding: 24px;
  box-sizing: border-box;
  border: 1px dashed #000;
}
</style>
