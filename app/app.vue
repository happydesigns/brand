<script setup lang="ts">
const title = 'happydesigns brand layer'
const description = 'Structured design for the modern web.'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/app-icon.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary'
})
</script>

<template>
  <UApp>
    <UHeader
      :ui="{
        root: 'border-b border-sand-300 bg-warm-white/88 backdrop-blur dark:border-white/10 dark:bg-graphite/88',
        container: 'max-w-(--ui-container)'
      }"
    >
      <template #left>
        <NuxtLink
          to="/"
          aria-label="happydesigns brand layer"
          class="inline-flex items-center leading-none"
        >
          <HDLogo
            variant="wordmark"
            size="sm"
          />
        </NuxtLink>
      </template>

      <template #right>
        <UButton
          to="https://github.com/happydesigns"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <UColorModeButton
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
