<script setup lang="ts">
const guide = useHappydesignsGuide()

const sectionCardUi = {
  root: 'overflow-hidden rounded-sm !bg-default shadow-none ring-default transition-none hover:!bg-default',
  body: 'p-0 sm:p-0'
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
      <div class="grid lg:grid-cols-[.42fr_.58fr]">
        <div class="border-b border-default bg-default p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
            02 / Identity behavior
          </p>
          <h2 class="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
            Choose the mark and voice for the context.
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-body">
            Identity is a controlled choice, not an extra layer of decoration. Match the format, audience, and amount of attention available.
          </p>

          <div class="mt-10 border-t border-default pt-7">
            <p class="font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
              Core decision
            </p>
            <div class="mt-5 flex gap-3">
              <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-default bg-muted">
                <UIcon
                  name="i-lucide-signature"
                  class="size-4 text-primary"
                />
              </span>
              <div>
                <p class="text-sm font-semibold leading-6 text-highlighted">
                  Wordmark first. Clear before clever.
                </p>
                <p class="mt-1 text-sm leading-6 text-toned">
                  Use the symbol only when the format benefits from it, and remove words that do not improve understanding.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-px bg-accented lg:grid-rows-[auto_1fr]">
          <div class="bg-default p-6 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <HDSectionLabel>logo use</HDSectionLabel>
              <UButton
                to="/docs/guide/logos"
                label="Open logos"
                icon="i-lucide-arrow-right"
                trailing
                color="neutral"
                variant="outline"
                size="sm"
              />
            </div>
            <p class="mt-6 max-w-2xl text-base leading-8 text-body">
              Start with the wordmark. Use the symbol when the format is compact or square.
            </p>
            <div class="mt-8 grid gap-px overflow-hidden rounded-sm bg-accented ring ring-default sm:grid-cols-2">
              <figure class="bg-elevated p-5">
                <div class="flex min-h-20 items-center">
                  <HDLogo
                    variant="wordmark"
                    size="lg"
                  />
                </div>
                <figcaption class="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Wordmark
                </figcaption>
              </figure>
              <figure class="bg-elevated p-5">
                <div class="flex min-h-20 items-center">
                  <HDLogo
                    variant="symbol"
                    size="xl"
                  />
                </div>
                <figcaption class="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  Symbol
                </figcaption>
              </figure>
            </div>
          </div>

          <div class="bg-default p-6 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <HDSectionLabel>voice</HDSectionLabel>
              <UButton
                to="/docs/guide/voice"
                label="Open voice"
                icon="i-lucide-arrow-right"
                trailing
                color="neutral"
                variant="outline"
                size="sm"
              />
            </div>
            <p class="mt-6 max-w-2xl text-base leading-8 text-body">
              Keep the voice thoughtful, warm, precise, and practical without becoming cold.
            </p>
            <div class="mt-8 grid gap-px overflow-hidden rounded-sm bg-accented ring ring-default sm:grid-cols-2">
              <div class="bg-elevated p-5">
                <p class="font-mono text-xs uppercase tracking-[0.14em] text-secondary">
                  Do
                </p>
                <ul class="mt-4 space-y-3">
                  <li
                    v-for="item in guide.voice.dos.slice(0, 2)"
                    :key="item"
                    class="text-sm leading-6 text-body"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="bg-elevated p-5">
                <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                  Do not
                </p>
                <ul class="mt-4 space-y-3">
                  <li
                    v-for="item in guide.voice.donts.slice(0, 2)"
                    :key="item"
                    class="text-sm leading-6 text-body"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </UPageSection>
</template>
