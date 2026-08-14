import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createBrandGuideAssets } from '@happydesigns/id'
import { cssVariablesAdapter } from '@happydesigns/id/adapters/css-variables'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { happydesignsBrandGuide, brandGuide, happydesignsRuntimeAssets } from '../app/utils/brand-guide'
import {
  cssVariables,
  happydesignsBrandTheme,
  happydesignsSemanticColors,
  happydesignsUiConfig
} from '../app/utils/brand-theme'
import { happydesignsBrand } from '../app/utils/brand'
import { createRuntimeLayerFiles } from '../scripts/runtime-layer'

describe('neutral brand definition', () => {
  it('preserves the happydesigns palette, roles, typography, and runtime assets', () => {
    expect(happydesignsBrand.colors.sand[150]).toBe('#F1ECE6')
    expect(happydesignsBrand.roles.signature).toBe('coral')
    expect(happydesignsBrand.typography.sans).toBeTruthy()
    expect(happydesignsBrand.assets.logos.signature.src).toBe('/logos/happydesigns-signature.svg')
  })
})

describe('adapter outputs', () => {
  it('maps the neutral definition into the complete Nuxt UI theme', () => {
    expect(happydesignsBrandTheme.ui?.colors).toEqual(happydesignsSemanticColors)
    expect(happydesignsBrandTheme.cssVariables).toEqual(cssVariables)
    expect(happydesignsBrandTheme.typography).toEqual(happydesignsBrand.typography)

    for (const [component, config] of Object.entries(happydesignsUiConfig)) {
      expect(happydesignsBrandTheme.ui?.[component]).toEqual(config)
    }
  })

  it('keeps the committed CSS equal to the CSS adapter output', () => {
    const output = cssVariablesAdapter.transform(happydesignsBrand, {
      prefix: '',
      selector: '@theme static',
      includeRoles: false
    })
    const expectedCss = `/* Generated from app/utils/brand-data.json. Do not edit by hand. */\n${output.css}\n`
    const generatedCss = readFileSync(resolve(process.cwd(), 'app/assets/css/brand.generated.css'), 'utf8')

    expect(generatedCss).toBe(expectedCss)
    expect(output.variables['--color-sand-150']).toBe('#F1ECE6')
  })
})

describe('runtime and guide separation', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.resetModules()
  })

  it('derives guide facts from the neutral definition and adapter output', () => {
    expect(happydesignsBrandGuide).not.toHaveProperty('ui')
    expect(happydesignsBrandGuide.palette).toEqual(happydesignsBrand.colors)
    expect(happydesignsBrandGuide.semanticColors).toEqual(happydesignsSemanticColors)
    expect(happydesignsBrandGuide.cssVariables).toEqual(happydesignsBrandTheme.cssVariables)
    expect(happydesignsBrandGuide.typography).toEqual(happydesignsBrandTheme.typography)
    expect(happydesignsRuntimeAssets).toEqual(happydesignsBrand.assets)
    expect(createBrandGuideAssets(brandGuide.assets).logos).toEqual(happydesignsRuntimeAssets.logos)
  })

  it('wires the runtime theme and assets into Nuxt app config', async () => {
    vi.stubGlobal('defineAppConfig', <T>(config: T) => config)

    const { default: appConfig } = await import('../app/app.config')

    expect(appConfig.id.assets).toEqual(happydesignsRuntimeAssets)
    expect(appConfig.id.theme).toEqual(happydesignsBrandTheme)
    expect(appConfig.id.guide).toBeDefined()
  })

  it('keeps the consumer layer generated from runtime contracts without guide content', () => {
    for (const [relativePath, expected] of Object.entries(createRuntimeLayerFiles())) {
      const generated = readFileSync(resolve(process.cwd(), 'runtime', relativePath), 'utf8')

      expect(generated).toBe(expected)
    }

    expect(readFileSync(resolve(process.cwd(), 'runtime/app/brand-runtime.json'), 'utf8')).not.toContain('componentCoverage')
    expect(readFileSync(resolve(process.cwd(), 'runtime/nuxt.config.ts'), 'utf8')).not.toContain('docus')

    for (const asset of Object.values(happydesignsRuntimeAssets.logos)) {
      expect(readFileSync(resolve(process.cwd(), 'runtime/public', asset.src.replace(/^\//, '')))).toBeTruthy()
    }
  })
})
