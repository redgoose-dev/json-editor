import JsonEditor from '../json-editor/exports.js'
import { samples } from './assets/resource.js'
import { randomPickInArray } from './util.js'

import '../json-editor/assets/main.scss'
import './main.scss'

let $
let options = {
  theme: 'system',
  live: true
}
const gnb = document.getElementById('gnb')
const container = document.querySelector('.container')
const editor = document.getElementById('editor')
const preview = document.getElementById('preview')

// set json-editor
window.jsonEditor = new JsonEditor(editor, {
  theme: options.theme,
  live: options.live,
})
$ = window.$ = jsonEditor.$
initJsonEditor()

// setup menu
initMenu()

function onUpdateJsonEditor({ detail })
{
  renderPreview(detail)
}

function initMenu()
{
  // set theme
  changeTheme(options.theme)
  // set button events
  $(gnb).find('button').on('click', onClickMenu)
}

function initJsonEditor()
{
  editor.addEventListener('update', onUpdateJsonEditor)
  randomReplaceSampleItem()
}

function onClickMenu(e)
{
  const { action } = e.currentTarget.dataset
  switch (action)
  {
    case 'theme-system':
    case 'theme-light':
    case 'theme-dark':
      changeTheme(action.replace(/^theme-/, ''))
      break
    case 'clear':
      jsonEditor.clear()
      break
    case 'random-pick':
      randomReplaceSampleItem()
      break
    case 'export':
      const result = jsonEditor.export(undefined, false, 2)
      console.group('<= EXPORT JSON =>')
      console.log(result)
      console.groupEnd()
      break
    case 'preview':
      visiblePreview()
      break
  }
}

function changeTheme(value)
{
  if (!['system', 'light', 'dark'].includes(value)) return
  const $themeButtons = $(gnb).find('[data-action^=theme]')
  $themeButtons.prop('disabled', false)
  $themeButtons.filter(`[data-action^=theme-${value}]`).prop('disabled', true)
  jsonEditor.options.theme = value

  editor.parentElement.classList.remove('editor--system', 'editor--light', 'editor--dark')
  editor.parentElement.classList.add(`editor--${value}`)
}

function visiblePreview(sw)
{
  if (sw === undefined)
  {
    container.classList.toggle('hide-preview')
  }
  else if (sw)
  {
    container.classList.remove('hide-preview')
  }
  else
  {
    container.classList.add('hide-preview')
  }
}

function randomReplaceSampleItem()
{
  jsonEditor.replace(randomPickInArray(samples), true)
}

function renderPreview(src)
{
  preview.innerText = JSON.stringify(src, null, 2)
}
