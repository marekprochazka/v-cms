import type { Component, ShallowRef } from 'vue'
import type { EditorConfig } from '@ckeditor/ckeditor5-core'


interface IContentBase {
  id: string,
  content: string
}

interface CRUD<Content> {
  create: (data: Content) => Promise<Content>,
  readList: (filters?: any) => Promise<Content[]>,
  readDetail: (id: string) => Promise<Content | null> ,
  update: (id: string, data: Content) => Promise<Content>,
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
  customConfig?: EditorConfig
}



export type { CRUD,  IContentBase, IContentDetailProps, IComponentInternal, IEditorProps}

