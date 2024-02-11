import vue from '@vitejs/plugin-vue'
// @ts-ignore
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      // @ts-ignore
      entry: {'v-cms-core': path.resolve(__dirname, 'src/core/index.ts'), 'v-cms-utils': path.resolve(__dirname, 'src/utils/index.ts')},
    },
    rollupOptions: {
      // @ts-ignore
      external: ['vue', path.resolve(__dirname, 'src/playground/*'), path.resolve(__dirname, 'src/playground/main.ts')],
      input: {
        // @ts-ignore
        'v-cms-core': path.resolve(__dirname, 'src/core/index.ts'),
        // @ts-ignore
        'v-cms-utils': path.resolve(__dirname, 'src/utils/index.ts')
      },
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      // @ts-ignore
      '@': path.resolve(__dirname, 'src')
    }
  }
})