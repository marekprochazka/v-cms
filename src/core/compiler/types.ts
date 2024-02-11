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

export type { INode, IToken, NodeCategory, TypeToken }