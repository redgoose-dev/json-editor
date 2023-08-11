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
                  { key: 'new', label: 'New', icon: 'file' },
                  { key: 'import', label: 'Import', icon: 'upload' },
                  { key: 'export', label: 'Export JSON', icon: 'download' },
                  { key: 'copy-clipboard', label: 'Copy clipboard', icon: 'paperclip' },
                ]}
                on:select={e => selectMenuItem('data', e)}/>
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
                  {
                    key: 'toggle-live-preview',
                    label: $visiblePreview ? 'Hide live preview' : 'Show live preview',
                    icon: 'code',
                  },
                ]}
                on:select={e => selectMenuItem('view', e)}/>
            </div>
          </div>
        </li>
        <li class="gnb__item">
          <div class="gnb__button">
            <MenuItem icon="monitor" label="Theme"/>
            <div class="gnb__sub">
              <SubMenu
                items={[
                  {
                    key: 'system',
                    label: 'System',
                    icon: 'droplet',
                    active: $theme === 'system',
                  },
                  {
                    key: 'light',
                    label: 'Light',
                    icon: 'sun',
                    active: $theme === 'light',
                  },
                  {
                    key: 'dark',
                    label: 'Dark',
                    icon: 'moon',
                    active: $theme === 'dark',
                  },
                ]}
                on:select={e => selectMenuItem('theme', e)}/>
            </div>
          </div>
        </li>
        <li class="gnb__item">
          <button
            type="button"
            class="gnb__button"
            on:click={() => selectMenuItem('about')}>
            <MenuItem icon="cloud" label="About"/>
          </button>
        </li>
      </menu>
    </nav>
    <nav class="header__side">
      <button
        type="button"
        title="Toggle preview panel"
        class="toggle-preview"
        class:on={$visiblePreview}
        on:click={togglePreview}>
        <Icon name="code"/>
      </button>
    </nav>
  </div>
</header>

<script>
import { createEventDispatcher } from 'svelte'
import { visiblePreview } from '../../store/visible.js'
import { theme } from '../../store/service.js'
import LogoSymbol from '../assets/logo-symbol.svelte'
import Icon from '../assets/icon.svelte'
import MenuItem from './menu-item.svelte'
import SubMenu from './sub-menu.svelte'

const dispatch = createEventDispatcher()

function selectMenuItem(main, e)
{
  let sub
  if (e) sub = e.detail?.key
  dispatch('select-menu', { main, sub })
}

function togglePreview()
{
  dispatch('select-menu', { main: 'view', sub: 'toggle-live-preview' })
}
</script>

<style lang="scss">
@import './index';
</style>
