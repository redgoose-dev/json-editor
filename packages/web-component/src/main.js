import JsonEditor from './web-component.js'
import { defaultSource, replaceSource } from './assets/resource.js'
import './assets/main.scss'

let $
let src = defaultSource
const preview = document.getElementById('preview')
const editor = document.getElementById('editor')
const gnb = document.getElementById('gnb')

// define component
customElements.define('json-editor', JsonEditor)
const jsonEditor = document.createElement('json-editor')
jsonEditor.setAttribute('theme', 'system')
jsonEditor.setAttribute('live', 'true')
jsonEditor.setAttribute('src', JSON.stringify(src))
editor.append(jsonEditor)

// get cash object
$ = jsonEditor.core.$

// functions
function changeTheme(value)
{
  jsonEditor.setAttribute('theme', value)
  editor.classList.remove('system', 'light', 'dark')
  editor.classList.add(value)
  const $buttons = $(gnb).find('[data-action^=theme]')
  $buttons.prop('disabled', false)
  $buttons.filter(`[data-action^=theme-${value}]`).prop('disabled', true)
}
function exportEditor()
{
  const src = jsonEditor.core.export(undefined, false)
  console.group('<= EXPORT JSON =>')
  console.warn(src)
  console.groupEnd()
}

// set editor
changeTheme('system')

// set gnb action
$(gnb).find('button').on('click', e => {
  const $this = $(e.currentTarget)
  switch ($this.data('action'))
  {
    case 'theme-system':
      changeTheme('system')
      break
    case 'theme-light':
      changeTheme('light')
      break
    case 'theme-dark':
      changeTheme('dark')
      break
    case 'replace':
      jsonEditor.change(replaceSource)
      break
    case 'export':
      exportEditor()
      break
  }
})

// preview
function updatePreview(src)
{
  preview.innerText = JSON.stringify(src, null, 2)
}
jsonEditor.addEventListener('update', e => updatePreview(e.detail.data))
updatePreview(src)
