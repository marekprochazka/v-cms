<script setup lang="ts">


import {IContentBase, IEditorProps, useCMS} from "@/core";
import {ICMSData} from "@/core/types";
import {Editor} from "@/core";
import {ref} from "vue";
import CmpWitProp from "@/playground/cmp-wit-prop.vue";
import CmpWithRequest from "@/playground/cmp-with-request.vue";
import Cmp from "@/playground/cmp.vue";
import type {Component} from 'vue'

const components: Record<string, Component> = {
  'cmp': Cmp,
  'cmp-with-request': CmpWithRequest,
  'prop': CmpWitProp,
}

const config: ICMSData<IContentBase> = {
  getContent: (id: string) => Promise.resolve({id, content: ''}),
  saveContent: (id: string, content: string) => Promise.resolve({id, content}),
  customComponents: components,

}


const {getContentBodyProps, getEditorProps} = useCMS(config)

const content = ref<string>('')
const editorProps = ref<IEditorProps | null>(null)

async function init() {
  editorProps.value = getEditorProps()
}

init()

</script>


<template>
  <Editor v-if="editorProps" v-model="content" v-bind="editorProps"/>

</template>