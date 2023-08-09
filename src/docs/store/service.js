import { writable } from 'svelte/store'
import * as storage from '../libs/storage.js'

function createTheme()
{
  const $html = document.querySelector('html')
  const defaultValue = storage.get('theme') || $html.dataset.theme || 'system'
  const values = [ 'system', 'light', 'dark' ]
  const { subscribe, set, update } = writable(defaultValue)
  function updateHtmlClass(name)
  {
    $html.dataset.theme = name
    storage.set('theme', name)
  }
  updateHtmlClass(defaultValue)
  return {
    subscribe,
    change: newValue => update(value => {
      if (!values.includes(newValue)) return value
      if (value === newValue) return value
      updateHtmlClass(newValue)
      return newValue
    }),
  }
}

export const theme = createTheme()
