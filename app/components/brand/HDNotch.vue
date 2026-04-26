<script setup lang="ts">
withDefaults(defineProps<{
  orientation?: 'left' | 'right' | 'top' | 'bottom'
}>(), {
  orientation: 'left'
})
</script>

<template>
  <svg
    class="inline-block h-2 w-[9px] shrink-0"
    viewBox="0 0 9 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1.008 6.288c.672.576 1.664.864 2.976.864 2.752 0 4.128-1.184 4.128-3.552 0-1.248-.352-2.16-1.056-2.736C6.384.288 5.36 0 3.984 0 2.672 0 1.68.288 1.008.864S0 2.352 0 3.6c0 1.216.336 2.112 1.008 2.688z"
      fill="#F28564"
    />
  </svg>
</template>
