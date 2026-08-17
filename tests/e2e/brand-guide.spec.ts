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
  await page.goto('/docs/components/system-helpers')

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
