<script setup lang="ts">
const guide = useHappydesignsGuide()

const guideGroups = [
  {
    value: 'foundations',
    title: 'Foundations',
    description: 'Color and type set the calm base.',
    icon: 'i-lucide-layout-grid',
    sections: guide.sections.filter(section => ['colors', 'typography'].includes(section.slug))
  },
  {
    value: 'identity',
    title: 'Identity',
    description: 'Logo and voice make the system recognizable.',
    icon: 'i-lucide-badge-check',
    sections: guide.sections.filter(section => ['logos', 'voice'].includes(section.slug))
  },
  {
    value: 'application',
    title: 'Application',
    description: 'Components carry the system into product UI.',
    icon: 'i-lucide-component',
    sections: guide.sections.filter(section => section.slug === 'components')
  }
]

const principleAccentClasses = [
  'text-secondary',
  'text-success',
  'text-primary',
  'text-info'
]
</script>

<template>
  <section class="border-b border-default bg-default">
    <div class="grid lg:grid-cols-[minmax(0,1fr)_30rem]">
      <div class="px-7 py-10 sm:px-12 sm:py-12">
        <HDSectionLabel>
          brand guidance
        </HDSectionLabel>
        <h2 class="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
          Build from structure<br>toward expression.
        </h2>
        <p class="mt-6 max-w-xl text-base leading-8 text-body">
          Use color, typography, spacing, and clear hierarchy to create a calm base, then add the happydesigns identity to make the system recognizable.
        </p>

        <div class="mt-10 border-t border-default pt-7">
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
            Operating principles
          </p>
          <div class="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            <div
              v-for="(principle, index) in guide.principles"
              :key="principle.title"
              class="flex gap-3"
            >
              <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-default bg-muted">
                <UIcon
                  :name="principle.icon"
                  class="size-4"
                  :class="principleAccentClasses[index]"
                />
              </span>
              <div>
                <p class="text-sm font-semibold leading-6 text-highlighted">
                  {{ principle.title }}
                </p>
                <p class="mt-1 text-sm leading-6 text-toned">
                  {{ principle.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside class="flex flex-col justify-start border-t border-default bg-default px-7 py-10 sm:px-12 sm:py-12 lg:border-l lg:border-t-0 lg:px-8 xl:px-10">
        <UIcon
          name="i-lucide-route"
          class="size-5 text-primary"
        />
        <p class="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
          Read the guide
        </p>
        <p class="mt-4 text-base leading-8 text-body">
          When applying the guide, set the page rhythm first: spacing, hierarchy, type, and color roles. Then choose the logo form and voice that fit the context, and let components carry those choices consistently.
        </p>

        <UStepper
          :items="guideGroups"
          orientation="vertical"
          disabled
          class="mt-7"
          :ui="{
            trigger: 'cursor-default border border-default bg-muted text-primary group-data-[state=active]:border-default group-data-[state=active]:bg-muted group-data-[state=active]:text-primary group-data-[state=completed]:border-default group-data-[state=completed]:bg-muted group-data-[state=completed]:text-primary',
            separator: 'group-data-[state=completed]:bg-default'
          }"
        >
          <template #description="{ item }">
            <p>{{ item.description }}</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <UButton
                v-for="section in item.sections"
                :key="section.slug"
                :to="section.to"
                :label="section.title"
                color="neutral"
                variant="outline"
                size="xs"
                trailing-icon="i-lucide-arrow-right"
              />
            </div>
          </template>
        </UStepper>
      </aside>
    </div>
  </section>
</template>
