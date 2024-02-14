<script setup lang="ts">

import type { IComponentInternal } from '@/core/types'

const props = defineProps<{ components: Record<string, IComponentInternal> }>()

const content = defineModel<string>()

function componentToString(key: string, props: string[]): string {
  const props_str = props.map((prop) => `${prop}=" "`).join(' ')
  return `{{ ${key} ${props_str} }}`
}

function appendComponent(key: string, props: string[]): void {
  console.log('addd')
  content.value += componentToString(key, props)
  console.log(content.value)
}

</script>

<template>
  <div class="grid">
    <div  v-for="(value, key) in props.components" :key="key">
      <button @click="appendComponent(key, value.props)">{{ key }}</button>
    </div>
  </div>
</template>


<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  div {
    flex: 0 0 16.666666%;
    button {
      width: 100%;
    }
  }

}
</style>

