<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
}>(), {
  label: ''
})
</script>

<template>
  <div class="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-label">
    <HDDot />
    <span>
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>
