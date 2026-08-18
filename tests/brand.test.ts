import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createBrandGuideAssets, createThemeCssVars } from '@happydesigns/id'
import { cssVariablesAdapter } from '@happydesigns/id/adapters/css-variables'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { happydesignsBrandGuide, brandGuide, happydesignsRuntimeAssets } from '../src/brand/brand-guide'
import {
  cssVariables,
  happydesignsBrandTheme,
  happydesignsSemanticColors,
  happydesignsUiConfig
} from '../src/brand/brand-theme'
import { happydesignsBrand } from '../src/brand/brand'
import { createBrandLayerFiles } from '../scripts/brand-layer'

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

    expect(happydesignsUiConfig.textarea.slots.base).toContain('min-h-24')
    expect(happydesignsUiConfig.prose.pre.slots.filename).toContain('text-xs/6')
  })

  it('keeps generated layer files equal to the adapter outputs', () => {
    const output = cssVariablesAdapter.transform(happydesignsBrand, {
      prefix: '',
      selector: '@theme static',
      includeRoles: false
    })
    const generated = createBrandLayerFiles()

    expect(generated['app/assets/css/tokens.generated.css']).toContain(output.css)
    expect(output.variables['--color-sand-150']).toBe('#F1ECE6')
  })

  it('renders the semantic theme variables for SSR without duplicating them in main CSS', () => {
    const themeCss = createThemeCssVars(happydesignsBrandTheme)
    const mainCss = readFileSync(resolve(process.cwd(), 'app/assets/css/main.css'), 'utf8')

    expect(themeCss).toContain(':root {')
    expect(themeCss).toContain('--ui-bg-elevated: #FDFBF8;')
    expect(themeCss).toContain('--hd-bg-raised: #FFFDFB;')
    expect(themeCss).toContain('.dark {')
    expect(themeCss).toContain('--hd-bg-raised: #383532;')
    expect(themeCss).toContain('--font-sans:')
    expect(mainCss).not.toContain('--hd-bg-raised:')
    expect(mainCss).not.toContain('--hd-text-body:')
  })
})

function relativeLuminance(hex: string) {
  const channels = hex.slice(1).match(/.{2}/g)?.map(value => Number.parseInt(value, 16) / 255) ?? []
  const [red = 0, green = 0, blue = 0] = channels.map(value => (
    value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  ))

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

function contrastRatio(first: string, second: string) {
  const firstLuminance = relativeLuminance(first)
  const secondLuminance = relativeLuminance(second)
  const lighter = Math.max(firstLuminance, secondLuminance)
  const darker = Math.min(firstLuminance, secondLuminance)

  return (lighter + 0.05) / (darker + 0.05)
}

describe('accessible text pairs', () => {
  it.each([
    ['light body', happydesignsBrand.colors.sand[700], happydesignsBrand.colors.warmWhite],
    ['light label', happydesignsBrand.colors.plum[600], happydesignsBrand.colors.warmWhite],
    ['dark body', happydesignsBrand.colors.sand[300], happydesignsBrand.colors.graphite],
    ['dark label', happydesignsBrand.colors.plum[300], happydesignsBrand.colors.graphite]
  ])('keeps the %s text role above WCAG AA', (_name, foreground, background) => {
    expect(contrastRatio(foreground, background)).toBeGreaterThanOrEqual(4.5)
  })
})

describe('public layer and guide separation', () => {
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

  it('applies the public layer app config without guide content', async () => {
    const updateAppConfig = vi.fn()
    vi.stubGlobal('defineNuxtPlugin', <T>(plugin: T) => plugin)
    vi.stubGlobal('updateAppConfig', updateAppConfig)

    const { default: plugin, happydesignsBrandAppConfig: appConfig } = await import('../app/plugins/brand')
    plugin()

    expect(appConfig.id.assets).toEqual(happydesignsRuntimeAssets)
    expect(appConfig.id.theme).toEqual(happydesignsBrandTheme)
    expect(appConfig.id).not.toHaveProperty('guide')
    expect(updateAppConfig).toHaveBeenCalledWith(appConfig)
  })

  it('adds guide content only in the guide app', async () => {
    vi.stubGlobal('defineAppConfig', <T>(config: T) => config)

    const { default: appConfig } = await import('../docs/app/app.config')

    expect(appConfig.id.assets).toEqual(happydesignsRuntimeAssets)
    expect(appConfig.id.guide).toBeDefined()
  })

  it('generates the public package root without guide dependencies', () => {
    for (const [relativePath, expected] of Object.entries(createBrandLayerFiles())) {
      const generated = readFileSync(resolve(process.cwd(), relativePath), 'utf8')

      expect(generated.replaceAll('\r\n', '\n')).toBe(expected.replaceAll('\r\n', '\n'))
    }

    expect(readFileSync(resolve(process.cwd(), 'app/brand.generated.json'), 'utf8')).not.toContain('componentCoverage')
    expect(readFileSync(resolve(process.cwd(), 'nuxt.config.ts'), 'utf8')).not.toContain('docus')
    expect(readFileSync(resolve(process.cwd(), 'docs/nuxt.config.ts'), 'utf8')).toContain('extends: [\'..\', \'@happydesigns/id/nuxt\', \'docus\']')

    for (const asset of Object.values(happydesignsRuntimeAssets.logos)) {
      expect(readFileSync(resolve(process.cwd(), 'public', asset.src.replace(/^\//, '')))).toBeTruthy()
    }
  })
})
