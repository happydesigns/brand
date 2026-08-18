<script setup lang="ts">
const applicationDecisions = [
  {
    title: 'Task and state before brand character.',
    description: 'Make the action clear and keep feedback close to the work it confirms.'
  },
  {
    title: 'Reuse before restyling.',
    description: 'Prefer a shared pattern before introducing local component treatment.'
  }
]

const projectStatusItems = [
  'Draft',
  'Ready for review',
  'Published'
]

const formState = reactive({
  projectName: 'Website refresh',
  status: 'Ready for review',
  note: 'Graphite carries the save action. Coral stays in focus and active details.'
})

const sectionCardUi = {
  root: 'overflow-hidden rounded-sm !bg-default shadow-none ring-default transition-none hover:!bg-default',
  body: 'p-0 sm:p-0'
}

const staticCardUi = {
  root: 'rounded-sm !bg-elevated shadow-none ring-default transition-none hover:!bg-elevated',
  body: 'p-5 sm:p-5'
}

const specimenCardUi = {
  root: 'overflow-hidden rounded-sm !bg-accented shadow-none ring-default transition-none hover:!bg-accented',
  body: 'p-0 sm:p-0'
}

const badgeUi = {
  base: 'rounded-sm bg-elevated text-highlighted ring-default'
}
</script>

<template>
  <UPageSection
    class="bg-transparent"
    :ui="{ container: 'px-7 pt-0 pb-10 sm:px-12 sm:pb-12 lg:pt-0 lg:pb-12' }"
  >
    <UCard
      variant="outline"
      :ui="sectionCardUi"
    >
      <div class="grid items-stretch lg:grid-cols-[.42fr_.58fr]">
        <div class="flex flex-col border-b border-default bg-default p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
            03 / Interface application
          </p>
          <h2 class="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
            Turn the rules into repeatable behavior.
          </h2>
          <p class="mt-6 max-w-xl text-base leading-8 text-body">
            Components are where foundations and identity become useful. Hierarchy, feedback, and metadata should behave consistently across products.
          </p>

          <BrandHomeDecisionList :items="applicationDecisions" />
        </div>

        <div class="grid gap-px bg-accented lg:grid-rows-[auto_1fr]">
          <div class="bg-default p-6 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <HDSectionLabel>component behavior</HDSectionLabel>
              <UButton
                to="/docs/components"
                label="Open components"
                icon="i-lucide-arrow-right"
                trailing
                color="neutral"
                variant="outline"
                size="sm"
              />
            </div>

            <UCard
              variant="outline"
              class="mt-7"
              :ui="specimenCardUi"
            >
              <div class="grid gap-px bg-accented xl:grid-cols-3">
                <div class="bg-elevated p-5">
                  <UIcon
                    name="i-lucide-sparkles"
                    class="size-5 text-primary"
                  />
                  <p class="mt-5 text-base font-semibold">
                    Action hierarchy
                  </p>
                  <p class="mt-2 text-sm leading-6 text-muted">
                    One filled action carries the strongest decision.
                  </p>
                  <div class="mt-5 flex flex-wrap gap-2">
                    <UButton
                      label="Save"
                      icon="i-lucide-save"
                      type="button"
                      size="sm"
                    />
                    <UButton
                      label="Review"
                      color="neutral"
                      variant="outline"
                      type="button"
                      size="sm"
                    />
                  </div>
                </div>

                <div class="bg-elevated p-5">
                  <UIcon
                    name="i-lucide-circle-check"
                    class="size-5 text-success"
                  />
                  <p class="mt-5 text-base font-semibold">
                    Feedback state
                  </p>
                  <p class="mt-2 text-sm leading-6 text-muted">
                    State messages stay close to the task they confirm.
                  </p>
                  <UAlert
                    title="Ready for review"
                    icon="i-lucide-circle-check"
                    color="success"
                    variant="subtle"
                    class="mt-5"
                  />
                </div>

                <div class="bg-elevated p-5">
                  <UIcon
                    name="i-lucide-tags"
                    class="size-5 text-secondary"
                  />
                  <p class="mt-5 text-base font-semibold">
                    Metadata
                  </p>
                  <p class="mt-2 text-sm leading-6 text-muted">
                    Status, shortcuts, and exact names support scanning.
                  </p>
                  <div class="mt-5 flex flex-wrap items-center gap-2">
                    <UBadge
                      label="Ready"
                      color="success"
                      variant="subtle"
                    />
                    <UBadge
                      label="Internal"
                      color="neutral"
                      variant="outline"
                      :ui="badgeUi"
                    />
                    <UKbd>Ctrl</UKbd>
                    <UKbd>K</UKbd>
                  </div>
                </div>
              </div>
            </UCard>
          </div>

          <div class="bg-default p-6 sm:p-8">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <HDSectionLabel>interface use</HDSectionLabel>
              <UBadge
                label="Project view"
                color="neutral"
                variant="outline"
                :ui="badgeUi"
              />
            </div>
            <UCard
              variant="outline"
              class="mt-7"
              :ui="staticCardUi"
            >
              <div class="flex items-start justify-between gap-4 border-b border-default pb-5">
                <div>
                  <p class="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                    Project settings
                  </p>
                  <p class="mt-1 text-lg font-semibold">
                    Website refresh
                  </p>
                </div>
                <UBadge
                  color="neutral"
                  variant="outline"
                  :ui="badgeUi"
                >
                  Ready
                </UBadge>
              </div>

              <UForm
                :state="formState"
                class="mt-5 grid gap-4 sm:grid-cols-2"
              >
                <UFormField
                  name="projectName"
                  label="Project name"
                  help="Internal project label."
                >
                  <UInput
                    v-model="formState.projectName"
                    spellcheck="false"
                    class="w-full"
                  />
                </UFormField>
                <UFormField
                  name="status"
                  label="Status"
                  help="Use color only when it adds meaning."
                >
                  <USelect
                    v-model="formState.status"
                    :items="projectStatusItems"
                    class="w-full"
                  />
                </UFormField>
                <UFormField
                  name="note"
                  label="Implementation note"
                  help="Specific enough to guide reuse."
                  class="sm:col-span-2"
                >
                  <UTextarea
                    v-model="formState.note"
                    :rows="3"
                    spellcheck="false"
                    class="w-full"
                  />
                </UFormField>

                <div class="flex flex-wrap justify-end gap-2 border-t border-default pt-4 sm:col-span-2">
                  <UButton
                    label="Cancel"
                    color="neutral"
                    variant="outline"
                    type="button"
                  />
                  <UButton
                    label="Save settings"
                    type="button"
                  />
                </div>
              </UForm>
            </UCard>
          </div>
        </div>
      </div>
    </UCard>
  </UPageSection>
</template>
