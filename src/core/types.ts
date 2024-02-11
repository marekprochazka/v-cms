
import { z } from 'zod'
import { Component } from 'vue'

const oPostStatus = z.object({
  identifier: z.string(),
  display_name: z.string()
})

type IPostStatus = z.infer<typeof oPostStatus>

const oPostBase = z.object({
  id: z.string().optional(),
  content: z.string(),
  title: z.string(),
  seo_name: z.string(),
  seo_description: z.string(),
  seo_keywords: z.string().optional(),
  status: oPostStatus
})

type IPostBase = z.infer<typeof oPostBase>

interface CRUD<Post> {
  create: (data: Post) => Promise<Post>,
  readList: (filters?: any) => Promise<Post[]>,
  readDetail: (id: string) => Promise<Post | null> ,
  update: (id: string, data: Post) => Promise<Post>,
  delete: (id: string) => Promise<void>
}

interface IContentBodyProps {
  data: IPostBase,
  components: Record<string, Component>
}



export { oPostStatus, oPostBase }
export type { IPostStatus, IPostBase, CRUD, IContentBodyProps }

