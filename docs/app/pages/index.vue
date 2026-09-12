<template>
  <div class="bg-default">
    <div class="mx-auto w-full max-w-(--ui-container)">
      <BrandHomeHero />

      <section
        class="grid border-y border-default md:grid-cols-3"
        aria-label="Explore the brand"
      >
        <NuxtLink
          v-for="item in [{ number: '01', title: 'See it in action', text: 'Explore real components and pages. Compare and customize the details.', to: '/studio?browse=true' }, { number: '02', title: 'Know what matters', text: 'The colors, words and logo principles behind the identity.', to: '/docs/guide/overview' }, { number: '03', title: 'Make it work', text: 'Bring the brand into your Nuxt UI project with one layer.', to: '/use' }]"
          :key="item.number"
          :to="item.to"
          class="group border-b border-default p-8 transition-colors hover:bg-muted last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-10"
        >
          <span class="font-mono text-xs text-primary">{{ item.number }}</span><h2 class="mt-6 text-2xl font-semibold text-highlighted">{{ item.title }} <span class="inline-block transition-transform group-hover:translate-x-1">↗</span></h2><p class="mt-4 text-sm leading-7 text-muted">{{ item.text }}</p>
        </NuxtLink>
      </section>
    </div>
  </div>
</template>
