<script setup lang="ts">
const guide = useHappydesignsGuide()

const links = [
  {
    label: 'Open Brand Studio',
    icon: 'i-lucide-arrow-right',
    trailing: true,
    to: '/studio?browse=true'
  },
  {
    label: 'Read the guide',
    icon: 'i-lucide-book-open',
    color: 'neutral' as const,
    variant: 'outline' as const,
    to: '/docs/guide/overview'
  }
]
</script>

<template>
  <UPageHero
    :title="guide.brand.claim"
    description="The colors, typography and details that make happydesigns. Explore the identity, try it in Studio, and bring it into your Nuxt UI project."
    :links="links"
    headline="happydesigns brand guide"
    orientation="horizontal"
    :ui="{
      container: 'py-12 sm:py-16 lg:py-20',
      title: 'text-4xl sm:text-5xl lg:text-6xl',
      headline: 'font-mono text-xs uppercase tracking-widest text-primary'
    }"
  >
    <section
      aria-label="Brand preview"
      class="mx-auto w-full max-w-lg"
    >
      <UCard>
        <template #header>
          <div class="flex items-center justify-between gap-4">
            <p class="text-sm font-semibold text-highlighted">
              The brand in use
            </p>
            <UBadge
              label="Live example"
              color="neutral"
              variant="subtle"
            />
          </div>
        </template>

        <HeroThemeDemo />

        <template #footer>
          <UButton
            label="Compare and customize in Studio"
            to="/studio?browse=true"
            trailing-icon="i-lucide-arrow-right"
            color="neutral"
            variant="link"
            :ui="{ base: 'p-0 whitespace-normal text-start' }"
          />
        </template>
      </UCard>
    </section>
  </UPageHero>
</template>
