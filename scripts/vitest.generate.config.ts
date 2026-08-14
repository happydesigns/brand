import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        moduleResolution: 'Bundler'
      }
    }
  },
  test: {
    include: ['scripts/generate-brand-layer.test.ts']
  }
})
