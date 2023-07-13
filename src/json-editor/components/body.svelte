<div class="item-root">
  <TypeButton on:click={onClickOpenContext}>
    <Type name={`object`}/>
  </TypeButton>
  <ArrowFold
    open={openFold}
    on:click={onClickFold}/>
  <Count
    type={`object`}
    count={2}/>
</div>
{#if openFold}
  <ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
  </ul>
{/if}

<script>
import Type from './type/index.svelte'
import TypeButton from './type/button.svelte'
import ArrowFold from '../assets/icons/arrow-fold.svelte'
import Count from './item/assets/count.svelte'

// TODO: 여기서는 object|array 부터 시작한다.

let openFold = true

function onClickFold()
{
  openFold = !openFold
}
function onClickOpenContext()
{
  console.log('onClickOpenContext()')
}
</script>

<style lang="scss">
.item-root {
  display: flex;
  align-items: center;
}
</style>
