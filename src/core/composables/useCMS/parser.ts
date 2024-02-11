import { INode, IToken } from '@/core/types'
import { scan } from '@/core/composables/useCMS/scanner'
import { Stack } from '@/core/structures/stack'
import { createNode } from '@/core/composables/useCMS/utilities'


const EPS: IToken = { type: 'EPSILON', value: '' }


export function parse(raw: string): INode {
  const root: INode = {
    category: 'root',
    type: 'root',
    properties: {},
    children: []
  }
  const generator = scan(raw)

  const stack = new Stack<INode>()
  stack.push(root)
  let token: IToken
  do {
    token = generator.next().value
    switch (token.type) {
      case 'START_PLAIN':
        const newNode = createNode(token)
        console.log(stack.top)
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
  } while (token.type !== 'EPSILON')
  return root
}