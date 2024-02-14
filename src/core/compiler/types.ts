type NodeCategory = 'plain' | 'vue' | 'text' |'root'

type TypeToken = 'START_PLAIN' | 'END_PLAIN' | 'VUE' | 'TEXT' | 'EPSILON'
interface IToken {
  type: TypeToken
  value: string
}

interface ITreeNode {
  category: NodeCategory,
  tagName: string,
  properties: Record<string, any>
  children: ITreeNode[]
}

export type { ITreeNode, IToken, NodeCategory, TypeToken }