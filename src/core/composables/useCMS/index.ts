import { Component } from 'vue'
import type { CRUD, IPostBase } from '@/core/types'



export function useCMS<Post extends IPostBase>(actions: CRUD<Post>, customComponents?: Component[]) {
  return {
    cms: 'Content Management System'
  }
}