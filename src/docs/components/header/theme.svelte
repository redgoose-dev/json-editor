<button
  type="button"
  title={$_language.changeTheme}
  class="switch-theme"
  class:switch-theme--dark={$theme === 'dark'}
  on:click={onClickButton}>
  <span>
    <i class="sun"><Icon name="sun"/></i>
    <i class="moon"><Icon name="moon"/></i>
  </span>
</button>

<script>
import { theme, _language } from '../../store/service.js'
import Icon from '../assets/icon.svelte'

function onClickButton()
{
  theme.change($theme === 'dark' ? 'light' : 'dark')
}
</script>

<style lang="scss">
@import './theme';
</style>
