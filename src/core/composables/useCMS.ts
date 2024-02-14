import { Component } from 'vue'
import type { CRUD, IContentDetailProps, IContentBase } from '@/core/types'





export function useCMS<Post extends IContentBase>(actions: CRUD<Post>, customComponents?: Record<string, Component>) {

  const BASE_COMPONENTS = {

  }

  async function getContentBodyProps(id: string): Promise<IContentDetailProps | null> {
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