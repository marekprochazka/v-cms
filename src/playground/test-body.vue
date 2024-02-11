<script setup lang="ts">

import PostBody from '@/core/components/content-body.vue'
import { type IPostBase } from '@/core/types'
import Cmp from '@/playground/cmp.vue'
import CmpWithRequest from '@/playground/cmp-with-request.vue'
import { type Component } from 'vue'

const data: IPostBase = {
  id: '1',
  content: '<h1>Hello, world!</h1> {{ cmp }}betweeeeeen{{ cmp-with-request }}  ',
  title: 'Hello, world!',
  seo_name: 'hello-world',
  seo_description: 'Hello, world!',
  seo_keywords: 'Hello, world!',
  status: {
    identifier: 'published',
    display_name: 'Published'
  }
}

const components: Record<string, Component> = {
  'cmp': Cmp,
  'cmp-with-request': CmpWithRequest
}

</script>

<template>
  <PostBody :data="data" :components="components" />
</template>


