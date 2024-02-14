<script setup lang="ts">

const props = defineProps<{display: string}>()
</script>

<template>
  <div>
    {{ props.display }}
  </div>
</template>


