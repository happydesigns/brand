<script setup lang="ts">
type HeaderLink = {
  label: string
  to: string
  activePrefix?: string
  target?: string
  rel?: string
}

type HeaderConfig = {
  links?: HeaderLink[]
}

const appConfig = useAppConfig()
const route = useRoute()
const { forced: forcedColorMode } = useDocusColorMode()
const { isEnabled: isAssistantEnabled } = useAssistant()
const { isEnabled, locales } = useDocusI18n()
const { subNavigationMode } = useSubNavigation()

const headerConfig = appConfig.header as HeaderConfig | undefined
const headerLinks = computed(() => headerConfig?.links ?? [])

const normalizePath = (path: string) => path.replace(/\/$/, '') || '/'

const isHeaderLinkActive = (link: HeaderLink) => {
  const activePath = link.activePrefix ?? link.to

  if (!activePath.startsWith('/')) {
    return false
  }

  const path = normalizePath(route.path)
  const target = normalizePath(activePath)

  return path === target || (target !== '/' && path.startsWith(`${target}/`))
}

const githubLinks = computed(() => appConfig.github && appConfig.github.url
  ? [{
      'icon': 'i-simple-icons-github',
      'to': appConfig.github.url,
      'target': '_blank',
      'rel': 'noopener noreferrer',
      'aria-label': 'GitHub'
    }]
  : [])
</script>

<template>
  <UHeader
    :ui="{
      root: 'border-b border-default bg-default/95 backdrop-blur',
      container: 'max-w-(--ui-container) border-x border-default',
      right: 'gap-1.5'
    }"
    :class="{ 'flex flex-col': subNavigationMode === 'header' }"
  >
    <template #left>
      <AppHeaderLeft />
    </template>

    <nav
      v-if="headerLinks.length"
      aria-label="Main"
      class="hidden items-center justify-center gap-7 text-sm font-medium lg:flex"
    >
      <NuxtLink
        v-for="link in headerLinks"
        :key="link.to"
        :to="link.to"
        :target="link.target"
        :rel="link.rel"
        class="text-body transition hover:text-highlighted"
        :class="{ 'text-highlighted': isHeaderLinkActive(link) }"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <template #right>
      <AppHeaderCTA />

      <template v-if="isAssistantEnabled">
        <AssistantChat />
      </template>

      <template v-if="isEnabled && locales.length > 1">
        <ClientOnly>
          <LanguageSelect />

          <template #fallback>
            <div class="h-8 w-8 animate-pulse rounded-md bg-muted" />
          </template>
        </ClientOnly>

        <USeparator
          orientation="vertical"
          class="h-8"
        />
      </template>

      <UContentSearchButton />

      <ClientOnly v-if="!forcedColorMode">
        <UColorModeButton />

        <template #fallback>
          <div class="h-8 w-8 animate-pulse rounded-md bg-muted" />
        </template>
      </ClientOnly>

      <template v-if="githubLinks?.length">
        <UButton
          v-for="(link, index) of githubLinks"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #toggle="{ open, toggle }">
      <IconMenuToggle
        :open="open"
        class="lg:hidden"
        @click="toggle"
      />
    </template>

    <template #body>
      <AppHeaderBody />
    </template>

    <template
      v-if="subNavigationMode === 'header'"
      #bottom
    >
      <AppHeaderBottom />
    </template>
  </UHeader>
</template>
