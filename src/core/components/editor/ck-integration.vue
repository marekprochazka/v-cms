<script setup lang="ts">

import CK from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import type { EditorConfig } from '@ckeditor/ckeditor5-core'
import ComponentAdder from '@/core/components/editor/component-adder.vue'
import type { IEditorProps } from '@/core/types'

const props = defineProps<IEditorProps>()

const model = defineModel<string>()

const editor = CK.component


const config: EditorConfig = {
  toolbar: {
    items: [
      'undo', 'redo',
      '|', 'heading',
      // '|', 'fontColor', 'fontBackgroundColor', 'strikethrough', TBD
      '|', 'bold', 'italic',
      '|', 'link', 'blockQuote',
      // '|', 'uploadImage', TBD
      '|', 'bulletedList', 'numberedList',
      // 'todoList', 'outdent', 'subscript', 'superscript', 'code', 'indent'  TBD
    ]
  },
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
    ]
  },
    ...props.customConfig}



</script>

<template>
  <ComponentAdder :components="props.components" v-model="model" />
  <editor
    :editor="ClassicEditor"
    :config="config"
    v-model="model"
  />
</template>

<style>
.ck-editor__editable_inline {
    min-height: 400px !important;
}
</style>

