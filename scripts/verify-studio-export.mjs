import { readFileSync, writeFileSync, mkdirSync, mkdtempSync } from 'node:fs'
import { resolve, dirname, sep, join } from 'node:path'
import { tmpdir } from 'node:os'
import { spawn, spawnSync } from 'node:child_process'
import { createServer } from 'node:net'
import { chromium } from '@playwright/test'

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
if (manifest.devDependencies['@happydesigns/id'] !== 'file:./vendor/id.tgz') throw new Error('Export did not bundle id')
if (!readFileSync(join(root, 'vendor/id.tgz')).equals(readFileSync(join(root, 'playground/public/studio-packages/id.tgz')))) throw new Error('Re-export package differs from the installed package')
for (const [name, specifier] of Object.entries({ ...manifest.dependencies, ...manifest.devDependencies })) {
  if (name !== '@happydesigns/id' && /^(file:|link:|workspace:)/.test(specifier)) throw new Error('Unexpected local dependency')
}
mkdirSync('.output', { recursive: true })
const report = { directory: root, archive: resolve(archive), installed: false, built: false, rendered: false }
const save = () => writeFileSync('.output/studio-export-verification.json', JSON.stringify(report, null, 2) + '\n')
save()
for (const action of ['install', 'build']) {
  const result = spawnSync(process.execPath, [process.env.npm_execpath, action], { cwd: root, stdio: 'inherit', env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=8192' } })
  if (result.error || result.status !== 0) throw result.error || new Error(`${action} failed in ${root}`)
  if (action === 'install') report.installed = true
  else report.built = true
  save()
}
// A successful build alone does not prove image delivery or iframe hydration.
const reservation = createServer()
await new Promise(resolve => reservation.listen(0, '127.0.0.1', resolve))
const port = reservation.address().port
await new Promise(resolve => reservation.close(resolve))
const server = spawn(process.execPath, ['playground/.output/server/index.mjs'], {
  cwd: root,
  env: { ...process.env, HOST: '127.0.0.1', PORT: String(port) },
  stdio: 'ignore'
})
let browser
try {
  const url = `http://127.0.0.1:${port}`
  let ready = false
  for (let attempt = 0; attempt < 60; attempt++) {
    if (await fetch(`${url}/docs/introduction`).then(response => response.ok).catch(() => false)) {
      ready = true
      break
    }
    await new Promise(resolve => setTimeout(resolve, 500))
  }
  if (!ready) throw new Error('Exported server did not become ready')
  browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(`${url}/studio?browse=true&view=docs&mode=light`)
  const frame = page.frameLocator('iframe[title="Draft brand preview"]')
  await frame.locator('html[data-id-preview="ready"]').waitFor()
  await frame.getByRole('heading', { name: 'Use your brand', exact: true }).waitFor()
  await frame.locator('img:visible').evaluateAll(async (images) => {
    for (const image of images) {
      await image.decode()
      if (!image.naturalWidth) throw new Error(`Exported image failed: ${image.getAttribute('src')}`)
    }
  })
  if (await frame.getByRole('link', { name: 'Edit this page', exact: true }).count()) throw new Error('Export exposes an unconfigured repository link')
  if ((await fetch(`${url}/api/id-studio/source`)).status !== 404) throw new Error('Production exposes a local source writer')
  await page.goto(`${url}/docs/brand-reference`)
  await page.locator('[data-brand-reference]').waitFor()
  await page.getByRole('heading', { name: 'Typography', exact: true }).waitFor()
  await page.getByRole('heading', { name: 'Assets', exact: true }).waitFor()
  if (errors.length) throw new Error(errors.join('\n'))
  await page.screenshot({ path: '.output/studio-export.png' })
  report.rendered = true
  save()
} finally {
  await browser?.close()
  server.kill()
}
console.log(`Verified standalone export: ${root}`)
