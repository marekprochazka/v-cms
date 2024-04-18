import { defineNuxtModule, addPlugin, createResolver, addComponentsDir, addImportsDir } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'v-cms',
    configKey: 'vCMS',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    components: {},
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    await addComponentsDir(
      {
        path: resolver.resolve('./runtime/components/cms/editor'), // path of components
        pathPrefix: false, // Prefix component name by its path.
        prefix: '', // Prefix all matched components.
        global: true, // Registers components to be globally available.
      },
    )
    console.log('Adding imports')
    // expose components _options to the runtime

    addImportsDir(
      resolver.resolve('./runtime/composables/useCompiler'),
    )
  },
})
