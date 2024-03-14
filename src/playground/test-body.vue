<script setup lang="ts">

import ContentBody from '@/core/components/content/body.vue'
import Cmp from '@/playground/cmp.vue'
import CmpWithRequest from '@/playground/cmp-with-request.vue'
import { type Component, ref } from 'vue'
import { useCMS } from '@/core'
import type { IContentDetailProps, IContentBase, IEditorProps } from '@/core/types'
import {getActions} from './fakeAPI'

import Editor from '@/core/components/editor/wrapper.vue'
import CmpWitProp from '@/playground/cmp-wit-prop.vue'


const components: Record<string, Component> = {
  'cmp': Cmp,
  'cmp-with-request': CmpWithRequest,
  'prop': CmpWitProp
}

// const {getContentBodyProps, getEditorProps} = useCMS<IContentBase>(() => , components)
//
// const bodyProps = ref<IContentDetailProps | null>(null)
//
// const editorProps = ref<IEditorProps | null>(null)
//
// async function init() {
//   bodyProps.value = await getContentBodyProps('1')
//   editorProps.value = getEditorProps()
// }
//
// const content = ref('')
//
// init()

</script>

<template>
<!--  <ContentBody v-if="bodyProps" v-bind="bodyProps"  />-->
<!--  &lt;!&ndash; TODO fix transpilation of custom config prop  &ndash;&gt;-->
<!--  &lt;!&ndash; @vue-skip &ndash;&gt;-->
<!--  <Editor v-model="content" v-if="editorProps" :components="editorProps.components" :custom-config="editorProps.customConfig" />-->
</template>


