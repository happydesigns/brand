<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <UButton
    v-if="!route.query.idPreview"
    to="/studio?browse=true"
    color="neutral"
    variant="ghost"
    icon="i-lucide-palette"
    aria-label="Open Brand Studio"
  />
</template>
