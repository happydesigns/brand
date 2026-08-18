<script setup lang="ts">
const workspaceName = defineModel<string>('workspaceName', {
  default: 'happydesigns'
})

const status = defineModel<string>('status', {
  default: 'Ready for review'
})

const statusItems = [
  'Draft',
  'Ready for review',
  'Published'
]
</script>

<template>
  <div class="h-full rounded-sm border border-default bg-muted p-4">
    <div class="mb-4 min-h-8">
      <p class="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-dimmed">
        Project
      </p>
      <p class="mt-0.5 text-base font-semibold text-highlighted">
        Website refresh
      </p>
    </div>

    <div class="space-y-3">
      <UInput
        v-model="workspaceName"
        spellcheck="false"
        class="w-full"
        aria-label="Workspace"
      />
      <USelect
        v-model="status"
        :items="statusItems"
        class="w-full"
        aria-label="Status"
      />
      <UAlert
        icon="i-lucide-circle-check"
        title="All checks passed."
      />
      <UButton
        label="Submit"
        block
      />
    </div>
  </div>
</template>
