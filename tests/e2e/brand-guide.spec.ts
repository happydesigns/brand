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

test('theme reveal supports the complete keyboard interaction', async ({ page }) => {
  await page.goto('/')
  await page.waitForLoadState('networkidle')

  const reveal = page.getByRole('slider', { name: 'Reveal the happydesigns theme' })
  await expect(reveal).toHaveAttribute('aria-valuenow', '50')

  await reveal.press('ArrowRight')
  await expect(reveal).toHaveAttribute('aria-valuenow', '55')

  await reveal.press('Shift+ArrowLeft')
  await expect(reveal).toHaveAttribute('aria-valuenow', '45')

  await reveal.press('Home')
  await expect(reveal).toHaveAttribute('aria-valuenow', '0')

  await reveal.press('End')
  await expect(reveal).toHaveAttribute('aria-valuenow', '100')
})

test('color mode changes without animating theme colors', async ({ page }) => {
  await page.goto('/docs/guide/overview')

  const transitionTarget = page.locator('nav[aria-label="Main"] a').first()
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
  await page.goto('/')
  await expect(page).toHaveScreenshot('homepage.png', { fullPage: true })
})

test('@mobile homepage keeps its mobile first fold', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveScreenshot('homepage-mobile.png')
})

test('guide tables keep the shared prose treatment', async ({ page }) => {
  await page.goto('/docs/guide/colors')

  const table = page.locator('.brand-table-scroll').first()
  // Minified production CSS rounds the outer table frame one pixel differently.
  // Normalize only spare frame space; content can still grow beyond this height.
  await expect(table).toHaveScreenshot('palette-table.png', { style: '.brand-table-scroll { min-height: 710px; }' })
})

test('@mobile wide tables remain horizontally accessible', async ({ page }) => {
  await page.goto('/docs/guide/colors')

  const table = page.locator('.brand-table-scroll').first()
  const dimensions = await table.evaluate(element => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth
  }))

  expect(dimensions.scrollWidth).toBeGreaterThan(dimensions.clientWidth)
})
