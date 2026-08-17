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
    enabled: process.env.NUXT_DEVTOOLS !== 'false'
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
  // Docus registers color mode before Nuxt UI can apply its module default.
  // Keep component hover transitions, but switch the global theme atomically.
  colorMode: {
    disableTransition: true
  },

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

  compatibilityDate: '2026-08-17',

  nitro: {
    prerender: {
      // Docus discovers every guide route from the entry pages. Keep rendering
      // serial so the content database and page payloads stay within CI memory.
      concurrency: 1,
      failOnError: true
    }
  },

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
