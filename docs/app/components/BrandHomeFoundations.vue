<script setup lang="ts">
const guide = useHappydesignsGuide()
const featuredColors = guide.colors.slice(0, 4)
const [primaryFont, monoFont] = guide.fonts

if (!primaryFont || !monoFont) {
  throw new Error('The homepage requires primary and mono brand fonts.')
}

const foundationDecisions = [
  {
    title: 'Role before shade.',
    description: 'Decide what a color communicates before selecting its exact token.',
    icon: 'i-lucide-palette'
  },
  {
    title: 'Hierarchy before expression.',
    description: 'Establish reading order with type before adding decorative contrast.',
    icon: 'i-lucide-type'
  }
]

const sectionCardUi = {
  root: 'overflow-hidden rounded-sm !bg-default shadow-none ring-default transition-none hover:!bg-default',
  body: 'p-0 sm:p-0'
}

const staticCardUi = {
  root: 'rounded-sm !bg-elevated shadow-none ring-default transition-none hover:!bg-elevated',
  body: 'p-5 sm:p-5'
}

const badgeUi = {
  base: 'rounded-sm bg-elevated text-highlighted ring-default'
}
</script>

<template>
  <UPageSection
    class="bg-transparent"
    :ui="{ container: 'px-7 pt-10 pb-0 sm:px-12 sm:pt-12 lg:pt-12 lg:pb-0' }"
  >
    <UCard
      variant="outline"
      :ui="sectionCardUi"
    >
      <div class="grid lg:grid-cols-[.42fr_.58fr]">
        <div class="border-b border-default bg-default p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
            01 / Foundations
          </p>
          <h2 class="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
            Give every visual choice a role.
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-body">
            Define the foundation before styling individual screens. Color establishes purpose; type establishes reading order.
          </p>

          <BrandHomeDecisionList :items="foundationDecisions" />
        </div>

        <div class="grid gap-px bg-accented lg:grid-rows-[auto_1fr]">
          <div class="bg-default p-6 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <HDSectionLabel>palette preview</HDSectionLabel>
              <UButton
                to="/docs/guide/colors"
                label="Open colors"
                icon="i-lucide-arrow-right"
                trailing
                color="neutral"
                variant="outline"
                size="sm"
              />
            </div>
            <div class="mt-7 grid gap-px overflow-hidden rounded-sm bg-accented ring ring-default sm:grid-cols-2">
              <div
                v-for="color in featuredColors"
                :key="color.token"
                class="bg-elevated p-4"
              >
                <div
                  class="h-16 rounded-sm border border-black/5"
                  :style="{ backgroundColor: color.hex }"
                />
                <div class="mt-4 flex items-baseline justify-between gap-3">
                  <p class="font-mono text-xs">
                    {{ color.token }}
                  </p>
                  <p class="font-mono text-xs text-dimmed">
                    {{ color.hex }}
                  </p>
                </div>
                <p class="mt-1 text-sm text-muted">
                  {{ color.role }}
                </p>
              </div>
            </div>
          </div>

          <div class="bg-default p-6 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <HDSectionLabel>typography</HDSectionLabel>
              <UButton
                to="/docs/guide/typography"
                label="Open typography"
                icon="i-lucide-arrow-right"
                trailing
                color="neutral"
                variant="outline"
                size="sm"
              />
            </div>
            <div class="mt-7 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
              <UCard
                variant="outline"
                :ui="staticCardUi"
              >
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p class="text-lg font-semibold">
                      {{ primaryFont.name }}
                    </p>
                    <p class="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-dimmed">
                      {{ primaryFont.role }}
                    </p>
                  </div>
                  <UBadge
                    color="neutral"
                    variant="outline"
                    :ui="badgeUi"
                  >
                    {{ primaryFont.stack.split(',')[0]?.replaceAll('"', '') }}
                  </UBadge>
                </div>
                <p class="mt-8 text-3xl font-semibold leading-tight">
                  {{ primaryFont.sample }}
                </p>
              </UCard>

              <UCard
                variant="outline"
                :ui="staticCardUi"
              >
                <p class="font-mono text-sm font-semibold">
                  {{ monoFont.name }}
                </p>
                <p class="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-dimmed">
                  {{ monoFont.role }}
                </p>
                <p class="mt-7 font-mono text-base font-semibold leading-7">
                  {{ monoFont.sample }}
                </p>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </UPageSection>
</template>
