<script setup lang="ts">
import type { Quill } from '@vueup/vue-quill'
import { QuillEditor } from '@vueup/vue-quill'

import type { QuillOptionsStatic, RangeStatic, Sources } from 'quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import type Delta from 'quill-delta'
import type { Ref } from 'vue'
import Toolbar from './sub-parts/toolbar.vue'
import type { ToolbarOption } from './types'

const props = defineProps<{
  extraOptions?: QuillOptionsStatic
  onTextChange?: (delta: Delta, oldContents: Delta, source: Sources) => void
  onSelectionChange?: (range: RangeStatic, oldRange: RangeStatic, source: Sources) => void
  onFocus?: (editor: Ref<Element>) => void
  onBlur?: (editor: Ref<Element>) => void
  onReady?: (quill: Quill) => void
  toolbarOptionsNative: ToolbarOption[] | 'all'
  toolbarOptionsCustom: { handler: () => void, classes: string[], text?: string }[]
  toolbarExtraClasses?: string[]
}>()

const onTextChange = props.onTextChange ?? (() => {
})
const onSelectionChange = props.onSelectionChange ?? (() => {
})
const onFocus = props.onFocus ?? (() => {
})
const onBlur = props.onBlur ?? (() => {
})
const onReady = props.onReady ?? (() => {
})

const toolbarOptionsNative: ToolbarOption[] = props.toolbarOptionsNative === 'all' ? ['ql-font', 'ql-size', 'ql-bold', 'ql-italic', 'ql-underline', 'ql-strike', 'ql-color', 'ql-background', 'ql-script', 'ql-header', 'ql-blockquote', 'ql-code-block', 'ql-list', 'ql-indent', 'ql-direction', 'ql-align', 'ql-link', 'ql-formula', 'ql-clean'] : props.toolbarOptionsNative
const toolbarOptionsCustom: { handler: () => void, classes: string[], text?: string }[] = props.toolbarOptionsCustom ?? []
const toolbarExtraClasses = props.toolbarExtraClasses ?? []

const model = defineModel<string>()
const options: QuillOptionsStatic = {
  theme: 'snow',
  ...(props.extraOptions ?? {}),
}
</script>

<template>
  <div class="cms--container">
    <slot name="cms--prepend" />
    <client-only>
      <quill-editor
        ref="qlEditor"
        v-model:content="model"
        class="cms--editor"
        content-type="html"
        :options="options"
        toolbar="#cms--toolbar"
        @blur="onBlur"
        @focus="onFocus"
        @ready="onReady"
        @selection-change="onSelectionChange"
        @text-change="onTextChange"
      >
        <template #toolbar>
          <toolbar
            :toolbar-extra-classes="toolbarExtraClasses"
            :toolbar-options-custom="toolbarOptionsCustom"
            :toolbar-options-native="toolbarOptionsNative"
          />
        </template>
      </quill-editor>
    </client-only>
    <slot name="cms--append" />
  </div>
</template>
