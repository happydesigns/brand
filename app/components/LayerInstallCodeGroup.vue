<script setup lang="ts">
import type { LayerInstallSnippets } from '@happydesigns/id'

type HastNode = {
  type: 'element' | 'text'
  tagName?: string
  value?: string
  properties?: Record<string, unknown>
  children?: HastNode[]
}

type HighlightResult = {
  tree: HastNode[]
  className: string
  inlineStyle: string
  style: string
}

type Highlighter = (
  code: string,
  language: string,
  theme: Record<string, string>,
  options?: Record<string, unknown>
) => Promise<HighlightResult>

const props = defineProps<{
  snippets: LayerInstallSnippets
}>()

const theme = {
  light: 'material-theme-lighter',
  default: 'material-theme',
  dark: 'material-theme-palenight'
}

const blocks = computed(() => [
  {
    key: 'install',
    filename: props.snippets.packageManager,
    language: 'bash',
    code: props.snippets.installCommand
  },
  {
    key: 'config',
    filename: 'nuxt.config.ts',
    language: 'ts',
    code: props.snippets.nuxtConfig
  }
])

const highlightKey = computed(() => `layer-install-highlights-${props.snippets.packageName}-${props.snippets.layer}-${props.snippets.packageManager}`)

const { data: highlights } = await useAsyncData(
  highlightKey,
  async () => {
    if (import.meta.client) {
      return {} as Record<string, HighlightResult>
    }

    const highlighter = await import('#mdc-highlighter').then(module => module.default as Highlighter)
    const entries = await Promise.all(blocks.value.map(async block => [
      block.key,
      await highlighter(block.code, block.language, theme, {})
    ] as const))

    return Object.fromEntries(entries)
  }
)

const escapeHtml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

const renderAttribute = ([name, value]: [string, unknown]) => {
  if (value === false || value === undefined || value === null) {
    return ''
  }

  const normalizedName = name === 'className' ? 'class' : name
  const normalizedValue = Array.isArray(value) ? value.join(' ') : String(value)

  return ` ${normalizedName}="${escapeHtml(normalizedValue)}"`
}

const renderHast = (nodes: HastNode[] | undefined): string => {
  if (!nodes) {
    return ''
  }

  return nodes.map((node) => {
    if (node.type === 'text') {
      return escapeHtml(node.value ?? '')
    }

    const tagName = node.tagName ?? 'span'
    const attributes = Object.entries(node.properties ?? {})
      .map(renderAttribute)
      .join('')

    return `<${tagName}${attributes}>${renderHast(node.children)}</${tagName}>`
  }).join('')
}

const prosePreUi = {
  copy: 'hidden sm:inline-flex'
}
</script>

<template>
  <div>
    <component
      :is="'style'"
      v-for="block in blocks"
      :key="`${block.key}-style`"
    >
      {{ highlights?.[block.key]?.style }}
    </component>

    <ProseCodeGroup>
      <ProsePre
        v-for="block in blocks"
        :key="block.key"
        :code="block.code"
        :filename="block.filename"
        :language="block.language"
        :class="[highlights?.[block.key]?.className, `language-${block.language}`]"
        :style="highlights?.[block.key]?.inlineStyle"
        :ui="prosePreUi"
      >
        <!-- eslint-disable-next-line vue/no-v-html -- HTML is generated from Nuxt's configured MDC highlighter. -->
        <code v-html="renderHast(highlights?.[block.key]?.tree) || escapeHtml(block.code)" />
      </ProsePre>
    </ProseCodeGroup>
  </div>
</template>
