import { type Component, type ShallowRef, shallowRef } from 'vue'
import type { CRUD, IContentDetailProps, IContentBase } from '@/core/types'



export function useCMS<Post extends IContentBase>(actions: CRUD<Post>, customComponents?: Record<string, Component>) {

  const BASE_COMPONENTS: Record<string, ShallowRef<Component>> = {

  }

  function _safeRefComponents(components: Record<string, Component> | undefined): Record<string, ShallowRef> | null {
    if (!components) return null
    const refs: Record<string, ShallowRef> = {}
    for (const key in components) {
      refs[key] = shallowRef(components[key])
    }
    return refs
  }

  const COMPONENTS = {...BASE_COMPONENTS, ...(_safeRefComponents(customComponents) ?? {})}



  async function getContentBodyProps(id: string): Promise<IContentDetailProps | null> {
    const data = await actions.readDetail(id)
    if (!data) return null
    return {
      data: data,
      components: COMPONENTS
    }
  }

  return {
    getContentBodyProps
  }
}