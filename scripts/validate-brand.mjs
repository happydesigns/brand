import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cssVariablesAdapter } from '@happydesigns/id/adapters/css-variables'
import { happydesignsBrand } from '../app/utils/brand.ts'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const generatedFile = resolve(rootDir, 'app/assets/css/brand.generated.css')
const themeSource = readFileSync(resolve(rootDir, 'app/utils/brand-theme.ts'), 'utf8')
const guideSource = readFileSync(resolve(rootDir, 'app/utils/brand-guide.ts'), 'utf8')
const appConfigSource = readFileSync(resolve(rootDir, 'app/app.config.ts'), 'utf8')
const { css } = cssVariablesAdapter.transform(happydesignsBrand, {
  prefix: '',
  selector: '@theme static',
  includeRoles: false
})
const expectedCss = `/* Generated from app/utils/brand-data.json. Do not edit by hand. */\n${css}\n`

assert.equal(readFileSync(generatedFile, 'utf8'), expectedCss)
assert.equal(happydesignsBrand.colors.sand[150], '#F1ECE6')
assert.equal(happydesignsBrand.roles.signature, 'coral')
assert.match(themeSource, /nuxtUiAdapter\.transform\(happydesignsBrand/)
assert.match(themeSource, /colors: happydesignsSemanticColors/)
assert.doesNotMatch(guideSource, /ui: happydesignsBrandTheme\.ui/)
assert.match(appConfigSource, /assets: happydesignsRuntimeAssets/)
