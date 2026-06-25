import { createNuxtUiAppConfig } from '@happydesigns/id'
import { happydesignsBrandGuide } from './utils/brand-guide'
import { happydesignsBrandTheme } from './utils/brand-theme'

const happydesignsUiAppConfig = createNuxtUiAppConfig(happydesignsBrandTheme)
const happydesignsUiConfig = happydesignsUiAppConfig.ui ?? {}

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
    guide: happydesignsBrandGuide
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
