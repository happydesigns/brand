<script setup lang="ts">
defineProps<{
  to: string
  label: string
}>()
</script>

<template>
  <ULink
    :to="to"
    class="group inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-toned hover:text-highlighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    <span>{{ label }}</span>
    <UIcon
      name="i-lucide-arrow-right"
      class="size-4 group-hover:translate-x-0.5"
    />
  </ULink>
</template>
