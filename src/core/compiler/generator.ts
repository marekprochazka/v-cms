
import { type Component, h, type VNode } from 'vue'
import { ITreeNode } from '@/core/compiler/types'


export function vNodeGenerator(tree: ITreeNode, componentsMap: Record<string, Component>): VNode {
  if (tree.children.length === 0) {
    switch (tree.category) {
      case 'text':
        return h('span', {}, tree.properties.text)
      case 'plain':
        return h(tree.type, tree.properties, [])
      case 'vue':
        const component = componentsMap[tree.type]
        if (!component) {
          throw new Error(`Component ${tree.type} not found`)
        }
        return h(component, tree.properties, [])
      case 'root':
        return h('div', {class: "post--root"}, [])
    }
  }

  const children = tree.children.map((child) => vNodeGenerator(child, componentsMap))
  switch (tree.category) {
    case 'text':
      return h('span', {}, children)
    case 'plain':
      return h(tree.type, tree.properties, children)
    case 'vue':
      const component = componentsMap[tree.type]
      if (!component) {
        throw new Error(`Component ${tree.type} not found`)
      }
      return h(component, tree.properties, children)
    case 'root':
      return h('div', {class: "post--root"}, children)
  }

}