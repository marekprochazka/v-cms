import type { ITreeNode, IToken } from './types'
import { scan } from './scanner'
import { Stack } from './stack'
import { createNode, isMatchingEndTag } from './utilities'
import { InvalidEndTagException } from './exception'

const EPS = 'EPSILON'

export function parse(raw: string): ITreeNode {
  const root: ITreeNode = {
    category: 'root',
    tagName: 'root',
    properties: {},
    children: [],
  }
  const generator = scan(raw)

  // stack representing nesting of HTML tags
  const nestingStack = new Stack<ITreeNode>()
  nestingStack.push(root)

  // last scanned token
  let token: IToken

  do {
    // scan() for token
    token = generator.next().value

    switch (token.type) {
      case 'START_PLAIN':
        // eslint-disable-next-line no-case-declarations
        const newNode = createNode(token)
        nestingStack.top!.children.push(newNode!)
        nestingStack.push(newNode!)
        break
      case 'END_PLAIN':
        if (!isMatchingEndTag(nestingStack.top!.tagName, token.value)) {
          throw new InvalidEndTagException(token.value, `<${nestingStack.top!.tagName}>`)
        }
        nestingStack.pop()
        break
      case 'VUE':
        nestingStack.top!.children.push(createNode(token)!)
        break
      case 'LINE_BREAK':
        nestingStack.top!.children.push(createNode(token)!)
        break
      case 'TEXT':
        nestingStack.top!.children.push(createNode(token)!)
        break
      case 'EPSILON':
        break
    }
  } while (token.type !== EPS)
  return root
}
