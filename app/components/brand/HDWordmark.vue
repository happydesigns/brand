<script setup lang="ts">
import wordmarkDark from '~/assets/logos/happydesigns-wordmark-inverse.svg'
import wordmarkLight from '~/assets/logos/happydesigns-wordmark.svg'

const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
  mode?: 'auto' | 'light' | 'dark' | 'mono'
}>(), {
  size: 'md',
  mode: 'auto'
})

const sizeClass = computed(() => ({
  sm: 'h-5 w-auto',
  md: 'h-7 w-auto',
  lg: 'h-11 w-auto'
})[props.size])
</script>

<template>
  <span
    class="inline-flex items-center"
    role="img"
    aria-label="happydesigns"
  >
    <template v-if="mode === 'auto'">
      <img
        :src="wordmarkLight"
        alt=""
        aria-hidden="true"
        class="block dark:hidden"
        :class="sizeClass"
      >
      <img
        :src="wordmarkDark"
        alt=""
        aria-hidden="true"
        class="hidden dark:block"
        :class="sizeClass"
      >
    </template>

    <img
      v-else
      :src="mode === 'dark' ? wordmarkDark : wordmarkLight"
      alt=""
      aria-hidden="true"
      class="block"
      :class="sizeClass"
    >
  </span>
</template>
