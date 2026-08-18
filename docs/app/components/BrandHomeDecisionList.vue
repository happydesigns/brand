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
    <h3 class="text-lg font-semibold text-highlighted">
      Core decisions
    </h3>
    <div class="mt-5 divide-y divide-default">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex gap-3 py-5 first:pt-0 last:pb-0"
      >
        <span class="flex size-8 shrink-0 items-center justify-center rounded-full border border-default bg-muted">
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
