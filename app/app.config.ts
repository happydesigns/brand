import { createNuxtUiAppConfig } from '@happydesigns/id'
import { happydesignsBrandTheme } from './utils/brand-theme'

const happydesignsUiAppConfig = createNuxtUiAppConfig(happydesignsBrandTheme)

export default defineAppConfig({
  ...happydesignsUiAppConfig,
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
