
import { type Component, h, type VNode } from 'vue'
import { ITreeNode } from '@/core/compiler/types'


export function generateVNodes(tree: ITreeNode, componentsMap: Record<string, Component>): VNode {
  // Base case of recursion
  if (tree.children.length === 0) {
    switch (tree.category) {
      case 'text':
        return h('span', {},  tree.properties.text)
      case 'plain':
        return h(tree.tagName, tree.properties)
      case 'vue':
        const component = componentsMap[tree.tagName]
        if (!component) {
          throw new Error(`Component ${tree.tagName} not found`)
        }
        return h(component, tree.properties)
      case 'root':
        return h('div', {class: "post--root"})
    }
  }

  // Recursive descent
  const children = tree.children.map((child) => generateVNodes(child, componentsMap))

  // Handle current node
  switch (tree.category) {
    case 'text':
      return h('span', {},  children)
    case 'plain':
      return h(tree.tagName, tree.properties,  children)
    case 'vue':
      const component = componentsMap[tree.tagName]
      if (!component) {
        throw new Error(`Component ${tree.tagName} not found`)
      }
      return h(component, tree.properties,  children)
    case 'root':
      return h('div', {class: "post--root"}, children)
  }

}