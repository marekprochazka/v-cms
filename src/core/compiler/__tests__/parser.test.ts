import { test, expect } from 'vitest'


import type { ITreeNode } from '../types'
import { parse } from '../parser'

const TEST_CASES: { i: string, o: ITreeNode }[] = [
  {
    i: '<p> ahoj </p>',
    o: {
      category: 'root',
      type: 'root',
      properties: {},
      children: [
        {
          category: 'plain',
          type: 'p',
          properties: {},
          children: [
            {
              category: 'text',
              type: 'text',
              properties: { text: ' ahoj ' },
              children: []
            }
          ]
        }
      ]
    }
  }
]

test('testParse', () => {
  for (const { i, o } of TEST_CASES) {
    const result = parse(i)
    expect(result).toEqual(o)
  }
})