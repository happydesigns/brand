import { expect, test } from '@playwright/test'
import { closeEditor, openPanel, setMode } from './studio-helpers'

test('catalog payload is compact and Landing defers the component gallery until selected', async ({ page }) => {
  const componentRequests: string[] = []
  page.on('request', (request) => {
    if (/\/StudioComponents\.vue(?:\?|$)/.test(request.url())) componentRequests.push(request.url())
  })
  await page.goto('/studio?browse=true&view=course')
  const draft = page.frameLocator('iframe[title="Draft brand preview"]')
  await expect(draft.getByRole('heading', { name: 'Courses', exact: true })).toBeVisible({ timeout: 30000 })
  await expect(draft.getByText('0/6 complete', { exact: true })).toBeVisible()
  const payload = await draft.locator('script#__NUXT_DATA__').textContent()
  expect(payload).toContain('course-catalog')
  expect(payload!.length).toBeLessThan(50000)
  console.log(`Course catalog hydration payload: ${payload!.length} characters`)
  await page.getByRole('button', { name: 'Templates', exact: true }).click()
  const gallery = page.getByRole('group', { name: 'Choose a template' })
  await expect(gallery.locator('[data-preview-state="ready"]')).toHaveCount(4, { timeout: 30000 })
  expect(componentRequests).toEqual([])
  await gallery.getByRole('button', { name: 'Landing', exact: true }).click()
  await expect(draft.getByRole('heading', { name: 'Your projects, in one place' })).toBeVisible()
  expect(componentRequests).toEqual([])
  await page.getByRole('button', { name: 'Components', exact: true }).click()
  await expect(draft.getByRole('textbox', { name: 'Your email' })).toBeVisible()
})

test('live template cards follow the draft without changing the workspace or persisted preferences', async ({ page }, testInfo) => {
  test.setTimeout(90000)
  await page.goto('/studio?browse=true&view=course&mode=system')
  const draft = page.frameLocator('iframe[title="Draft brand preview"]')
  await expect(draft.getByRole('heading', { name: 'Courses', exact: true })).toBeVisible({ timeout: 30000 })
  await openPanel(page, 'Brand')
  await page.getByLabel(/^Brand name/).fill('Gallery draft')
  await page.getByLabel(/^Brand name/).press('Tab')
  await openPanel(page, 'Styles')
  await page.getByRole('combobox', { name: 'Corner radius' }).click()
  await page.getByRole('option', { name: '0.625rem', exact: true }).click()
  await closeEditor(page)
  const before = await page.evaluate(() => ({
    location: location.href,
    storage: Object.fromEntries(Object.entries(localStorage).filter(([key]) => !key.startsWith('id-studio:')))
  }))
  await expect(page.locator('iframe[title$=" thumbnail"]')).toHaveCount(0)
  const metrics = await page.context().newCDPSession(page)
  await metrics.send('Performance.enable')
  const heap = async () => (await metrics.send('Performance.getMetrics')).metrics.find(metric => metric.name === 'JSHeapUsedSize')!.value
  const initialHeap = await heap()
  const started = Date.now()
  await page.getByRole('button', { name: 'Templates', exact: true }).click()
  const gallery = page.getByRole('group', { name: 'Choose a template' })
  await expect(gallery.locator('[data-preview-state="ready"]')).toHaveCount(4, { timeout: 30000 })
  const loadedMs = Date.now() - started
  for (const label of ['Landing', 'Booking', 'Course', 'Docs']) {
    const frame = page.frameLocator(`iframe[title="${label} thumbnail"]`)
    await expect(frame.locator('body')).not.toContainText('Preparing preview')
    const branding = await frame.locator('body').evaluate(el => ({
      background: getComputedStyle(el).getPropertyValue('--ui-bg').trim(),
      font: getComputedStyle(el).fontFamily,
      radius: getComputedStyle(el).getPropertyValue('--ui-radius').trim()
    }))
    expect(branding).toEqual(await draft.locator('body').evaluate(el => ({
      background: getComputedStyle(el).getPropertyValue('--ui-bg').trim(),
      font: getComputedStyle(el).fontFamily,
      radius: getComputedStyle(el).getPropertyValue('--ui-radius').trim()
    })))
  }
  const course = page.frameLocator('iframe[title="Course thumbnail"]')
  expect(await course.locator('body').evaluate(el => getComputedStyle(el).getPropertyValue('--ui-radius').trim())).toBe('0.625rem')
  await course.locator('body').evaluate(() => {
    parent.postMessage({ type: 'id-studio-navigate', scene: 'course', path: '/courses/using-this-tool' }, location.origin)
    parent.postMessage({ type: 'id-studio-mode', scene: 'course', mode: 'dark' }, location.origin)
  })
  await expect(draft.getByRole('heading', { name: 'Courses', exact: true })).toBeVisible()
  expect(page.url()).toBe(before.location)
  expect(await page.evaluate(() => Object.fromEntries(Object.entries(localStorage).filter(([key]) => !key.startsWith('id-studio:'))))).toEqual(before.storage)
  await page.screenshot({ path: testInfo.outputPath('gallery-light.png') })
  console.log(`Four live thumbnails ready in ${loadedMs} ms`)
  console.log(`Gallery heap growth: ${Math.round((await heap() - initialHeap) / 1024 / 1024)} MiB`)
  await metrics.detach()
  await page.keyboard.press('Escape')
  await expect(page.locator('iframe[title$=" thumbnail"]')).toHaveCount(0)
  await setMode(page, 'Dark')
  await page.getByRole('button', { name: 'Templates', exact: true }).click()
  await expect(gallery.locator('[data-preview-state="ready"]')).toHaveCount(4, { timeout: 30000 })
  for (const label of ['Landing', 'Booking', 'Course', 'Docs']) {
    await expect(page.frameLocator(`iframe[title="${label} thumbnail"]`).locator('html')).toHaveClass(/dark/)
  }
  await page.screenshot({ path: testInfo.outputPath('gallery-dark.png') })
  await gallery.getByRole('button', { name: 'Booking', exact: true }).click()
  await expect(page.locator('iframe[title$=" thumbnail"]')).toHaveCount(0)
  await expect(page).toHaveURL(/view=booking/)
})

test('host home and documentation have separate destinations and saved drafts survive returning', async ({ page }) => {
  await page.goto('/studio?browse=true')
  const home = page.getByRole('link', { name: 'happydesigns/brand home' })
  await expect(home).toHaveAttribute('href', '/')
  await expect(page.getByRole('link', { name: 'Documentation (opens in a new tab)' })).toHaveAttribute('href', '/docs/guide/overview')
  await openPanel(page, 'Brand')
  await page.getByLabel(/^Brand name/).fill('Saved navigation draft')
  await page.getByLabel(/^Brand name/).press('Tab')
  await closeEditor(page)
  await home.click()
  await expect(page).toHaveURL('/')
  await page.goBack()
  await expect(page.getByRole('button', { name: 'Brand picker', exact: true })).toHaveText('Saved navigation draft')
})

test('internal navigation protects a draft when local storage fails', async ({ page }) => {
  await page.addInitScript(() => {
    const setItem = Storage.prototype.setItem
    Storage.prototype.setItem = function (key, value) {
      if (key.startsWith('id-studio:')) throw new DOMException('Storage unavailable', 'QuotaExceededError')
      setItem.call(this, key, value)
    }
  })
  await page.goto('/studio?browse=true')
  await openPanel(page, 'Brand')
  await page.getByLabel(/^Brand name/).fill('Unsaved navigation draft')
  await page.getByLabel(/^Brand name/).press('Tab')
  await closeEditor(page)
  await page.getByRole('link', { name: 'happydesigns/brand home' }).click()
  const confirmation = page.getByRole('dialog', { name: 'Leave Studio?', exact: true })
  await expect(confirmation).toBeVisible()
  await confirmation.getByRole('button', { name: 'Keep editing' }).click()
  await expect(page).toHaveURL(/\/studio/)
  await page.getByRole('link', { name: 'happydesigns/brand home' }).click()
  await confirmation.getByRole('button', { name: 'Leave Studio', exact: true }).click()
  await expect(page).toHaveURL('/')
})

test('template cards remain selectable on a narrow screen @mobile', async ({ page }) => {
  await page.goto('/studio?browse=true')
  await page.getByRole('button', { name: 'Templates', exact: true }).click()
  const gallery = page.getByRole('group', { name: 'Choose a template' })
  await gallery.getByRole('button', { name: 'Docs', exact: true }).scrollIntoViewIfNeeded()
  await gallery.getByRole('button', { name: 'Docs', exact: true }).click()
  await expect(page).toHaveURL(/view=docs/)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})
