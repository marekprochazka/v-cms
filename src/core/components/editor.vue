<script setup lang="ts">

import CK from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import type { EditorConfig } from '@ckeditor/ckeditor5-core'
import { ref } from 'vue'

const editor = CK.component

const config: EditorConfig = {}


const data = ref('<p>Bonjour from hello world</p>')

</script>

<template>
  <div>{{data}}</div>
  <editor :editor="ClassicEditor" :config="config" v-model="data" />
</template>


