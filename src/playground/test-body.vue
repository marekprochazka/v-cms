<script setup lang="ts">

import { IElement } from '@/core/types'
import { h } from 'vue'
import Cmp from '@/playground/cmp.vue'
import Body from '@/core/components/body.vue'

import CmpWithRequest from '@/playground/cmp-with-request.vue'

const body: IElement = {
  identifier: 'test',
  dataRaw: h('div', {}, [h('p', {}, 'bonjour'), h(Cmp), h(CmpWithRequest)])
}


</script>

<template>
  <Body :data="body" />
</template>


