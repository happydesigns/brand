import { expect, type Page } from '@playwright/test'

export async function closeEditor(page: Page) {
  await expect(page.getByRole('dialog', { name: /^(Create brand|Duplicate brand|New palette)$/ })).toHaveCount(0)
  const close = page.locator('.studio-editor-overlay[data-state="open"], .studio-editor-docked').getByRole('button', { name: 'Close settings', exact: true })
  if (await close.isVisible()) await close.click()
  await expect(page.locator('#studio-editor')).toHaveCount(0)
}

export async function brandActions(page: Page) {
  await closeEditor(page)
  const picker = page.getByRole('button', { name: 'Brand picker', exact: true })
  if (await picker.getAttribute('aria-expanded') !== 'true') await picker.click()
  await page.getByRole('menuitem', { name: 'Manage brand', exact: true }).hover()
}

export async function openPanel(page: Page, panel: string) {
  const category = panel === 'Palette' ? 'Colors' : panel === 'Appearance' ? 'Styles' : panel
  await closeEditor(page)
  if (category === 'Brand') {
    await page.getByRole('button', { name: 'Brand picker', exact: true }).click()
    await page.getByRole('menuitem', { name: 'Brand settings', exact: true }).click()
  } else {
    const trigger = page.getByRole('group', { name: 'Edit brand', exact: true }).getByRole('button', { name: category, exact: true })
    if (await trigger.isVisible()) await trigger.click()
    else {
      await page.getByRole('button', { name: 'Editor', exact: true }).click()
      await page.getByRole('combobox', { name: 'Editor category', exact: true }).click()
      await page.getByRole('option', { name: category, exact: true }).click()
    }
  }
  await expect(page.locator('#studio-editor')).toBeVisible()
}

export async function previewSettings(page: Page) {
  await closeEditor(page)
  const trigger = page.getByRole('button', { name: 'Preview settings', exact: true })
  if (await trigger.getAttribute('aria-expanded') !== 'true') await trigger.click()
}

export async function choose(page: Page, name: string, option: string) {
  if (name === 'Template') {
    await closeEditor(page)
    if (option === 'Components') await page.getByRole('button', { name: 'Components', exact: true }).click()
    else {
      await page.getByRole('button', { name: 'Templates', exact: true }).click()
      await page.getByRole('group', { name: 'Choose a template' }).getByRole('button', { name: option, exact: true }).click()
    }
    return
  }
  if (name === 'Preview width') {
    await previewSettings(page)
    name = 'Viewport size'
  }
  await page.getByRole('combobox', { name, exact: true }).click()
  await page.getByRole('option', { name: option, exact: true }).click()
}

export async function setCompare(page: Page, checked: boolean) {
  await previewSettings(page)
  await page.getByRole('switch', { name: 'Compare with original', exact: true }).setChecked(checked)
  await page.keyboard.press('Escape')
}

export async function setMode(page: Page, mode: string) {
  await closeEditor(page)
  await page.getByRole('group', { name: 'Preview controls' }).getByRole('tab', { name: mode, exact: true }).click()
}

export async function surfaces(page: Page) {
  await openPanel(page, 'Colors')
  await page.getByRole('button', { name: 'Surfaces and contrast', exact: true }).click()
}
