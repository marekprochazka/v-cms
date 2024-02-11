<script setup lang="ts">

import { type IPostBase } from '@/core/types'
import { parse } from '@/core/compiler/parser'
import { generateVNodes } from '@/core/compiler/generator'
import { type Component } from 'vue'

const props = defineProps<{
  data: IPostBase,
  components: Record<string, Component>
}>()

const vNodes = generateVNodes(parse(props.data.content), props.components)


</script>

<template>
  <component :is="vNodes" />
</template>


