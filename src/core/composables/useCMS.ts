import {type Component, shallowRef} from 'vue'
import type {CRUD, IContentDetailProps, IContentBase, IComponentInternal, IEditorProps, ICMSData} from '@/core/types'
import type {EditorConfig} from '@ckeditor/ckeditor5-core'



export function useCMS<C extends IContentBase>(config: ICMSData<C>) {

    const BASE_COMPONENTS: Record<string, IComponentInternal> = {}

    function _safeRefComponents(components: Record<string, Component> | undefined): Record<string, IComponentInternal> | null {
        if (!components) return null
        const refs: Record<string, IComponentInternal> = {}
        for (const key in components) {
            refs[key] = {
                shallowRef: shallowRef(components[key]),
                // @ts-ignore
                props: Object.keys(components[key].props ?? {})
            }
        }
        return refs
    }

    const COMPONENTS = {...BASE_COMPONENTS, ...(_safeRefComponents(config.customComponents) ?? {})}


    async function getContentBodyProps(id: string): Promise<IContentDetailProps> {
        return {
            content: (await config.getContent(id))?.content ?? '',
            components: COMPONENTS
        }
    }

    function getEditorProps(): IEditorProps {
        return {
            components: COMPONENTS,
            customConfig: config.editorConfig ?? {}
        }
    }


    return {
        getContentBodyProps,
        getEditorProps
    }
}