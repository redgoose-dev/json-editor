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
            <MenuItem icon="database" label={$_language.data} dropdown={true}/>
          </div>
          <div class="gnb__sub">
            <SubMenu
              items={[
                { key: 'new', label: $_language.clear, icon: 'file' },
                { key: 'import', label: $_language.import, icon: 'download' },
                { key: 'export', label: $_language.export, icon: 'upload' },
              ]}
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
            <MenuItem icon="eye" label={$_language.view} dropdown={true}/>
          </div>
          <div class="gnb__sub">
            <SubMenu
              items={[
                { key: 'fold', label: $_language.fold, icon: 'minimize-2' },
                { key: 'unfold', label: $_language.unfold, icon: 'maximize-2' },
                {
                  key: 'toggle-live-preview',
                  label: $visiblePreview ? $_language.hidePreview : $_language.showPreview,
                  icon: 'code',
                },
              ]}
              on:select={e => selectMenuItem('view', e)}/>
          </div>
        </li>
        <li
          class="gnb__item"
          class:on={focusMenuItem === 'language'}
          on:click|stopPropagation>
          <div
            data-name="language"
            class="gnb__button"
            on:click={onClickDropdown}>
            <MenuItem icon="globe" label={$_language.language} dropdown={true}/>
          </div>
          <div class="gnb__sub">
            <SubMenu
              items={menuCodes.map(code => ({
                key: code,
                label: $_language.languageLabel[code],
                active: $language === code,
              }))}
              on:select={e => selectMenuItem('language', e)}/>
          </div>
        </li>
        <li class="gnb__item">
          <button
            type="button"
            class="gnb__button"
            on:click={() => selectMenuItem('about')}>
            <MenuItem icon="cloud" label={$_language.about} dropdown={false}/>
          </button>
        </li>
      </menu>
    </nav>
    <nav class="header__side">
      <Theme/>
    </nav>
  </div>
</header>

<script>
import { createEventDispatcher, onMount, onDestroy } from 'svelte'
import { visiblePreview } from '../../store/visible.js'
import { language, _language } from '../../store/service.js'
import { menuCodes } from '../../libs/lang.js'
import LogoSymbol from '../assets/logo-symbol.svelte'
import MenuItem from './menu-item.svelte'
import SubMenu from './sub-menu.svelte'
import Theme from './theme.svelte'

const dispatch = createEventDispatcher()
let focusMenuItem

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

function deselect()
{
  focusMenuItem = undefined
}

onMount(() => {
  window.addEventListener('click', deselect)
})
onDestroy(() => {
  window.removeEventListener('click', deselect)
})
</script>

<style lang="scss">
@import './index';
</style>
