type NodeCategory = 'plain' | 'vue'

export class NodeInternal {
  public category: NodeCategory
  public type: string
  public properties: Record<string, any>[]
  public children: Node[]

  constructor(category: NodeCategory, type: string, properties: Record<string, any>[], children: Node[]) {
    this.category = category
    this.type = type
    this.properties = properties
    this.children = children
  }


}