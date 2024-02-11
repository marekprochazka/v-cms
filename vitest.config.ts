import {defineConfig} from 'vitest/config'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    alias: {
      '@': '/src'
    },
    coverage: {
      provider: 'v8',
      exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '**/playground/**', '**/src/App.vue', '**/src/main.ts', '**/*.d.ts' ],
    },
  }
})