<script setup lang="ts">
const hierarchyExamples = [
  {
    label: 'Page title',
    class: 'text-5xl font-semibold leading-[0.98] sm:text-6xl',
    text: 'Thoughtful design for the modern web.'
  },
  {
    label: 'Section heading',
    class: 'text-3xl font-semibold leading-tight',
    text: 'A calm system for durable web work.'
  },
  {
    label: 'Body copy',
    class: 'max-w-2xl text-base leading-8 text-body',
    text: 'happydesigns uses type to make structure readable first. Warmth comes from the primary sans, while spacing and weight keep the system precise.'
  },
  {
    label: 'Metadata',
    class: 'font-mono text-xs text-plum-600 dark:text-plum-200',
    text: '@happydesigns/brand · v0.1'
  }
]

const monoExamples = [
  '--ui-primary',
  'colors.coral',
  'happydesigns-wordmark.svg',
  '@happydesigns/brand'
]
</script>

<template>
  <div class="not-prose my-10 overflow-hidden rounded-sm border border-default bg-separator">
    <section class="grid gap-px md:grid-cols-[1.2fr_.8fr]">
      <div class="bg-surface p-6 sm:p-8">
        <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500">
          Primary sans
        </p>
        <h2 class="mt-5 text-5xl font-semibold leading-none tracking-normal text-highlighted sm:text-7xl">
          Bricolage Grotesque
        </h2>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-body">
          Warm, modern, and readable enough to carry both brand expression and product documentation.
        </p>
        <div class="mt-8 grid gap-3 font-semibold text-highlighted sm:grid-cols-3">
          <div class="rounded-sm border border-default bg-card p-4 text-4xl leading-none">
            Aa
          </div>
          <div class="rounded-sm border border-default bg-card p-4 text-4xl leading-none">
            123
          </div>
          <div class="rounded-sm border border-default bg-card p-4 text-4xl leading-none">
            web
          </div>
        </div>
      </div>

      <div class="bg-surface p-6 sm:p-8">
        <p class="font-mono text-xs uppercase tracking-[0.14em] text-petrol-700 dark:text-petrol-200">
          Technical mono
        </p>
        <h3 class="mt-5 font-mono text-2xl leading-tight text-highlighted">
          Geist Mono
        </h3>
        <p class="mt-5 text-sm leading-7 text-body">
          Use mono for exact implementation details, not for normal prose.
        </p>
        <div class="mt-7 space-y-2">
          <code
            v-for="example in monoExamples"
            :key="example"
            class="block rounded-sm border border-default bg-inset px-3 py-2 font-mono text-xs text-highlighted"
          >
            {{ example }}
          </code>
        </div>
      </div>
    </section>

    <section class="border-t border-default bg-surface p-6 sm:p-8">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-label">
            Hierarchy example
          </p>
          <h3 class="mt-3 text-2xl font-semibold leading-tight text-highlighted">
            Size, weight, spacing, then color.
          </h3>
        </div>
        <UBadge
          color="neutral"
          variant="outline"
        >
          Directional, not final scale
        </UBadge>
      </div>

      <div class="mt-7 divide-y divide-default border-y border-default">
        <div
          v-for="example in hierarchyExamples"
          :key="example.label"
          class="grid gap-4 py-6 lg:grid-cols-[10rem_1fr]"
        >
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-sand-500">
            {{ example.label }}
          </p>
          <p :class="example.class">
            {{ example.text }}
          </p>
        </div>
      </div>
    </section>

    <section class="grid gap-px border-t border-default md:grid-cols-2">
      <div class="bg-surface p-6 sm:p-8">
        <p class="font-mono text-xs uppercase tracking-[0.14em] text-label">
          Documentation pattern
        </p>
        <h3 class="mt-5 text-3xl font-semibold leading-tight text-highlighted">
          Color roles before color values.
        </h3>
        <p class="mt-4 text-base leading-8 text-body">
          Start with the job a token performs, then show its implementation detail.
        </p>
        <div class="mt-6 rounded-sm border border-default bg-inset p-4">
          <p class="text-sm font-medium text-highlighted">
            Coral
          </p>
          <p class="mt-1 text-sm leading-6 text-body">
            Signature accent for focus, activation, and precise brand punctuation.
          </p>
          <p class="mt-4 font-mono text-xs text-plum-600 dark:text-plum-200">
            #F28564 · --ui-primary
          </p>
        </div>
      </div>

      <div class="bg-surface p-6 sm:p-8">
        <p class="font-mono text-xs uppercase tracking-[0.14em] text-label">
          Interface pattern
        </p>
        <div class="mt-5 rounded-sm border border-default bg-card p-5">
          <p class="font-mono text-xs text-plum-600 dark:text-plum-200">
            project.status
          </p>
          <h3 class="mt-3 text-xl font-semibold leading-tight text-highlighted">
            Brand layer ready for review
          </h3>
          <p class="mt-3 text-sm leading-6 text-body">
            Check colors, logos, typography, components, and voice before publishing.
          </p>
          <div class="mt-5 flex flex-wrap gap-2">
            <UButton
              size="sm"
              label="Review guide"
              icon="i-lucide-arrow-right"
              trailing
            />
            <UButton
              size="sm"
              label="Copy link"
              icon="i-lucide-copy"
              color="neutral"
              variant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
