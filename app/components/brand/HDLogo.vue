<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'wordmark' | 'symbol'
  mode?: 'auto' | 'light' | 'dark' | 'mono'
  size?: 'sm' | 'md' | 'lg'
  as?: string
}>(), {
  variant: 'wordmark',
  mode: 'auto',
  size: 'md',
  as: 'div'
})
</script>

<template>
  <component
    :is="as"
    class="inline-flex items-center"
    aria-label="happydesigns"
  >
    <HDBrandMark
      v-if="variant === 'symbol'"
      :tile="variant === 'symbol'"
      :mode="mode"
      :size="size"
    />
    <HDWordmark
      v-else
      :mode="mode"
      :size="size"
    />
  </component>
</template>
