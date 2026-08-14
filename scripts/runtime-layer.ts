import { cpSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createThemeCssVars } from '@happydesigns/id'
import { cssVariablesAdapter } from '@happydesigns/id/adapters/css-variables'
import { happydesignsRuntimeAssets } from '../app/utils/brand-guide'
import { happydesignsBrandTheme } from '../app/utils/brand-theme'
import { happydesignsBrand } from '../app/utils/brand'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')

export function createRuntimeLayerFiles() {
  const palette = cssVariablesAdapter.transform(happydesignsBrand, {
    prefix: '',
    selector: '@theme static',
    includeRoles: false
  })

  return {
    'app/brand-runtime.json': `${JSON.stringify({
      theme: happydesignsBrandTheme,
      assets: happydesignsRuntimeAssets
    }, null, 2)}\n`,
    'app/assets/css/tokens.generated.css': `/* Generated from the neutral happydesigns brand definition. Do not edit by hand. */\n${palette.css}\n`,
    'app/assets/css/theme.generated.css': `/* Generated from the Nuxt UI adapter output. Do not edit by hand. */\n${createThemeCssVars(happydesignsBrandTheme)}\n`
  } as const
}

export function writeRuntimeLayer() {
  const runtimeDir = resolve(rootDir, 'runtime')

  for (const [relativePath, contents] of Object.entries(createRuntimeLayerFiles())) {
    const output = resolve(runtimeDir, relativePath)
    mkdirSync(dirname(output), { recursive: true })
    writeFileSync(output, contents, 'utf8')
  }

  cpSync(resolve(rootDir, 'public/logos'), resolve(runtimeDir, 'public/logos'), {
    recursive: true
  })
  cpSync(resolve(rootDir, 'public/app-icon.png'), resolve(runtimeDir, 'public/app-icon.png'))
  cpSync(resolve(rootDir, 'public/favicon.svg'), resolve(runtimeDir, 'public/favicon.svg'))
}
