<script setup lang="ts">
import type { IElement } from '../types'

defineProps<{
  data: IElement
}>()

</script>

<template>
  <component :is="data.dataRaw" />
</template>


