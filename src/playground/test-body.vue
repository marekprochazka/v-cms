<script setup lang="ts">


import {IContentBase, IEditorProps, useCMS} from "@/core";
import {ICMSData} from "@/core/types";
import {Editor} from "@/core";
import {ref} from "vue";

const config: ICMSData<IContentBase> = {
  getContent: (id: string) => Promise.resolve({id, content: ''}),
  saveContent: (id: string, content: string) => Promise.resolve({id, content})
}

const {getContentBodyProps, getEditorProps} = useCMS(config)

const content = ref<string>('')
const editorProps = ref<IEditorProps | null>(null)

async function init() {
  editorProps.value = await getEditorProps()
}

init()

</script>


<template>
  <Editor v-if="editorProps" v-model="content" v-bind="editorProps" />

</template>