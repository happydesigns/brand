import type { BrandAssets, BrandTheme, NuxtUiAppConfig } from '@happydesigns/id'
import brand from '../brand.generated.json'

const theme = brand.theme as BrandTheme

export const happydesignsBrandAppConfig = {
  ui: theme.ui as NuxtUiAppConfig['ui'],
  id: {
    name: 'happydesigns-brand',
    theme,
    defaultTheme: theme.name,
    themes: [theme],
    assets: brand.assets as BrandAssets
  }
}

export default defineNuxtPlugin(() => {
  // AppConfig is generated from each consumer and can therefore be narrower
  // than the portable brand contract. Runtime values are contract-tested.
  updateAppConfig(happydesignsBrandAppConfig as unknown as Parameters<typeof updateAppConfig>[0])
})
