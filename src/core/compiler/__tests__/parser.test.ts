import { test, expect } from 'vitest'


import type { ITreeNode } from '../types'
import { parse } from '../parser'

const TEST_CASES: { i: string, o: ITreeNode }[] = [
  {
    i: '<p> ahoj </p>',
    o: {
      category: 'root',
      tagName: 'root',
      properties: {},
      children: [
        {
          category: 'plain',
          tagName: 'p',
          properties: {},
          children: [
            {
              category: 'text',
              tagName: 'text',
              properties: { text: ' ahoj ' },
              children: []
            }
          ]
        }
      ]
    }
  }
]

const TEST_CASES_EXCEPTION: { i: string, o: string }[] = [
  {
    i: '<p> ahoj </div>',
    o: 'div'
  },
  {
    i: '<p> ahoj </span> <p> ahoj </p>',
    o: 'span'
  },
  {
    i: '<div><p> aa </div></p>',
    o: 'div'
  },
  {
    i: '<div><div><div><p><span></p></span></div></div></div>',
    o: 'p'
  }
]

test('testParse', () => {
  for (const { i, o } of TEST_CASES) {
    const result = parse(i)
    expect(result).toEqual(o)
  }
})

test('testParseException', () => {
    for (const { i, o } of TEST_CASES_EXCEPTION) {
      expect(() => parse(i)).toThrowError(`</${o}>`)
    }
  }
)