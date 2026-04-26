const cssPath = decodeURIComponent(
  new URL('./app/assets/css/main.css', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')
)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui'
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

  css: [cssPath],

  ui: {
    prose: true
  },

  routeRules: {
    '/': { prerender: true },
    '/colors': { prerender: true },
    '/typography': { prerender: true },
    '/logos': { prerender: true },
    '/components': { prerender: true },
    '/voice': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
