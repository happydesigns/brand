<script setup lang="ts">
type DocsLink = {
  label?: string
  to: string
}

const props = defineProps<{
  links?: string
}>()

const links = computed<DocsLink[]>(() => {
  if (!props.links) {
    return []
  }

  return props.links
    .split(';')
    .map(item => item.trim())
    .filter(Boolean)
    .map((item) => {
      const separatorIndex = item.indexOf('|')

      if (separatorIndex === -1) {
        return { to: item }
      }

      return {
        label: item.slice(0, separatorIndex).trim(),
        to: item.slice(separatorIndex + 1).trim(),
      }
    })
    .filter(link => Boolean(link.to))
})

const getLabel = (link: DocsLink) => link.label || 'Docs'
</script>

<template>
  <div v-if="links.length" class="not-prose -mt-1 mb-6 flex flex-wrap items-center gap-1.5">
    <UButton
      v-for="link in links"
      :key="link.to"
      color="neutral"
      variant="subtle"
      size="xs"
      :label="getLabel(link)"
      icon="i-simple-icons-nuxtdotjs"
      trailing-icon="i-lucide-external-link"
      :to="link.to"
      target="_blank"
      rel="noreferrer"
      :aria-label="`Open ${getLabel(link)} in Nuxt UI docs`"
    />
  </div>
</template>
