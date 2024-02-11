import { NodeInternal } from '@/core/structures/tree'



function _getPlainElementType(match: string): string {
  const endIndex = match.indexOf(' ') === -1 ? match.indexOf('>') : match.indexOf(' ')
  return match.slice(1, endIndex)
}

function _getVueElementType(match: string): string {
  const _secondIndex = (source: string, target: string ): number => {
    const firstIndex = source.indexOf(target)
    return source.indexOf(target, firstIndex + 1)
  }
  return match.slice(1, _secondIndex(match, ' '))
}


// export function parseRawToTree(rawHtml: string) : NodeInternal {
//
// }