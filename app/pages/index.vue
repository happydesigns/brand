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
  root: 'overflow-hidden rounded-sm !bg-warm-white shadow-none transition-none hover:!bg-warm-white dark:!bg-[#282827] dark:hover:!bg-[#282827]',
  body: 'p-0 sm:p-0'
}

const staticCardUi = {
  root: 'rounded-sm !bg-white shadow-none transition-none hover:!bg-white dark:!bg-[#2F2F2E] dark:hover:!bg-[#2F2F2E]',
  body: 'p-5 sm:p-5'
}

const badgeUi = {
  base: 'rounded-sm bg-sand-100 text-graphite ring-sand-300 dark:bg-white/5 dark:text-sand-100 dark:ring-white/15'
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
          headline: 'font-mono text-xs uppercase tracking-[0.14em] text-label before:mr-2 before:inline-block before:size-2 before:rounded-full before:bg-coral-500',
          title: 'max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal text-highlighted sm:text-7xl',
          description: 'max-w-2xl text-lg leading-8 text-body',
          links: 'mt-9 flex flex-wrap gap-3',
          body: 'm-0 flex h-full min-h-[580px] bg-sand-150 dark:bg-[#282827] p-0 lg:min-h-[660px]'
        }"
      >
        <template #default>
          <div class="flex h-full min-h-[580px] w-full items-center justify-center bg-sand-150 dark:bg-[#282827] p-8 sm:p-12 lg:min-h-[660px]">
            <div class="w-full max-w-xl overflow-hidden rounded-md border border-default bg-white dark:bg-[#2F2F2E] shadow-none">
              <div class="flex items-center justify-between border-b border-default px-4 py-3 font-mono text-xs text-label">
                <div class="flex gap-2">
                  <span class="size-2.5 rounded-full bg-sand-400" />
                  <span class="size-2.5 rounded-full bg-sand-300" />
                  <span class="size-2.5 rounded-full bg-sand-300" />
                </div>
                <span>{{ guide.brand.packageName }}</span>
                <span class="rounded-sm border border-muted px-2 py-1">v0.1</span>
              </div>

              <div class="grid md:grid-cols-2">
                <div class="border-b border-default p-5 md:border-b-0 md:border-r">
                  <p class="font-mono text-xs text-sand-500 dark:text-sand-400">
                    guide.md
                  </p>
                  <div class="mt-4 rounded-sm border border-muted bg-sand-50 dark:bg-graphite p-5 font-mono text-xs leading-6">
                    <p class="text-coral-500 dark:text-coral-400">
                      # {{ guide.brand.name }}
                    </p>
                    <p class="mt-4">
                      Identity principles, tokens, assets, components, and voice for thoughtful web work.
                    </p>
                    <p class="mt-4 text-coral-500 dark:text-coral-400">
                      ::principle
                    </p>
                    <p>{{ guide.principles[0] }}</p>
                  </div>
                </div>

                <div class="p-5">
                  <p class="font-mono text-xs text-sand-500 dark:text-sand-400">
                    sections
                  </p>
                  <div class="mt-4 space-y-3">
                    <HDLogo
                      variant="wordmark"
                      size="md"
                    />
                    <NuxtLink
                      v-for="section in guide.sections.slice(0, 3)"
                      :key="section.slug"
                      :to="`/docs/${section.slug}`"
                      class="flex items-center justify-between rounded-sm border border-muted bg-white dark:bg-[#2F2F2E] px-3 py-2 text-sm font-medium hover:bg-peach-50 dark:hover:bg-white/10"
                    >
                      <span class="inline-flex items-center gap-2">
                        <UIcon
                          :name="section.icon"
                          class="size-4 text-coral-500 dark:text-coral-400"
                        />
                        {{ section.title }}
                      </span>
                      <UIcon
                        name="i-lucide-arrow-right"
                        class="size-4 text-sand-500 dark:text-sand-400"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </UPageHero>

      <LandingSpacer />

      <UPageSection
        class="border-b border-default bg-sand-150 dark:bg-[#282827]"
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
                <p class="font-mono text-xs text-sand-500 dark:text-sand-400">
                  Foundations -> Identity -> Application
                </p>
              </div>

              <div class="grid gap-px overflow-hidden rounded-sm bg-sand-300 dark:bg-white/10 ring ring-default lg:grid-cols-3">
                <div
                  v-for="group in guideGroups"
                  :key="group.title"
                  class="bg-white dark:bg-[#2F2F2E] p-5"
                >
                  <div class="flex items-start justify-between gap-3">
                    <p class="font-mono text-xs text-coral-500 dark:text-coral-400">
                      {{ group.number }}
                    </p>
                    <div class="flex -space-x-1">
                      <span
                        v-for="section in group.sections"
                        :key="section.slug"
                        class="flex size-7 items-center justify-center rounded-full border border-default bg-white dark:bg-[#2F2F2E]"
                      >
                        <UIcon
                          :name="section.icon"
                          class="size-3.5 text-coral-500 dark:text-coral-400"
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
                      class="inline-flex items-center gap-1.5 rounded-sm border border-muted bg-white dark:bg-[#2F2F2E] px-2 py-1 text-xs font-medium transition hover:bg-peach-50 dark:hover:bg-white/10"
                    >
                      {{ section.title }}
                      <UIcon
                        name="i-lucide-arrow-right"
                        class="size-3 text-sand-500 dark:text-sand-400"
                      />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-default bg-white dark:bg-[#2F2F2E]">
            <div class="border-b border-default px-6 py-3 sm:px-8">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
                Operating principles
              </p>
            </div>
            <div class="grid gap-px bg-sand-300 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              <div
                v-for="principle in guide.principles"
                :key="principle"
                class="flex gap-3 bg-white dark:bg-[#2F2F2E] p-5"
              >
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-coral-500" />
                <p class="text-sm font-medium leading-6 text-highlighted">
                  {{ principle }}
                </p>
              </div>
            </div>
          </div>
        </UCard>
      </UPageSection>

      <LandingSpacer />

      <div class="border-b border-default bg-sand-150 dark:bg-[#282827]">
      <UPageSection
        class="bg-transparent"
        :ui="{ container: 'px-7 pt-10 pb-0 sm:px-12 sm:pt-12 lg:pt-12 lg:pb-0' }"
      >
        <UCard
          variant="outline"
          :ui="sectionCardUi"
        >
          <div class="grid lg:grid-cols-[.42fr_.58fr]">
            <div class="border-b border-default bg-warm-white dark:bg-[#282827] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500 dark:text-coral-400">
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
                  indicator: 'bg-sand-50 text-coral-500 ring-1 ring-sand-300 dark:bg-[#2F2F2E] dark:text-coral-400 dark:ring-white/15 group-data-[state=completed]:bg-sand-50 group-data-[state=completed]:text-coral-500 dark:group-data-[state=completed]:bg-[#2F2F2E] dark:group-data-[state=completed]:text-coral-400 group-data-[state=active]:bg-graphite group-data-[state=active]:text-warm-white dark:group-data-[state=active]:bg-sand-100 dark:group-data-[state=active]:text-graphite',
                  separator: 'bg-sand-300 dark:bg-white/10 group-data-[state=completed]:bg-sand-300 dark:group-data-[state=completed]:bg-white/10',
                  title: 'text-sm font-semibold text-highlighted',
                  description: 'text-sm leading-6 text-muted',
                  wrapper: 'pb-7'
                }"
              />
            </div>

            <div class="grid gap-px bg-sand-300 dark:bg-white/10 lg:grid-rows-[auto_1fr]">
              <div class="bg-warm-white dark:bg-[#282827] p-6 sm:p-8">
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
                <div class="mt-7 grid gap-px overflow-hidden rounded-sm bg-sand-300 dark:bg-white/10 ring ring-default sm:grid-cols-2">
                  <div
                    v-for="color in featuredColors"
                    :key="color.token"
                    class="bg-white dark:bg-[#2F2F2E] p-4"
                  >
                    <div
                      class="h-16 rounded-sm border border-black/5"
                      :style="{ backgroundColor: color.hex }"
                    />
                    <div class="mt-4 flex items-baseline justify-between gap-3">
                      <p class="font-mono text-xs">
                        {{ color.token }}
                      </p>
                      <p class="font-mono text-xs text-sand-500 dark:text-sand-400">
                        {{ color.hex }}
                      </p>
                    </div>
                    <p class="mt-1 text-sm text-muted">
                      {{ color.role }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-warm-white dark:bg-[#282827] p-6 sm:p-8">
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
                        <p class="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-sand-500 dark:text-sand-400">
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
                    <p class="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-sand-500 dark:text-sand-400">
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
          <div class="border-b border-default bg-warm-white dark:bg-[#282827] p-6 sm:p-8">
            <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500 dark:text-coral-400">
              02 / Identity behavior
            </p>
            <h2 class="mt-8 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
              Recognition comes from choosing the right mark and saying less, better.
            </h2>
          </div>

          <div class="grid lg:grid-cols-[1.05fr_.95fr]">
            <div class="border-b border-default bg-warm-white dark:bg-[#282827] p-6 sm:p-8 lg:border-b-0 lg:border-r">
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
                  <div class="flex min-h-36 items-center justify-center rounded-sm border border-default bg-sand-50 dark:bg-graphite">
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
                  <div class="flex min-h-36 items-center justify-center rounded-sm border border-default bg-sand-50 dark:bg-graphite">
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

            <div class="bg-warm-white dark:bg-[#282827] p-6 sm:p-8">
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
                  <p class="font-mono text-xs uppercase tracking-[0.14em] text-petrol-700 dark:text-petrol-300">
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
                  <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500 dark:text-coral-400">
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
            <div class="border-b border-default bg-warm-white dark:bg-[#282827] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500 dark:text-coral-400">
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
                      <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500 dark:text-coral-400">
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

            <div class="grid gap-px bg-sand-300 dark:bg-white/10 lg:grid-rows-[auto_1fr]">
              <div class="bg-warm-white dark:bg-[#282827] p-6 sm:p-8">
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
                      class="grid gap-4 rounded-sm bg-white dark:bg-[#2F2F2E] p-4 ring ring-default sm:grid-cols-2"
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
                      class="grid gap-4 rounded-sm bg-white dark:bg-[#2F2F2E] p-4 ring ring-default"
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

              <div class="bg-warm-white dark:bg-[#282827] p-6 sm:p-8">
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
                      <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500 dark:text-coral-400">
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
        class="border-b border-default bg-sand-150 dark:bg-[#282827]"
        :ui="{ container: 'px-7 py-12 sm:px-12 sm:py-14' }"
      >
        <UPageCTA
          title="Use the guide as a working system."
          description="Move from the overview into the docs, then install the brand layer when the rules are ready to become reusable implementation."
          :links="ctaLinks"
          orientation="horizontal"
          variant="outline"
          :ui="{
            root: 'rounded-sm bg-white dark:bg-[#2F2F2E] shadow-none',
            container: 'gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[.75fr_1fr]',
            title: 'text-3xl font-semibold leading-tight sm:text-4xl',
            description: 'text-base leading-8 text-body',
            body: 'mt-0',
            links: 'flex flex-wrap gap-3'
          }"
        >
          <template #default>
            <div id="install-package">
              <p class="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-coral-500 dark:text-coral-400">
                Install
              </p>
              <div class="dark">
                <MDC
                  v-if="installContent"
                  :value="installContent"
                  tag="div"
                  class="hd-install-code not-prose [&_.shiki]:!bg-transparent [&>div]:!border-l-[4px] [&>div]:!border-l-coral-500 [&>div]:!shadow-none [&_pre]:!border-l-0"
                />
              </div>
            </div>
          </template>
        </UPageCTA>
      </UPageSection>
    </div>
  </div>
</template>
