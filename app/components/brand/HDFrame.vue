<script setup lang="ts">
const props = withDefaults(defineProps<{
  padded?: boolean
  grid?: boolean
  notches?: boolean
  tone?: 'default' | 'muted' | 'dark'
}>(), {
  padded: true,
  grid: false,
  notches: false,
  tone: 'default'
})

const toneClass = computed(() => ({
  default: 'border-sand-200 bg-warm-white/88 text-graphite dark:border-white/10 dark:bg-graphite/80 dark:text-sand-100',
  muted: 'border-sand-200 bg-sand-50/88 text-graphite dark:border-white/10 dark:bg-sand-900/88 dark:text-sand-100',
  dark: 'border-graphite bg-graphite text-sand-100 dark:border-sand-600'
})[props.tone])
</script>

<template>
  <div
    class="relative overflow-hidden rounded-sm border"
    :class="[toneClass, padded && 'p-5 md:p-6']"
  >
    <div
      v-if="grid"
      class="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(216,208,197,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(216,208,197,.45)_1px,transparent_1px)] [background-size:24px_24px] dark:[background-image:linear-gradient(rgba(250,247,242,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(250,247,242,.09)_1px,transparent_1px)]"
    />
    <template v-if="notches">
      <HDNotch
        orientation="left"
        class="absolute left-0 top-4"
      />
      <HDNotch
        orientation="right"
        class="absolute right-0 bottom-4"
      />
      <HDNotch
        orientation="top"
        class="absolute left-4 top-0"
      />
      <HDNotch
        orientation="bottom"
        class="absolute bottom-0 right-4"
      />
    </template>
    <div class="relative">
      <slot />
    </div>
  </div>
</template>
