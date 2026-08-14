import { expect, it } from 'vitest'
import { createRuntimeLayerFiles, writeRuntimeLayer } from './runtime-layer'

it('generates the consumer runtime layer', () => {
  writeRuntimeLayer()

  expect(Object.keys(createRuntimeLayerFiles())).toEqual([
    'app/brand-runtime.json',
    'app/assets/css/tokens.generated.css',
    'app/assets/css/theme.generated.css'
  ])
})
