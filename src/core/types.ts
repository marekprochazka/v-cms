import type {Component, ShallowRef} from 'vue'
import type {EditorConfig} from '@ckeditor/ckeditor5-core'


interface IContentBase {
    id: string,
    content: string | null
}

/**
 * CRUD interface
 * @param CC Create
 * @param CL Read List
 * @param CD Read Detail
 * @param CU Update
 */
interface CRUD<CC, CL, CD, CU> {
    create: (data: any) => Promise<CC>,
    readList: (filters?: any) => Promise<CL[]>,
    readDetail: (id: string) => Promise<CD | null>,
    update: (id: string, data: CU) => Promise<CU | null>,
    delete: (id: string) => Promise<void>
}

interface ICMSData<Content extends IContentBase> {
    getContent(id: string): Promise<Content | null>,

    saveContent(id: string, content: string): Promise<Content | void>,

    customComponents?: Record<string, Component>,
    editorConfig?: EditorConfig,
}

interface IComponentInternal {
    shallowRef: ShallowRef<Component>
    props: string[]
}

interface IContentDetailProps {
    content: string,
    components: Record<string, IComponentInternal>
}

interface IEditorProps {
    components: Record<string, IComponentInternal>
    customConfig: EditorConfig
}


export type {CRUD, IContentBase, IContentDetailProps, IComponentInternal, IEditorProps, ICMSData}

