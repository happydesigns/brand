import { createNuxtUiAppConfig } from '@happydesigns/id'
import { happydesignsBrandGuide, happydesignsComponentCoverage } from './utils/brand-guide'
import { happydesignsBrandTheme } from './utils/brand-theme'

const happydesignsUiAppConfig = createNuxtUiAppConfig(happydesignsBrandTheme)
type UiConfigWithIcons = NonNullable<typeof happydesignsUiAppConfig.ui> & {
  icons?: Record<string, string>
}

const happydesignsUiConfig = (happydesignsUiAppConfig.ui ?? {}) as UiConfigWithIcons
const happydesignsAppConfigGuide = {
  ...happydesignsBrandGuide,
  // Nuxt app.config merges arrays from extended layers. defuFn calls function
  // values with the merged default, so this replaces the generic id coverage.
  componentCoverage: () => happydesignsComponentCoverage
}

export default defineAppConfig({
  ...happydesignsUiAppConfig,
  ui: {
    ...happydesignsUiConfig,
    icons: {
      ...happydesignsUiConfig.icons,
      loading: 'i-lucide-refresh-cw',
      close: 'i-lucide-x',
      check: 'i-lucide-check',
      chevronDown: 'i-lucide-chevron-down',
      chevronRight: 'i-lucide-chevron-right',
      arrowLeft: 'i-lucide-arrow-left',
      arrowRight: 'i-lucide-arrow-right',
      light: 'i-lucide-sun',
      dark: 'i-lucide-moon',
      system: 'i-lucide-monitor'
    }
  },
  id: {
    name: 'happydesigns-brand',
    theme: happydesignsBrandTheme,
    defaultTheme: happydesignsBrandTheme.name,
    themes: [happydesignsBrandTheme],
    guide: happydesignsAppConfigGuide
  },
  docus: {
    locale: 'en',
    colorMode: ''
  },
  seo: {
    title: 'happydesigns brand guide',
    description: 'Thoughtful design guidance for the happydesigns brand system.'
  },
  header: {
    title: 'happydesigns'
  },
  socials: {
    github: 'https://github.com/happydesigns'
  },
  toc: {
    title: 'On this page'
  },
  assistant: {
    floatingInput: false,
    explainWithAi: false
  }
})
