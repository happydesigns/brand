import { fileURLToPath } from 'node:url'

const guideCss = fileURLToPath(new URL('./app/assets/css/guide.css', import.meta.url))
const outputDir = fileURLToPath(new URL('../.output', import.meta.url))

export default defineNuxtConfig({
  extends: ['..', '@happydesigns/id/nuxt', 'docus'],

  modules: [
    '@nuxt/eslint'
  ],

  $meta: {
    name: 'happydesigns-brand-guide'
  },

  devtools: {
    enabled: true
  },
  css: [guideCss],

  ui: {
    prose: true
  },
  routeRules: {
    '/docs': { redirect: '/docs/guide/overview' },
    '/docs/guide': { redirect: '/docs/guide/overview' },
    '/docs/guide/': { redirect: '/docs/guide/overview' },
    '/docs/overview': { redirect: '/docs/guide/overview' },
    '/docs/colors': { redirect: '/docs/guide/colors' },
    '/docs/typography': { redirect: '/docs/guide/typography' },
    '/docs/logos': { redirect: '/docs/guide/logos' },
    '/docs/voice': { redirect: '/docs/guide/voice' }
  },

  compatibilityDate: 'latest' as const,

  nitro: {
    output: {
      dir: outputDir
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never' as const,
        braceStyle: '1tbs' as const
      }
    }
  }
})
