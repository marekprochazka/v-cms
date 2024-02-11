import type { ITreeNode, IToken } from '@/core/compiler/types'
import { scan } from '@/core/compiler/scanner'
import { Stack } from '@/core/structures/stack'
import { createNode } from '@/core/compiler/utilities'


const EPS = 'EPSILON'


export function parse(raw: string): ITreeNode {
  const root: ITreeNode = {
    category: 'root',
    type: 'root',
    properties: {},
    children: []
  }
  const generator = scan(raw)

  const stack = new Stack<ITreeNode>()
  stack.push(root)
  let token: IToken
  do {
    token = generator.next().value
    switch (token.type) {
      case 'START_PLAIN':
        const newNode = createNode(token)
        stack.top!.children.push(newNode!)
        stack.push(newNode!)
        break
      case 'END_PLAIN':
        stack.pop()
        break
      case 'VUE':
        stack.top!.children.push(createNode(token)!)
        break
      case 'TEXT':
        stack.top!.children.push(createNode(token)!)
        break
      case 'EPSILON':
        break
    }
  } while (token.type !== EPS)
  return root
}