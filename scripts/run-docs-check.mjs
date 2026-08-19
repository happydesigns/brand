import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const rootDir = fileURLToPath(new URL('../', import.meta.url))
const nuxtCli = fileURLToPath(new URL('../node_modules/nuxt/bin/nuxt.mjs', import.meta.url))
const args = process.argv.slice(2)

const result = spawnSync(process.execPath, [nuxtCli, ...args], {
  cwd: rootDir,
  env: {
    ...process.env,
    HD_DOCS_BUILD_DIR: '.nuxt-check'
  },
  stdio: 'inherit'
})

process.exit(result.status ?? 1)
