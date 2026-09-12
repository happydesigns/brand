import { expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { closeEditor, surfaces } from './studio-helpers'

test('real Docus routes render and share navigation between draft and applied brand', async ({ page }) => {
  test.setTimeout(60_000)
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', (message) => {
    if (/hydration/i.test(message.text()) && ['error', 'warning'].includes(message.type())) errors.push(message.text())
  })
  await page.goto('/docs/guide/overview')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await page.goto('/studio?browse=true&view=docs&compare=true&mode=light')
  const draft = page.frameLocator('iframe[title="Draft brand preview"]')
  const applied = page.frameLocator('iframe[title="Original brand preview"]')
  await expect(draft.locator('html')).toHaveAttribute('data-id-preview', 'ready', { timeout: 30_000 })
  await expect(applied.locator('html')).toHaveAttribute('data-id-preview', 'ready', { timeout: 30_000 })
  await expect(draft.getByRole('heading', { level: 1 })).toBeVisible({ timeout: 30_000 })
  await expect(applied.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(draft.getByRole('button', { name: /Search/ }).first()).toBeVisible()
  await surfaces(page)
  const background = page.getByRole('textbox', { name: 'Page background', exact: true })
  await background.fill('#f0f4ff')
  await background.press('Tab')
  await expect(draft.locator('body')).toHaveCSS('background-color', 'rgb(240, 244, 255)')
  await expect(applied.locator('body')).not.toHaveCSS('background-color', 'rgb(240, 244, 255)')
  await closeEditor(page)
  await draft.getByRole('button', { name: 'Menu', exact: true }).click()
  await draft.getByRole('dialog', { name: 'Guide', exact: true }).getByRole('link', { name: 'Colors', exact: true }).click()
  await expect(applied.getByRole('heading', { name: 'Colors', exact: true })).toBeVisible()
  await expect(page).toHaveURL(/path=.*colors/)
  await expect(draft.locator('.nuxt-loading-indicator')).toHaveCSS('opacity', '0')
  await expect(applied.locator('.nuxt-loading-indicator')).toHaveCSS('opacity', '0')
  expect(errors).toEqual([])
  await page.screenshot({ path: 'test-results/studio-native-docs.png', animations: 'disabled' })
})

test('connected source requires local access and rejects stale writes without changing the file', async ({ page, request }) => {
  const sourcePath = 'src/brand/brand.studio.json'
  const before = readFileSync(sourcePath)
  await page.goto('/studio?browse=true')
  const html = await page.content()
  const token = html.match(/idStudioWriterToken["':\s]+([a-f0-9-]{36})/)?.[1]
  expect(token, 'Local development provides a per-server nonce').toBeTruthy()
  const url = '/api/id-studio/source'
  expect((await request.get(url)).status()).toBe(403)
  const headers = { 'x-id-studio-token': token! }
  expect((await request.get(url, { headers: { ...headers, origin: 'https://example.com' } })).status()).toBe(403)
  const current = await request.get(url, { headers })
  expect(current.status()).toBe(200)
  const body = await current.json()
  expect((await request.post(url, { headers, data: { revision: 'stale', document: body.document } })).status()).toBe(409)
  const unchanged = await request.post(url, { headers, data: { revision: body.revision, document: body.document } })
  expect(unchanged.status()).toBe(200)
  expect((await unchanged.json()).changed).toBe(false)
  expect(readFileSync(sourcePath)).toEqual(before)
})
