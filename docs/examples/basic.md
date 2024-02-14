# Basic use example

## Implement generic composable
_@/composables/myCMS.ts_
```typescript 
import { useCMS } from '@mark.walker/v-cms/core'

import myCrudActions from '@/api/myCrudActions'
import mySpecialComponent from '@/components/mySpecialComponent.vue'

interface IMyContentShape {
  id: string
  content: string
  someOtherField: string
}



export function useMyCMS() {
  const components = {
    'special': mySpecialComponent
  }
  
  return useCMS<IMyContentShape>(myCrudActions, components)
}

```

## Create editor view
_@/views/MyEditor.vue_
```vue
<script setup lang="ts">
  import {ref} from 'vue'
  import { useMyCMS } from '@/composables/myCMS'
  import { Editor } from '@mark.walker/v-cms/core'
  
  const { getEditorProps } = useMyCMS()
  
  const data = ref<string>('')

    
</script>

<template>
  <Editor v-model="data" v-bind="getEditorProps(data)" />
</template>

```

## Display rendered content

_@/views/MyContent.vue_
```vue
<script setup lang="ts">
  import { ref } from 'vue'
  import { ContentBody } from '@mark.walker/v-cms/core'
  import type { IContentDetailProps } from '@mark.walker/v-cms/core'ype

  import { useMyCMS } from '@/composables/myCMS'
  
const bodyProps = ref<IContentDetailProps | null>(null)

async function init() {
    const { getDetailProps } = useMyCMS()
    bodyProps.value = await getDetailProps()
}
 
init()
  
</script>

<template>
  <ContentBody v-if="bodyProps" v-bind="bodyProps" />
</template>
```