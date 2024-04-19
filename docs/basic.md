# Basic Usage

## Editor

```vue
<script setup lang="ts">
  const content = ref('');
</script>

<template>
   <cms-editor
      v-model="content"
      :toolbar-extra-classes="[]"
      :toolbar-options-custom="[]"
      toolbar-options-native="all"
    />
</template>
```
## Compiler



```typescript
import TestComp from '~/test-comp.vue'
const { compile } = useCompiler({ components: { T: TestComp } })
const result = compile('<p>aaaa</p><p>bbbb</p><p>ccccc</p>')


```
