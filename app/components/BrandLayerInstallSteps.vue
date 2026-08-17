<script setup lang="ts">
import {
  createLayerInstallSnippets,
  type LayerInstallSnippets
} from '@happydesigns/id'

const props = defineProps<{
  snippets?: LayerInstallSnippets
}>()

const defaultSnippets = createLayerInstallSnippets({
  packageName: '@happydesigns/brand'
})

const resolvedSnippets = computed(() => props.snippets ?? defaultSnippets)

type ParseMarkdownOptions = NonNullable<Parameters<typeof parseMarkdown>[1]>
type ParseHighlightOptions = Exclude<NonNullable<ParseMarkdownOptions['highlight']>, false>
type ParseHighlighter = NonNullable<ParseHighlightOptions['highlighter']>

const installMarkdown = computed(() => `\`\`\`bash [Terminal]
${resolvedSnippets.value.installCommand}
\`\`\``)

const configMarkdown = computed(() => `\`\`\`ts [nuxt.config.ts]
${resolvedSnippets.value.nuxtConfig}
\`\`\``)

const cacheKey = computed(() => [
  'brand-layer-install-steps',
  resolvedSnippets.value.packageName,
  resolvedSnippets.value.layer,
  resolvedSnippets.value.packageManager
].join(':'))

const theme = {
  light: 'material-theme-lighter',
  default: 'material-theme',
  dark: 'material-theme-palenight'
}

const { data: parsedSteps } = await useAsyncData(
  cacheKey,
  async () => {
    if (import.meta.client) {
      return null
    }

    const [{ parseMarkdown }, highlighter] = await Promise.all([
      import('#imports').then(module => ({ parseMarkdown: module.parseMarkdown })),
      import('#mdc-highlighter').then(module => module.default as ParseHighlighter)
    ])

    const options = {
      toc: false,
      contentHeading: false,
      highlight: {
        theme,
        highlighter
      }
    } satisfies ParseMarkdownOptions

    const [install, config] = await Promise.all([
      parseMarkdown(installMarkdown.value, options),
      parseMarkdown(configMarkdown.value, options)
    ])

    return { install, config }
  }
)
</script>

<template>
  <ol class="grid gap-6 [&_.group>div:first-child]:!bg-default [&_.group>pre]:!bg-elevated">
    <li>
      <p class="mb-3 text-sm font-semibold text-highlighted">
        Install the package
      </p>
      <div class="[&>.group]:my-0 [&_pre]:py-2.5">
        <MDCRenderer
          v-if="parsedSteps?.install.body"
          :body="parsedSteps.install.body"
          :data="parsedSteps.install.data"
          :tag="false"
        />
      </div>
    </li>
    <li>
      <p class="mb-3 text-sm font-semibold text-highlighted">
        Add the layer to your Nuxt config
      </p>
      <div class="[&>.group]:my-0 [&_pre]:py-2.5">
        <MDCRenderer
          v-if="parsedSteps?.config.body"
          :body="parsedSteps.config.body"
          :data="parsedSteps.config.data"
          :tag="false"
        />
      </div>
    </li>
  </ol>
</template>
