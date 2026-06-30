<script setup lang="ts">
import type { LayerInstallSnippets } from '@happydesigns/id'

const props = defineProps<{
  snippets: LayerInstallSnippets
}>()

type ParseMarkdownOptions = NonNullable<Parameters<typeof parseMarkdown>[1]>
type ParseHighlightOptions = Exclude<NonNullable<ParseMarkdownOptions['highlight']>, false>
type ParseHighlighter = NonNullable<ParseHighlightOptions['highlighter']>

const mdcValue = computed(() => `::code-group
\`\`\`bash [${props.snippets.packageManager}]
${props.snippets.installCommand}
\`\`\`

\`\`\`ts [nuxt.config.ts]
${props.snippets.nuxtConfig}
\`\`\`
::`)

const cacheKey = computed(() => [
  'layer-install-code-group',
  props.snippets.packageName,
  props.snippets.layer,
  props.snippets.packageManager
].join(':'))

const theme = {
  light: 'material-theme-lighter',
  default: 'material-theme',
  dark: 'material-theme-palenight'
}

const { data: parsedContent } = await useAsyncData(
  cacheKey,
  async () => {
    if (import.meta.client) {
      return null
    }

    const [{ parseMarkdown }, highlighter] = await Promise.all([
      import('#imports').then(module => ({ parseMarkdown: module.parseMarkdown })),
      import('#mdc-highlighter').then(module => module.default as ParseHighlighter)
    ])

    return parseMarkdown(mdcValue.value, {
      toc: false,
      contentHeading: false,
      highlight: {
        theme,
        highlighter
      }
    })
  }
)
</script>

<template>
  <div class="[&>.group]:my-0 [&_pre]:py-2.5">
    <MDCRenderer
      v-if="parsedContent?.body"
      :body="parsedContent.body"
      :data="parsedContent.data"
      :tag="false"
    />
  </div>
</template>
