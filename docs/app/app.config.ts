import { createNuxtUiAppConfig } from '@happydesigns/id'
import { happydesignsBrandGuide, happydesignsRuntimeAssets } from '../../src/brand/brand-guide'
import { happydesignsBrandTheme } from '../../src/brand/brand-theme'
import studioDocument from '../../src/brand/brand.studio.json'

const happydesignsUiAppConfig = createNuxtUiAppConfig(happydesignsBrandTheme)
type UiConfigWithIcons = NonNullable<typeof happydesignsUiAppConfig.ui> & {
  icons?: Record<string, string>
  prose?: {
    codeTree?: {
      slots?: Record<string, string>
    }
  }
}

const happydesignsUiConfig = (happydesignsUiAppConfig.ui ?? {}) as UiConfigWithIcons

export default defineAppConfig({
  idStudio: {
    packageAsset: '/studio-packages/id.tgz',
    document: studioDocument,
    sourcePath: 'src/brand/brand.studio.json',
    home: '/'
  },
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
    },
    prose: {
      ...happydesignsUiConfig.prose,
      codeTree: {
        ...happydesignsUiConfig.prose?.codeTree,
        slots: {
          ...happydesignsUiConfig.prose?.codeTree?.slots,
          root: 'overflow-hidden'
        }
      }
    }
  },
  id: {
    name: 'happydesigns-brand',
    theme: happydesignsBrandTheme,
    defaultTheme: happydesignsBrandTheme.name,
    themes: [happydesignsBrandTheme],
    assets: happydesignsRuntimeAssets,
    guide: happydesignsBrandGuide
  },
  docus: {
    locale: 'en',
    colorMode: ''
  },
  navigation: {
    sub: 'aside'
  },
  seo: {
    title: 'happydesigns brand guide',
    description: 'Thoughtful design guidance for the happydesigns brand system.'
  },
  header: {
    title: 'happydesigns',
    links: [
      { label: 'Guide', to: '/docs/guide/overview', activePrefix: '/docs/guide' },
      { label: 'Components', to: '/studio?browse=true', activePrefix: '/studio' },
      { label: 'Templates', to: '/studio?browse=true&view=landing' },
      { label: 'Use the brand', to: '/use' }
    ]
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
