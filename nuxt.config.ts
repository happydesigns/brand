// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['docus'],

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

  compatibilityDate: 'latest',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
