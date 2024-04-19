<template>
  <div>
    Nuxt module playground!
    <!--    <v-nodes /> -->
    {{ htmlContent }}
    <component
      :is="displayComp"
      :key="k"
    />
    <cms-editor
      :key="kEd"
      v-model="htmlContent"
      :toolbar-extra-classes="['broo', 'aaa']"
      :toolbar-options-custom="[{ handler: doAppend, text: 'Append', classes: ['a', 'b', 'c'] }]"
      toolbar-options-native="all"
    />
    <button @click="doAppend">
      Append
    </button>
  </div>
</template>

<script setup lang="ts">
import TestComp from '~/test-comp.vue'

const htmlContent = ref('<p>aaaa</p><p>bbbb</p><p>ccccc</p> {{ T msg="hello" }}')
const k = ref(0)
const kEd = ref(0)
const { compile } = useCompiler({ components: { T: TestComp } })
const vNodes = compile('<p>aaaa</p><p>bbbb</p><p>ccccc</p>')
const displayComp = ref(vNodes)

const doAppend = () => {
  htmlContent.value += '<p>dddd</p>'
  kEd.value++
}

watch(htmlContent, () => {
  console.log('shoot')
  displayComp.value = compile(htmlContent.value)
  k.value++
})
</script>
