<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: 'peach' | 'coral' | 'petrol' | 'butter' | 'plum' | 'seafoam' | 'sand'
}>(), {
  color: 'peach'
})

const colorClass = computed(() => ({
  peach: 'bg-peach-200 text-graphite',
  coral: 'bg-coral-500 text-graphite',
  petrol: 'bg-petrol-500 text-warm-white',
  butter: 'bg-butter-200 text-graphite',
  plum: 'bg-plum-300 text-graphite',
  seafoam: 'bg-seafoam-200 text-graphite',
  sand: 'bg-sand-200 text-graphite'
})[props.color])
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg border border-black/5 p-5"
    :class="colorClass"
  >
    <div class="absolute inset-0 hd-texture opacity-45" />
    <div class="relative">
      <slot />
    </div>
  </div>
</template>
