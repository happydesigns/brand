<script setup lang="ts">
const route = useRoute()
const guide = useBrandGuide()
const section = computed(() => useBrandGuideSection(String(route.params.slug)))

if (!section.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Brand guide section not found'
  })
}

const sectionLinks = computed(() => guide.sections.map(item => ({
  label: item.title,
  to: `/${item.slug}`,
  icon: item.icon
})))

const inputValue = ref('Durable interfaces, precise systems.')
const textareaValue = ref('Structure first. Artistic gesture second.')
const selectValue = ref('design-system')
</script>

<template>
  <div class="min-h-screen bg-warm-white text-graphite dark:bg-graphite dark:text-sand-50">
    <div class="mx-auto w-full max-w-(--ui-container) overflow-hidden border-x border-sand-300 bg-warm-white dark:border-white/10 dark:bg-graphite">
      <section class="border-b border-sand-300 dark:border-white/10">
        <div class="grid lg:grid-cols-[.28fr_1fr]">
          <aside class="border-b border-sand-300 p-7 dark:border-white/10 sm:p-8 lg:border-b-0 lg:border-r">
            <HDSectionLabel>
              guide
            </HDSectionLabel>
            <nav class="mt-6 grid gap-1">
              <UButton
                v-for="link in sectionLinks"
                :key="link.to"
                :to="link.to"
                :label="link.label"
                :icon="link.icon"
                color="neutral"
                :variant="link.to === route.path ? 'subtle' : 'ghost'"
                class="justify-start"
              />
            </nav>
          </aside>

          <div class="px-7 py-12 sm:px-12">
            <NuxtLink
              to="/"
              class="inline-flex items-center gap-2 text-sm font-medium text-petrol-700 hover:text-petrol-900 dark:text-petrol-200 dark:hover:text-petrol-100"
            >
              <UIcon
                name="i-lucide-arrow-left"
                class="size-4"
              />
              Overview
            </NuxtLink>
            <div class="mt-8 max-w-3xl">
              <HDSectionLabel>
                {{ section?.eyebrow }}
              </HDSectionLabel>
              <h1 class="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
                {{ section?.title }}
              </h1>
              <p class="mt-6 text-lg leading-8 text-sand-700 dark:text-sand-300">
                {{ section?.description }}
              </p>
            </div>
            <div class="mt-8 flex flex-wrap gap-2">
              <UBadge
                v-for="anchor in section?.anchors"
                :key="anchor"
                color="neutral"
                variant="subtle"
              >
                {{ anchor }}
              </UBadge>
            </div>
          </div>
        </div>
      </section>

      <section
        v-if="section?.slug === 'colors'"
        class="px-7 py-12 sm:px-12"
      >
        <div class="grid gap-px overflow-hidden rounded-sm border border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="color in guide.colors"
            :key="color.token"
            class="bg-white p-4 dark:bg-graphite"
          >
            <div
              class="h-24 rounded-sm border border-black/5"
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
            <p class="mt-3 font-medium">
              {{ color.role }}
            </p>
            <p class="mt-2 text-sm leading-6 text-sand-600 dark:text-sand-300">
              {{ color.usage }}
            </p>
          </div>
        </div>
      </section>

      <section
        v-else-if="section?.slug === 'typography'"
        class="px-7 py-12 sm:px-12"
      >
        <div class="grid gap-6 lg:grid-cols-2">
          <HDFrame
            v-for="font in guide.fonts"
            :key="font.name"
          >
            <p class="font-mono text-xs uppercase tracking-[0.14em] text-sand-500">
              {{ font.role }}
            </p>
            <p class="mt-4 text-2xl font-semibold">
              {{ font.name }}
            </p>
            <p class="mt-5 text-4xl font-semibold leading-tight">
              {{ font.sample }}
            </p>
            <p class="mt-5 font-mono text-xs leading-6 text-sand-600 dark:text-sand-300">
              {{ font.stack }}
            </p>
            <p class="mt-4 text-sm leading-6 text-sand-600 dark:text-sand-300">
              {{ font.notes }}
            </p>
          </HDFrame>
        </div>
      </section>

      <section
        v-else-if="section?.slug === 'logos'"
        class="grid gap-px bg-sand-300 px-7 py-12 dark:bg-white/10 sm:px-12 lg:grid-cols-2"
      >
        <HDFrame tone="dark">
          <HDLogo
            variant="wordmark"
            mode="dark"
            size="md"
          />
          <p class="mt-8 max-w-md text-sm leading-7 text-sand-300">
            Use the wordmark where the brand name needs to be readable. Use the symbol or app icon only when the product context already supplies the name.
          </p>
        </HDFrame>
        <HDFrame>
          <HDBrandMark
            tile
            size="md"
          />
          <div class="mt-8 grid gap-3">
            <div
              v-for="asset in guide.assets"
              :key="asset.name"
              class="border-b border-sand-200 pb-3 last:border-b-0 last:pb-0 dark:border-white/10"
            >
              <p class="font-medium">
                {{ asset.name }}
              </p>
              <p class="mt-1 font-mono text-xs text-sand-500">
                {{ asset.path }}
              </p>
              <p class="mt-2 text-sm leading-6 text-sand-600 dark:text-sand-300">
                {{ asset.usage }}
              </p>
            </div>
          </div>
        </HDFrame>
      </section>

      <section
        v-else-if="section?.slug === 'components'"
        class="grid gap-8 px-7 py-12 sm:px-12 lg:grid-cols-[.9fr_1.1fr]"
      >
        <div class="grid gap-px overflow-hidden rounded-sm border border-sand-300 bg-sand-300 dark:border-white/10 dark:bg-white/10">
          <div
            v-for="component in guide.components"
            :key="component.name"
            class="bg-white p-5 dark:bg-graphite"
          >
            <p class="font-semibold">
              {{ component.name }}
            </p>
            <p class="mt-2 text-sm leading-6 text-sand-600 dark:text-sand-300">
              {{ component.purpose }}
            </p>
            <p class="mt-3 text-sm leading-6 text-sand-700 dark:text-sand-200">
              {{ component.guidance }}
            </p>
          </div>
        </div>

        <UCard :ui="{ root: 'bg-white dark:bg-sand-800/35' }">
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
              <UBadge color="secondary">
                Nuxt layer
              </UBadge>
              <UBadge color="success">
                maintainable
              </UBadge>
            </div>
          </div>
        </UCard>
      </section>

      <section
        v-else-if="section?.slug === 'voice'"
        class="grid gap-6 px-7 py-12 sm:px-12 lg:grid-cols-3"
      >
        <HDFrame>
          <HDSectionLabel>attributes</HDSectionLabel>
          <div class="mt-6 flex flex-wrap gap-2">
            <UBadge
              v-for="attribute in guide.voice.attributes"
              :key="attribute"
              color="secondary"
            >
              {{ attribute }}
            </UBadge>
          </div>
        </HDFrame>

        <HDFrame>
          <HDSectionLabel>do</HDSectionLabel>
          <ul class="mt-6 space-y-4">
            <li
              v-for="item in guide.voice.dos"
              :key="item"
              class="flex gap-3 text-sm leading-6"
            >
              <UIcon
                name="i-lucide-check"
                class="mt-1 size-4 shrink-0 text-seafoam-500"
              />
              {{ item }}
            </li>
          </ul>
        </HDFrame>

        <HDFrame>
          <HDSectionLabel>do not</HDSectionLabel>
          <ul class="mt-6 space-y-4">
            <li
              v-for="item in guide.voice.donts"
              :key="item"
              class="flex gap-3 text-sm leading-6"
            >
              <UIcon
                name="i-lucide-x"
                class="mt-1 size-4 shrink-0 text-rose-500"
              />
              {{ item }}
            </li>
          </ul>
        </HDFrame>
      </section>
    </div>
  </div>
</template>
