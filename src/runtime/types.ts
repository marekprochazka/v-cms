// import type { ShallowRef } from '@vue/reactivity'
import type { Component } from 'vue'

interface IComponentInternal {
  shallowRef: Component // changed during transition to nuxt
  props: string[]
}

interface IUseCompilerProps {
  content: string
  components: Record<string, Component>
}

export type { IComponentInternal, IUseCompilerProps }
