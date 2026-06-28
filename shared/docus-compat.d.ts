import type { ModuleOptions as NuxtContentOptions } from '@nuxt/content'
import type { ModuleOptions as NuxtIconOptions } from '@nuxt/icon'
import type { ModuleOptions as NuxtMdcOptions } from '@nuxtjs/mdc'
import type { ModuleOptions as NuxtRobotsOptions } from '@nuxtjs/robots'
import type { ModuleOptions as NuxtOgImageOptions } from 'nuxt-og-image'

// Nuxt typechecks Docus' source layer from node_modules in this consumer app.
// These declarations expose the module option keys used by Docus' nuxt.config.ts.
declare global {
  const defineNuxtConfig: typeof import('nuxt/config')['defineNuxtConfig']
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    content?: NuxtContentOptions
    icon?: NuxtIconOptions
    mdc?: NuxtMdcOptions
    ogImage?: NuxtOgImageOptions
    robots?: NuxtRobotsOptions
  }

  interface NuxtOptions {
    content?: NuxtContentOptions
    icon?: NuxtIconOptions
    mdc?: NuxtMdcOptions
    ogImage?: NuxtOgImageOptions
    robots?: NuxtRobotsOptions
  }
}

export {}
