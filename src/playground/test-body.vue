<script setup lang="ts">

import ContentBody from '@/core/components/content/body.vue'
import Cmp from '@/playground/cmp.vue'
import CmpWithRequest from '@/playground/cmp-with-request.vue'
import { type Component, ref } from 'vue'
import { useCMS } from '@/core'
import type { IContentDetailProps, IContentBase } from '@/core/types'
import {getActions} from './fakeAPI'

import Editor from '@/core/components/editor.vue'


const components: Record<string, Component> = {
  'cmp': Cmp,
  'cmp-with-request': CmpWithRequest
}

const {getContentBodyProps} = useCMS<IContentBase>(getActions(), components)

const bodyProps = ref<IContentDetailProps | null>(null)

async function init() {
  bodyProps.value = await getContentBodyProps('1')
}

init()

</script>

<template>
  <ContentBody v-if="bodyProps" v-bind="bodyProps"  />

  <Editor />
</template>


