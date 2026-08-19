<script setup lang="ts">
import { ref } from 'vue'
import type {
  EditorMentionMenuItem,
  EditorSuggestionMenuItem,
  EditorToolbarItem
} from '@nuxt/ui'

const content = ref(`
  <h2>Component review</h2>
  <p><strong>Navigation update</strong> is ready for a final content and interaction pass.</p>
  <blockquote>Keep the interface useful first. Add recognition through restrained details.</blockquote>
  <h3>Review checklist</h3>
  <ul>
    <li>Reading order is clear without decorative emphasis.</li>
    <li>Feedback stays close to the action it confirms.</li>
    <li>Labels describe outcomes instead of generic actions.</li>
  </ul>
  <p>Use <strong>@Design review</strong> for questions about hierarchy or brand expression.</p>
`)

const toolbarItems = [
  [
    {
      'kind': 'undo',
      'icon': 'i-lucide-undo-2',
      'aria-label': 'Undo',
      'tooltip': { text: 'Undo' }
    },
    {
      'kind': 'redo',
      'icon': 'i-lucide-redo-2',
      'aria-label': 'Redo',
      'tooltip': { text: 'Redo' }
    }
  ],
  [
    {
      label: 'Text',
      icon: 'i-lucide-type',
      trailingIcon: 'i-lucide-chevron-down',
      items: [
        { label: 'Paragraph', icon: 'i-lucide-pilcrow', kind: 'paragraph' },
        { label: 'Heading 2', icon: 'i-lucide-heading-2', kind: 'heading', level: 2 },
        { label: 'Heading 3', icon: 'i-lucide-heading-3', kind: 'heading', level: 3 }
      ]
    }
  ],
  [
    {
      'kind': 'mark',
      'mark': 'bold',
      'icon': 'i-lucide-bold',
      'aria-label': 'Bold',
      'tooltip': { text: 'Bold' }
    },
    {
      'kind': 'mark',
      'mark': 'italic',
      'icon': 'i-lucide-italic',
      'aria-label': 'Italic',
      'tooltip': { text: 'Italic' }
    },
    {
      'kind': 'link',
      'icon': 'i-lucide-link',
      'aria-label': 'Link',
      'tooltip': { text: 'Link' }
    }
  ],
  [
    {
      'kind': 'bulletList',
      'icon': 'i-lucide-list',
      'aria-label': 'Bulleted list',
      'tooltip': { text: 'Bulleted list' }
    },
    {
      'kind': 'blockquote',
      'icon': 'i-lucide-quote',
      'aria-label': 'Quote',
      'tooltip': { text: 'Quote' }
    }
  ]
] satisfies EditorToolbarItem[][]

const bubbleToolbarItems = [
  {
    'kind': 'mark',
    'mark': 'bold',
    'icon': 'i-lucide-bold',
    'aria-label': 'Bold'
  },
  {
    'kind': 'mark',
    'mark': 'italic',
    'icon': 'i-lucide-italic',
    'aria-label': 'Italic'
  },
  {
    'kind': 'link',
    'icon': 'i-lucide-link',
    'aria-label': 'Link'
  }
] satisfies EditorToolbarItem[]

const suggestionItems = [
  { type: 'label', label: 'Structure' },
  {
    label: 'Paragraph',
    description: 'Continue with body copy.',
    icon: 'i-lucide-pilcrow',
    kind: 'paragraph'
  },
  {
    label: 'Heading 2',
    description: 'Start a primary section.',
    icon: 'i-lucide-heading-2',
    kind: 'heading',
    level: 2
  },
  {
    label: 'Bulleted list',
    description: 'Group related points for scanning.',
    icon: 'i-lucide-list',
    kind: 'bulletList'
  },
  {
    label: 'Quote',
    description: 'Separate a principle or source note.',
    icon: 'i-lucide-quote',
    kind: 'blockquote'
  }
] satisfies EditorSuggestionMenuItem[]

const mentionItems = [
  { label: 'Brand owner', avatar: { text: 'BO' } },
  { label: 'Design review', icon: 'i-lucide-palette' },
  { label: 'Engineering review', icon: 'i-lucide-code-2' }
] satisfies EditorMentionMenuItem[]
</script>

<template>
  <div class="overflow-hidden rounded-md border border-default bg-default">
    <div class="flex items-center justify-between gap-4 border-b border-default bg-muted px-4 py-3 sm:px-5">
      <div class="min-w-0">
        <p class="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-primary">
          Content review
        </p>
        <p class="mt-1 truncate text-sm font-semibold text-highlighted">
          Navigation update
        </p>
      </div>
      <UBadge
        label="Saved"
        icon="i-lucide-cloud-check"
        color="neutral"
        variant="outline"
        size="sm"
      />
    </div>

    <ClientOnly>
      <UEditor
        v-slot="{ editor }"
        v-model="content"
        placeholder="Write a review note or type / for blocks…"
        class="bg-default"
        :ui="{
          content: 'min-h-80 px-5 py-6 sm:px-7 sm:py-8',
          base: 'mx-auto max-w-2xl'
        }"
      >
        <div class="flex min-h-12 items-center border-b border-default bg-elevated px-2 py-2 sm:px-3">
          <UEditorToolbar
            :editor="editor"
            :items="toolbarItems"
            size="sm"
            class="flex-wrap"
          />
        </div>

        <UEditorToolbar
          :editor="editor"
          :items="bubbleToolbarItems"
          layout="bubble"
          size="sm"
        />
        <UEditorSuggestionMenu
          :editor="editor"
          :items="suggestionItems"
        />
        <UEditorMentionMenu
          :editor="editor"
          :items="mentionItems"
        />
        <UEditorDragHandle :editor="editor" />
      </UEditor>

      <template #fallback>
        <div>
          <div class="flex min-h-12 items-center gap-1 border-b border-default bg-elevated px-3 py-2">
            <UButton
              icon="i-lucide-undo-2"
              aria-label="Undo"
              color="neutral"
              variant="ghost"
              size="sm"
            />
            <UButton
              icon="i-lucide-redo-2"
              aria-label="Redo"
              color="neutral"
              variant="ghost"
              size="sm"
            />
            <USeparator
              orientation="vertical"
              class="mx-1 h-5"
            />
            <UButton
              label="Text"
              icon="i-lucide-type"
              trailing-icon="i-lucide-chevron-down"
              color="neutral"
              variant="ghost"
              size="sm"
            />
            <USeparator
              orientation="vertical"
              class="mx-1 h-5"
            />
            <UButton
              icon="i-lucide-bold"
              aria-label="Bold"
              color="neutral"
              variant="ghost"
              size="sm"
            />
            <UButton
              icon="i-lucide-italic"
              aria-label="Italic"
              color="neutral"
              variant="ghost"
              size="sm"
            />
            <UButton
              icon="i-lucide-link"
              aria-label="Link"
              color="neutral"
              variant="ghost"
              size="sm"
            />
          </div>
          <div class="mx-auto min-h-80 max-w-2xl space-y-5 px-7 py-8">
            <h2 class="text-2xl font-bold text-highlighted">
              Component review
            </h2>
            <p class="text-default">
              <strong>Navigation update</strong> is ready for a final content and interaction pass.
            </p>
            <blockquote class="border-s-4 border-accented ps-4 italic text-muted">
              Keep the interface useful first. Add recognition through restrained details.
            </blockquote>
          </div>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>
