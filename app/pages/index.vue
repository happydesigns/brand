<script setup lang="ts">
const guide = useBrandGuide()

const featuredColors = guide.colors.slice(0, 6)
const utilityColors = guide.colors.slice(6)
</script>

<template>
  <div class="min-h-screen bg-warm-white text-graphite dark:bg-graphite dark:text-sand-50">
    <div class="mx-auto w-full max-w-(--ui-container) overflow-hidden border-x border-sand-300 bg-warm-white dark:border-white/10 dark:bg-graphite">
      <section class="grid min-h-160 border-b border-sand-300 dark:border-white/10 lg:grid-cols-[1fr_.95fr]">
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
        <div class="grid lg:grid-cols-[.82fr_1.18fr]">
          <div class="border-b border-sand-300 p-7 dark:border-white/10 sm:p-12 lg:border-b-0 lg:border-r">
            <HDSectionLabel>
              identity principles
            </HDSectionLabel>
            <h2 class="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              A warm, structured system for brand documentation that can be reused.
            </h2>
            <p class="mt-6 max-w-xl text-base leading-8 text-sand-700 dark:text-sand-300">
              The guide separates brand-specific decisions from the documentation pattern. Future guides can replace the data while keeping the same overview, detail pages, and component examples.
            </p>
            <div class="mt-8 divide-y divide-sand-300 border-y border-sand-300 dark:divide-white/10 dark:border-white/10">
              <div
                v-for="principle in guide.principles"
                :key="principle"
                class="flex gap-4 py-4"
              >
                <span class="mt-2 size-2 shrink-0 rounded-full bg-coral-500" />
                <p class="text-sm font-medium leading-6">
                  {{ principle }}
                </p>
              </div>
            </div>
          </div>

          <div class="p-7 sm:p-12">
            <HDSectionLabel>
              palette preview
            </HDSectionLabel>
            <div class="mt-7 grid gap-px overflow-hidden rounded-sm border border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
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
            <div class="mt-4 grid gap-px overflow-hidden rounded-sm border border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              <div
                v-for="color in utilityColors"
                :key="color.token"
                class="bg-white p-4 dark:bg-graphite"
              >
                <div
                  class="h-10 rounded-sm border border-black/5"
                  :style="{ backgroundColor: color.hex }"
                />
                <p class="mt-3 font-mono text-xs">
                  {{ color.token }}
                </p>
                <p class="mt-1 text-xs text-sand-600 dark:text-sand-300">
                  {{ color.role }}
                </p>
              </div>
            </div>
            <UButton
              to="/docs/colors"
              label="Color details"
              icon="i-lucide-arrow-right"
              trailing
              color="neutral"
              variant="outline"
              class="mt-6"
            />
          </div>
        </div>
      </section>

      <section class="border-b border-sand-300 dark:border-white/10">
        <div class="grid lg:grid-cols-2">
          <div class="border-b border-sand-300 p-7 dark:border-white/10 sm:p-12 lg:border-b-0 lg:border-r">
            <HDSectionLabel>
              typography
            </HDSectionLabel>
            <div class="mt-8 space-y-6">
              <div
                v-for="font in guide.fonts"
                :key="font.name"
                class="rounded-sm border border-sand-300 bg-white p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p class="text-lg font-semibold">
                      {{ font.name }}
                    </p>
                    <p class="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-sand-500">
                      {{ font.role }}
                    </p>
                  </div>
                  <UBadge
                    color="neutral"
                    variant="outline"
                  >
                    {{ font.stack.split(',')[0]?.replaceAll('"', '') }}
                  </UBadge>
                </div>
                <p
                  class="mt-8 text-3xl font-semibold leading-tight"
                  :class="{ 'font-mono text-base font-normal leading-7': font.role.includes('mono') }"
                >
                  {{ font.sample }}
                </p>
                <p class="mt-5 text-sm leading-6 text-sand-600 dark:text-sand-300">
                  {{ font.notes }}
                </p>
              </div>
            </div>
            <UButton
              to="/docs/typography"
              label="Typography details"
              icon="i-lucide-arrow-right"
              trailing
              color="neutral"
              variant="outline"
              class="mt-6"
            />
          </div>

          <div class="p-7 sm:p-12">
            <HDSectionLabel>
              voice
            </HDSectionLabel>
            <h2 class="mt-8 text-3xl font-semibold leading-tight sm:text-4xl">
              The brand sounds structured, warm, precise, and maintainable.
            </h2>
            <div class="mt-8 flex flex-wrap gap-2">
              <UBadge
                v-for="attribute in guide.voice.attributes"
                :key="attribute"
                color="neutral"
                variant="outline"
              >
                {{ attribute }}
              </UBadge>
            </div>

            <div class="mt-8 grid gap-px overflow-hidden rounded-sm border border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
              <div class="bg-white p-5 dark:bg-graphite">
                <p class="font-mono text-xs uppercase tracking-[0.14em] text-petrol-700 dark:text-petrol-200">
                  Do
                </p>
                <ul class="mt-5 space-y-4">
                  <li
                    v-for="item in guide.voice.dos"
                    :key="item"
                    class="text-sm leading-6 text-sand-700 dark:text-sand-300"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="bg-white p-5 dark:bg-graphite">
                <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500">
                  Do not
                </p>
                <ul class="mt-5 space-y-4">
                  <li
                    v-for="item in guide.voice.donts"
                    :key="item"
                    class="text-sm leading-6 text-sand-700 dark:text-sand-300"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
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
      </section>

      <section class="border-b border-sand-300 dark:border-white/10">
        <div class="grid lg:grid-cols-[1.1fr_.9fr]">
          <div class="border-b border-sand-300 p-7 dark:border-white/10 sm:p-12 lg:border-b-0 lg:border-r">
            <HDSectionLabel>
              logo use
            </HDSectionLabel>
            <div class="mt-7 grid gap-px overflow-hidden rounded-sm border border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10">
              <div class="bg-warm-white p-8 dark:bg-graphite">
                <div class="flex min-h-40 items-center justify-center rounded-sm border border-sand-300 bg-white dark:border-white/10 dark:bg-white/5">
                  <HDLogo
                    variant="wordmark"
                    size="lg"
                  />
                </div>
                <p class="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-sand-500">
                  Primary surface
                </p>
              </div>
              <div class="bg-graphite p-8">
                <div class="flex min-h-40 items-center justify-center rounded-sm border border-white/10 bg-graphite">
                  <HDLogo
                    variant="wordmark"
                    mode="dark"
                    size="lg"
                  />
                </div>
                <p class="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-sand-400">
                  Dark surface
                </p>
              </div>
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

          <div class="p-7 sm:p-12">
            <HDSectionLabel>
              interface use
            </HDSectionLabel>
            <div class="mt-7 rounded-sm border border-sand-300 bg-white p-5 dark:border-white/10 dark:bg-white/5">
              <div class="rounded-sm border border-sand-300 bg-warm-white p-4 dark:border-white/10 dark:bg-graphite">
                <div class="flex items-center justify-between gap-4 border-b border-sand-300 pb-4 dark:border-white/10">
                  <div>
                    <p class="font-mono text-xs uppercase tracking-[0.14em] text-coral-500">
                      Project
                    </p>
                    <p class="mt-1 text-lg font-semibold">
                      Brand layer
                    </p>
                  </div>
                  <UBadge
                    color="neutral"
                    variant="outline"
                  >
                    Ready
                  </UBadge>
                </div>

                <div class="mt-5 grid gap-3">
                  <label class="grid gap-2">
                    <span class="text-sm font-medium">Token name</span>
                    <input
                      value="coral"
                      class="h-10 rounded-sm border border-sand-300 bg-white px-3 text-sm outline-none focus:border-coral-500 dark:border-white/10 dark:bg-white/5"
                      readonly
                    >
                  </label>
                  <div class="grid grid-cols-[1fr_auto] gap-3">
                    <div class="rounded-sm border border-sand-300 bg-white p-3 dark:border-white/10 dark:bg-white/5">
                      <p class="text-sm font-medium">
                        Accent state
                      </p>
                      <p class="mt-1 text-xs leading-5 text-sand-600 dark:text-sand-300">
                        Clear borders, small radius, coral emphasis.
                      </p>
                    </div>
                    <button class="rounded-sm bg-graphite px-4 text-sm font-medium text-white transition hover:bg-coral-500">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <UButton
              to="/docs/components"
              label="Component details"
              icon="i-lucide-arrow-right"
              trailing
              color="neutral"
              variant="outline"
              class="mt-6"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
