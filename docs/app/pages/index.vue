<script setup lang="ts">
import BrandHomeApplication from '../components/BrandHomeApplication.vue'
import BrandHomeFoundations from '../components/BrandHomeFoundations.vue'
import BrandHomeGuidance from '../components/BrandHomeGuidance.vue'
import BrandHomeIdentity from '../components/BrandHomeIdentity.vue'
import BrandHomeInstall from '../components/BrandHomeInstall.vue'
import LandingSpacer from '../components/LandingSpacer.vue'
</script>

<template>
  <div class="min-h-screen bg-default">
    <div class="mx-auto w-full max-w-(--ui-container) overflow-hidden border-x border-default bg-default">
      <BrandHomeHero />

      <LandingSpacer />
      <BrandHomeGuidance />
      <LandingSpacer />

      <div class="border-b border-default bg-muted">
        <BrandHomeFoundations />
        <BrandHomeIdentity />
        <BrandHomeApplication />
      </div>

      <LandingSpacer />
      <BrandHomeInstall />
    </div>
  </div>
</template>
