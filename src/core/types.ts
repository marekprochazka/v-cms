import { Component } from 'vue'


interface IContentBase {
  id: string,
  content: string
}

interface CRUD<Post> {
  create: (data: Post) => Promise<Post>,
  readList: (filters?: any) => Promise<Post[]>,
  readDetail: (id: string) => Promise<Post | null> ,
  update: (id: string, data: Post) => Promise<Post>,
  delete: (id: string) => Promise<void>
}

interface IContentDetailProps {
  data: IContentBase,
  components: Record<string, Component>
}



export type { CRUD,  IContentBase, IContentDetailProps}

