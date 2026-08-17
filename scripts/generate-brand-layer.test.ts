import { expect, it } from 'vitest'
import { createBrandLayerFiles, writeBrandLayer } from './brand-layer'

it('generates the public brand layer', () => {
  writeBrandLayer()

  expect(Object.keys(createBrandLayerFiles())).toEqual([
    'app/brand.generated.json',
    'app/assets/css/tokens.generated.css',
    'app/assets/css/theme.generated.css'
  ])
})
