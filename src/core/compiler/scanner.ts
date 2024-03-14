import {IToken} from '@/core/compiler/types'


function _handleHTML(html: string): { token: IToken, offset: number } {
    if (html[1] === '/') {
        return {
            token: {type: 'END_PLAIN', value: html.slice(0, html.indexOf('>') + 1)},
            offset: html.indexOf('>') + 1
        }

    }
    // check for <br>
    if (html.slice(0, 4) === '<br>') {
        return {
            token: {type: 'LINE_BREAK', value: '<br>'},
            offset: 4
        }
    }

    return {
        token: {type: 'START_PLAIN', value: html.slice(0, html.indexOf('>') + 1)},
        offset: html.indexOf('>') + 1

    }
}

function _handleVUE(html: string): { token: IToken, offset: number } {
    return {
        token: {type: 'VUE', value: html.slice(0, html.indexOf('}}') + 2)},
        offset: html.indexOf('}}') + 2
    }
}

function _handleTEXT(raw: string): { token: IToken, offset: number } {
    const closestPlain = raw.indexOf('<')
    const closestVue = raw.indexOf('{{')
    if (closestPlain === -1 && closestVue === -1) {
        return {token: {type: 'TEXT', value: raw}, offset: raw.length}
    }
    if (closestPlain === -1) {
        return {token: {type: 'TEXT', value: raw.slice(0, closestVue)}, offset: closestVue}
    } else if (closestVue === -1) {
        return {token: {type: 'TEXT', value: raw.slice(0, closestPlain)}, offset: closestPlain}
    }
    return {
        token: {type: 'TEXT', value: raw.slice(0, Math.min(closestPlain, closestVue))},
        offset: Math.min(closestPlain, closestVue)
    }
}

/**
 * @description
 * Returns next token
 */
function _nextToken(raw: string): { token: IToken, offset: number } {
    const START = 0
    if (raw[START] === '<') {
        return _handleHTML(raw)
    } else if (raw[START] === '{') {
        if (raw[START + 1] === '{') {
            return _handleVUE(raw)
        }
    }
    return _handleTEXT(raw)
}


/**
 * @description
 * Scans the raw content of plain HTML and Vue pseudo-component representation, returns a generator of tokens.
 * @param raw -> Valid representation of HTML with Vue pseudo-components.
 */
export function* scan(raw: string): Generator<IToken> {
    let ptr = 0
    while (ptr < raw.length) {
        const {token, offset} = _nextToken(raw.slice(ptr))
        ptr += offset
        yield token
    }
    yield {type: 'EPSILON', value: ''}
}