<script setup lang="ts">
const guide = useBrandGuide()

const year = new Date().getFullYear()

const columns = computed(() => [
  {
    title: 'Guide',
    links: [
      { label: 'Overview', to: '/' },
      { label: 'Documentation', to: '/docs' }
    ]
  },
  {
    title: 'Foundations',
    links: [
      { label: 'Colors', to: '/docs/colors' },
      { label: 'Typography', to: '/docs/typography' },
      { label: 'Logos', to: '/docs/logos' }
    ]
  },
  {
    title: 'Application',
    links: [
      { label: 'Components', to: '/docs/components' },
      { label: 'Voice', to: '/docs/voice' }
    ]
  }
])

const contactLinks = [
  { label: 'hello@happydesigns.de', to: 'mailto:hello@happydesigns.de', icon: 'i-lucide-mail' },
  { label: 'happydesigns.de', to: 'https://www.happydesigns.de', target: '_blank', icon: 'i-lucide-globe' },
  { label: 'GitHub', to: 'https://github.com/happydesigns', target: '_blank', icon: 'i-simple-icons-github' }
]

const meta = computed(() => [
  `Copyright (c) ${year} happydesigns`,
  'Reusable brand guide structure',
  'Built with Nuxt and Docus'
])
</script>

<template>
  <footer class="bg-graphite text-sand-50">
    <div class="mx-auto w-full max-w-(--ui-container) border-x border-white/10 bg-graphite">
      <div class="grid border-b border-white/10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div class="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
          <HDLogo
            variant="wordmark"
            mode="dark"
            size="sm"
          />
          <p class="mt-8 max-w-xs text-2xl font-semibold leading-tight text-sand-50">
            {{ guide.brand.claim }}
          </p>
          <p class="mt-5 max-w-sm text-sm leading-7 text-sand-300">
            Brand documentation for the happydesigns identity system, built to be reusable for future guides.
          </p>

          <div class="mt-8 flex flex-wrap gap-2">
            <NuxtLink
              v-for="link in contactLinks"
              :key="link.label"
              :to="link.to"
              :target="link.target"
              class="inline-flex items-center gap-2 rounded-sm border border-white/10 px-2.5 py-1.5 text-xs font-medium text-sand-300 transition hover:border-coral-500/70 hover:text-warm-white"
            >
              <UIcon
                :name="link.icon"
                class="size-3.5 text-coral-500"
              />
              <span>{{ link.label }}</span>
            </NuxtLink>
          </div>
        </div>

        <div
          v-for="column in columns"
          :key="column.title"
          class="border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r last:lg:border-r-0"
        >
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-sand-400">
            {{ column.title }}
          </p>
          <ul class="mt-6 space-y-3">
            <li
              v-for="link in column.links"
              :key="link.label"
            >
              <NuxtLink
                :to="link.to"
                class="text-sm leading-6 text-sand-300 hover:text-sand-50"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="grid border-b border-white/10 text-xs text-sand-400 md:grid-cols-[1fr_1fr_1fr]">
        <div
          v-for="item in meta"
          :key="item"
          class="border-b border-white/10 px-7 py-5 md:border-b-0 md:border-r last:md:border-r-0 sm:px-10"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </footer>
</template>
