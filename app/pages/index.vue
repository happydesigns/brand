<script setup lang="ts">
const guide = useBrandGuide()

const featuredColors = guide.colors.slice(0, 6)
</script>

<template>
  <div class="min-h-screen bg-warm-white text-graphite dark:bg-graphite dark:text-sand-50">
    <div class="mx-auto w-full max-w-(--ui-container) overflow-hidden border-x border-sand-300 bg-warm-white dark:border-white/10 dark:bg-graphite">
      <section class="grid min-h-[640px] border-b border-sand-300 dark:border-white/10 lg:grid-cols-[1fr_.95fr]">
        <div class="flex flex-col border-b border-sand-300 bg-warm-white dark:border-white/10 dark:bg-graphite lg:border-b-0 lg:border-r">
          <div class="flex flex-1 flex-col justify-center px-7 py-16 sm:px-12">
            <div class="max-w-3xl">
              <HDSectionLabel>
                {{ guide.brand.name }} brand guide
              </HDSectionLabel>
              <h1 class="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal text-graphite dark:text-sand-50 sm:text-7xl">
                {{ guide.brand.claim }}
              </h1>
              <p class="mt-8 max-w-2xl text-lg leading-8 text-sand-700 dark:text-sand-300">
                A reusable guide structure for documenting a brand from overview to implementation: colors, typography, logos, components, and voice.
              </p>

              <div class="mt-9 flex flex-wrap gap-3">
                <UButton
                  to="/docs/colors"
                  label="Explore guide"
                  icon="i-lucide-arrow-right"
                  trailing
                />
                <UButton
                  to="/docs/components"
                  label="View components"
                  icon="i-lucide-component"
                  color="neutral"
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center bg-sand-200/55 p-7 dark:bg-sand-800/25 sm:p-12">
          <div class="w-full max-w-xl overflow-hidden rounded-md border border-sand-300 bg-warm-white shadow-none dark:border-white/10 dark:bg-graphite">
            <div class="flex items-center justify-between border-b border-sand-300 px-4 py-3 font-mono text-xs text-plum-600 dark:border-white/10 dark:text-plum-200">
              <div class="flex gap-2">
                <span class="size-2.5 rounded-full bg-sand-400" />
                <span class="size-2.5 rounded-full bg-sand-300" />
                <span class="size-2.5 rounded-full bg-sand-300" />
              </div>
              <span>{{ guide.brand.packageName }}</span>
              <span class="rounded-sm border border-sand-200 px-2 py-1 dark:border-white/10">v0.1</span>
            </div>

            <div class="grid md:grid-cols-2">
              <div class="border-b border-sand-300 p-5 dark:border-white/10 md:border-b-0 md:border-r">
                <p class="font-mono text-xs text-sand-500">
                  guide.md
                </p>
                <div class="mt-4 rounded-sm border border-sand-200 bg-sand-50 p-5 font-mono text-xs leading-6 dark:border-white/10 dark:bg-white/5">
                  <p class="text-coral-500">
                    # {{ guide.brand.name }}
                  </p>
                  <p class="mt-4">
                    Overview plus detailed pages for tokens, assets, components, and voice.
                  </p>
                  <p class="mt-4 text-coral-500">
                    ::principle
                  </p>
                  <p>{{ guide.principles[0] }}</p>
                </div>
              </div>
              <div class="p-5">
                <p class="font-mono text-xs text-sand-500">
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
                    class="flex items-center justify-between rounded-sm border border-sand-200 bg-white px-3 py-2 text-sm font-medium hover:bg-peach-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                  >
                    <span class="inline-flex items-center gap-2">
                      <UIcon
                        :name="section.icon"
                        class="size-4 text-coral-500"
                      />
                      {{ section.title }}
                    </span>
                    <UIcon
                      name="i-lucide-arrow-right"
                      class="size-4 text-sand-500"
                    />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-sand-300 dark:border-white/10">
        <div class="px-7 py-12 sm:px-12">
          <HDSectionLabel>
            guide sections
          </HDSectionLabel>
          <div class="mt-7 grid gap-px overflow-hidden rounded-sm border border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10 md:grid-cols-2 lg:grid-cols-5">
            <NuxtLink
              v-for="section in guide.sections"
              :key="section.slug"
              :to="`/docs/${section.slug}`"
              class="group bg-white p-5 transition hover:bg-peach-50 dark:bg-graphite dark:hover:bg-white/5"
            >
              <UIcon
                :name="section.icon"
                class="size-5 text-coral-500"
              />
              <p class="mt-5 text-lg font-semibold">
                {{ section.title }}
              </p>
              <p class="mt-2 text-sm leading-6 text-sand-600 dark:text-sand-300">
                {{ section.summary }}
              </p>
              <div class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-petrol-700 dark:text-petrol-200">
                Open
                <UIcon
                  name="i-lucide-arrow-right"
                  class="size-4 transition group-hover:translate-x-0.5"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="grid lg:grid-cols-[.8fr_1.2fr]">
        <div class="border-b border-sand-300 bg-graphite p-7 text-sand-50 dark:border-white/10 sm:p-12 lg:border-b-0 lg:border-r">
          <HDSectionLabel class="text-sand-300">
            identity snapshot
          </HDSectionLabel>
          <HDLogo
            class="mt-9"
            variant="wordmark"
            mode="dark"
            size="md"
          />
          <p class="mt-7 max-w-md text-sm leading-7 text-sand-300">
            This landing page acts as the brand-specific overview. The pages linked above provide the detailed source of truth.
          </p>
        </div>

        <div class="p-7 sm:p-12">
          <HDSectionLabel>
            palette preview
          </HDSectionLabel>
          <div class="mt-7 grid gap-px overflow-hidden rounded-sm border border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="color in featuredColors"
              :key="color.token"
              class="bg-white p-4 dark:bg-graphite"
            >
              <div
                class="h-20 rounded-sm border border-black/5"
                :style="{ backgroundColor: color.hex }"
              />
              <div class="mt-4 flex items-baseline justify-between gap-3">
                <p class="font-mono text-xs">
                  {{ color.token }}
                </p>
                <p class="font-mono text-xs text-sand-500">
                  {{ color.hex }}
                </p>
              </div>
              <p class="mt-1 text-sm text-sand-600 dark:text-sand-300">
                {{ color.role }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
