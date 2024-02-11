<script setup lang="ts">

import { IContentBodyProps } from '@/core/types'
import { parse } from '@/core/compiler/parser'
import { generateVNodes } from '@/core/compiler/generator'

const props = defineProps<IContentBodyProps>()

const vNodes = generateVNodes(parse(props.data.content), props.components)


</script>

<template>
  <component :is="vNodes" />
</template>


