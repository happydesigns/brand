import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const representativePages = {
  '/': ['color-contrast'],
  '/docs/guide/overview': ['button-name', 'color-contrast', 'landmark-unique', 'nested-interactive'],
  '/docs/components': ['button-name', 'color-contrast', 'landmark-unique', 'nested-interactive']
} as const

for (const [path, knownRuleIds] of Object.entries(representativePages)) {
  test(`${path} has no unexpected automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(path)

    const results = await new AxeBuilder({ page }).analyze()
    const unexpectedViolations = results.violations.filter(violation => (
      !(knownRuleIds as readonly string[]).includes(violation.id)
    ))

    expect(unexpectedViolations).toEqual([])
  })
}

for (const mode of ['light', 'dark'] as const) {
  test(`@mobile homepage preview remains complete and interactive in ${mode} mode`, async ({ page }) => {
    test.setTimeout(90_000)
    await page.emulateMedia({ colorScheme: mode })
    await page.goto('/')
    // The color-mode control appears after hydration; avoid interacting with
    // the server-rendered form while the dev server compiles the client.
    await expect(page.locator('header').getByRole('button', { name: /Switch to (light|dark) mode/ })).toBeVisible({ timeout: 45_000 })
    const preview = page.getByRole('region', { name: 'Brand preview' })
    await expect(preview.getByRole('heading', { name: 'Website refresh' })).toBeVisible()
    await expect(preview.getByLabel('Workspace')).toHaveCount(1)
    await preview.getByLabel('Workspace').fill('New project')
    await expect(preview.getByLabel('Workspace')).toHaveValue('New project')
    await preview.getByRole('combobox', { name: 'Status' }).click()
    await page.getByRole('option', { name: 'Draft', exact: true }).click()
    await expect(preview.getByRole('combobox', { name: 'Status' })).toContainText('Draft')
    await expect(preview.getByText('All checks passed.')).toBeVisible()
    expect(await page.locator('html').evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
    await preview.getByRole('link', { name: 'Compare and customize in Studio' }).click()
    await expect(page).toHaveURL(/\/studio\?browse=true/)
  })
}

test('color mode changes without animating theme colors', async ({ page }) => {
  await page.goto('/docs/guide/overview')

  const transitionTarget = page.locator('header a').first()
  const colorModeButton = page.getByRole('button', { name: /Switch to (light|dark) mode/ }).first()

  await transitionTarget.evaluate((element) => {
    element.addEventListener('transitionrun', () => {
      element.setAttribute('data-theme-transition-started', 'true')
    })
  })

  await colorModeButton.click()
  await page.waitForTimeout(250)

  await expect(transitionTarget).not.toHaveAttribute('data-theme-transition-started', 'true')
})

test('homepage keeps its desktop composition', async ({ page }) => {
  test.setTimeout(90_000)
  await page.goto('/')
  await expect(page.locator('header').getByRole('button', { name: /Switch to (light|dark) mode/ })).toBeVisible({ timeout: 45_000 })
  await expect(page).toHaveScreenshot('homepage.png', { fullPage: true })
})

test('@mobile homepage keeps its mobile first fold', async ({ page }) => {
  test.setTimeout(90_000)
  await page.goto('/')
  await expect(page.locator('header').getByRole('button', { name: /Switch to (light|dark) mode/ })).toBeVisible({ timeout: 45_000 })
  await expect(page).toHaveScreenshot('homepage-mobile.png')
})

test('guide tables keep the shared prose treatment', async ({ page }) => {
  await page.goto('/docs/guide/colors')

  const table = page.locator('.brand-table-scroll').first()
  // Palette values are now generated cards; authored utility tables retain the
  // shared prose container without a snapshot of obsolete duplicated values.
  await expect(table).toBeVisible()
  await expect(table).toContainText('bg-default')
  await expect(table).toHaveCSS('overflow-x', 'auto')
})

test('@mobile wide tables remain horizontally accessible', async ({ page }) => {
  await page.goto('/docs/guide/colors')

  const table = page.locator('.brand-table-scroll').first()
  const dimensions = await table.evaluate(element => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth
  }))

  expect(dimensions.scrollWidth).toBeGreaterThanOrEqual(dimensions.clientWidth)
  expect(await page.locator('html').evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
})
