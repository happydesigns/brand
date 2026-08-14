import { fileURLToPath } from 'node:url'

const runtimeCss = fileURLToPath(new URL('./app/assets/css/main.css', import.meta.url))

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  $meta: {
    name: 'happydesigns-brand-runtime'
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

  css: [runtimeCss]
})
