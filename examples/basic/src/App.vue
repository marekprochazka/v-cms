<script setup lang="ts">

// My Content
  import { ref } from 'vue'
  import pkg from "@mark.walker/v-cms/core";
  // import type { IContentDetailProps } from '@mark.walker/v-cms/types'

  // import { useMyCMS } from './composables/myCMS'

// const bodyProps = ref<IContentDetailProps | null>(null)

// async function init() {
//     const { getDetailProps } = useMyCMS()
    // bodyProps.value = await getDetailProps()
// }

// init()

console.log(pkg)

</script>

<template>
<!--<ContentBody v-if="bodyProps" v-bind="bodyProps" />-->
</template>
