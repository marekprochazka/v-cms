import type { Component, ShallowRef } from 'vue'
import type { EditorConfig } from '@ckeditor/ckeditor5-core'


interface IContentBase {
  id: string,
  content: string
}

interface CRUD<CC, CL, CD, CU> {
  create: (data: any) => Promise<CC>,
  readList: (filters?: any) => Promise<CL[]>,
  readDetail: (id: string) => Promise<CD | null> ,
  update: (id: any, data: Partial<CU> | CU) => Promise<CU | null>,
  delete: (id: string) => Promise<void>
}

interface IComponentInternal {
  shallowRef: ShallowRef<Component>
  props: string[]
}

interface IContentDetailProps {
  content: string,
  components: Record<string, IComponentInternal>
}

interface IEditorProps {
  components: Record<string, IComponentInternal>
  customConfig: EditorConfig
}



export type { CRUD,  IContentBase, IContentDetailProps, IComponentInternal, IEditorProps}

