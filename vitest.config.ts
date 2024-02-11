import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      exclude: ['**/node_modules/**', '**/dist/**', '**/coverage/**', '**/playground/**', '**/src/App.vue', '**/src/main.ts', '**/*.d.ts' ],
    },
  }
})