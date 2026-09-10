import { copyFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const target = new URL('../docs/public/studio-packages/', import.meta.url)
mkdirSync(target, { recursive: true })
copyFileSync(fileURLToPath(new URL('../../id/.output/studio-package/id.tgz', import.meta.url)), fileURLToPath(new URL('id.tgz', target)))
