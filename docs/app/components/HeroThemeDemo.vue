<script setup lang="ts">
const workspaceName = ref('happydesigns')
const status = ref('Ready for review')
const statusItems = ['Draft', 'Ready for review', 'Published']
</script>

<template>
  <div class="space-y-5">
    <div>
      <p class="font-mono text-xs uppercase tracking-wider text-muted">
        Project
      </p>
      <h2 class="mt-1 text-xl font-semibold text-highlighted">
        Website refresh
      </h2>
    </div>

    <UFormField
      label="Workspace"
      name="workspace"
    >
      <UInput
        v-model="workspaceName"
        spellcheck="false"
        class="w-full"
      />
    </UFormField>

    <UFormField
      label="Status"
      name="status"
    >
      <USelect
        v-model="status"
        :items="statusItems"
        class="w-full"
      />
    </UFormField>

    <UAlert
      icon="i-lucide-circle-check"
      title="All checks passed."
      color="success"
      variant="subtle"
    />
  </div>
</template>
