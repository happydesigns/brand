import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const layerDir = dirname(fileURLToPath(import.meta.url))
const brandCss = join(layerDir, 'app/assets/css/main.css')
const brandComponents = join(layerDir, 'app/components/brand')

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  $meta: {
    name: 'happydesigns-brand'
  },

  components: [
    {
      path: brandComponents,
      pathPrefix: false
    }
  ],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/app-icon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/app-icon.png' }
      ]
    }
  },

  css: [brandCss]
})
