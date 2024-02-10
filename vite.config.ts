import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import _package from "./package.json"

function filePath(path: string): string {
  return fileURLToPath(new URL(path, import.meta.url));
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
   build: {
    copyPublicDir: false,
    outDir: filePath("./dist"),
    lib: {
      entry: filePath("./src/index.ts"),
      formats: ["es", "umd"],
      name: "v-cms",
      fileName: (format) => `v-cms.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: Object.keys(_package.peerDependencies),
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: { vue: "Vue", },
      },
    },
  },

})
