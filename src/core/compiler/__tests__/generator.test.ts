import { test, expect } from 'vitest'
import { ITreeNode } from '../types'
import { type Component, h, type VNode } from 'vue'
import { generateVNodes } from '../generator'
import c1 from './dummy-components/c1.vue'
import c2 from './dummy-components/c2.vue'
import c3 from './dummy-components/c3.vue'

const components: Record<string, Component> = {
  c1,
  c2,
  c3
}

const ROOT_INPUT = (children: ITreeNode[]): ITreeNode => {
  return {
    category: 'root',
    type: 'root',
    properties: { class: 'post--root' },
    children: children
  }
}

const PLAIN_INPUT = (type: string, properties: Record<string, string>, children: ITreeNode[]): ITreeNode => {
  return {
    category: 'plain',
    type: type,
    properties: properties,
    children: children
  }
}

const VUE_INPUT = (type: string, properties: Record<string, string>, children: ITreeNode[]): ITreeNode => {
  return {
    category: 'vue',
    type: type,
    properties: properties,
    children: children
  }
}

const TEXT_INPUT = (text: string): ITreeNode => {
  return {
    category: 'text',
    type: 'text',
    properties: { text },
    children: []
  }
}

const ROOT_OUTPUT = (children: VNode[]): VNode => {
  return h('div', { class: 'post--root' }, children.length ? children : undefined)
}

const PLAIN_OUTPUT = (type: string, properties: Record<string, string>, children: VNode[]): VNode => {
  return h(type, properties, children.length ? children : undefined)
}

const VUE_OUTPUT = (type: Component, properties: Record<string, string>, children: VNode[]): VNode => {
  return h(type, properties, children.length ?  children : undefined)
}

const TEXT_OUTPUT = (text: string): VNode => {
  return h('span', {}, text)
}


const TEST_CASES: { i: ITreeNode, o: VNode }[] = [
  {

    i: ROOT_INPUT([]),
    o: ROOT_OUTPUT([])
  },
  {
    i: ROOT_INPUT([PLAIN_INPUT('p', {}, [TEXT_INPUT('ahoj')])]),
    o: ROOT_OUTPUT([PLAIN_OUTPUT('p', {}, [TEXT_OUTPUT('ahoj')])])
  },
  {
    i: ROOT_INPUT([VUE_INPUT('c1', {}, [])]),
    o: ROOT_OUTPUT([VUE_OUTPUT(c1, {}, [])])
  },
  {
    i: ROOT_INPUT([PLAIN_INPUT('p', {}, [TEXT_INPUT('ahoj')]), VUE_INPUT('c1', {}, []), VUE_INPUT('c2', {}, []), VUE_INPUT('c3', {}, []), TEXT_INPUT('aaa')]),
    o: ROOT_OUTPUT([PLAIN_OUTPUT('p', {}, [TEXT_OUTPUT('ahoj')]), VUE_OUTPUT(c1, {}, []), VUE_OUTPUT(c2, {}, []), VUE_OUTPUT(c3, {}, []), TEXT_OUTPUT('aaa')])
  }

]


test('testCreateVNode', () => {
  for (const { i, o } of TEST_CASES) {
    const result = generateVNodes(i, components)
    expect(result).toEqual(o)

  }
})