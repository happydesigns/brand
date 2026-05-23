<script setup lang="ts">
const guide = useBrandGuide()

const featuredColors = guide.colors.slice(0, 4)
const primaryFont = guide.fonts[0]
const monoFont = guide.fonts[1]

const guideGroups = [
  {
    number: '01',
    title: 'Foundations',
    description: 'Color roles and type hierarchy create the calm base.',
    sections: guide.sections.filter(section => ['colors', 'typography'].includes(section.slug))
  },
  {
    number: '02',
    title: 'Identity',
    description: 'Logo choices and voice define how happydesigns is recognized.',
    sections: guide.sections.filter(section => ['logos', 'voice'].includes(section.slug))
  },
  {
    number: '03',
    title: 'Application',
    description: 'Components turn the system into repeated product behavior.',
    sections: guide.sections.filter(section => section.slug === 'components')
  }
]

const foundationTimelineItems = [
  {
    title: 'Start with roles',
    description: 'Warm white, graphite, sand, coral, and petrol define the base before extra expression appears.',
    avatar: { text: '01' }
  },
  {
    title: 'Set hierarchy',
    description: 'Use Bricolage for readable structure and mono only when the content is exact or technical.',
    avatar: { text: '02' }
  },
  {
    title: 'Add restraint',
    description: 'Coral marks focus and signature details. It should not become decoration on every surface.',
    avatar: { text: '03' }
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
    description: 'Structure is readable before color is added.'
  },
  {
    label: 'Coral focus',
    description: 'The accent marks interaction, not decoration.'
  },
  {
    label: 'Compact labels',
    description: 'Metadata stays precise and easy to scan.'
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

const heroRevealFrameHeight = 340
const heroRevealFrame = ref<HTMLElement | null>(null)
const heroReveal = ref(56)
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
  note: 'Graphite carries the save action. Coral appears in focus and active details, not as a large default surface.'
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
    label: 'Open docs overview',
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
        description="The practical source of truth for the happydesigns identity: colors, typography, logos, components, and voice working together with care."
        :links="heroLinks"
        headline="happydesigns brand guide"
        orientation="horizontal"
        class="border-b border-default"
        :ui="{
          container: 'grid max-w-none gap-0 !px-0 !py-0 sm:!px-0 sm:!py-0 lg:!px-0 lg:grid-cols-[1fr_.95fr] lg:items-stretch',
          wrapper: 'flex min-h-[580px] flex-col justify-center border-b border-default bg-default px-7 py-16 sm:px-12 sm:py-20 lg:min-h-[660px] lg:border-b-0 lg:border-r',
          headline: 'font-mono text-xs uppercase tracking-[0.14em] text-label before:mr-2 before:inline-block before:size-2 before:rounded-full before:bg-primary',
          title: 'max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal text-highlighted sm:text-7xl',
          description: 'max-w-2xl text-lg leading-8 text-body',
          links: 'mt-9 flex flex-wrap gap-3',
          body: 'm-0 flex h-full min-h-[580px] bg-elevated p-0 lg:min-h-[660px]'
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
                    :style="{ minHeight: `${heroRevealFrameHeight}px` }"
                  >
                    <div class="absolute inset-0 p-5">
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
                      class="pointer-events-none absolute inset-y-0 z-20 w-px bg-inverted"
                      :style="{ left: `${heroReveal}%` }"
                    />
                  </div>
                </div>
              </div>

              <div
                class="absolute z-40 flex size-9 -translate-x-1/2 translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-inverted bg-inverted text-inverted shadow-sm ring-2 ring-default focus-visible:outline-none focus-visible:ring-primary"
                :style="{ left: `${heroReveal}%`, bottom: `${heroRevealFrameHeight / 2}px` }"
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
        </template>
      </UPageHero>

      <LandingSpacer />

      <UPageSection
        class="border-b border-default bg-elevated"
        :ui="{ container: 'px-7 py-8 sm:px-12 sm:py-10' }"
      >
        <UCard
          variant="outline"
          :ui="sectionCardUi"
        >
          <div class="grid lg:grid-cols-[.9fr_1.1fr]">
            <div class="border-b border-default p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <HDSectionLabel>
                how to read the guide
              </HDSectionLabel>
              <h2 class="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                Start with structure, then add expression.
              </h2>
              <p class="mt-6 max-w-xl text-base leading-8 text-body">
                Read the guide as a working sequence: foundations first, identity behavior next, interface application last.
              </p>
            </div>

            <div class="p-6 sm:p-8">
              <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p class="font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
                  Guide route
                </p>
                <p class="font-mono text-xs text-dimmed">
                  Foundations -> Identity -> Application
                </p>
              </div>

              <div class="grid gap-px overflow-hidden rounded-sm bg-accented ring ring-default lg:grid-cols-3">
                <div
                  v-for="group in guideGroups"
                  :key="group.title"
                  class="bg-muted p-5"
                >
                  <div class="flex items-start justify-between gap-3">
                    <p class="font-mono text-xs text-primary">
                      {{ group.number }}
                    </p>
                    <div class="flex -space-x-1">
                      <span
                        v-for="section in group.sections"
                        :key="section.slug"
                        class="flex size-7 items-center justify-center rounded-full border border-default bg-muted"
                      >
                        <UIcon
                          :name="section.icon"
                          class="size-3.5 text-primary"
                        />
                      </span>
                    </div>
                  </div>
                  <p class="mt-8 text-lg font-semibold">
                    {{ group.title }}
                  </p>
                  <p class="mt-2 min-h-12 text-sm leading-6 text-muted">
                    {{ group.description }}
                  </p>
                  <div class="mt-5 flex flex-wrap gap-2">
                    <NuxtLink
                      v-for="section in group.sections"
                      :key="section.slug"
                      :to="`/docs/${section.slug}`"
                      class="inline-flex items-center gap-1.5 rounded-sm border border-muted bg-muted px-2 py-1 text-xs font-medium transition hover:bg-elevated"
                    >
                      {{ section.title }}
                      <UIcon
                        name="i-lucide-arrow-right"
                        class="size-3 text-dimmed"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-default bg-muted">
            <div class="border-b border-default px-6 py-3 sm:px-8">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
                Operating principles
              </p>
            </div>
            <div class="grid gap-px bg-accented sm:grid-cols-2 lg:grid-cols-4">
              <div
                v-for="principle in guide.principles"
                :key="principle"
                class="flex gap-3 bg-muted p-5"
              >
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <p class="text-sm font-medium leading-6 text-highlighted">
                  {{ principle }}
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </UPageSection>

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
                  Use the palette and typography to create calm hierarchy first. Coral, petrol, Bricolage, and mono each have a job.
                </p>

                <UTimeline
                  :items="foundationTimelineItems"
                  :default-value="2"
                  color="primary"
                  size="sm"
                  class="mt-10"
                  :ui="{
                    root: 'gap-0',
                    item: 'gap-4',
                    container: 'pt-1',
                    indicator: 'bg-default text-primary ring-1 ring-default group-data-[state=completed]:bg-default group-data-[state=completed]:text-primary group-data-[state=active]:bg-inverted group-data-[state=active]:text-inverted',
                    separator: 'bg-accented group-data-[state=completed]:bg-accented',
                    title: 'text-sm font-semibold text-highlighted',
                    description: 'text-sm leading-6 text-muted',
                    wrapper: 'pb-7'
                  }"
                />
              </div>

              <div class="grid gap-px bg-accented lg:grid-rows-[auto_1fr]">
                <div class="bg-default p-6 sm:p-8">
                  <div class="flex flex-wrap items-center justify-between gap-3">
                    <HDSectionLabel>
                      palette preview
                    </HDSectionLabel>
                    <UButton
                      to="/docs/colors"
                      label="Color details"
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
                      label="Typography details"
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
                  Use the wordmark first, then choose the mark that fits the job.
                </h3>
                <p class="mt-5 max-w-2xl text-base leading-8 text-body">
                  The wordmark, symbol, and lockups do different jobs. Use the wordmark for everyday identity, and use lockups when the relationship between symbol and name should be shown.
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
                      Default mark for headers, documentation, navigation, and slim horizontal layouts.
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
                      Square mark for favicon, app icon, social avatars, and controlled brand moments.
                    </p>
                  </UCard>
                </div>
                <UButton
                  to="/docs/logos"
                  label="Logo details"
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
                  happydesigns should sound thoughtful, warm, precise, and practical. Technical writing can be exact without becoming cold.
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
                  label="Voice details"
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
                  Components turn the brand system into everyday product behavior.
                </h2>
                <p class="mt-6 max-w-xl text-base leading-8 text-body">
                  Interfaces should feel useful before they feel branded. Use borders, spacing, focus states, and compact labels to make the system clear in repeated work.
                </p>

                <div class="mt-10 grid gap-3">
                  <UAlert
                    title="Pattern ready"
                    description="Feedback states stay calm, specific, and tied to useful action."
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
                          help="Inputs stay plain, bordered, and easy to scan."
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
                          help="Selects use semantic labels before color."
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
                          description="Switches are compact decisions, not decorative brand moments."
                          :default-value="true"
                          color="primary"
                        />
                        <UFormField
                          label="Accent strength"
                          help="Coral marks active/focus behavior in controlled amounts."
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
                      label="Component details"
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
                        help="Shown in internal project views."
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
                        help="Use status color only when it adds meaning."
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
                        help="Keep the note specific enough to guide reuse."
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
          title="Use the guide as a working system."
          description="Move from the overview into the docs, then install the brand layer when the rules are ready to become reusable implementation."
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
