<header class="header">
  <div class="header__wrap">
    <h1 class="header__logo">
      <LogoSymbol/>
    </h1>
    <nav class="header__body">
      <menu class="gnb">
        <li
          class="gnb__item"
          class:on={focusMenuItem === 'data'}
          on:click|stopPropagation>
          <div
            data-name="data"
            class="gnb__button"
            on:click={onClickDropdown}>
            <MenuItem icon="database" label="Data" dropdown={true}/>
          </div>
          <div class="gnb__sub">
            <SubMenu
              items={[
                { key: 'new', label: 'New', icon: 'file' },
                { key: 'import', label: 'Import', icon: 'download' },
                { key: 'export', label: 'Export', icon: 'upload' },
                _useClipboard && { key: 'clipboard', label: 'Copy Clipboard', icon: 'copy' },
              ].filter(Boolean)}
              on:select={e => selectMenuItem('data', e)}/>
          </div>
        </li>
        <li
          class="gnb__item"
          class:on={focusMenuItem === 'view'}
          on:click|stopPropagation>
          <div
            data-name="view"
            class="gnb__button"
            on:click={onClickDropdown}>
            <MenuItem icon="eye" label="View" dropdown={true}/>
          </div>
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
        </li>
        <li
          class="gnb__item"
          class:on={focusMenuItem === 'theme'}
          on:click|stopPropagation>
          <div
            data-name="theme"
            class="gnb__button"
            on:click={onClickDropdown}>
            <MenuItem icon="monitor" label="Theme" dropdown={true}/>
          </div>
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
        </li>
        <li class="gnb__item">
          <button
            type="button"
            class="gnb__button"
            on:click={() => selectMenuItem('about')}>
            <MenuItem icon="cloud" label="About" dropdown={false}/>
          </button>
        </li>
      </menu>
    </nav>
  </div>
</header>

<script>
import { createEventDispatcher, onMount, onDestroy } from 'svelte'
import { visiblePreview } from '../../store/visible.js'
import { theme } from '../../store/service.js'
import LogoSymbol from '../assets/logo-symbol.svelte'
import Icon from '../assets/icon.svelte'
import MenuItem from './menu-item.svelte'
import SubMenu from './sub-menu.svelte'

const dispatch = createEventDispatcher()

let focusMenuItem

$: _useClipboard = window.isSecureContext

function selectMenuItem(main, e)
{
  let sub
  if (e) sub = e.detail?.key
  dispatch('select-menu', { main, sub })
  deselect()
}

function onClickDropdown(e)
{
  const { name } = e.currentTarget.dataset
  focusMenuItem = (focusMenuItem === name) ? undefined : name
}

function togglePreview()
{
  dispatch('select-menu', { main: 'view', sub: 'toggle-live-preview' })
}

function deselect()
{
  focusMenuItem = undefined
}

onMount(() => {
  document.body.addEventListener('click', deselect)
})
onDestroy(() => {
  document.body.removeEventListener('click', deselect)
})
</script>

<style lang="scss">
@import './index';
</style>
