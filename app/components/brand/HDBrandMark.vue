<script setup lang="ts">
import favicon from '~/assets/logos/happydesigns-favicon.svg'

const props = withDefaults(defineProps<{
  tile?: boolean
  size?: 'sm' | 'md' | 'lg'
  mode?: 'auto' | 'light' | 'dark' | 'mono'
}>(), {
  tile: false,
  size: 'md',
  mode: 'auto'
})

const sizeClass = computed(() => ({
  sm: props.tile ? 'size-8' : 'size-6',
  md: props.tile ? 'size-11' : 'size-8',
  lg: props.tile ? 'size-16' : 'size-12'
})[props.size])

const monoClass = computed(() => props.mode === 'mono' && 'grayscale')
</script>

<template>
  <span
    class="inline-grid shrink-0 place-items-center"
    :class="sizeClass"
    aria-hidden="true"
  >
    <img
      :src="favicon"
      alt=""
      class="size-full"
      :class="monoClass"
    >
  </span>
</template>
