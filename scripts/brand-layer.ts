import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createThemeCssVars } from '@happydesigns/id'
import { cssVariablesAdapter } from '@happydesigns/id/adapters/css-variables'
import { happydesignsRuntimeAssets } from '../src/brand/brand-guide'
import { happydesignsBrandTheme } from '../src/brand/brand-theme'
import { happydesignsBrand } from '../src/brand/brand'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')

export function createBrandLayerFiles() {
  const palette = cssVariablesAdapter.transform(happydesignsBrand, {
    prefix: '',
    selector: '@theme static',
    includeRoles: false
  })

  return {
    'app/brand.generated.json': `${JSON.stringify({
      theme: happydesignsBrandTheme,
      assets: happydesignsRuntimeAssets
    }, null, 2)}\n`,
    'app/assets/css/tokens.generated.css': `/* Generated from the neutral happydesigns brand definition. Do not edit by hand. */\n${palette.css}\n`,
    'app/assets/css/theme.generated.css': `/* Generated from the Nuxt UI adapter output. Do not edit by hand. */\n${createThemeCssVars(happydesignsBrandTheme)}\n`
  } as const
}

export function writeBrandLayer() {
  for (const [relativePath, contents] of Object.entries(createBrandLayerFiles())) {
    const output = resolve(rootDir, relativePath)
    mkdirSync(dirname(output), { recursive: true })
    writeFileSync(output, contents, 'utf8')
  }
}
