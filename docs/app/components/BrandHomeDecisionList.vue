<script setup lang="ts">
defineProps<{
  items: Array<{
    title: string
    description: string
    icon: string
  }>
}>()
</script>

<template>
  <div class="mt-10 border-t border-default pt-7">
    <p class="font-mono text-xs uppercase tracking-[0.14em] text-highlighted">
      Core decisions
    </p>
    <div class="mt-5 overflow-hidden rounded-sm border border-default bg-muted">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex gap-3 border-b border-default p-4 last:border-b-0"
      >
        <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-default bg-default">
          <UIcon
            :name="item.icon"
            class="size-4 text-primary"
          />
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
