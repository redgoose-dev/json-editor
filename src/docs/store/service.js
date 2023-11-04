import { writable, get } from 'svelte/store'
import * as storage from '../libs/storage.js'
import * as lang from '../libs/lang.js'

const storageKeyName = {
  theme: 'json-editor-theme',
  source: 'json-editor-source',
  language: 'json-editor-language',
}

export const theme = (() => {
  const $html = document.querySelector('html')
  const defaultValue = storage.get(storageKeyName.theme) || $html.dataset.theme || 'light'
  const values = [ 'light', 'dark' ]
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
      const html = document.querySelector('html')
      html.classList.add('transition-theme')
      setTimeout(() => html.classList.remove('transition-theme'), 160)
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

// language
export const language = (() => {
  const values = [ 'en', 'ko', 'jp' ]
  let defaultCode
  try
  {
    const src = storage.get(storageKeyName.language)
    defaultCode = src || values[0]
  }
  catch (e)
  {
    defaultCode = values[0]
  }
  const { subscribe, set, update } = writable(defaultCode)
  function updateHtml(code)
  {
    const html = document.querySelector('html')
    html.setAttribute('lang', code)
  }
  updateHtml(defaultCode)
  return {
    subscribe,
    set,
    change: newValue => update(value => {
      if (!values.includes(newValue)) return value
      if (value === newValue) return value
      storage.set(storageKeyName.language, newValue)
      _language.set(lang.get(newValue))
      updateHtml(newValue)
      return newValue
    }),
  }
})()
export const _language = writable(lang.get(get(language)))
