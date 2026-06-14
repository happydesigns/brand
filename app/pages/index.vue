<script setup lang="ts">
const guide = useBrandGuide()

const featuredColors = guide.colors.slice(0, 4)
const primaryFont = guide.fonts[0]
const monoFont = guide.fonts[1]

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

const logoUseRules = [
  'Wordmark first',
  'Symbol for square marks',
  'Lockups for brand moments'
]

const voiceUseRules = [
  'Concrete nouns',
  'Direct verbs',
  'Calm recovery'
]

const interfaceTabs = [
  {
    label: 'Forms',
    value: 'forms',
    icon: 'i-lucide-text-cursor-input'
  },
  {
    label: 'Controls',
    value: 'controls',
    icon: 'i-lucide-sliders-horizontal'
  }
]

const interfaceChecklist = [
  {
    label: 'Visible borders',
    description: 'Make structure readable before color.'
  },
  {
    label: 'Coral focus',
    description: 'Use coral for focus and active details.'
  },
  {
    label: 'Compact labels',
    description: 'Keep metadata precise.'
  }
]

const interfaceSelectItems = [
  'Ready for review',
  'Needs content',
  'Published'
]

const projectStatusItems = [
  'Draft',
  'Ready for review',
  'Published'
]

const heroDemoState = reactive({
  projectName: 'Website refresh',
  status: 'Ready for review'
})

const heroRevealFrame = ref<HTMLElement | null>(null)
const heroReveal = ref(50)
const isHeroRevealDragging = ref(false)

const clampHeroReveal = (value: number) => Math.min(100, Math.max(0, value))

const updateHeroRevealFromPointer = (event: PointerEvent) => {
  const rect = heroRevealFrame.value?.getBoundingClientRect()

  if (!rect?.width) {
    return
  }

  heroReveal.value = clampHeroReveal(((event.clientX - rect.left) / rect.width) * 100)
}

const startHeroRevealDrag = (event: PointerEvent) => {
  isHeroRevealDragging.value = true
  updateHeroRevealFromPointer(event)
  const target = event.currentTarget as HTMLElement
  target.setPointerCapture(event.pointerId)
}

const moveHeroRevealDrag = (event: PointerEvent) => {
  if (!isHeroRevealDragging.value) {
    return
  }

  updateHeroRevealFromPointer(event)
}

const stopHeroRevealDrag = () => {
  isHeroRevealDragging.value = false
}

const handleHeroRevealKeydown = (event: KeyboardEvent) => {
  const step = event.shiftKey ? 10 : 5

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    heroReveal.value = clampHeroReveal(heroReveal.value - step)
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    heroReveal.value = clampHeroReveal(heroReveal.value + step)
  }

  if (event.key === 'Home') {
    event.preventDefault()
    heroReveal.value = 0
  }

  if (event.key === 'End') {
    event.preventDefault()
    heroReveal.value = 100
  }
}

const heroDefaultTheme = {
  badge: {
    color: 'neutral' as const,
    variant: 'outline' as const,
    size: 'sm' as const
  },
  button: {
    color: 'neutral' as const,
    variant: 'solid' as const,
    size: 'sm' as const
  },
  input: {
    color: 'neutral' as const,
    variant: 'outline' as const,
    size: 'sm' as const
  },
  select: {
    color: 'neutral' as const,
    variant: 'outline' as const,
    size: 'sm' as const
  },
  alert: {
    color: 'neutral' as const,
    variant: 'subtle' as const
  }
}

const heroBrandTheme = {
  button: {
    color: 'primary' as const,
    variant: 'solid' as const,
    size: 'sm' as const
  },
  input: {
    size: 'sm' as const
  },
  select: {
    size: 'sm' as const
  },
  alert: {
    color: 'primary' as const,
    variant: 'subtle' as const
  }
}

const interfaceFormState = reactive({
  projectName: 'Website refresh',
  status: 'Ready for review',
  note: 'Graphite carries the save action. Coral stays in focus and active details.'
})

const heroLinks = [
  {
    label: 'Explore guide',
    icon: 'i-lucide-arrow-right',
    trailing: true,
    to: '/docs'
  },
  {
    label: 'View components',
    icon: 'i-lucide-component',
    color: 'neutral' as const,
    variant: 'outline' as const,
    to: '/docs/components'
  }
]

const ctaLinks = [
  {
    label: 'Open docs',
    icon: 'i-lucide-arrow-right',
    trailing: true,
    to: '/docs'
  }
]

const installMarkdown = `::code-group
\`\`\`bash [pnpm]
pnpm add @happydesigns/brand
\`\`\`

\`\`\`ts [nuxt.config.ts]
export default defineNuxtConfig({
  extends: ['@happydesigns/brand']
})
\`\`\`
::`

const { data: installContent } = await useAsyncData('home-install-code', async () => {
  const { parseMarkdown } = await import('@nuxtjs/mdc/runtime')
  const { default: highlighter } = await import('#mdc-highlighter')

  return parseMarkdown(installMarkdown, {
    highlight: {
      highlighter
    }
  })
})

const sectionCardUi = {
  root: 'overflow-hidden rounded-sm !bg-default shadow-none transition-none hover:!bg-default',
  body: 'p-0 sm:p-0'
}

const staticCardUi = {
  root: 'rounded-sm !bg-muted shadow-none transition-none hover:!bg-muted',
  body: 'p-5 sm:p-5'
}

const heroDefaultUi = {
  badge: {
    base: 'rounded-md bg-default text-highlighted ring-default'
  },
  button: {
    base: 'rounded-md bg-inverted text-inverted hover:bg-inverted/90 focus-visible:ring-2 focus-visible:ring-primary'
  },
  input: {
    base: 'rounded-md bg-default text-highlighted ring-default focus-visible:ring-primary'
  },
  select: {
    base: 'rounded-md bg-default text-highlighted ring-default focus-visible:ring-primary'
  },
  alert: {
    root: 'rounded-lg border border-default bg-muted text-highlighted shadow-none',
    icon: 'text-muted',
    title: 'text-sm font-medium text-highlighted'
  }
}

const badgeUi = {
  base: 'rounded-sm bg-elevated text-highlighted ring-default'
}
</script>

<template>
  <div class="min-h-screen bg-default">
    <div class="mx-auto w-full max-w-(--ui-container) overflow-hidden border-x border-default bg-default">
      <UPageHero
        :title="guide.brand.claim"
        description="The happydesigns source of truth for identity, interface patterns, and Nuxt UI implementation."
        :links="heroLinks"
        headline="happydesigns brand guide"
        orientation="horizontal"
        class="border-b border-default"
        :ui="{
          container: 'grid max-w-none !gap-0 !px-0 !py-0 sm:!gap-0 sm:!px-0 sm:!py-0 lg:!px-0 lg:grid-cols-[1fr_.95fr] lg:items-stretch',
          wrapper: 'flex min-h-[580px] flex-col justify-center border-b border-default bg-default px-7 py-16 sm:px-12 sm:py-20 lg:min-h-[660px] lg:border-b-0 lg:border-r',
          headline: 'font-mono text-xs uppercase tracking-[0.14em] text-label before:mr-2 before:inline-block before:size-2 before:rounded-full before:bg-primary',
          title: 'max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal text-highlighted sm:text-7xl',
          description: 'max-w-2xl text-lg leading-8 text-body',
          links: 'mt-9 flex flex-wrap gap-3',
          body: '!mt-0 flex h-full min-h-[580px] bg-elevated p-0 lg:min-h-[660px]'
        }"
      >
        <template #default>
          <div class="flex h-full min-h-[580px] w-full items-center justify-center bg-elevated p-8 sm:p-12 lg:min-h-[660px]">
            <div class="relative w-full max-w-xl rounded-md border border-default bg-muted shadow-none">
              <div class="overflow-hidden rounded-md">
                <div class="flex items-center justify-between border-b border-default bg-muted px-4 py-3 font-mono text-xs text-label">
                  <div class="flex gap-2">
                    <span class="size-2.5 rounded-full bg-sand-400" />
                    <span class="size-2.5 rounded-full bg-sand-300" />
                    <span class="size-2.5 rounded-full bg-sand-300" />
                  </div>
                  <span>{{ guide.brand.packageName }}</span>
                  <UBadge
                    label="v0.1"
                    color="neutral"
                    variant="outline"
                    :ui="{ base: 'rounded-sm bg-muted text-highlighted ring-default font-mono' }"
                  />
                </div>

                <div class="grid gap-px bg-accented">
                  <div class="flex items-center justify-between bg-default px-5 py-4">
                    <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                      Theme layer
                    </p>
                    <p class="font-mono text-xs text-dimmed">
                      Nuxt UI -> happydesigns
                    </p>
                  </div>

                  <div
                    ref="heroRevealFrame"
                    class="relative bg-default"
                  >
                    <div class="p-5">
                      <UTheme :props="heroBrandTheme">
                        <HeroThemeDemo
                          v-model:project-name="heroDemoState.projectName"
                          v-model:status="heroDemoState.status"
                        />
                      </UTheme>
                    </div>

                    <div
                      class="absolute inset-0 z-10 overflow-hidden p-5"
                      :style="{ clipPath: `inset(0 ${100 - heroReveal}% 0 0)` }"
                    >
                      <UTheme
                        :props="heroDefaultTheme"
                        :ui="heroDefaultUi"
                      >
                        <div class="nuxt-ui-default-demo h-full">
                          <HeroThemeDemo
                            v-model:project-name="heroDemoState.projectName"
                            v-model:status="heroDemoState.status"
                          />
                        </div>
                      </UTheme>
                    </div>

                    <div
                      class="pointer-events-none absolute inset-y-0 z-20 w-0 border-l border-dashed border-inverted/60"
                      :style="{ left: `${heroReveal}%` }"
                    />

                    <div
                      class="absolute top-1/2 z-40 flex size-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-inverted bg-inverted text-inverted shadow-sm ring-2 ring-default focus-visible:outline-none focus-visible:ring-primary"
                      :style="{ left: `${heroReveal}%` }"
                      role="slider"
                      tabindex="0"
                      aria-label="Reveal the happydesigns theme"
                      :aria-valuemin="0"
                      :aria-valuemax="100"
                      :aria-valuenow="Math.round(heroReveal)"
                      @pointerdown="startHeroRevealDrag"
                      @pointermove="moveHeroRevealDrag"
                      @pointerup="stopHeroRevealDrag"
                      @pointercancel="stopHeroRevealDrag"
                      @lostpointercapture="stopHeroRevealDrag"
                      @keydown="handleHeroRevealKeydown"
                    >
                      <span class="sr-only">Reveal the happydesigns theme</span>
                      <UIcon
                        name="i-lucide-grip-vertical"
                        class="size-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </UPageHero>

      <LandingSpacer />

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
                <p>
                  {{ item.description }}
                </p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <UButton
                    v-for="section in item.sections"
                    :key="section.slug"
                    :to="`/docs/${section.slug}`"
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

      <LandingSpacer />

      <div class="border-b border-default bg-elevated">
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
                    <HDSectionLabel>
                      palette preview
                    </HDSectionLabel>
                    <UButton
                      to="/docs/colors"
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
                      class="bg-muted p-4"
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
                    <HDSectionLabel>
                      typography
                    </HDSectionLabel>
                    <UButton
                      to="/docs/typography"
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

        <UPageSection
          class="bg-transparent"
          :ui="{ container: 'px-7 py-7 sm:px-12 sm:py-12 lg:py-8' }"
        >
          <UCard
            variant="outline"
            :ui="sectionCardUi"
          >
            <div class="border-b border-default bg-default p-6 sm:p-8">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                02 / Identity behavior
              </p>
              <h2 class="mt-8 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                Recognition comes from choosing the right mark and saying less, better.
              </h2>
            </div>

            <div class="grid lg:grid-cols-[1.05fr_.95fr]">
              <div class="border-b border-default bg-default p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <HDSectionLabel>
                  logo use
                </HDSectionLabel>
                <h3 class="mt-8 max-w-2xl text-3xl font-semibold leading-tight">
                  Start with the wordmark.
                </h3>
                <p class="mt-5 max-w-2xl text-base leading-8 text-body">
                  Default to the wordmark. Use the symbol for square contexts, and lockups when symbol and name should appear together.
                </p>
                <div class="mt-6 flex flex-wrap gap-2">
                  <UBadge
                    v-for="rule in logoUseRules"
                    :key="rule"
                    :label="rule"
                    color="neutral"
                    variant="outline"
                    :ui="badgeUi"
                  />
                </div>
                <div class="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <UCard
                    variant="outline"
                    :ui="staticCardUi"
                  >
                    <div class="flex min-h-36 items-center justify-center rounded-sm border border-default bg-default">
                      <HDLogo
                        variant="wordmark"
                        size="lg"
                      />
                    </div>
                    <p class="mt-4 text-sm font-semibold">
                      Wordmark
                    </p>
                    <p class="mt-2 text-sm leading-6 text-muted">
                      Default for headers, docs, navigation, and slim horizontal layouts.
                    </p>
                  </UCard>
                  <UCard
                    variant="outline"
                    :ui="staticCardUi"
                  >
                    <div class="flex min-h-36 items-center justify-center rounded-sm border border-default bg-default">
                      <HDLogo
                        variant="symbol"
                        size="xl"
                      />
                    </div>
                    <p class="mt-4 text-sm font-semibold">
                      Symbol
                    </p>
                    <p class="mt-2 text-sm leading-6 text-muted">
                      For favicon, app icon, social avatars, and controlled brand moments.
                    </p>
                  </UCard>
                </div>
                <UButton
                  to="/docs/logos"
                  label="Open logos"
                  icon="i-lucide-arrow-right"
                  trailing
                  color="neutral"
                  variant="outline"
                  class="mt-6"
                />
              </div>

              <div class="bg-default p-6 sm:p-8">
                <HDSectionLabel>
                  voice
                </HDSectionLabel>
                <h3 class="mt-8 text-3xl font-semibold leading-tight">
                  Keep the voice clear before clever.
                </h3>
                <p class="mt-5 max-w-2xl text-base leading-8 text-body">
                  happydesigns should sound thoughtful, warm, precise, and practical. Technical copy can be exact without becoming cold.
                </p>
                <div class="mt-8 flex flex-wrap gap-2">
                  <UBadge
                    v-for="rule in voiceUseRules"
                    :key="rule"
                    :label="rule"
                    color="neutral"
                    variant="outline"
                    :ui="badgeUi"
                  />
                </div>

                <div class="mt-8 grid gap-3 sm:grid-cols-2">
                  <UCard
                    variant="outline"
                    :ui="staticCardUi"
                  >
                    <p class="font-mono text-xs uppercase tracking-[0.14em] text-secondary">
                      Do
                    </p>
                    <ul class="mt-5 space-y-4">
                      <li
                        v-for="item in guide.voice.dos.slice(0, 2)"
                        :key="item"
                        class="text-sm leading-6 text-body"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </UCard>
                  <UCard
                    variant="outline"
                    :ui="staticCardUi"
                  >
                    <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                      Do not
                    </p>
                    <ul class="mt-5 space-y-4">
                      <li
                        v-for="item in guide.voice.donts.slice(0, 2)"
                        :key="item"
                        class="text-sm leading-6 text-body"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </UCard>
                </div>

                <UButton
                  to="/docs/voice"
                  label="Open voice"
                  icon="i-lucide-arrow-right"
                  trailing
                  color="neutral"
                  variant="outline"
                  class="mt-6"
                />
              </div>
            </div>
          </UCard>
        </UPageSection>

        <UPageSection
          class="bg-transparent"
          :ui="{ container: 'px-7 pt-0 pb-10 sm:px-12 sm:pb-12 lg:pt-0 lg:pb-12' }"
        >
          <UCard
            variant="outline"
            :ui="sectionCardUi"
          >
            <div class="grid lg:grid-cols-[.42fr_.58fr]">
              <div class="border-b border-default bg-default p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                  03 / Interface application
                </p>
                <h2 class="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                  Components turn the system into product behavior.
                </h2>
                <p class="mt-6 max-w-xl text-base leading-8 text-body">
                  Interfaces should feel useful before branded. Borders, spacing, focus states, and compact labels carry the system in repeated work.
                </p>

                <div class="mt-10 grid gap-3">
                  <UAlert
                    title="Calm feedback"
                    description="State changes explain what happened and what to do next."
                    icon="i-lucide-circle-check"
                    color="success"
                    variant="subtle"
                  />

                  <UCard
                    variant="outline"
                    :ui="staticCardUi"
                  >
                    <div class="flex items-start justify-between gap-4">
                      <div>
                        <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                          Review state
                        </p>
                        <p class="mt-1 text-base font-semibold">
                          Component rules
                        </p>
                      </div>
                      <UBadge
                        label="72%"
                        color="neutral"
                        variant="outline"
                        :ui="badgeUi"
                      />
                    </div>

                    <UProgress
                      :model-value="72"
                      color="primary"
                      size="sm"
                      class="mt-5"
                    />

                    <div class="mt-5 grid gap-3">
                      <UCheckbox
                        v-for="item in interfaceChecklist"
                        :key="item.label"
                        :label="item.label"
                        :description="item.description"
                        :default-value="true"
                        color="primary"
                      />
                    </div>
                  </UCard>
                </div>
              </div>

              <div class="grid gap-px bg-accented lg:grid-rows-[auto_1fr]">
                <div class="bg-default p-6 sm:p-8">
                  <HDSectionLabel>
                    component behavior
                  </HDSectionLabel>
                  <UTabs
                    :items="interfaceTabs"
                    color="primary"
                    variant="link"
                    default-value="forms"
                    :unmount-on-hide="false"
                    class="mt-7"
                    :ui="{ content: 'mt-6' }"
                  >
                    <template #content="{ item }">
                      <div
                        v-if="item.value === 'forms'"
                        class="grid gap-4 rounded-sm bg-muted p-4 ring ring-default sm:grid-cols-2"
                      >
                        <UFormField
                          name="projectName"
                          label="Project name"
                          help="Plain, bordered, easy to scan."
                        >
                          <UInput
                            v-model="interfaceFormState.projectName"
                            spellcheck="false"
                            class="w-full"
                          />
                        </UFormField>
                        <UFormField
                          name="status"
                          label="Status"
                          help="Semantic labels before color."
                        >
                          <USelect
                            v-model="interfaceFormState.status"
                            :items="interfaceSelectItems"
                            class="w-full"
                          />
                        </UFormField>
                      </div>

                      <div
                        v-else
                        class="grid gap-4 rounded-sm bg-muted p-4 ring ring-default"
                      >
                        <USwitch
                          label="Use visible structure"
                          description="A compact decision, not a brand moment."
                          :default-value="true"
                          color="primary"
                        />
                        <UFormField
                          label="Accent strength"
                          help="Coral appears in controlled active states."
                        >
                          <USlider
                            :default-value="62"
                            color="primary"
                            size="sm"
                          />
                        </UFormField>
                      </div>
                    </template>
                  </UTabs>
                </div>

                <div class="bg-default p-6 sm:p-8">
                  <div class="flex flex-wrap items-center justify-between gap-3">
                    <HDSectionLabel>
                      interface use
                    </HDSectionLabel>
                    <UButton
                      to="/docs/components"
                      label="Open components"
                      icon="i-lucide-arrow-right"
                      trailing
                      color="neutral"
                      variant="outline"
                      size="sm"
                    />
                  </div>
                  <UCard
                    variant="outline"
                    class="mt-7"
                    :ui="staticCardUi"
                  >
                    <div class="flex items-start justify-between gap-4 border-b border-default pb-5">
                      <div>
                        <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                          Project settings
                        </p>
                        <p class="mt-1 text-lg font-semibold">
                          Website refresh
                        </p>
                      </div>
                      <UBadge
                        color="neutral"
                        variant="outline"
                        :ui="badgeUi"
                      >
                        Ready
                      </UBadge>
                    </div>

                    <UForm
                      :state="interfaceFormState"
                      class="mt-5 grid gap-4 sm:grid-cols-2"
                    >
                      <UFormField
                        name="projectName"
                        label="Project name"
                        help="Internal project label."
                      >
                        <UInput
                          v-model="interfaceFormState.projectName"
                          spellcheck="false"
                          class="w-full"
                        />
                      </UFormField>
                      <UFormField
                        name="status"
                        label="Status"
                        help="Use color only when it adds meaning."
                      >
                        <USelect
                          v-model="interfaceFormState.status"
                          :items="projectStatusItems"
                          class="w-full"
                        />
                      </UFormField>
                      <UFormField
                        name="note"
                        label="Implementation note"
                        help="Specific enough to guide reuse."
                        class="sm:col-span-2"
                      >
                        <UTextarea
                          v-model="interfaceFormState.note"
                          :rows="3"
                          spellcheck="false"
                          class="w-full"
                        />
                      </UFormField>

                      <div class="flex flex-wrap justify-end gap-2 border-t border-default pt-4 sm:col-span-2">
                        <UButton
                          label="Cancel"
                          color="neutral"
                          variant="outline"
                          type="button"
                        />
                        <UButton
                          label="Save settings"
                          type="button"
                        />
                      </div>
                    </UForm>
                  </UCard>
                </div>
              </div>
            </div>
          </UCard>
        </UPageSection>
      </div>

      <LandingSpacer />

      <UPageSection
        class="border-b border-default bg-elevated"
        :ui="{ container: 'px-7 py-12 sm:px-12 sm:py-14' }"
      >
        <UPageCTA
          title="Use the guide in real projects."
          description="Open the docs for the rules, then install the layer when a Nuxt project should carry the happydesigns system."
          :links="ctaLinks"
          orientation="horizontal"
          variant="outline"
          :ui="{
            root: 'rounded-sm bg-muted shadow-none',
            container: 'gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[.75fr_1fr]',
            title: 'text-3xl font-semibold leading-tight sm:text-4xl',
            description: 'text-base leading-8 text-body',
            body: 'mt-0',
            links: 'flex flex-wrap gap-3'
          }"
        >
          <template #default>
            <div id="install-package">
              <p class="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                Install
              </p>
              <div class="dark">
                <MDC
                  v-if="installContent"
                  :value="installContent"
                  tag="div"
                  class="hd-install-code not-prose [&_.shiki]:!bg-transparent [&>div]:!border-l-[4px] [&>div]:!border-l-primary [&>div]:!shadow-none [&_pre]:!border-l-0"
                />
              </div>
            </div>
          </template>
        </UPageCTA>
      </UPageSection>
    </div>
  </div>
</template>
