<script setup lang="ts">
/**
 * @file content-body.vue
 * @description Renders content of a post with root div tagged with class 'body--root'
 */


import { IContentDetailProps } from '@/core/types'
import { parse } from '@/core/compiler/parser'
import { generateVNodes } from '@/core/compiler/generator'

const props = defineProps<IContentDetailProps>()

const vNodes = generateVNodes(parse(props.content), props.components)


</script>

<template class="cms--contentBody">
  <component :is="vNodes" />
</template>


