<script setup lang="ts">
const guide = useBrandGuide()

const year = new Date().getFullYear()

const columns = computed(() => [
  {
    title: 'happydesigns',
    links: [
      { label: 'hello@happydesigns.studio', to: 'mailto:hello@happydesigns.studio' },
      { label: 'github.com/happydesigns', to: 'https://github.com/happydesigns', target: '_blank' },
      { label: 'Nuxt brand layer', to: '/docs' },
      { label: guide.brand.packageName, to: '/docs/logos' }
    ]
  },
  {
    title: 'Guide',
    links: [
      { label: 'Overview', to: '/' },
      { label: 'Docs', to: '/docs' },
      { label: 'Colors', to: '/docs/colors' },
      { label: 'Typography', to: '/docs/typography' }
    ]
  },
  {
    title: 'System',
    links: [
      { label: 'Logos', to: '/docs/logos' },
      { label: 'Components', to: '/docs/components' },
      { label: 'Voice', to: '/docs/voice' },
      { label: 'Brand data', to: '/docs' }
    ]
  },
  {
    title: 'Build',
    links: [
      { label: 'Nuxt', to: 'https://nuxt.com', target: '_blank' },
      { label: 'Nuxt UI', to: 'https://ui.nuxt.com', target: '_blank' },
      { label: 'Docus', to: 'https://docus.dev', target: '_blank' },
      { label: 'Tailwind CSS', to: 'https://tailwindcss.com', target: '_blank' }
    ]
  }
])
</script>

<template>
  <footer class="border-t border-sand-300 bg-warm-white text-graphite dark:border-white/10 dark:bg-graphite dark:text-sand-50">
    <div class="mx-auto w-full max-w-(--ui-container) border-x border-sand-300 dark:border-white/10">
      <div class="grid gap-px border-b border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="column in columns"
          :key="column.title"
          class="bg-warm-white p-7 dark:bg-graphite"
        >
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-plum-600 dark:text-sand-300">
            {{ column.title }}
          </p>
          <ul class="mt-5 space-y-3">
            <li
              v-for="link in column.links"
              :key="link.label"
            >
              <NuxtLink
                :to="link.to"
                :target="link.target"
                class="text-sm leading-6 text-sand-700 hover:text-graphite dark:text-sand-300 dark:hover:text-sand-50"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-b border-sand-300 bg-graphite px-7 py-14 text-sand-50 dark:border-white/10 sm:px-12">
        <HDWordmark
          mode="dark"
          size="lg"
          class="[&_img]:h-16 sm:[&_img]:h-24 lg:[&_img]:h-32"
        />
      </div>

      <div class="flex flex-col gap-3 px-7 py-5 font-mono text-xs text-sand-600 dark:text-sand-400 sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <p>Copyright &copy; {{ year }} happydesigns.</p>
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <span>{{ guide.brand.packageName }}</span>
          <span>Nuxt 4 / Docus 5</span>
          <span>Brand layer v0.1</span>
        </div>
      </div>
    </div>
  </footer>
</template>
