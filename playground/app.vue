<template>
  <div>
    Nuxt module playground!
    <!--    <component :is="vNodes" /> -->
    <cms-editor v-model="htmlContent" />
  </div>
</template>

<script setup>
// import TestComp from '~/test-comp.vue'

const htmlContent = ref('')

htmlContent.value = `
  <div>
    <h1>Heading 1</h1>
    <p>Paragraph 1</p>
    {{ test-comp msg="Hello from playground!" }}
  </div>
`

// const { vNodes } = useCompiler({
//   content: htmlContent.value,
//   components: { 'test-comp': TestComp },
// })
</script>
