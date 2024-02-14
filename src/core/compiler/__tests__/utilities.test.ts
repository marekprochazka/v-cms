import { test, expect } from 'vitest'

import { createNode, isMatchingEndTag } from '../utilities'
import type { ITreeNode, IToken } from '../types'

const TEST_CASES_CREATE_NODE: {i: IToken, o: ITreeNode | null}[] = [
  {
    i: {type: 'START_PLAIN', value: '<p>'},
    o: {category: 'plain', tagName: 'p', properties: {}, children: []}
  },
  {
    i: {type: 'START_PLAIN', value: '<div class="row">'},
    o: {category: 'plain', tagName: 'div', properties: {class: 'row'}, children: []}
  },
  {
    i: {type: 'VUE', value: '{{ vue-comp param="jo" }}'},
    o: {category: 'vue', tagName: 'vue-comp', properties: {param: 'jo'}, children: []}
  },
  {
    i: {type: 'TEXT', value: 'ahoj'},
    o: {category: 'text', tagName: 'text', properties: {text: 'ahoj'}, children: []}
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
    o: {category: 'plain', tagName: 'h1', properties: {class: 'xddd ahoj another', style: 'width: 200px; height: 10px'}, children: []}
  },
  {
    i: {type: 'TEXT', value: 'SOme long and complicated text ___ aincluding some radnogm characters'},
    o: {category: 'text', tagName: 'text', properties: {text: 'SOme long and complicated text ___ aincluding some radnogm characters'}, children: []}
  },
  {
    i: {type: 'TEXT', value: '&nbsp;'},
    o: {category: 'text', tagName: 'text', properties: {text: ''}, children: []}

  }
]

test('testCreateNode', () => {
  for (const { i, o } of TEST_CASES_CREATE_NODE) {
    const result = createNode(i)
    expect(result).toEqual(o)
  }
})


const TEST_CASES_IS_MATCHING_END_TAG: {i: {s: string, e: string}, o: boolean}[] = [
  {
    i: {s: 'p', e: '</p>'}, o: true
  },
  {
    i: {s: 'div', e: '</div>'}, o: true
  },
  {
    i: {s: 'h1', e: '</h1>'}, o: true
  },
  {
    i: {s: 'h1', e: '</h2>'}, o: false
  },
  {
    i: {s: 'div', e: '</p>'}, o: false
  },
  {
    i: {s: 'p', e: '</div>'}, o: false
  },
  {
    i: {s: 'h1', e: '</div>'}, o: false
  },
  {
    i: {s: 'div', e: '</div class="row mx-2" @click="() => doSomeMagicLol($event)">'}, o: true
  }
  ]

test('testIsMatchingEndTag', () => {
  for (const { i, o } of TEST_CASES_IS_MATCHING_END_TAG) {
    const result = isMatchingEndTag(i.s, i.e)
    expect(result).toEqual(o)
  }
}
)

