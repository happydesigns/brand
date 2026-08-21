import { fileURLToPath } from 'node:url'

const guideCss = fileURLToPath(new URL('./app/assets/css/guide.css', import.meta.url))
const outputDir = fileURLToPath(new URL('../.output', import.meta.url))
const checkBuildDir = process.env.HD_DOCS_BUILD_DIR
  ? fileURLToPath(new URL(`${process.env.HD_DOCS_BUILD_DIR}/`, import.meta.url))
  : undefined

export default defineNuxtConfig({
  extends: ['..', '@happydesigns/id/guide', 'docus'],

  modules: [
    '@nuxt/eslint'
  ],

  $meta: {
    name: 'happydesigns-brand-guide'
  },

  devtools: {
    enabled: process.env.NUXT_DEVTOOLS !== 'false'
  },

  css: [guideCss],

  // Docus registers color mode before Nuxt UI can apply its module default.
  // Keep component hover transitions, but switch the global theme atomically.
  colorMode: {
    disableTransition: true
  },

  ui: {
    prose: true
  },

  // Validation runs must not overwrite the content database of an active dev
  // server. Nuxt Content emits empty browser dumps during prepare.
  buildDir: checkBuildDir,
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
    },
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

  icon: {
    serverBundle: {
      collections: ['lucide', 'simple-icons', 'vscode-icons']
    },
    clientBundle: {
      scan: true,
      icons: [
        'lucide:terminal',
        'vscode-icons:file-type-bun',
        'vscode-icons:file-type-css',
        'vscode-icons:file-type-json',
        'vscode-icons:file-type-npm',
        'vscode-icons:file-type-nuxt',
        'vscode-icons:file-type-pnpm',
        'vscode-icons:file-type-typescript',
        'vscode-icons:file-type-yarn'
      ]
    }
  }
})
