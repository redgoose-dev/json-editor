<button
  type="button"
  title="Theme switch"
  class="switch-theme"
  class:switch-theme--dark={$theme === 'dark'}
  on:click={onClickButton}>
  <span>
    <i class="sun"><Icon name="sun"/></i>
    <i class="moon"><Icon name="moon"/></i>
  </span>
</button>

<script>
import { theme } from '../../store/service.js'
import Icon from '../assets/icon.svelte'

let sw = false

function onClickButton(e)
{
  theme.change($theme === 'dark' ? 'light' : 'dark')
}
</script>

<style lang="scss">
@import './theme';
</style>
