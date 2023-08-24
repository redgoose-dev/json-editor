import { writable } from 'svelte/store'
import * as storage from '../libs/storage.js'

export const visiblePreview = (() => {
  const storageKey = 'json-editor-preview'
  const { subscribe, update } = writable(storage.get(storageKey) !== 'false')
  return {
    subscribe,
    change: newValue => update(value => {
      if (value === newValue) return value
      storage.set(storageKey, newValue ? 'true' : 'false')
      return newValue
    }),
  }
})()

export const visibleAbout = writable(false)
