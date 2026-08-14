import { writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cssVariablesAdapter } from '@happydesigns/id/adapters/css-variables'
import brandData from '../app/utils/brand-data.json' with { type: 'json' }

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outputFile = resolve(rootDir, 'app/assets/css/brand.generated.css')
const { css } = cssVariablesAdapter.transform({
  name: 'happydesigns',
  ...brandData
}, {
  prefix: '',
  selector: '@theme static',
  includeRoles: false
})

writeFileSync(
  outputFile,
  `/* Generated from app/utils/brand-data.json. Do not edit by hand. */\n${css}\n`,
  'utf8'
)
