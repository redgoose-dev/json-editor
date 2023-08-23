<template>
<div ref="$editor"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import JsonEditorCore from '@json-editor/index.js'

const $editor = ref()
const props = defineProps({
  modelValue: { type: [ Object, Array ], default: {} },
  live: { type: Boolean, default: false },
  theme: { type: String, default: 'system' },
})
const emits = defineEmits([ 'init', 'update', 'update:modelValue' ])
let editor

function core()
{
  return editor
}

onMounted(() => {
  editor = new JsonEditorCore($editor.value, {
    live: props.live,
    theme: props.theme,
  })
  editor.preview = _src => emits('update:modelValue', _src)
  editor.replace(props.modelValue, false)
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
