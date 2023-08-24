import { writable, get } from 'svelte/store'
import * as storage from '../libs/storage.js'

const storageKeyName = {
  theme: 'json-editor-theme',
  source: 'json-editor-source',
}

export const theme = (() => {
  const $html = document.querySelector('html')
  const defaultValue = storage.get(storageKeyName.theme) || $html.dataset.theme || 'system'
  const values = [ 'system', 'light', 'dark' ]
  const { subscribe, set, update } = writable(defaultValue)
  function updateHtmlClass(name)
  {
    $html.dataset.theme = name
    storage.set(storageKeyName.theme, name)
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
})()

export const source = (() => {
  let defaultSource
  try
  {
    const src = storage.get(storageKeyName.source)
    defaultSource = src ? JSON.parse(src) : {}
  }
  catch (e)
  {
    defaultSource = {}
  }
  const data = writable(defaultSource)
  const { subscribe, set, update } = data
  return {
    subscribe,
    update: newValue => update(value => {
      storage.set(storageKeyName.source, JSON.stringify(newValue, null))
      return newValue
    }),
    preview: () => {
      return JSON.stringify(get(data), null, 2)
    },
    existStorageData: () => {
      return !!storage.get(storageKeyName.source)
    },
  }
})()
