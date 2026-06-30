<script setup lang="ts">
import symbolLogo from '~/assets/logos/happydesigns-symbol.svg'
import wordmarkLogo from '~/assets/logos/happydesigns-wordmark.svg'
import wordmarkLogoInverse from '~/assets/logos/happydesigns-wordmark-inverse.svg'
import { happydesignsBrand } from '~/utils/brand'

const props = withDefaults(defineProps<{
  name: string
  frame?: 'default' | 'none'
}>(), {
  frame: 'default'
})

const componentExampleContext = {
  brandName: 'happydesigns',
  packageName: '@happydesigns/brand',
  accentColor: happydesignsBrand.colors.coral,
  logoAlt: 'happydesigns symbol',
  assets: {
    symbol: symbolLogo,
    wordmark: wordmarkLogo,
    wordmarkInverse: wordmarkLogoInverse
  },
  assetPreviewSurfaces: {
    light: {
      background: happydesignsBrand.colors.warmWhite,
      color: happydesignsBrand.colors.graphite,
      border: 'var(--color-sand-300)'
    },
    dark: {
      background: happydesignsBrand.colors.graphite,
      color: happydesignsBrand.colors.warmWhite,
      border: 'rgba(250, 247, 242, 0.16)'
    }
  },
  paths: {
    docs: '/docs/guide/overview',
    components: '/docs/components',
    colors: '/docs/guide/colors',
    typography: '/docs/guide/typography'
  },
  copy: {
    brandLabel: 'happydesigns.',
    heroTitle: 'Thoughtful design for the modern web.',
    heroDescription: 'A compact page opening with visible structure and restrained action hierarchy.',
    pageTitle: 'Structured pages stay easier to scan.',
    pageDescription: 'Use page-level primitives for repeated docs and landing surfaces.',
    ctaTitle: 'Use the brand system in real projects.',
    ctaDescription: 'Open the docs, then install the Nuxt layer when a project should carry the happydesigns system.',
    packageDescription: 'Nuxt UI components styled for happydesigns.',
    projectTitle: 'Website refresh',
    projectDescription: 'Review component behavior before release.',
    releaseTitle: 'Component coverage expanded',
    releaseDescription: 'Dashboard, publishing, chat, and editor families now have brand guidance.'
  }
}
</script>

<template>
  <IdComponentExample
    :name="props.name"
    :frame="props.frame"
    :context="componentExampleContext"
  />
</template>
