import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createThemeCssVars } from '@happydesigns/id'
import { cssVariablesAdapter } from '@happydesigns/id/adapters/css-variables'
import { parseStudioDocument } from '@happydesigns/id/studio/core'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')

export function createBrandLayerFiles() {
  const { brand: happydesignsBrand, theme: happydesignsBrandTheme } = parseStudioDocument(readFileSync(resolve(rootDir, 'src/brand/brand.studio.json'), 'utf8'))
  const happydesignsRuntimeAssets = happydesignsBrand.assets
  const palette = cssVariablesAdapter.transform(happydesignsBrand, {
    prefix: '',
    selector: '@theme static',
    includeRoles: false
  })

  return {
    'app/app.config.ts': `// Generated from src/brand/brand.studio.json.\nexport default defineAppConfig(${JSON.stringify({ ui: happydesignsBrandTheme.ui, brand: { name: happydesignsBrandTheme.label, assets: happydesignsRuntimeAssets } }, null, 2).replaceAll('<', '\\u003c')})\n`,
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
    if (!existsSync(output) || readFileSync(output, 'utf8') !== contents) writeFileSync(output, contents, 'utf8')
  }
}
