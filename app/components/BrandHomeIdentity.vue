<script setup lang="ts">
const guide = useHappydesignsGuide()

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

const sectionCardUi = {
  root: 'overflow-hidden rounded-sm !bg-default shadow-none ring-default transition-none hover:!bg-default',
  body: 'p-0 sm:p-0'
}

const staticCardUi = {
  root: 'rounded-sm !bg-elevated shadow-none ring-muted transition-none hover:!bg-elevated',
  body: 'p-5 sm:p-5'
}

const badgeUi = {
  base: 'rounded-sm bg-elevated text-highlighted ring-default'
}
</script>

<template>
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
          <HDSectionLabel>logo use</HDSectionLabel>
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
            to="/docs/guide/logos"
            label="Open logos"
            icon="i-lucide-arrow-right"
            trailing
            color="neutral"
            variant="outline"
            class="mt-6"
          />
        </div>

        <div class="bg-default p-6 sm:p-8">
          <HDSectionLabel>voice</HDSectionLabel>
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
            to="/docs/guide/voice"
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
</template>
