# json-editor for vue

`json-editor`를 vue 컴포넌트로 사용합니다.  
다음과 같이 기초적으로 컴포넌트를 이용할 수 있습니다.

```vue
<template>
<JsonEditor
  v-model="src"
  theme="system"
  :live="true"/>
</template>

<script setup>
import JsonEditor from '@redgoose/json-editor/vue'
import '@redgoose/json-editor/css'
  
const src = ref({
  red: 'apple',
  yellow: 'banana',
  green: 'mango',
})
</script>
```


## props

- `v-model`: 에디터에서 사용하는 데이터 (마운트 하는 시점에만 사용합니다!)
- `theme`: 다크모드에 대한 값
- `live`: 데이터가 업데이트 될때마다 `update`메서드를 실행할지에 대한 여부

> `v-model`값은 에디터의 내용과 분리되어 있기 때문에 마운트하는 타이밍때만 사용됩니다.  
> 그 후에 `v-model`값을 고치더라도 에디터가 수정되지 않기 때문에 에디터를 조작하려면 에디터 메서드를 이용하세요.


## emits

- `init`: 컴포넌트가 마운트되고 초기화되면 호출합니다.
- `update:model-value`: 에디터의 내용이 업데이트되면 호출합니다.

다음은 사용하는 예제코드입니다.

```vue
<template>
<JsonEditor
  v-model="src"
  @init="onInit"
  @update:model-value="onUpdate"/>
</template>

<script setup>
let core
const src = ref({})

function onInit(_core)
{
  core = _core // editor core
}
function onUpdate(_src)
{
  console.warn('update src =>', _src)
}
</script>
```

## Access core instance

에디터 코어값을 가져와서 조작할 수 있습니다. 다음 예제를 참고해주세요.

```vue
<template>
<JsonEditor
  ref="$editor"
  @init="onInit"/>
</template>

<script setup>
import { onMounted } from 'vue'

const $editor = ref(null)
let core1, core2

function onInit(_core)
{
  // 방법1: `@init` 이벤트에서 반환된 코어 인스턴스를 가져옵니다.
  core1 = _core
}

onMounted(() => {
  // 방법2: 컴포넌트 메서드로 접근하여 코어 인스턴스를 가져옵니다.
  core2 = $editor.value.core()
})
</script>
```
