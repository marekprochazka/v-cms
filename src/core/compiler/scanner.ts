import { IToken } from '@/core/compiler/types'


function _handleHTML(html: string): { token: IToken, offset: number } {
  if (html[1] === '/') {
    return {
      token: { type: 'END_PLAIN', value: html.slice(0, html.indexOf('>') + 1) },
      offset: html.indexOf('>') + 1
    }

  }
  return {
    token: { type: 'START_PLAIN', value: html.slice(0, html.indexOf('>') + 1) },
    offset: html.indexOf('>') + 1

  }
}

function _handleVUE(html: string): { token: IToken, offset: number } {
  return {
    token: { type: 'VUE', value: html.slice(0, html.indexOf('}}') + 2) },
    offset: html.indexOf('}}') + 2
  }
}

function _handleTEXT(html: string): { token: IToken, offset: number } {
  const closestPlain = html.indexOf('<')
  const closestVue = html.indexOf('{{')
  if (closestPlain === -1 && closestVue === -1) {
    return { token: { type: 'TEXT', value: html }, offset: html.length }
  }
  if (closestPlain === -1) {
    return { token: { type: 'TEXT', value: html.slice(0, closestVue) }, offset: closestVue }
  } else if (closestVue === -1) {
    return { token: { type: 'TEXT', value: html.slice(0, closestPlain) }, offset: closestPlain }
  }
  return {
    token: { type: 'TEXT', value: html.slice(0, Math.min(closestPlain, closestVue)) },
    offset: Math.min(closestPlain, closestVue)
  }
}

/**
 * @description
 * Returns next token
 */
function _nextToken(htmlTail: string): { token: IToken, offset: number } {
  const START = 0
  if (htmlTail[START] === '<') {
    return _handleHTML(htmlTail)
  } else if (htmlTail[START] === '{') {
    if (htmlTail[START + 1] === '{') {
      return _handleVUE(htmlTail)
    }
  }
  return _handleTEXT(htmlTail)
}


/**
 * @description
 * Scans the raw HTML containing plain HTML and Vue pseudo-component representation, returns a generator of tokens.
 * @param rawHtml -> Valid representation of HTML with Vue pseudo-components.
 */
export function* scan(rawHtml: string): Generator<IToken> {
  let ptr = 0
  while (ptr < rawHtml.length) {
    const { token, offset } = _nextToken(rawHtml.slice(ptr))
    ptr += offset
    yield token
  }
  yield { type: 'EPSILON', value: '' }
}