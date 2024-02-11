import type { INode, IToken } from '@/core/compiler/types'


// regex matching: property="value with spaces"
const property = /\s*([^[=]+)="([^"]+)"/g;

function _stripToProperties(str: string, type: 'plain' | 'vue'): string {
  switch (type) {
    case 'plain':
      return str.slice(str.indexOf(' ', 1)).replace(/[<>]/g, '').trim()
    case 'vue':
      return str.slice(str.indexOf(' ', 3)).replace(/[{}]/g, '').trim()
  }
}

function _extractProperties(str: string): Record<string, any> {
  const result: Record<string, any> = {  }
  let match: RegExpExecArray | null
  while (match = property.exec(str)) {
    result[match[1]] = match[2]
  }
  return result
}


export function createNode(token: IToken): INode | null {
  switch (token.type) {
    case 'START_PLAIN':
      return {
        category: 'plain',
        type: token.value.slice(1, token.value.indexOf(' ')),
        properties: _extractProperties(_stripToProperties(token.value, 'plain')),
        children: []
      }
    case 'VUE':
      return {
        category: 'vue',
        type: token.value.slice(3, token.value.indexOf(' ', 3)),
        properties: _extractProperties(_stripToProperties(token.value, 'vue')),
        children: []
      }
    case 'TEXT':
      return {
        category: 'text',
        type: 'text',
        properties: { text: token.value },
        children: []
      }
    default:
      return null

  }
}