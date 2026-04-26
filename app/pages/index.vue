<script setup lang="ts">
const brand = useHappydesignsBrand()

const swatches = [
  ['warm-white', brand.colors.warmWhite, 'page highlight'],
  ['graphite', brand.colors.graphite, 'text and premium fills'],
  ['coral', brand.colors.coral, 'signature accent'],
  ['peach', brand.colors.peach, 'logo field and atmosphere'],
  ['petrol', brand.colors.petrol, 'technical counterweight'],
  ['butter', brand.colors.butter, 'soft warning'],
  ['plum', brand.colors.plum, 'quiet information'],
  ['seafoam', brand.colors.seafoam, 'constructive success'],
  ['sand', brand.colors.sand, 'lines and muted surfaces'],
  ['rose', brand.colors.rose, 'restrained errors']
] as const

const partners = ['Nordholz Supply', 'Field Studies', 'Stadtwerke OH', 'Rasmussen & Kohl', 'Hanse Digital', 'Kustenkontor']
const fieldSamples = ['peach', 'petrol', 'seafoam'] as const
const inputValue = ref('Durable interfaces, precise systems.')
const textareaValue = ref('Structure first. Artistic gesture second.')
const selectValue = ref('design-system')
</script>

<template>
  <div class="min-h-screen bg-warm-white text-graphite dark:bg-graphite dark:text-sand-50">
    <div class="mx-auto w-full max-w-(--ui-container) overflow-hidden border-x border-sand-300 bg-warm-white dark:border-white/10 dark:bg-graphite">
      <section class="grid min-h-[640px] border-b border-sand-300 dark:border-white/10 lg:grid-cols-[1fr_.95fr]">
        <div class="flex flex-col border-b border-sand-300 bg-warm-white dark:border-white/10 dark:bg-graphite lg:border-b-0 lg:border-r">
          <div class="flex flex-1 flex-col justify-center px-7 py-16 sm:px-12">
            <div class="max-w-2xl">
              <HDSectionLabel>happydesigns - studio</HDSectionLabel>
              <h1 class="mt-8 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-normal text-graphite dark:text-sand-50 sm:text-7xl">
                Structured design for the modern web<span class="text-coral-500">.</span>
              </h1>
              <p class="mt-8 max-w-xl text-lg leading-8 text-sand-700 dark:text-sand-300">
                A Nuxt UI brand layer for warm, precise, maintainable web systems with visible structure and controlled brand expression.
              </p>

              <div class="mt-8 flex flex-wrap gap-3">
                <UButton
                  label="Primary action"
                  icon="i-lucide-arrow-right"
                  trailing
                  color="primary"
                />
                <UButton
                  label="Explore tokens"
                  icon="i-lucide-layers-3"
                  color="neutral"
                  variant="outline"
                />
              </div>

              <ProseCodeGroup sync="install-manager">
                <ProsePre
                  filename="pnpm"
                  language="bash"
                  code="pnpm add @happydesigns/brand"
                >
                  <code>pnpm add @happydesigns/brand</code>
                </ProsePre>
                <ProsePre
                  filename="npm"
                  language="bash"
                  code="npm install @happydesigns/brand"
                >
                  <code>npm install @happydesigns/brand</code>
                </ProsePre>
                <ProsePre
                  filename="yarn"
                  language="bash"
                  code="yarn add @happydesigns/brand"
                >
                  <code>yarn add @happydesigns/brand</code>
                </ProsePre>
                <ProsePre
                  filename="bun"
                  language="bash"
                  code="bun add @happydesigns/brand"
                >
                  <code>bun add @happydesigns/brand</code>
                </ProsePre>
              </ProseCodeGroup>
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
              <span>happydesigns/brand</span>
              <span class="rounded-sm border border-sand-200 px-2 py-1 dark:border-white/10">v0.1</span>
            </div>

            <div class="grid md:grid-cols-2">
              <div class="border-b border-sand-300 p-5 dark:border-white/10 md:border-b-0 md:border-r">
                <p class="font-mono text-xs text-sand-500">
                  source.md
                </p>
                <div class="mt-4 rounded-sm border border-sand-200 bg-sand-50 p-5 font-mono text-xs leading-6 dark:border-white/10 dark:bg-white/5">
                  <p class="text-coral-500">
                    # Structured design
                  </p>
                  <p class="mt-4">
                    A **brand layer** built for Nuxt UI, tokens, components, and long-lived systems.
                  </p>
                  <p class="mt-4 text-coral-500">
                    ::callout
                  </p>
                  <p>Structure you can see.</p>
                </div>
              </div>
              <div class="p-5">
                <p class="font-mono text-xs text-sand-500">
                  rendered
                </p>
                <div class="mt-4 space-y-4">
                  <HDLogo
                    variant="wordmark"
                    size="md"
                  />
                  <p class="text-sm leading-6 text-sand-700 dark:text-sand-300">
                    Semantic Nuxt UI colors mapped to a warm, structured brand system.
                  </p>
                  <UAlert
                    color="success"
                    variant="subtle"
                    icon="i-lucide-check"
                    title="Structure you can see."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-sand-300 dark:border-white/10">
        <div class="border-b border-sand-300 px-7 py-4 dark:border-white/10">
          <HDSectionLabel>trusted by small, serious teams</HDSectionLabel>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-6">
          <div
            v-for="partner in partners"
            :key="partner"
            class="border-b border-r border-sand-300 px-6 py-9 text-center last:border-r-0 dark:border-white/10 lg:border-b-0"
          >
            <p class="font-medium">
              {{ partner }}
            </p>
            <p class="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-sand-500">
              system
            </p>
          </div>
        </div>
      </section>

      <section class="grid border-b border-sand-300 dark:border-white/10 lg:grid-cols-[.72fr_1.28fr]">
        <div class="border-b border-sand-300 bg-graphite p-7 text-sand-50 dark:border-white/10 lg:border-b-0 lg:border-r">
          <HDSectionLabel class="text-sand-400">identity assets</HDSectionLabel>
          <div class="mt-10 space-y-8">
            <div>
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-sand-400">
                wordmark
              </p>
              <HDLogo
                class="mt-3"
                variant="wordmark"
                mode="dark"
                size="md"
              />
            </div>
            <div>
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-sand-400">
                app icon
              </p>
              <HDBrandMark
                class="mt-3"
                tile
                size="md"
              />
            </div>
          </div>
        </div>

        <div class="bg-warm-white p-7 dark:bg-sand-800/20">
          <HDSectionLabel>color roles</HDSectionLabel>
          <div class="mt-6 grid gap-px overflow-hidden rounded-sm border border-sand-200 bg-sand-200 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            <div
              v-for="[name, hex, role] in swatches"
              :key="name"
              class="bg-warm-white p-4 dark:bg-graphite"
            >
              <div
                class="h-16 rounded-sm border border-black/5"
                :style="{ backgroundColor: hex }"
              />
              <div class="mt-4 flex items-baseline justify-between gap-3">
                <p class="font-mono text-xs text-graphite dark:text-sand-100">
                  {{ name }}
                </p>
                <p class="font-mono text-[0.68rem] text-sand-500">
                  {{ hex }}
                </p>
              </div>
              <p class="mt-1 text-xs text-sand-600 dark:text-sand-300">
                {{ role }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="grid lg:grid-cols-2">
        <div class="border-b border-sand-300 bg-warm-white p-7 dark:border-white/10 dark:bg-graphite lg:border-b-0 lg:border-r">
          <HDSectionLabel>typography and fields</HDSectionLabel>
          <p class="mt-8 max-w-xl text-3xl font-semibold leading-tight">
            Bricolage Grotesque keeps the system warm without losing precision.
          </p>
          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <HDColorField
              v-for="color in fieldSamples"
              :key="color"
              :color="color"
              class="min-h-24"
            >
              <p class="font-mono text-xs uppercase tracking-[0.14em]">
                {{ color }}
              </p>
            </HDColorField>
          </div>
        </div>

        <div class="bg-sand-50 p-7 dark:bg-sand-800/20">
          <HDSectionLabel>nuxt ui controls</HDSectionLabel>
          <UCard class="mt-8 max-w-xl">
            <div class="grid gap-4">
              <UFormField label="Project note">
                <UInput
                  v-model="inputValue"
                  icon="i-lucide-type"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="System intent">
                <UTextarea
                  v-model="textareaValue"
                  :rows="4"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Work type">
                <USelect
                  v-model="selectValue"
                  class="w-full"
                  :items="[
                    { label: 'Design system', value: 'design-system' },
                    { label: 'Nuxt module', value: 'nuxt-module' },
                    { label: 'Web application', value: 'web-application' }
                  ]"
                />
              </UFormField>

              <div class="flex flex-wrap items-center gap-2 pt-2">
                <UButton
                  label="Save system"
                  icon="i-lucide-save"
                />
                <UButton
                  label="Review"
                  icon="i-lucide-search-check"
                  color="neutral"
                  variant="outline"
                />
                <UBadge
                  color="secondary"
                  variant="subtle"
                >
                  Nuxt layer
                </UBadge>
                <UBadge
                  color="success"
                  variant="subtle"
                >
                  maintainable
                </UBadge>
              </div>
            </div>
          </UCard>
        </div>
      </section>
    </div>
  </div>
</template>
