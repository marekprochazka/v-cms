<script setup lang="ts">

import type { IEditorProps } from '@/core/types'
import { ref } from 'vue'
import CkIntegration from '@/core/components/editor/ck-integration.vue'
import ContentBody from '@/core/components/content/body.vue'

const props = defineProps<IEditorProps>()

const model = defineModel<string>()

const preview = ref<boolean>(false)
</script>

<template>
  <div class="grid">
    <button @click="preview = false" :disabled="!preview">Edit</button>
    <button @click="preview = true" :disabled="preview">Preview</button>
  </div>
  <ck-integration v-if="!preview" v-model="model" v-bind="props" />
  <content-body v-if="preview" :content="model" :components="props.components"  />

</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  button {
    flex: 0 0 16.666666%;
      width: 100%;
  }
  margin-bottom: 10px;
}
</style>

