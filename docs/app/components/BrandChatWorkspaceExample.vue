<script setup lang="ts">
import { ref } from 'vue'
import { getTextFromMessage } from '@nuxt/ui/utils/ai'

const prompt = ref('')

const messages = [
  {
    id: 'user-1',
    role: 'user' as const,
    parts: [{ type: 'text' as const, text: 'Can this interface stay useful before it feels branded?' }]
  },
  {
    id: 'assistant-1',
    role: 'assistant' as const,
    parts: [{ type: 'text' as const, text: 'Yes. Start with clear structure, then add recognition through restrained details.' }]
  }
]
</script>

<template>
  <UChatPalette
    class="overflow-hidden rounded-md border border-default bg-default"
    :ui="{
      content: 'p-0'
    }"
  >
    <div class="flex items-center justify-between gap-4 border-b border-default px-4 py-3">
      <div class="flex min-w-0 items-center gap-3">
        <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-elevated text-primary">
          <UIcon
            name="i-lucide-message-square-text"
            class="size-4"
          />
        </span>
        <div class="min-w-0">
          <p class="text-sm font-semibold text-highlighted">
            Component review
          </p>
          <p class="text-xs text-muted">
            Design system workspace
          </p>
        </div>
      </div>
      <UBadge
        label="Ready"
        color="neutral"
        variant="outline"
        size="sm"
      />
    </div>

    <UChatMessages
      :messages="messages"
      status="ready"
      compact
      :user="{ side: 'right', variant: 'subtle' }"
      :assistant="{ side: 'left', variant: 'naked', avatar: { icon: 'i-lucide-sparkles' } }"
      :ui="{ root: 'min-h-0 gap-2 px-4 py-5 [&>article]:last-of-type:min-h-0' }"
    >
      <template #content="{ message }">
        <div class="space-y-1">
          <p class="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-dimmed">
            {{ message.role === 'user' ? 'You' : 'Assistant' }}
          </p>
          <p class="text-sm/6 text-default">
            {{ getTextFromMessage(message) }}
          </p>
        </div>
      </template>
    </UChatMessages>

    <template #prompt>
      <UChatPrompt
        v-model="prompt"
        placeholder="Ask about component behavior…"
        icon="i-lucide-search"
        :autofocus="false"
        :rows="1"
        variant="naked"
        :ui="{
          base: 'min-h-0'
        }"
      />
    </template>
  </UChatPalette>
</template>
