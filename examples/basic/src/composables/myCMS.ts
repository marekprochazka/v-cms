import { useCMS } from '@mark.walker/v-cms/core'

import myCrudActions from '../api/my-crud-actions.ts'
import mySpecialComponent from '../components/my-special-component.vue'
import { IMyContentShape } from '../types.ts'



export function useMyCMS() {
  const components = {
    'special': mySpecialComponent
  }

  return useCMS<IMyContentShape>(myCrudActions, components)
}