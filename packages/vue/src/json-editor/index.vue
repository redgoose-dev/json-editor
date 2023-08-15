<template>
<div ref="$editor"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineProps, watch, defineEmits, defineExpose } from 'vue'
import JsonEditorCore from '../../../../src/json-editor/core.js'

const $editor = ref()
let editor
const props = defineProps({
  live: { type: Boolean, default: false },
  theme: { type: String, default: 'system' },
})
const emits = defineEmits([ 'init', 'update' ])

function core()
{
  return editor
}

onMounted(() => {
  editor = new JsonEditorCore($editor.value, {
    live: props.live,
    theme: props.theme,
  })
  editor.preview = src => emits('update', src)
  emits('init', editor)
})

onBeforeUnmount(() => {
  editor.destroy()
  $editor.value.innerHTML = ''
})

watch(() => props.live, value => {
  editor.options.live = value
})
watch(() => props.theme, value => {
  editor.options.theme = value
})

defineExpose({
  core,
})
</script>
