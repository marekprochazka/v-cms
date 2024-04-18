type NodeCategory = 'plain' | 'vue' | 'text' | 'root'

type TypeToken = 'START_PLAIN' | 'END_PLAIN' | 'LINE_BREAK' | 'VUE' | 'TEXT' | 'EPSILON'
interface IToken {
  type: TypeToken
  value: string
}

interface ITreeNode {
  category: NodeCategory
  tagName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  properties: Record<string, any>
  children: ITreeNode[]
}

export type { ITreeNode, IToken, NodeCategory, TypeToken }
