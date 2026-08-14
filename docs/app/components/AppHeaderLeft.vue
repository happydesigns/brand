<script setup lang="ts">
const appConfig = useAppConfig()
const site = useSiteConfig()
const { localePath } = useDocusI18n()

const ariaLabel = computed(() => appConfig.header?.title || site.name || 'happydesigns')
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    :aria-label="ariaLabel"
    class="inline-flex h-6 items-center leading-none"
  >
    <AppHeaderLogo class="h-6 w-auto shrink-0" />
  </NuxtLink>
</template>
