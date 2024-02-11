import { test, expect } from 'vitest'

import { createNode } from '../utilities'
import type { ITreeNode, IToken } from '../types'

const testPairs: {i: IToken, o: ITreeNode | null}[] = [
  {
    i: {type: 'START_PLAIN', value: '<p>'},
    o: {category: 'plain', type: 'p', properties: {}, children: []}
  },
  {
    i: {type: 'START_PLAIN', value: '<div class="row">'},
    o: {category: 'plain', type: 'div', properties: {class: 'row'}, children: []}
  },
  {
    i: {type: 'VUE', value: '{{ vue-comp param="jo" }}'},
    o: {category: 'vue', type: 'vue-comp', properties: {param: 'jo'}, children: []}
  },
  {
    i: {type: 'TEXT', value: 'ahoj'},
    o: {category: 'text', type: 'text', properties: {text: 'ahoj'}, children: []}
  },
  {
    i: {type: 'END_PLAIN', value: '</p>'},
    o: null
  },
  {
    i: {type: 'EPSILON', value: ''},
    o: null
  },
  {
    i: {type: 'START_PLAIN', value: '<h1 class="xddd ahoj another" style="width: 200px; height: 10px">'},
    o: {category: 'plain', type: 'h1', properties: {class: 'xddd ahoj another', style: 'width: 200px; height: 10px'}, children: []}
  },
  {
    i: {type: 'TEXT', value: 'SOme long and complicated text ___ aincluding some radnogm characters'},
    o: {category: 'text', type: 'text', properties: {text: 'SOme long and complicated text ___ aincluding some radnogm characters'}, children: []}
  }
]

test('testExtractStartToken', () => {
  for (const { i, o } of testPairs) {
    const result = createNode(i)
    expect(result).toEqual(o)
  }
})