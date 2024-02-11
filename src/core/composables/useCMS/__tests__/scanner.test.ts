import { test, expect } from 'vitest'

import { scan } from '../scanner'

const testPairs = [
  {
    i: '<p> ahoj </p>',
    o: [{ type: 'START_PLAIN', 'value': '<p>' }, { type: 'TEXT', 'value': ' ahoj ' }, {
      type: 'END_PLAIN',
      'value': '</p>'
    }]
  },
  { i: '{{ ahoj }}', o: [{ type: 'VUE', 'value': '{{ ahoj }}' }] },
  { i: 'ahoj', o: [{ type: 'TEXT', 'value': 'ahoj' }] },
  {
    i: '<p> ahoj {{ ahoj }} </p>',
    o: [{ type: 'START_PLAIN', 'value': '<p>' }, { type: 'TEXT', 'value': ' ahoj ' }, {
      type: 'VUE',
      'value': '{{ ahoj }}'
    }, { type: 'TEXT', 'value': ' ' }, { type: 'END_PLAIN', 'value': '</p>' }]
  },
  {
    i: '<h1 class="xddd">Titlelol</h1>',
    o: [{ type: 'START_PLAIN', 'value': '<h1 class="xddd">' }, {
      type: 'TEXT',
      'value': 'Titlelol'
    }, { type: 'END_PLAIN', 'value': '</h1>' }]
  },
  {
    i: '<div class="row"><div class="col-12">Test: {{ vue-comp param="jo" }}</div></div>',
    o: [{ type: 'START_PLAIN', 'value': '<div class="row">' }, {
      type: 'START_PLAIN',
      'value': '<div class="col-12">'
    }, { type: 'TEXT', 'value': 'Test: ' }, { type: 'VUE', 'value': '{{ vue-comp param="jo" }}' }, {
      type: 'END_PLAIN',
      'value': '</div>'
    }, { type: 'END_PLAIN', 'value': '</div>' }]
  }

]

test('testScan', () => {
  for (const { i, o } of testPairs) {
    const result = Array.from(scan(i))
    expect(result).toEqual(o)
  }
})