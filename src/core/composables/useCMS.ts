import { Component } from 'vue'
import type { CRUD, IContentBodyProps, IPostBase } from '@/core/types'





export function useCMS<Post extends IPostBase>(actions: CRUD<Post>, customComponents?: Record<string, Component>) {

  const BASE_COMPONENTS = {

  }

  async function getContentBodyProps(id: string): Promise<IContentBodyProps | null> {
    const data = await actions.readDetail(id)
    if (!data) return null
    return {
      data: data,
      components: { ...BASE_COMPONENTS, ...customComponents}
    }
  }

  return {
    getContentBodyProps
  }
}