<script setup lang="ts">
withDefaults(
  defineProps<{
    height?: string
  }>(),
  {
    height: '2.5rem'
  }
)
</script>

<template>
  <div
    class="landing-spacer relative"
    :style="{ height }"
  >
    <span class="absolute -left-px top-0 size-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-default bg-default" />
    <span class="absolute -right-px top-0 size-2 translate-x-1/2 -translate-y-1/2 rotate-45 border border-default bg-default" />
    <span class="absolute -left-px bottom-0 size-2 -translate-x-1/2 translate-y-1/2 rotate-45 border border-default bg-default" />
    <span class="absolute -right-px bottom-0 size-2 translate-x-1/2 translate-y-1/2 rotate-45 border border-default bg-default" />
  </div>
</template>

<style scoped>
.landing-spacer::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 4px,
    var(--ui-border) 4px,
    var(--ui-border) 5px
  );
}

.landing-spacer::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  height: 1px;
  background: var(--ui-border);
}
</style>
