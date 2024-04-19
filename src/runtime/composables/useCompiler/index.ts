import type { Component } from 'vue'
import type { IUseCompilerProps, IComponentInternal } from '../../types'
import { generateVNodes } from './_src/generator'
import { parse } from './_src/parser'

export default function useCompiler(props: IUseCompilerProps) {
  const BASE_COMPONENTS: Record<string, IComponentInternal> = {}

  function _safeRefComponents(components: Record<string, Component> | undefined): Record<string, IComponentInternal> | null {
    if (!components) return null
    const refs: Record<string, IComponentInternal> = {}
    for (const key in components) {
      refs[key] = {
        shallowRef: components[key],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        props: Object.keys(components[key].props ?? {}),
      }
    }
    return refs
  }

  const COMPONENTS = { ...BASE_COMPONENTS, ...(_safeRefComponents(props.components) ?? {}) }

  const compile = (raw: string) => generateVNodes(parse(raw), COMPONENTS)

  return {
    compile,
  }
}
