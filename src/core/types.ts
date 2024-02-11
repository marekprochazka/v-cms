
import { z } from 'zod'
import { Component, VNode } from 'vue'

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
  create: (data: Post) => Post,
  readList: (filters?: any) => Post[],
  readDetail: (id: string) => Post,
  update: (id: string, data: Post[]) => Post,
  delete: (id: string) => void
}

interface IElement {
  dataRaw: VNode,
  identifier: string
}

type NodeCategory = 'plain' | 'vue' | 'text' |'root'

type TypeToken = 'START_PLAIN' | 'END_PLAIN' | 'VUE' | 'TEXT' | 'EPSILON'

interface IToken {
  type: TypeToken
  value: string

}

interface INode {
  category: NodeCategory,
  type: string,
  properties: Record<string, any>
  children: INode[]
}

export { oPostStatus, oPostBase }
export type { IPostStatus, IPostBase, CRUD, IElement, INode, IToken, NodeCategory }

