<script setup lang="ts">
import { ref } from 'vue'

import QuillIntegration from './quill-integration.vue'

const model = defineModel<string>()

const preview = ref<boolean>(false)

const editor = ref<typeof QuillIntegration>()

// function handleAddComponent() {
//   editorKey.value++
// }

const editorKey = ref<number>(1)
</script>

<template>
  <div class="cms--grid">
    <slot name="custom-buttons" />
    {{ model }}
    <client-only>
      <quill-integration
        v-if="!preview"
        :key="editorKey"
        ref="editor"
        v-model="model"
      />
    </client-only>
  </div>
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
