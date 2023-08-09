<header class="header">
  <div class="header__wrap">
    <h1 class="header__logo">
      <LogoSymbol/>
    </h1>
    <nav class="header__body">
      <menu class="gnb">
        <li class="gnb__item">
          <div class="gnb__button">
            <MenuItem icon="database" label="Data"/>
            <div class="gnb__sub">
              <SubMenu
                items={[
                  { key: 'new', label: 'New json', icon: 'file' },
                  { key: 'load', label: 'Import', icon: 'upload' },
                  { key: 'export', label: 'Export json', icon: 'download' },
                  { key: 'copy-clipboard', label: 'Copy clipboard', icon: 'paperclip' },
                ]}/>
            </div>
          </div>
        </li>
        <li class="gnb__item">
          <div class="gnb__button">
            <MenuItem icon="eye" label="View"/>
            <div class="gnb__sub">
              <SubMenu
                items={[
                  { key: 'fold', label: 'Fold tree', icon: 'minimize-2' },
                  { key: 'unfold', label: 'Unfold tree', icon: 'maximize-2' },
                  { key: 'toggle-live-preview', label: 'Toggle live preview', icon: 'code' },
                ]}/>
            </div>
          </div>
        </li>
        <li class="gnb__item">
          <div class="gnb__button">
            <MenuItem icon="monitor" label="Theme"/>
            <div class="gnb__sub">
              <SubMenu
                items={[
                  { key: 'system', label: 'System', icon: 'droplet' },
                  { key: 'light', label: 'Light', icon: 'sun' },
                  { key: 'dark', label: 'Dark', icon: 'moon' },
                ]}/>
            </div>
          </div>
        </li>
        <li class="gnb__item">
          <button type="button" class="gnb__button">
            <MenuItem icon="cloud" label="About"/>
          </button>
        </li>
      </menu>
    </nav>
    <nav class="header__side">
      <button
        type="button"
        class="toggle-preview"
        class:on={false}
        on:click>
        <Icon name="code"/>
      </button>
    </nav>
  </div>
</header>

<script>
import LogoSymbol from '../assets/logo-symbol.svelte'
import Icon from '../assets/icon.svelte'
import MenuItem from './menu-item.svelte'
import SubMenu from './sub-menu.svelte'
</script>

<style lang="scss">
@import './index';
</style>
