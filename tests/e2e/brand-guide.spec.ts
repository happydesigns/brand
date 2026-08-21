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

test('segmented date and time inputs show the active field', async ({ page }) => {
  await page.goto('/docs/components/forms')

  const hour = page.getByRole('spinbutton', { name: 'hour,' })
  await hour.focus()

  await expect(hour).toHaveClass(/focus:bg-accented/)
  await expect(hour).not.toHaveClass(/focus:bg-elevated/)
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
  await expect(table).toHaveScreenshot('palette-table.png')
})

test('code examples keep their dark-mode hierarchy', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/docs/components/docs-prose')

  const code = page.locator('pre').filter({ hasText: 'pnpm add @happydesigns/brand' }).first()
  await expect(code).toHaveScreenshot('code-example-dark.png')
})

test('editor examples initialize mentions as atomic editor content', async ({ page }) => {
  await page.goto('/docs/components/chat-editor')
  await expect(page.locator('[contenteditable="true"]')).toBeVisible({ timeout: 15_000 })

  const mention = page.locator('[data-type="mention"]', { hasText: '@Design review' })
  const paragraph = mention.locator('..')

  await expect(mention).toHaveCount(1)
  await expect(mention).toHaveClass(/mention/)
  await expect(paragraph).toHaveText(
    'Use @Design review for questions about hierarchy or brand expression.'
  )

  const colors = await mention.evaluate(element => ({
    mention: getComputedStyle(element).color,
    paragraph: getComputedStyle(element.parentElement!).color
  }))
  expect(colors.mention).not.toBe(colors.paragraph)

  await mention.click()
  await expect(paragraph).toHaveText(
    'Use @Design review for questions about hierarchy or brand expression.'
  )
})

test('@mobile code trees clip their content to the rounded frame', async ({ page }) => {
  await page.goto('/docs/components/docs-prose')

  const tree = page.getByRole('tree').first()
  const frame = tree.locator('..')
  const frameStyles = await frame.evaluate((element) => {
    const styles = getComputedStyle(element)
    return {
      borderBottomLeftRadius: styles.borderBottomLeftRadius,
      overflow: styles.overflow
    }
  })

  expect(frameStyles.overflow).toBe('hidden')
  expect(frameStyles.borderBottomLeftRadius).not.toBe('0px')
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
