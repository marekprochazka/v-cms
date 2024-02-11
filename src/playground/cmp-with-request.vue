<script setup  lang="ts">

import { ref } from 'vue'

const value = ref('')

async function fakeRequest () {
  value.value = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('ahooyy!')
    }, 1000)
  })
}

fakeRequest()

</script>

<template>
  <div>
    {{ value }}
  </div>
</template>


