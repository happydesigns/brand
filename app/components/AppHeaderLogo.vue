<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <HDLogo
    variant="wordmark"
    size="sm"
    :mode="colorMode.value === 'dark' ? 'dark' : 'light'"
  />
</template>
