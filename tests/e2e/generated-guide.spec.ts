import { expect, test } from '@playwright/test'
import source from '../../src/brand/brand.studio.json' with { type: 'json' }
import { parseStudioDocument } from '@happydesigns/id/studio/core'
import { choose, closeEditor, setCompare, surfaces } from './studio-helpers'

test('generated reference shows the source values and browser contrast', async ({ page }) => {
  await page.goto('/docs/guide/colors')
  const reference = page.locator('[data-brand-reference]')
  await expect(reference.getByText(source.brand.colors.coral['500'], { exact: true })).toBeVisible({ timeout: 30000 })
  await expect(reference.getByRole('rowheader', { name: 'primary', exact: true }).locator('..')).toContainText(source.theme.ui.colors.primary)
  await expect(reference.getByRole('region', { name: 'Text contrast' })).toContainText(/\d+\.\d+:1/)
  await page.screenshot({ path: '.tmp/generated-guide-colors.png' })
  await page.goto('/docs/guide/typography')
  await expect(page.locator('[data-brand-reference]')).toContainText(source.brand.typography.sans)
  await page.goto('/docs/guide/logos')
  await expect(page.locator('[data-brand-reference]').getByRole('link').first()).toHaveAttribute('href', source.brand.assets.logos.wordmark.src)
  await page.goto('/docs/guide/styles')
  await expect(page.getByRole('region', { name: 'Configured styles' })).toBeVisible()
  await page.goto('/docs/guide/icons')
  await expect(page.getByRole('region', { name: 'Configured icons' })).toBeVisible()
})

test('Docs reference follows editor changes while the original remains isolated', async ({ page }) => {
  test.setTimeout(90000)
  await page.goto('/studio?browse=true&mode=light')
  const draft = page.frameLocator('iframe[title="Draft brand preview"]')
  await expect(draft.getByRole('textbox', { name: 'Your email' })).toBeVisible({ timeout: 30000 })
  await choose(page, 'Template', 'Docs')
  await expect(draft.locator('html[data-id-preview="ready"]')).toBeVisible({ timeout: 45000 })
  await draft.getByRole('link', { name: 'Colors', exact: true }).first().click()
  await expect(draft.locator('[data-brand-reference]')).toBeVisible()
  await setCompare(page, true)
  await surfaces(page)
  await page.getByLabel('Page background', { exact: true }).fill('#123456')
  await page.getByLabel('Page background', { exact: true }).press('Tab')
  await closeEditor(page)
  const row = draft.getByRole('rowheader', { name: '--ui-bg', exact: true }).locator('..')
  await expect(row).toContainText('#123456')
  const original = page.frameLocator('iframe[title="Original brand preview"]')
  await expect(original.getByRole('rowheader', { name: '--ui-bg', exact: true }).locator('..')).not.toContainText('#123456')
})

test('@mobile generated reference stays within the viewport', async ({ page }) => {
  await page.goto('/docs/guide/colors')
  await expect(page.locator('[data-brand-reference]')).toBeVisible({ timeout: 30000 })
  expect(await page.locator('html').evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
  await page.screenshot({ path: '.tmp/generated-guide-mobile.png' })
})

test('an imported second brand replaces guide data without host-specific code', async ({ page }) => {
  test.setTimeout(90000)
  await page.goto('/studio?browse=true&view=docs')
  const draft = page.frameLocator('iframe[title="Draft brand preview"]')
  await expect(draft.locator('html[data-id-preview="ready"]')).toBeVisible({ timeout: 45000 })
  await draft.getByRole('link', { name: 'Colors', exact: true }).first().click()
  const alternate = parseStudioDocument(source)
  alternate.brand = { name: 'nightfall', colors: { ink: '#112233' }, typography: { sans: 'Georgia, serif' } }
  alternate.theme = { name: 'nightfall', label: 'Nightfall', typography: { sans: 'Georgia, serif' }, ui: { colors: { primary: 'blue' } } }
  await page.getByLabel('Open brand document').setInputFiles({ name: 'nightfall.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(alternate)) })
  await expect(draft.locator('[data-brand-reference]').getByText('#112233', { exact: true })).toBeVisible()
  await expect(draft.locator('[data-brand-reference]').getByRole('heading', { name: 'coral', exact: true })).toHaveCount(0)
  await draft.getByRole('link', { name: 'Typography', exact: true }).first().click()
  await expect(draft.locator('[data-brand-reference]')).toContainText('Georgia, serif')
})
