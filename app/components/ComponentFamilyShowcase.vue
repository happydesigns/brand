<script setup lang="ts">
type Family =
  | 'actions'
  | 'forms'
  | 'feedback'
  | 'navigation'
  | 'data-content'
  | 'overlays'

const props = defineProps<{
  family: Family
}>()

const projectName = ref('Website refresh')
const status = ref('Ready for review')
const note = ref('Use coral for focus and active details.')
const enabled = ref(true)
const progress = ref(72)
const budget = ref(4)
const packageName = ref('@happydesigns/brand')
const reviewer = ref('Design review')
const tags = ref(['accessible', 'durable'])
const checks = ref(['borders', 'focus'])
const rhythm = ref('balanced')
const pin = ref(['2', '4', '2', '4'])
const accent = ref('#F28564')

const statusItems = ['Draft', 'Ready for review', 'Published']
const reviewerItems = ['Design review', 'Engineering review', 'Ready to ship']
const packageItems = ['@happydesigns/brand', '@happydesigns/ui', '@happydesigns/tokens']
const checkItems = [
  { label: 'Visible borders', value: 'borders' },
  { label: 'Clear focus', value: 'focus' },
  { label: 'Compact labels', value: 'labels' },
]
const rhythmItems = [
  { label: 'Dense', value: 'dense' },
  { label: 'Balanced', value: 'balanced' },
  { label: 'Spacious', value: 'spacious' },
]
const listboxItems = [
  { label: 'Colors', value: 'colors' },
  { label: 'Typography', value: 'typography' },
  { label: 'Logos', value: 'logos' },
  { label: 'Components', value: 'components' },
  { label: 'Voice', value: 'voice' },
]
const selectedSection = ref('components')

const tabs = [
  { label: 'Overview', icon: 'i-lucide-layout-grid' },
  { label: 'Usage', icon: 'i-lucide-list-checks' },
  { label: 'Tokens', icon: 'i-lucide-code-2' },
]

const breadcrumbItems = [
  { label: 'Docs', to: '/docs' },
  { label: 'Components', to: '/docs/components' },
  { label: 'Navigation' },
]

const navigationItems = [
  { label: 'Colors', icon: 'i-lucide-palette', to: '/docs/colors' },
  { label: 'Typography', icon: 'i-lucide-type', to: '/docs/typography' },
  { label: 'Components', icon: 'i-lucide-component', to: '/docs/components', active: true },
]

const stepperItems = [
  { title: 'Base', description: 'Set spacing, type, and color roles.' },
  { title: 'Identity', description: 'Choose the right mark and voice.' },
  { title: 'Interface', description: 'Apply the system through components.' },
]

const accordionItems = [
  {
    label: 'When should coral appear?',
    icon: 'i-lucide-sparkles',
    content: 'Use coral for focus, active states, and signature emphasis. Avoid using it as a large default fill.',
  },
  {
    label: 'What should stay neutral?',
    icon: 'i-lucide-square',
    content: 'Most panels, forms, tables, and navigation surfaces should use semantic neutral surfaces and visible borders.',
  },
]

const dropdownItems = [
  [
    { label: 'Copy token', icon: 'i-lucide-copy' },
    { label: 'Open docs', icon: 'i-lucide-arrow-up-right' },
  ],
  [
    { label: 'Archive pattern', icon: 'i-lucide-archive' },
  ],
]

const commandGroups = [
  {
    id: 'docs',
    label: 'Docs',
    items: [
      { label: 'Open colors', icon: 'i-lucide-palette' },
      { label: 'Open logos', icon: 'i-lucide-badge-check' },
      { label: 'Open components', icon: 'i-lucide-component' },
    ],
  },
]

const treeItems = [
  {
    label: 'brand/',
    icon: 'i-lucide-folder',
    defaultExpanded: true,
    children: [
      { label: 'app.config.ts', icon: 'i-lucide-file-code' },
      { label: 'components/', icon: 'i-lucide-folder', defaultExpanded: true, children: [
        { label: 'Button.vue', icon: 'i-lucide-file-code' },
        { label: 'Card.vue', icon: 'i-lucide-file-code' },
      ] },
    ],
  },
]

const tableData = [
  { name: 'Button', role: 'Action', status: 'Styled' },
  { name: 'Input', role: 'Data entry', status: 'Styled' },
  { name: 'Alert', role: 'Feedback', status: 'Styled' },
]

const tableColumns = [
  { accessorKey: 'name', header: 'Component' },
  { accessorKey: 'role', header: 'Role' },
  { accessorKey: 'status', header: 'Status' },
]

const timelineItems = [
  { title: 'Tokens', description: 'Set semantic roles.', icon: 'i-lucide-swatch-book' },
  { title: 'Components', description: 'Apply shared behavior.', icon: 'i-lucide-component' },
  { title: 'Review', description: 'Check contrast and copy.', icon: 'i-lucide-circle-check' },
]

const carouselItems = [
  { title: 'Color', icon: 'i-lucide-palette' },
  { title: 'Type', icon: 'i-lucide-type' },
  { title: 'Logo', icon: 'i-lucide-badge-check' },
]

const familyLabels: Record<Family, string> = {
  actions: 'Actions',
  forms: 'Forms',
  feedback: 'Feedback',
  navigation: 'Navigation',
  'data-content': 'Data and content',
  overlays: 'Overlays',
}
</script>

<template>
  <UCard
    variant="outline"
    class="not-prose my-8 overflow-hidden"
    :ui="{ body: 'p-0 sm:p-0' }"
  >
    <div class="flex items-center justify-between border-b border-default bg-muted px-4 py-3">
      <p class="font-mono text-xs tracking-[0.16em] text-primary uppercase">
        {{ familyLabels[props.family] }}
      </p>
      <UBadge variant="outline" color="neutral">
        Nuxt UI
      </UBadge>
    </div>

    <div class="p-4 sm:p-5">
      <div
        v-if="props.family === 'actions'"
        class="grid gap-5 lg:grid-cols-[1fr_0.9fr]"
      >
        <div class="space-y-4">
          <div class="flex flex-wrap gap-3">
            <UButton label="Save changes" />
            <UButton label="Review pattern" variant="outline" color="neutral" />
            <UButton label="Copy token" variant="subtle" color="secondary" icon="i-lucide-copy" />
            <UTooltip text="Open docs">
              <UButton
                aria-label="Open docs"
                icon="i-lucide-arrow-up-right"
                variant="ghost"
                color="neutral"
              />
            </UTooltip>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <UBadge color="primary" variant="subtle">
              Active
            </UBadge>
            <UBadge color="secondary" variant="outline">
              Editorial
            </UBadge>
            <UBadge color="success" variant="subtle">
              Ready
            </UBadge>
            <UKbd>Ctrl</UKbd>
            <UKbd>K</UKbd>
          </div>

          <UFieldGroup>
            <UInput model-value="@happydesigns/brand" readonly />
            <UButton color="neutral" variant="outline" icon="i-lucide-copy" aria-label="Copy package" />
          </UFieldGroup>
        </div>

        <UCard variant="soft">
          <div class="flex items-start gap-3">
            <UChip color="success" inset>
              <UIcon name="i-lucide-arrow-up-right" class="mt-1 size-5 text-primary" />
            </UChip>
            <div>
              <p class="font-semibold text-highlighted">
                Actions stay compact.
              </p>
              <p class="mt-1 text-sm text-muted">
                Strong actions use graphite. Coral should mark focus and activity, not become a large default surface.
              </p>
            </div>
          </div>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'forms'"
        class="space-y-5"
      >
        <UForm :state="{ projectName, status, note }" class="grid gap-4 md:grid-cols-2">
          <UFormField label="Project name" help="Plain labels and visible borders keep forms easy to scan.">
            <UInput v-model="projectName" />
          </UFormField>

          <UFormField label="Status" help="Use semantic labels before color.">
            <USelect v-model="status" :items="statusItems" />
          </UFormField>

          <UFormField label="Reviewer" help="Menus should stay direct and predictable.">
            <USelectMenu v-model="reviewer" :items="reviewerItems" />
          </UFormField>

          <UFormField label="Package" help="Technical values may use exact names.">
            <UInputMenu v-model="packageName" :items="packageItems" />
          </UFormField>

          <UFormField label="Pattern count" help="Numeric controls should remain compact.">
            <UInputNumber v-model="budget" :min="1" :max="12" />
          </UFormField>

          <UFormField label="Review date" help="Date and time inputs keep scheduling exact.">
            <UFieldGroup>
              <UInputDate icon="i-lucide-calendar" />
              <UInputTime />
            </UFieldGroup>
          </UFormField>

          <UFormField label="Labels" help="Tags should help scanning, not decorate the form.">
            <UInputTags v-model="tags" />
          </UFormField>

          <UFormField label="Checks" help="Grouped choices make validation intent visible.">
            <UCheckboxGroup v-model="checks" :items="checkItems" />
          </UFormField>

          <UFormField label="Rhythm" help="Radio choices work when one option must win.">
            <URadioGroup v-model="rhythm" :items="rhythmItems" />
          </UFormField>

          <UFormField label="Enabled" help="Switches are for immediate binary settings.">
            <USwitch v-model="enabled" label="Apply brand layer" />
          </UFormField>

          <UFormField label="Intensity" help="Sliders are useful only for approximate values.">
            <USlider v-model="progress" />
          </UFormField>

          <UFormField label="Access code" help="Pin inputs are for short fixed-length codes.">
            <UPinInput v-model="pin" />
          </UFormField>

          <UFormField label="Section" help="Listboxes support compact internal choices.">
            <UListbox v-model="selectedSection" :items="listboxItems" />
          </UFormField>

          <UFormField label="Accent" help="Color pickers are reserved for design tooling.">
            <UColorPicker v-model="accent" />
          </UFormField>

          <UFormField label="Asset" help="Uploads need clear format expectations.">
            <UFileUpload
              label="Drop a brand asset"
              description="SVG, PNG, or PDF"
              icon="i-lucide-upload"
            />
          </UFormField>

          <UFormField label="Calendar" help="Full calendars need enough room to scan.">
            <UCalendar />
          </UFormField>

          <UFormField label="Implementation note" class="md:col-span-2">
            <UTextarea v-model="note" :rows="3" spellcheck="false" />
          </UFormField>
        </UForm>
      </div>

      <div
        v-else-if="props.family === 'feedback'"
        class="grid gap-4 lg:grid-cols-[1fr_0.9fr]"
      >
        <div class="space-y-4">
          <UBanner
            color="secondary"
            icon="i-lucide-info"
            title="Brand layer updated"
          />

          <UAlert
            color="success"
            variant="subtle"
            icon="i-lucide-circle-check"
            title="Ready for review"
            description="Feedback states should explain what happened and what to do next."
          />

          <UAlert
            color="warning"
            variant="subtle"
            icon="i-lucide-triangle-alert"
            title="Check contrast"
            description="Warning states stay soft until the user needs to act."
          />

          <UAlert
            color="error"
            variant="subtle"
            icon="i-lucide-circle-x"
            title="Upload failed"
            description="Use calm, specific recovery copy for errors."
          />
        </div>

        <div class="space-y-4">
          <UCard variant="outline">
            <div class="flex items-center justify-between gap-3">
              <p class="font-semibold text-highlighted">
                Accessibility pass
              </p>
              <UBadge variant="outline" color="neutral">
                {{ progress }}%
              </UBadge>
            </div>
            <UProgress v-model="progress" class="mt-4" />
            <div class="mt-5 space-y-3">
              <USkeleton class="h-3 w-2/3" />
              <USkeleton class="h-3 w-5/6" />
              <USkeleton class="h-3 w-1/2" />
            </div>
          </UCard>

          <UToast
            title="Changes saved"
            description="The pattern is ready for review."
            icon="i-lucide-circle-check"
            color="success"
          />

          <UEmpty
            icon="i-lucide-folder-open"
            title="No patterns yet"
            description="Start with a project brief before adding variants."
            :actions="[{ label: 'Create pattern', icon: 'i-lucide-plus' }]"
          />
        </div>
      </div>

      <div
        v-else-if="props.family === 'navigation'"
        class="space-y-5"
      >
        <UNavigationMenu :items="navigationItems" class="w-full" />
        <UBreadcrumb :items="breadcrumbItems" />
        <UTabs :items="tabs" />

        <div class="grid gap-4 md:grid-cols-2">
          <UAccordion :items="accordionItems" />

          <UCard variant="outline">
            <p class="mb-3 font-semibold text-highlighted">
              Guided sequence
            </p>
            <UStepper :items="stepperItems" disabled />
          </UCard>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <UCard variant="outline">
            <p class="mb-3 font-semibold text-highlighted">
              Search and routes
            </p>
            <UCommandPalette
              :groups="commandGroups"
              placeholder="Search the guide..."
              :autofocus="false"
            />
          </UCard>

          <UCard variant="outline">
            <p class="mb-3 font-semibold text-highlighted">
              Content tree
            </p>
            <UTree :items="treeItems" />
            <UPagination :default-page="2" :total="24" :items-per-page="8" class="mt-4" />
            <ULink to="/docs/components" class="mt-3 inline-flex text-sm font-medium text-primary">
              Open component system
            </ULink>
          </UCard>
        </div>
      </div>

      <div
        v-else-if="props.family === 'data-content'"
        class="grid gap-5 lg:grid-cols-[1fr_0.9fr]"
      >
        <div class="space-y-4">
          <UCard variant="outline">
            <UTable :data="tableData" :columns="tableColumns" />
          </UCard>

          <UPageCard
            title="Reusable pattern"
            description="Use page cards for repeated navigation or documentation entries."
            icon="i-lucide-layout-grid"
            to="/docs/components"
          />

          <UCollapsible>
            <UButton
              label="Show token detail"
              variant="outline"
              color="neutral"
              trailing-icon="i-lucide-chevron-down"
            />
            <template #content>
              <div class="mt-3 rounded-sm border border-default bg-muted p-4 font-mono text-sm">
                --ui-bg-muted: semantic surface
              </div>
            </template>
          </UCollapsible>
        </div>

        <div class="space-y-4">
          <UCard variant="outline">
            <div class="flex items-center justify-between gap-3">
              <UUser
                name="Brand layer"
                description="Nuxt UI components styled for happydesigns."
                :avatar="{ src: '/logos/happydesigns-symbol.svg', alt: 'happydesigns symbol' }"
              />
              <UAvatarGroup>
                <UAvatar text="HD" />
                <UAvatar icon="i-lucide-code-2" />
                <UAvatar icon="i-lucide-palette" />
              </UAvatarGroup>
            </div>
          </UCard>

          <USeparator label="Token" />

          <div class="rounded-md border border-default bg-muted p-4 font-mono text-sm">
            --ui-primary: coral
          </div>

          <UCarousel
            v-slot="{ item }"
            :items="carouselItems"
            class="rounded-sm border border-default bg-default p-4"
            :ui="{ item: 'basis-full' }"
          >
            <div class="flex h-24 items-center justify-center gap-3 rounded-sm border border-default bg-muted">
              <UIcon :name="item.icon" class="size-5 text-primary" />
              <span class="font-semibold text-highlighted">{{ item.title }}</span>
            </div>
          </UCarousel>

          <UTimeline :items="timelineItems" size="sm" />
        </div>
      </div>

      <div
        v-else-if="props.family === 'overlays'"
        class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <UModal title="Review pattern" description="Use modals for focused decisions.">
          <UButton label="Open modal" variant="outline" color="neutral" />
          <template #body>
            <p class="text-sm text-muted">
              Modal content should stay direct and easy to close.
            </p>
          </template>
          <template #footer>
            <UButton label="Save" />
            <UButton label="Cancel" variant="outline" color="neutral" />
          </template>
        </UModal>

        <USlideover title="Pattern notes" description="Use slideovers for contextual supporting work.">
          <UButton label="Open slideover" variant="outline" color="neutral" />
          <template #body>
            <p class="text-sm text-muted">
              Slideovers should support the page instead of replacing it.
            </p>
          </template>
        </USlideover>

        <UDrawer title="Mobile settings" description="Use drawers when the interaction starts near a screen edge.">
          <UButton label="Open drawer" variant="outline" color="neutral" />
          <template #body>
            <p class="text-sm text-muted">
              Drawer content should stay short and easy to dismiss.
            </p>
          </template>
        </UDrawer>

        <UPopover>
          <UButton label="Open popover" variant="outline" color="neutral" />
          <template #content>
            <div class="w-56 p-4">
              <p class="font-semibold text-highlighted">
                Compact detail
              </p>
              <p class="mt-1 text-sm text-muted">
                Popovers are useful for small supporting choices.
              </p>
            </div>
          </template>
        </UPopover>

        <UDropdownMenu :items="dropdownItems">
          <UButton label="Open menu" variant="outline" color="neutral" trailing-icon="i-lucide-chevron-down" />
        </UDropdownMenu>

        <UContextMenu :items="dropdownItems">
          <div class="flex min-h-10 items-center justify-center rounded-sm border border-dashed border-default px-3 text-sm text-muted">
            Right-click area
          </div>
        </UContextMenu>
      </div>
    </div>
  </UCard>
</template>
