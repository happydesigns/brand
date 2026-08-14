import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['scripts/generate-runtime-layer.test.ts']
  }
})
