// https://nuxt.com/docs/api/configuration/nuxt-config
// Docus' generated CSS module can emit an absolute Windows dev URL. The brand
// guide owns the equivalent CSS in app/assets/css/main.css, so disable it here.
const docusCssModule = { 'docus-css': false as const }

export default defineNuxtConfig({
  extends: ['@happydesigns/id/nuxt', 'docus'],

  modules: [
    '@nuxt/eslint'
  ],

  $meta: {
    name: 'happydesigns-brand'
  },

  components: [
    {
      path: '~/components/brand',
      pathPrefix: false
    },
    '~/components'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/app-icon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/app-icon.png' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

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

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never' as const,
        braceStyle: '1tbs' as const
      }
    }
  },

  ...docusCssModule
})
