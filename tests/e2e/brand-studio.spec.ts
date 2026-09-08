import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import source from '../../src/brand/brand.studio.json' with { type: 'json' }

const draft = (page: import('@playwright/test').Page) => page.frameLocator('iframe[title="Draft brand preview"]')

test('brand editing isolates previews and supports undo, redo, reset and real states', async ({ page }) => {
  await page.goto('/studio')
  await expect(draft(page).getByRole('heading', { name: 'One brand. Every detail.' })).toBeVisible()
  await page.getByLabel('Compare original').check()
  const original = page.frameLocator('iframe[title="Original brand preview"]')
  await expect(original.getByRole('heading', { name: 'One brand. Every detail.' })).toBeVisible()
  await page.getByLabel(/^Brand name/).fill('A considered revision')
  await page.getByLabel(/^Brand name/).press('Tab')
  await expect(page.getByRole('heading', { name: 'A considered revision', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Undo change' }).click()
  await expect(page.getByRole('heading', { name: source.theme.label, exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Redo change' }).click()
  await expect(page.getByRole('heading', { name: 'A considered revision', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'details', exact: true }).click()
  await page.getByLabel(/^Page background/).fill('#e0f2fe')
  await page.getByLabel(/^Page background/).press('Tab')
  await expect(draft(page).locator('body')).toHaveCSS('background-color', 'rgb(224, 242, 254)')
  await expect(original.locator('body')).not.toHaveCSS('background-color', 'rgb(224, 242, 254)')
  await page.getByRole('button', { name: 'Dark', exact: true }).click()
  await expect(draft(page).locator('html')).toHaveClass(/dark/)
  await expect(original.locator('html')).toHaveClass(/dark/)
  await page.getByLabel('Preview state').selectOption('error')
  await expect(draft(page).getByText('Enter a valid email address.')).toBeVisible()
  await draft(page).getByRole('button', { name: 'Preview dialog' }).click()
  await expect(draft(page).getByRole('dialog')).toBeVisible()
  await expect(original.getByRole('dialog')).toHaveCount(0)
  await page.screenshot({ path: 'test-results/studio-compare-dark.png', fullPage: true, animations: 'disabled' })
  await draft(page).getByRole('button', { name: 'Done', exact: true }).click()
  await page.getByRole('button', { name: 'Reset', exact: true }).click()
  await expect(page.getByRole('button', { name: 'Reset', exact: true })).toBeDisabled()
})

test('source export preserves the complete brand and invalid imports leave it intact', async ({ page }) => {
  await page.goto('/studio')
  await expect(draft(page).getByRole('heading', { name: 'One brand. Every detail.' })).toBeVisible()
  await page.getByLabel('Open brand document').setInputFiles({ name: 'invalid.json', mimeType: 'application/json', buffer: Buffer.from('{"version":2}') })
  await expect(page.getByRole('alert')).toBeVisible()
  await page.getByRole('button', { name: 'Review & export' }).click()
  const downloadPromise = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Download source' }).click()
  const download = await downloadPromise
  const stream = await download.createReadStream()
  const chunks: Buffer[] = []
  for await (const chunk of stream!) chunks.push(Buffer.from(chunk))
  expect(JSON.parse(Buffer.concat(chunks).toString())).toEqual(source)
  const archivePromise = page.waitForEvent('download')
  await page.getByRole('button', { name: 'Download new project' }).click()
  const archive = await archivePromise
  expect(archive.suggestedFilename()).toMatch(/\.zip$/)
  await archive.saveAs('test-results/exported-brand.zip')
})

test('new brands clear inherited styles and keep a recoverable local draft', async ({ page }) => {
  await page.goto('/studio')
  await expect(draft(page).getByRole('heading', { name: 'One brand. Every detail.' })).toBeVisible()
  await page.getByRole('button', { name: 'New brand', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'New brand', exact: true })).toBeVisible()
  await expect(draft(page).locator('body')).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(draft(page).getByRole('img', { name: /happydesigns/ })).toHaveCount(0)
  await page.getByLabel(/^Brand name/).fill('My saved draft')
  await page.getByLabel(/^Brand name/).press('Tab')
  page.on('dialog', dialog => dialog.accept())
  await page.reload()
  await page.getByRole('button', { name: 'Restore draft' }).click()
  await expect(page.getByRole('heading', { name: 'My saved draft', exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Landing', exact: true }).click()
  await expect(draft(page).getByText('Make it your own.', { exact: true })).toBeVisible()
  await page.getByRole('button', { name: 'Docs', exact: true }).click()
  await expect(draft(page).getByRole('heading', { name: 'A shared language', exact: true })).toBeVisible()
})

// Independent iframe UApp regions have the same upstream notification label.
test('studio shell and component scene have no new semantic accessibility violations', async ({ page }) => {
  await page.goto('/studio')
  await expect(draft(page).getByRole('heading', { name: 'One brand. Every detail.' })).toBeVisible()
  await page.screenshot({ path: 'test-results/studio-desktop.png', fullPage: true, animations: 'disabled' })
  const result = await new AxeBuilder({ page }).disableRules(['landmark-unique']).analyze()
  expect(result.violations).toEqual([])
  await page.getByRole('button', { name: 'Dark', exact: true }).click()
  await expect(draft(page).locator('html')).toHaveCSS('color-scheme', 'dark')
  const dark = await new AxeBuilder({ page }).disableRules(['landmark-unique']).analyze()
  expect(dark.violations).toEqual([])
})

test('@mobile studio keeps controls and preview inside the viewport', async ({ page }) => {
  await page.goto('/studio')
  await expect(draft(page).getByRole('heading', { name: 'One brand. Every detail.' })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  await page.getByRole('button', { name: 'colors', exact: true }).click()
  await expect(page.getByText('Map your palettes to Nuxt UI roles.')).toBeVisible()
  await page.screenshot({ path: 'test-results/studio-mobile.png', fullPage: true, animations: 'disabled' })
})

for (const viewport of [{ width: 1716, height: 1300 }, { width: 1440, height: 900 }, { width: 1024, height: 600 }, { width: 768, height: 600 }]) {
  test(`preview owns scrolling at ${viewport.width} × ${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport)
    await page.goto('/studio?browse=true')
    await expect(draft(page).getByRole('heading', { name: 'Stay in the loop' })).toBeVisible()
    const geometry = await page.evaluate(() => {
      const frame = document.querySelector<HTMLIFrameElement>('iframe')!
      const rect = frame.getBoundingClientRect()
      const doc = frame.contentDocument!
      const cards = [...doc.querySelectorAll('.example-card')].map(card => card.getBoundingClientRect())
      return {
        outerHeight: document.documentElement.scrollHeight,
        outerWidth: document.documentElement.scrollWidth,
        previewHeight: rect.height,
        frameWidth: frame.clientWidth,
        contentWidth: doc.documentElement.scrollWidth,
        contentHeight: doc.documentElement.scrollHeight,
        visibleCards: cards.filter(card => card.top < rect.height && card.bottom > 0).length,
        columns: new Set(cards.map(card => Math.round(card.left))).size
      }
    })
    expect(geometry.outerHeight).toBe(viewport.height)
    expect(geometry.outerWidth).toBe(viewport.width)
    expect(geometry.previewHeight).toBeGreaterThan(viewport.height * 0.68)
    expect(geometry.contentWidth).toBeLessThanOrEqual(geometry.frameWidth)
    expect(geometry.contentHeight).toBeGreaterThan(geometry.previewHeight)
    expect(geometry.visibleCards).toBeGreaterThanOrEqual(viewport.width >= 1440 ? 9 : 4)
    expect(geometry.columns).toBe(viewport.width >= 1440 ? 4 : viewport.width >= 1024 ? 3 : 2)
    const box = await page.locator('iframe').boundingBox()
    await page.mouse.move(box!.x + 30, box!.y + 100)
    await page.mouse.wheel(0, 650)
    await expect.poll(() => draft(page).locator('html').evaluate(() => window.scrollY)).toBeGreaterThan(0)
    expect(await page.evaluate(() => window.scrollY)).toBe(0)
    await expect(page.getByRole('button', { name: 'Palette', exact: true })).toBeInViewport()
    await page.getByRole('button', { name: 'Palette', exact: true }).click()
    await expect(page.getByLabel('Brand settings')).toBeInViewport()
    await page.getByRole('button', { name: 'Close settings' }).click()
    await expect(page.getByLabel('Brand settings')).toHaveCount(0)
    await page.getByRole('button', { name: 'Dark', exact: true }).click()
    await expect(draft(page).locator('html')).toHaveCSS('color-scheme', 'dark')
    await draft(page).locator('html').evaluate(() => window.scrollTo(0, 0))
    await expect.poll(() => draft(page).locator('html').evaluate(() => window.scrollY)).toBe(0)
    await page.screenshot({ path: `test-results/studio-${viewport.width}-${viewport.height}.png`, animations: 'disabled' })
  })
}

test('@mobile preview and settings remain independently reachable without page scrolling', async ({ page }) => {
  await page.goto('/studio?browse=true')
  await expect(draft(page).getByRole('heading', { name: 'Recent activity' })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(await page.evaluate(() => innerHeight))
  await page.getByRole('button', { name: 'Palette', exact: true }).click()
  await expect(page.getByText('Map your palettes to Nuxt UI roles.')).toBeVisible()
  await page.getByRole('button', { name: 'Close settings' }).click()
  await expect(page.getByLabel('Brand settings')).toHaveCount(0)
  await draft(page).getByRole('textbox', { name: 'Search', exact: true }).fill('Jamie')
  await expect(draft(page).getByRole('button', { name: 'Jamie Chen' })).toHaveCount(1)
  await expect(draft(page).getByRole('button', { name: 'Alex Morgan' })).toHaveCount(0)
  await page.getByLabel('Compare original').check()
  for (const frame of await page.locator('iframe').all()) await expect(frame).toBeInViewport()
  expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(await page.evaluate(() => innerHeight))
  await page.getByLabel('Compare original').uncheck()
  await page.screenshot({ path: 'test-results/studio-mobile-browse.png', animations: 'disabled' })
})
