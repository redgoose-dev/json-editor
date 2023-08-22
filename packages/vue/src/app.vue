<template>
<article class="layout">
  <header class="header">
    <h1 class="header__title">JSON Editor for vue</h1>
  </header>
  <nav class="controller">
    <button type="button" @click="onClickChangeLive">Live({{state.live}})</button>
    <button type="button" @click="onClickChangeTheme">Theme({{state.theme}})</button>
    <button type="button" @click="onClickReplace">Replace</button>
    <button type="button" @click="onClickExport">Export</button>
    <button type="button" @click="onClickSelectNode">SelectNode</button>
  </nav>
  <div class="editor-body">
    <JsonEditor
      ref="$editor"
      :theme="state.theme"
      :live="state.live"
      @preview="onUpdateEditor"/>
  </div>
</article>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import JsonEditor from './json-editor/index.vue'
import '../../../src/json-editor/assets/main.scss'

const $editor = ref(null)
let editor
const state = reactive({
  live: true,
  theme: 'light',
})

function onClickChangeLive()
{
  state.live = !state.live
}

function onClickChangeTheme()
{
  switch (state.theme)
  {
    case 'system':
      state.theme = 'light'
      break
    case 'light':
      state.theme = 'dark'
      break
    case 'dark':
      state.theme = 'system'
      break
  }
}

function onUpdateEditor(src)
{
  console.warn('onUpdateEditor', src)
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
  }, false)
}

function onClickExport()
{
  const result = editor.export(undefined, false, 2)
  console.warn('EXPORT:', result)
}

function onClickSelectNode()
{
  // TODO: 메서드 없어졌으니 다른 방법으로 해결하기
  const node = editor.getNode('li.root')
  console.warn('SELECT NODE:', node)
  editor.import(node, { goo: 'se' }, false)
}

onMounted(() => {
  editor = $editor.value.core()
})
</script>

<style src="./app.scss" scoped></style>
