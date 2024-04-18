import type { ITreeNode, IToken } from './types'

// regex matching: property="value with spaces"
const property = /\s*([^[=]+)="([^"]+)"/g

function _stripToProperties(str: string, type: 'plain' | 'vue'): string {
  switch (type) {
    case 'plain':
      return str.slice(str.indexOf(' ', 1)).replace(/[<>]/g, '').trim()
    case 'vue':
      return str.slice(str.indexOf(' ', 3)).replace(/[{}]/g, '').trim()
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _extractProperties(str: string): Record<string, any> {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: Record<string, any> = {}
  let match: RegExpExecArray | null
  // eslint-disable-next-line no-cond-assign
  while (match = property.exec(str)) {
    result[match[1]] = match[2]
  }
  return result
}

export function createNode(token: IToken): ITreeNode | null {
  switch (token.type) {
    case 'START_PLAIN':
      return {
        category: 'plain',
        tagName: token.value.slice(1, token.value.indexOf(' ')),
        properties: _extractProperties(_stripToProperties(token.value, 'plain')),
        children: [],
      }
    case 'LINE_BREAK':
      return {
        category: 'plain',
        tagName: 'br',
        properties: {},
        children: [],
      }
    case 'VUE':
      return {
        category: 'vue',
        tagName: token.value.slice(3, token.value.indexOf(' ', 3)),
        properties: _extractProperties(_stripToProperties(token.value, 'vue')),
        children: [],
      }
    case 'TEXT':
      return {
        category: 'text',
        tagName: 'text',
        properties: { text: token.value.replace('&nbsp;', '') },
        children: [],
      }
    default:
      return null
  }
}

export function isMatchingEndTag(startTagName: string, endElement: string): boolean {
  const regex = new RegExp(`</${startTagName}(.*?)>`)
  return regex.test(endElement)
}
