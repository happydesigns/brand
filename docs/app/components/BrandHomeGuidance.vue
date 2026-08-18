<script setup lang="ts">
const guideRoute = [
  {
    number: '01',
    phase: 'First',
    title: 'Define the foundations',
    description: 'Assign roles to color and type before choosing individual styles.',
    to: '/docs/guide/overview'
  },
  {
    number: '02',
    phase: 'Then',
    title: 'Choose the identity behavior',
    description: 'Select the mark and voice that fit the format and audience.',
    to: '/docs/guide/logos'
  },
  {
    number: '03',
    phase: 'Finally',
    title: 'Apply it through components',
    description: 'Turn those decisions into clear, reusable product behavior.',
    to: '/docs/components'
  }
]
</script>

<template>
  <section class="border-b border-default bg-default">
    <div class="grid lg:grid-cols-[minmax(0,1fr)_minmax(28rem,.9fr)]">
      <div class="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:py-16">
        <HDSectionLabel>
          Start here
        </HDSectionLabel>
        <h2 class="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
          Apply the system in three decisions.
        </h2>
        <p class="mt-6 max-w-xl text-base leading-8 text-body">
          Establish the visual foundation, choose how the identity should behave, then carry both into the interface. Each step makes the next one easier to decide.
        </p>

        <div class="mt-8 flex max-w-xl items-start gap-3 border-t border-default pt-6">
          <UIcon
            name="i-lucide-info"
            class="mt-1 size-4 shrink-0 text-primary"
          />
          <p class="text-sm leading-6 text-toned">
            Skip ahead only when the upstream decisions already exist. Components should express the system, not invent it locally.
          </p>
        </div>
      </div>

      <nav
        aria-label="Brand guide route"
        class="border-t border-default bg-muted lg:border-l lg:border-t-0"
      >
        <ULink
          v-for="item in guideRoute"
          :key="item.number"
          :to="item.to"
          class="group grid grid-cols-[auto_1fr_auto] items-start gap-4 rounded-none border-b border-default px-7 py-7 last:border-b-0 hover:bg-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:px-10 sm:py-8"
        >
          <span class="flex size-9 items-center justify-center rounded-full border border-default bg-default font-mono text-xs text-primary group-hover:bg-elevated">
            {{ item.number }}
          </span>
          <span>
            <span class="font-mono text-xs uppercase tracking-[0.14em] text-dimmed">
              {{ item.phase }}
            </span>
            <span class="mt-2 block text-base font-semibold text-highlighted">
              {{ item.title }}
            </span>
            <span class="mt-2 block text-sm leading-6 text-toned">
              {{ item.description }}
            </span>
          </span>
          <UIcon
            name="i-lucide-arrow-right"
            class="mt-1 size-4 text-muted group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </ULink>
      </nav>
    </div>
  </section>
</template>
