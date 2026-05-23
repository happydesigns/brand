<script setup lang="ts">
const statusItems = [
  'Draft',
  'Ready for review',
  'Published'
]
</script>

<template>
  <div class="h-full rounded-sm border border-default bg-muted p-4">
    <div class="mb-4 flex min-h-8 items-center justify-between gap-3">
      <div>
        <p class="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-dimmed">
          Project
        </p>
        <p class="mt-0.5 text-base font-semibold text-highlighted">
          Website refresh
        </p>
      </div>
      <UBadge
        label="Ready"
        color="neutral"
        variant="outline"
      />
    </div>

    <div class="space-y-3">
      <UInput
        model-value="Website refresh"
        spellcheck="false"
        class="w-full"
        aria-label="Project name"
      />
      <USelect
        model-value="Ready for review"
        :items="statusItems"
        class="w-full"
        aria-label="Status"
      />
      <UAlert
        icon="i-lucide-circle-check"
        title="Ready for review"
      />
      <UButton
        label="Save"
        block
      />
    </div>
  </div>
</template>
