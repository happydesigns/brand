import { readFileSync, writeFileSync, mkdirSync, mkdtempSync } from 'node:fs'
import { resolve, dirname, sep, join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'

// Validate the actual browser-downloaded ZIP, outside all workspace overrides.
const archive = process.argv[2]
if (!archive || !process.env.npm_execpath) throw new Error('Run pnpm verify:studio-export <download.zip>')
const root = mkdtempSync(join(tmpdir(), 'id-export-'))
const zip = readFileSync(resolve(archive))
let offset = 0
while (offset + 30 <= zip.length && zip.readUInt32LE(offset) === 0x04034b50) {
  if (zip.readUInt16LE(offset + 8) !== 0 || zip.readUInt16LE(offset + 6) & 8) throw new Error('Expected a stored Studio archive')
  const size = zip.readUInt32LE(offset + 18), nameSize = zip.readUInt16LE(offset + 26), extraSize = zip.readUInt16LE(offset + 28)
  const name = zip.subarray(offset + 30, offset + 30 + nameSize).toString('utf8')
  const target = resolve(root, name)
  if (!target.startsWith(root + sep) || name.includes('\\') || name.includes('..')) throw new Error('Unsafe archive entry')
  const start = offset + 30 + nameSize + extraSize
  if (start + size > zip.length) throw new Error('Truncated archive')
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, zip.subarray(start, start + size))
  offset = start + size
}
const manifest = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
if (manifest.dependencies['@happydesigns/id'] !== 'file:./vendor/id.tgz') throw new Error('Export did not bundle id')
if (!readFileSync(join(root, 'vendor/id.tgz')).equals(readFileSync(join(root, 'playground/public/studio-packages/id.tgz')))) throw new Error('Re-export package differs from the installed package')
for (const [name, specifier] of Object.entries(manifest.dependencies)) {
  if (name !== '@happydesigns/id' && /^(file:|link:|workspace:)/.test(specifier)) throw new Error('Unexpected local dependency')
}
mkdirSync('.output', { recursive: true })
const report = { directory: root, archive: resolve(archive), installed: false, built: false }
const save = () => writeFileSync('.output/studio-export-verification.json', JSON.stringify(report, null, 2) + '\n')
save()
for (const action of ['install', 'build']) {
  const result = spawnSync(process.execPath, [process.env.npm_execpath, action], { cwd: root, stdio: 'inherit', env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' } })
  if (result.error || result.status !== 0) throw result.error || new Error(`${action} failed in ${root}`)
  if (action === 'install') report.installed = true
  else report.built = true
  save()
}
console.log(`Verified standalone export: ${root}`)
