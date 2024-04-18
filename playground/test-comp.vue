<script setup  lang="ts">
const props = defineProps<{ msg: string }>()
</script>

<template>
  <div>
    HELLLLLLO {{ props.msg }}
  </div>
</template>
