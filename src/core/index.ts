import { useCMS } from './composables/useCMS'
import Editor from './components/editor/wrapper.vue'
import ContentBody from './components/content/body.vue'
import {CRUD, IContentBase, IComponentInternal, IContentDetailProps, IEditorProps } from './types'

export { useCMS, Editor, ContentBody }

export type { CRUD,  IContentBase, IContentDetailProps, IComponentInternal, IEditorProps}
