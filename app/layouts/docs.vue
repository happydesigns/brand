<template>
  <UMain>
    <UContainer class="border-x border-sand-300 bg-warm-white dark:border-white/10 dark:bg-graphite">
      <UPage>
        <template #left>
          <UPageAside>
            <DocsAsideLeftTop />
            <DocsAsideLeftBody />
          </UPageAside>
        </template>

        <slot />
      </UPage>
    </UContainer>
  </UMain>
</template>
