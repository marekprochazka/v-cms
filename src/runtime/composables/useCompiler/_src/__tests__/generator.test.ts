import { test, expect } from 'vitest'
import { type Component, h, shallowRef, type VNode } from 'vue'
import type { ITreeNode } from '../types'
import { generateVNodes } from '../generator'
import type { IComponentInternal } from '../../../types'
import c1 from './dummy-components/c1.vue'
import c2 from './dummy-components/c2.vue'
import c3 from './dummy-components/c3.vue'

const components: Record<string, IComponentInternal> = {
  c1: { shallowRef: shallowRef(c1), props: [] },
  c2: { shallowRef: shallowRef(c2), props: [] },
  c3: { shallowRef: shallowRef(c3), props: [] },
}

const ROOT_INPUT = (children: ITreeNode[]): ITreeNode => {
  return {
    category: 'root',
    tagName: 'root',
    properties: { class: 'body--root' },
    children: children,
  }
}

const PLAIN_INPUT = (type: string, properties: Record<string, string>, children: ITreeNode[]): ITreeNode => {
  return {
    category: 'plain',
    tagName: type,
    properties: properties,
    children: children,
  }
}

const VUE_INPUT = (type: string, properties: Record<string, string>, children: ITreeNode[]): ITreeNode => {
  return {
    category: 'vue',
    tagName: type,
    properties: properties,
    children: children,
  }
}

const TEXT_INPUT = (text: string): ITreeNode => {
  return {
    category: 'text',
    tagName: 'text',
    properties: { text },
    children: [],
  }
}

const ROOT_OUTPUT = (children: VNode[]): VNode => {
  return h('div', { class: 'body--root' }, children.length ? children : undefined)
}

const PLAIN_OUTPUT = (type: string, properties: Record<string, string>, children: VNode[]): VNode => {
  return h(type, properties, children.length ? children : undefined)
}

const VUE_OUTPUT = (type: Component, properties: Record<string, string>, children: VNode[]): VNode => {
  return h(shallowRef(type), properties, children.length ? children : undefined)
}

const TEXT_OUTPUT = (text: string): VNode => {
  return h('span', {}, text)
}

const TEST_CASES: { i: ITreeNode, o: VNode }[] = [
  {

    i: ROOT_INPUT([]),
    o: ROOT_OUTPUT([]),
  },
  {
    i: ROOT_INPUT([PLAIN_INPUT('p', {}, [TEXT_INPUT('ahoj')])]),
    o: ROOT_OUTPUT([PLAIN_OUTPUT('p', {}, [TEXT_OUTPUT('ahoj')])]),
  },
  {
    i: ROOT_INPUT([VUE_INPUT('c1', {}, [])]),
    o: ROOT_OUTPUT([VUE_OUTPUT(c1, {}, [])]),
  },
  {
    i: ROOT_INPUT([PLAIN_INPUT('p', {}, [TEXT_INPUT('ahoj')]), VUE_INPUT('c1', {}, []), VUE_INPUT('c2', {}, []), VUE_INPUT('c3', {}, []), TEXT_INPUT('aaa')]),
    o: ROOT_OUTPUT([PLAIN_OUTPUT('p', {}, [TEXT_OUTPUT('ahoj')]), VUE_OUTPUT(c1, {}, []), VUE_OUTPUT(c2, {}, []), VUE_OUTPUT(c3, {}, []), TEXT_OUTPUT('aaa')]),
  },
  // <p>aaa</p><br>
  {
    i: ROOT_INPUT([PLAIN_INPUT('p', {}, [TEXT_INPUT('aaa')]), PLAIN_INPUT('br', {}, [])]),
    o: ROOT_OUTPUT([PLAIN_OUTPUT('p', {}, [TEXT_OUTPUT('aaa')]), PLAIN_OUTPUT('br', {}, [])]),
  },

]

test('testCreateVNode', () => {
  for (const { i, o } of TEST_CASES) {
    const result = generateVNodes(i, components)
    expect(result).toEqual(o)
  }
})
