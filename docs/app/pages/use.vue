<script setup lang="ts">
useSeoMeta({ title: 'Use the brand', description: 'Use the happydesigns Nuxt UI layer or customize a copy in Brand Studio.' })
</script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-16 sm:py-24">
    <p class="font-mono text-xs uppercase tracking-widest text-primary">
      From identity to interface
    </p>
    <h1 class="mt-4 text-4xl font-semibold tracking-tight text-highlighted sm:text-5xl">
      Use the brand.
    </h1>
    <p class="mt-6 max-w-2xl text-lg leading-8 text-muted">
      One Nuxt layer brings the happydesigns colors, typography, assets and component decisions into your application.
    </p>
    <div class="mt-10">
      <BrandLayerInstallSteps />
    </div>
    <USeparator class="my-12" />
    <h2 class="text-2xl font-semibold text-highlighted">
      Make a considered change
    </h2>
    <p class="mt-4 leading-7 text-muted">
      Open Brand Studio and compare your draft with the applied brand. In local development, Changes lets you review and apply it to <code>src/brand/brand.studio.json</code>; generated files update automatically. On the public site, download the source and apply it in your checkout with <code>pnpm generate:layer</code>. Run the repository checks before committing.
    </p>
    <div class="mt-6 flex flex-wrap gap-3">
      <UButton to="/studio">
        Customize the brand
      </UButton><UButton
        to="/docs/guide/overview"
        variant="outline"
        color="neutral"
      >
        Read the brand principles
      </UButton>
    </div>
    <p class="mt-8 text-sm leading-6 text-muted">
      A new project archive creates a separate Nuxt UI brand layer. It carries theme data and available assets; happydesigns-specific Vue primitives remain in this package. Client brands should start from a neutral brand in Studio.
    </p>
  </main>
</template>
