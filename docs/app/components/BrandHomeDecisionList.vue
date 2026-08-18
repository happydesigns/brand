<script setup lang="ts">
defineProps<{
  items: Array<{
    title: string
    description: string
  }>
}>()
</script>

<template>
  <div class="mt-10 border-t border-default pt-7">
    <p class="font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
      Core decisions
    </p>
    <div class="mt-4 divide-y divide-default">
      <div
        v-for="(item, index) in items"
        :key="item.title"
        class="grid grid-cols-[1.5rem_1fr] gap-3 py-5 first:pt-0 last:pb-0"
      >
        <span class="pt-1 font-mono text-xs text-primary">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <div>
          <p class="text-sm font-semibold leading-6 text-highlighted">
            {{ item.title }}
          </p>
          <p class="mt-1 text-sm leading-6 text-toned">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
