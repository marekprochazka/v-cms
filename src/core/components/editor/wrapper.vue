<script setup lang="ts">

import type { IEditorProps } from '@/core/types'
import { ref } from 'vue'
import ContentBody from '@/core/components/content/body.vue'
import QuillIntegration from "@/core/components/editor/quill-integration.vue";
import ComponentAdder from "@/core/components/editor/component-adder.vue";
const props = defineProps<IEditorProps>()

const model = defineModel<string>()

const preview = ref<boolean>(false)

const editor = ref<typeof QuillIntegration>()

function handleAddComponent() {
  editorKey.value++
}

const editorKey = ref<number>(1)

</script>

<template>
  <div class="cms--grid">
    <button class="cms--button cms--button__edit" @click="preview = false" :disabled="!preview">Edit</button>
    <button class="cms--button cms--button__preview" @click="preview = true" :disabled="preview">Preview</button>
  </div>
  <content-body v-if="preview" :content="model!" :components="props.components"  />

  <component-adder class="cms--componentAdder" :components="props.components" v-if="!preview" v-model="model" @add-component="handleAddComponent" />
  <slot name="custom-buttons" />
  <quill-integration class="cms--editor" :key="editorKey" ref="editor" v-if="!preview" v-model="model" />

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

