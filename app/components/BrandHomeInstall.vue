<script setup lang="ts">
const links = [
  {
    label: 'Open docs',
    icon: 'i-lucide-arrow-right',
    trailing: true,
    to: '/docs/guide/overview'
  }
]
</script>

<template>
  <UPageSection
    class="border-b border-default bg-elevated"
    :ui="{ container: 'px-7 py-12 sm:px-12 sm:py-14' }"
  >
    <UPageCTA
      title="Use the brand system in real projects."
      description="Read the guide for decisions, then install the Nuxt layer when a project should carry the happydesigns system."
      :links="links"
      orientation="horizontal"
      variant="outline"
      :ui="{
        root: 'overflow-hidden rounded-sm bg-default shadow-none',
        container: 'gap-0 px-0 py-0 lg:grid-cols-[.78fr_1fr] lg:items-stretch',
        wrapper: 'p-6 sm:p-8 lg:p-10',
        title: 'text-3xl font-semibold leading-tight sm:text-4xl',
        description: 'max-w-xl text-base leading-8 text-body',
        body: 'mt-0 h-full',
        links: 'flex flex-wrap gap-3'
      }"
    >
      <template #default>
        <div
          id="install-package"
          class="h-full border-t border-default bg-default p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10"
        >
          <IdLayerInstall
            class="h-full !border-0 !bg-transparent !p-0"
            package-name="@happydesigns/brand"
            title="Build with the layer."
          >
            <template #default="{ snippets }">
              <LayerInstallCodeGroup :snippets="snippets" />
            </template>
          </IdLayerInstall>
        </div>
      </template>
    </UPageCTA>
  </UPageSection>
</template>
