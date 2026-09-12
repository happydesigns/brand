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

    if (path === '/docs/components') {
      // This legacy URL redirects to the client-mounted Studio workspace.
      await expect(page.getByRole('main', { name: 'Brand Studio' })).toBeVisible({ timeout: 30000 })
      await expect(page.frameLocator('iframe[title="Draft brand preview"]').getByRole('listbox', { name: 'Users and actions' })).toBeVisible({ timeout: 30000 })
    }

    const results = await new AxeBuilder({ page }).analyze()
    const unexpectedViolations = results.violations.filter(violation => (
      !(knownRuleIds as readonly string[]).includes(violation.id)
    ))

    expect(unexpectedViolations).toEqual([])
  })
}

test('theme reveal supports the complete keyboard interaction', async ({ page }) => {
  test.setTimeout(90_000)
  await page.goto('/')
  await expect(page.locator('header').getByRole('button', { name: /Switch to (light|dark) mode/ })).toBeVisible({ timeout: 45_000 })

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

for (const viewport of ['desktop', '@mobile']) {
  test(`${viewport} homepage retains the complete brand guide below the hero`, async ({ page }) => {
    test.setTimeout(90_000)
    await page.goto('/')
    await expect(page.locator('header').getByRole('button', { name: /Switch to (light|dark) mode/ })).toBeVisible({ timeout: 45_000 })

    for (const heading of [
      'Apply the system in three decisions.',
      'Give every visual choice a role.',
      'Choose the mark and voice for the context.',
      'Turn the rules into repeatable behavior.',
      'Use the brand system in real projects.'
    ]) {
      const section = page.getByRole('heading', { name: heading, exact: true })
      await section.scrollIntoViewIfNeeded()
      await expect(section).toBeVisible()
    }

    await expect(page.getByText('#F28564', { exact: true })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Open colors', exact: true })).toHaveAttribute('href', '/docs/guide/colors')
    await expect(page.getByRole('main').getByRole('link', { name: 'Open Brand Studio', exact: true })).toHaveAttribute('href', '/studio?browse=true')
    await expect(page.locator('#install-package')).toContainText('pnpm add @happydesigns/brand')
    const install = page.locator('#install-package')
    await expect(install.getByRole('tablist')).toHaveCount(1)
    await expect(install.getByRole('tab')).toHaveCount(2)
    await expect(install.getByRole('tab', { name: 'Terminal', exact: true })).toHaveAttribute('aria-selected', 'true')
    await install.getByRole('tab', { name: 'nuxt.config.ts', exact: true }).click()
    await expect(install.locator('pre:visible')).toHaveCount(1)
    await expect(install.locator('pre:visible')).toContainText('extends:')
    await install.getByRole('tab', { name: 'Terminal', exact: true }).click()
    await expect(install.locator('pre:visible')).toHaveCount(1)
    await expect(install.locator('pre:visible')).toContainText('pnpm add @happydesigns/brand')
    expect(await page.locator('html').evaluate(element => element.scrollWidth <= element.clientWidth)).toBe(true)
  })
}

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
