// https://nuxt.com/docs/api/configuration/nuxt-config
// Docus' generated CSS module can emit an absolute Windows dev URL. The brand
// guide owns the equivalent CSS in app/assets/css/main.css, so disable it here.
export default defineNuxtConfig(Object.assign({
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

  compatibilityDate: 'latest' as const,

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never' as const,
        braceStyle: '1tbs' as const
      }
    }
  }
}, {
  'docus-css': false as const
}))
