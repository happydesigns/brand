<script setup lang="ts">
const guide = useHappydesignsGuide()

const demoState = reactive({
  projectName: 'Website refresh',
  status: 'Ready for review'
})

const revealFrame = ref<HTMLElement | null>(null)
const reveal = ref(50)
const isDragging = ref(false)

const clampReveal = (value: number) => Math.min(100, Math.max(0, value))

const updateRevealFromPointer = (event: PointerEvent) => {
  const rect = revealFrame.value?.getBoundingClientRect()

  if (!rect?.width) return

  reveal.value = clampReveal(((event.clientX - rect.left) / rect.width) * 100)
}

const startRevealDrag = (event: PointerEvent) => {
  isDragging.value = true
  updateRevealFromPointer(event)
  const target = event.currentTarget as HTMLElement
  target.setPointerCapture(event.pointerId)
}

const moveRevealDrag = (event: PointerEvent) => {
  if (isDragging.value) updateRevealFromPointer(event)
}

const stopRevealDrag = () => {
  isDragging.value = false
}

const handleRevealKeydown = (event: KeyboardEvent) => {
  const step = event.shiftKey ? 10 : 5
  const updates: Record<string, number> = {
    ArrowLeft: reveal.value - step,
    ArrowRight: reveal.value + step,
    Home: 0,
    End: 100
  }
  const nextValue = updates[event.key]

  if (nextValue === undefined) return

  event.preventDefault()
  reveal.value = clampReveal(nextValue)
}

const defaultTheme = {
  badge: { color: 'neutral' as const, variant: 'outline' as const, size: 'sm' as const },
  button: { color: 'neutral' as const, variant: 'solid' as const, size: 'sm' as const },
  input: { color: 'neutral' as const, variant: 'outline' as const, size: 'sm' as const },
  select: { color: 'neutral' as const, variant: 'outline' as const, size: 'sm' as const },
  alert: { color: 'neutral' as const, variant: 'subtle' as const }
}

const brandTheme = {
  button: { color: 'primary' as const, variant: 'solid' as const, size: 'sm' as const },
  input: { size: 'sm' as const },
  select: { size: 'sm' as const },
  alert: { color: 'primary' as const, variant: 'subtle' as const }
}

const defaultUi = {
  badge: { base: 'rounded-md bg-default text-highlighted ring-default' },
  button: { base: 'rounded-md bg-inverted text-inverted hover:bg-inverted/90 focus-visible:ring-2 focus-visible:ring-primary' },
  input: { base: 'rounded-md bg-default text-highlighted ring-default focus-visible:ring-primary' },
  select: { base: 'rounded-md bg-default text-highlighted ring-default focus-visible:ring-primary' },
  alert: {
    root: 'rounded-lg border border-default bg-muted text-highlighted shadow-none',
    icon: 'text-muted',
    title: 'text-sm font-medium text-highlighted'
  }
}

const links = [
  {
    label: 'Explore guide',
    icon: 'i-lucide-arrow-right',
    trailing: true,
    to: '/docs/guide/overview'
  },
  {
    label: 'View components',
    icon: 'i-lucide-component',
    color: 'neutral' as const,
    variant: 'outline' as const,
    to: '/docs/components'
  }
]
</script>

<template>
  <UPageHero
    :title="guide.brand.claim"
    description="The happydesigns source of truth for identity, interface patterns, and Nuxt UI implementation."
    :links="links"
    headline="happydesigns brand guide"
    orientation="horizontal"
    class="border-b border-default"
    :ui="{
      container: 'grid max-w-none !gap-0 !px-0 !py-0 sm:!gap-0 sm:!px-0 sm:!py-0 lg:!px-0 lg:grid-cols-[1fr_.95fr] lg:items-stretch',
      wrapper: 'flex min-h-0 flex-col justify-center border-b border-default bg-default px-7 py-14 sm:min-h-[520px] sm:px-12 sm:py-20 lg:min-h-[660px] lg:border-b-0 lg:border-r',
      headline: 'font-mono text-xs uppercase tracking-[0.14em] text-label before:mr-2 before:inline-block before:size-2 before:rounded-full before:bg-primary',
      title: 'max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal text-highlighted sm:text-7xl',
      description: 'max-w-2xl text-lg leading-8 text-body',
      links: 'mt-9 flex flex-wrap gap-3',
      body: '!mt-0 flex h-full min-h-0 bg-muted p-0 sm:min-h-[520px] lg:min-h-[660px]'
    }"
  >
    <template #default>
      <div class="flex h-full min-h-0 w-full items-center justify-center bg-muted p-6 sm:min-h-[520px] sm:p-12 lg:min-h-[660px]">
        <div class="relative w-full max-w-xl rounded-md border border-default bg-elevated shadow-none">
          <div class="overflow-hidden rounded-t-md">
            <div class="flex items-center justify-between border-b border-default bg-elevated px-4 py-3 font-mono text-xs text-label">
              <div class="flex gap-2">
                <span class="size-2.5 rounded-full bg-sand-400" />
                <span class="size-2.5 rounded-full bg-sand-300" />
                <span class="size-2.5 rounded-full bg-sand-300" />
              </div>
              <span>{{ guide.brand.packageName }}</span>
              <UBadge
                label="v0.1"
                color="neutral"
                variant="outline"
                :ui="{ base: 'rounded-sm bg-muted text-highlighted ring-default font-mono' }"
              />
            </div>

            <div class="flex items-center justify-between border-b border-default bg-default px-5 py-4">
              <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                Theme layer
              </p>
              <p class="font-mono text-xs text-dimmed">
                Nuxt UI -> happydesigns
              </p>
            </div>
          </div>

          <div
            ref="revealFrame"
            class="relative rounded-b-md bg-default"
          >
            <div class="overflow-hidden rounded-b-md">
              <div class="relative">
                <div class="p-5">
                  <UTheme :props="brandTheme">
                    <HeroThemeDemo
                      v-model:project-name="demoState.projectName"
                      v-model:status="demoState.status"
                    />
                  </UTheme>
                </div>

                <div
                  class="absolute inset-0 z-10 overflow-hidden p-5"
                  :style="{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }"
                >
                  <UTheme
                    :props="defaultTheme"
                    :ui="defaultUi"
                  >
                    <div class="nuxt-ui-default-demo h-full">
                      <HeroThemeDemo
                        v-model:project-name="demoState.projectName"
                        v-model:status="demoState.status"
                      />
                    </div>
                  </UTheme>
                </div>

                <div
                  class="pointer-events-none absolute inset-y-0 z-20 w-0 border-l border-dashed border-inverted/60"
                  :style="{ left: `${reveal}%` }"
                />
              </div>
            </div>

            <div
              class="absolute top-1/2 z-40 flex size-9 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-inverted bg-inverted text-inverted shadow-sm ring-2 ring-default focus-visible:outline-none focus-visible:ring-primary"
              :style="{ left: `${reveal}%` }"
              role="slider"
              tabindex="0"
              aria-label="Reveal the happydesigns theme"
              :aria-valuemin="0"
              :aria-valuemax="100"
              :aria-valuenow="Math.round(reveal)"
              @pointerdown="startRevealDrag"
              @pointermove="moveRevealDrag"
              @pointerup="stopRevealDrag"
              @pointercancel="stopRevealDrag"
              @lostpointercapture="stopRevealDrag"
              @keydown="handleRevealKeydown"
            >
              <span class="sr-only">Reveal the happydesigns theme</span>
              <UIcon
                name="i-lucide-grip-vertical"
                class="size-4"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </UPageHero>
</template>
