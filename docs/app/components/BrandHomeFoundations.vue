<script setup lang="ts">
const guide = useHappydesignsGuide()
const featuredColors = guide.colors.slice(0, 4)
const [primaryFont, monoFont] = guide.fonts

if (!primaryFont || !monoFont) {
  throw new Error('The homepage requires primary and mono brand fonts.')
}

const foundationRules = [
  {
    title: 'Color roles',
    description: 'Warm white, graphite, sand, coral, and petrol set the base before expression appears.',
    icon: 'i-lucide-palette'
  },
  {
    title: 'Type hierarchy',
    description: 'Use Bricolage for structure, and mono only for exact or technical content.',
    icon: 'i-lucide-type'
  },
  {
    title: 'Restraint',
    description: 'Use coral for focus and signature details, not every surface.',
    icon: 'i-lucide-circle-check'
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
            Color and type set the pace before anything becomes decorative.
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-body">
            Start with color roles and type hierarchy. Coral, petrol, Bricolage, and mono each have a job.
          </p>

          <div class="mt-10 border-t border-default pt-7">
            <p class="font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
              Foundation rules
            </p>
            <div class="mt-6 grid gap-5">
              <div
                v-for="rule in foundationRules"
                :key="rule.title"
                class="flex gap-3"
              >
                <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-default bg-muted">
                  <UIcon
                    :name="rule.icon"
                    class="size-4 text-primary"
                  />
                </span>
                <div>
                  <p class="text-sm font-semibold leading-6 text-highlighted">
                    {{ rule.title }}
                  </p>
                  <p class="mt-1 text-sm leading-6 text-toned">
                    {{ rule.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
