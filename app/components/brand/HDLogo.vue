<script setup lang="ts">
import lockupLight from '~/assets/logos/happydesigns-lockup.svg'
import lockupDark from '~/assets/logos/happydesigns-lockup-inverse.svg'
import wordmarkLight from '~/assets/logos/happydesigns-wordmark.svg'
import wordmarkDark from '~/assets/logos/happydesigns-wordmark-inverse.svg'
import symbol from '~/assets/logos/happydesigns-symbol.svg'
import signatureLight from '~/assets/logos/happydesigns-signature.svg'
import signatureDark from '~/assets/logos/happydesigns-signature-inverse.svg'

const props = withDefaults(defineProps<{
  /**
   * wordmark  - typographic name only (default for headers and navigation)
   * symbol    - full symbol mark (favicon, app icon, square contexts)
   * lockup    - full symbol + wordmark (introductions and teaching moments)
   * signature - vertical lockup for footers and brand-owned sections
   */
  variant?: 'wordmark' | 'symbol' | 'lockup' | 'signature'
  /**
   * auto  - follows system dark/light mode
   * light - forces light-surface variant
   * dark  - forces inverse variant for dark surfaces
   */
  mode?: 'auto' | 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  as?: string
}>(), {
  variant: 'wordmark',
  mode: 'auto',
  size: 'md',
  as: 'div'
})

const heightClass = computed(() => ({
  sm: 'h-5 w-auto',
  md: 'h-7 w-auto',
  lg: 'h-11 w-auto',
  xl: 'h-16 w-auto'
})[props.size])

const symbolSizeClass = computed(() => ({
  sm: 'size-5',
  md: 'size-7',
  lg: 'size-11',
  xl: 'size-24'
})[props.size])

const sizeClass = computed(() =>
  props.variant === 'symbol' ? symbolSizeClass.value : heightClass.value
)

const lightSrc = computed(() => ({
  lockup: lockupLight,
  wordmark: wordmarkLight,
  symbol,
  signature: signatureLight
})[props.variant])

// The full symbol is a branded object; it does not invert between modes.
const darkSrc = computed(() => ({
  lockup: lockupDark,
  wordmark: wordmarkDark,
  symbol,
  signature: signatureDark
})[props.variant])
</script>

<template>
  <component
    :is="as"
    class="inline-flex items-center"
    role="img"
    aria-label="happydesigns"
  >
    <template v-if="mode === 'auto'">
      <img
        :src="lightSrc"
        alt=""
        aria-hidden="true"
        class="block dark:hidden"
        :class="sizeClass"
      >
      <img
        :src="darkSrc"
        alt=""
        aria-hidden="true"
        class="hidden dark:block"
        :class="sizeClass"
      >
    </template>

    <img
      v-else
      :src="mode === 'dark' ? darkSrc : lightSrc"
      alt=""
      aria-hidden="true"
      class="block"
      :class="sizeClass"
    >
  </component>
</template>
