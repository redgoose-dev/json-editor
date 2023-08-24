<template>
<article class="layout">
  <header class="header">
    <h1 class="header__title">JSON Editor for vue</h1>
    <nav class="controller">
      <menu>
        <li>
          <button
            type="button"
            @click="state.live = !state.live">
            Live({{state.live}})
          </button>
        </li>
      </menu>
      <menu>
        <li>
          <button
            type="button"
            :disabled="state.theme === 'system'"
            @click="state.theme = 'system'">
            system
          </button>
        </li>
        <li>
          <button
            type="button"
            :disabled="state.theme === 'light'"
            @click="state.theme = 'light'">
            light
          </button>
        </li>
        <li>
          <button
            type="button"
            :disabled="state.theme === 'dark'"
            @click="state.theme = 'dark'">
            dark
          </button>
        </li>
      </menu>
      <menu>
        <li>
          <button type="button" @click="onClickReplace">Replace</button>
        </li>
        <li>
          <button type="button" @click="onClickExport">Export</button>
        </li>
      </menu>
    </nav>
  </header>
  <div class="body">
    <div :class="[ 'body__editor', state.theme ]">
      <JsonEditor
        ref="$editor"
        v-model="state.src"
        :theme="state.theme"
        :live="state.live"
        @init="onInit"
        @update:model-value="onUpdateEditor"/>
    </div>
    <div class="body__preview">
      <pre>{{_src}}</pre>
    </div>
  </div>
</article>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import JsonEditor from './json-editor.vue'
import '@json-editor/assets/main.scss'

const $editor = ref(null)
let editor
const state = reactive({
  src: { foo: 'bar' },
  live: true,
  theme: 'system',
})
const _src = computed(() => {
  return JSON.stringify(state.src, null, 2)
})

function onInit(_editor)
{
  editor = _editor
}

function onUpdateEditor(src)
{
  // console.warn('onUpdateEditor()', src)
}

function onClickReplace()
{
  editor.replace({
    foo: 123123,
    bar: [ 8, 5, 3, null, false, true ],
    ooo: {
      q: 'qqq',
      w: 'www',
      e: null,
      r: true,
    },
  }, true)
}

function onClickExport()
{
  const result = editor.export(undefined, false, 2)
  console.group('<= EXPORT =>')
  console.warn(result)
  console.groupEnd()
}
</script>

<style src="./app.scss" scoped></style>
