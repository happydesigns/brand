<script setup lang="ts">
type Family =
  | 'actions'
  | 'forms'
  | 'feedback'
  | 'navigation'
  | 'data-content'
  | 'overlays'
  | 'layout-page'

const props = defineProps<{
  family: Family
}>()

const projectName = ref('Website refresh')
const status = ref('Ready for review')
const note = ref('Use coral for focus and active details.')
const enabled = ref(true)
const includeNotes = ref(true)
const progress = ref(72)
const budget = ref(4)
const packageName = ref('@happydesigns/brand')
const reviewer = ref('Design review')
const tags = ref(['accessible', 'durable'])
const checks = ref(['borders', 'focus'])
const rhythm = ref('balanced')
const pin = ref(['2', '4', '2', '4'])
const accent = ref('#F28564')

const statusItems = [
  { label: 'Draft', value: 'Draft' },
  { label: 'Ready for review', value: 'Ready for review' },
  { label: 'Published', value: 'Published' },
]
const reviewerItems = [
  { label: 'Design review', value: 'Design review' },
  { label: 'Engineering review', value: 'Engineering review' },
  { label: 'Ready to ship', value: 'Ready to ship' },
]
const packageItems = [
  { label: '@happydesigns/brand', value: '@happydesigns/brand' },
  { label: '@happydesigns/ui', value: '@happydesigns/ui' },
  { label: '@happydesigns/tokens', value: '@happydesigns/tokens' },
]
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
  'layout-page': 'Layout and page',
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
        class="grid gap-4 md:grid-cols-2"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Primary action
              </h3>
              <p class="mt-1 text-sm text-muted">
                Use one filled action for the strongest decision in the view.
              </p>
            </div>

            <UButton label="Save changes" icon="i-lucide-save" />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Secondary path
              </h3>
              <p class="mt-1 text-sm text-muted">
                Keep alternate actions visible without competing with the primary one.
              </p>
            </div>

            <div class="flex flex-wrap gap-3">
              <UButton label="Review pattern" variant="outline" color="neutral" />
              <UTooltip text="Open docs">
                <UButton
                  aria-label="Open docs"
                  icon="i-lucide-arrow-up-right"
                  variant="ghost"
                  color="neutral"
                />
              </UTooltip>
            </div>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Copy action
              </h3>
              <p class="mt-1 text-sm text-muted">
                Pair exact values with an adjacent action when copying is the task.
              </p>
            </div>

            <UFieldGroup>
              <UInput model-value="@happydesigns/brand" readonly />
              <UButton color="neutral" variant="outline" icon="i-lucide-copy" aria-label="Copy package" />
            </UFieldGroup>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Compact metadata
              </h3>
              <p class="mt-1 text-sm text-muted">
                Badges and shortcuts support actions; they should not become the action itself.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-2">
              <UChip text="3" color="primary">
                <UButton
                  label="Review queue"
                  variant="outline"
                  color="neutral"
                />
              </UChip>
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
          </div>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'forms'"
        class="grid gap-4 md:grid-cols-2"
      >
        <UCard variant="outline">
          <UForm :state="{ projectName, status }" class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Basic fields
              </h3>
              <p class="mt-1 text-sm text-muted">
                Plain labels, visible borders, and direct values make forms easy to scan.
              </p>
            </div>

            <UFormField label="Project name" help="Short text inputs should stay calm and direct.">
              <UInput v-model="projectName" />
            </UFormField>

            <UFormField label="Status" help="Use semantic labels before color.">
              <USelect v-model="status" :items="statusItems" />
            </UFormField>
          </UForm>
        </UCard>

        <UCard variant="outline">
          <UForm :state="{ reviewer, packageName }" class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Choice fields
              </h3>
              <p class="mt-1 text-sm text-muted">
                Menus help when values are known, searchable, or technical.
              </p>
            </div>

            <UFormField label="Reviewer" help="Searchable choices stay predictable.">
              <USelectMenu v-model="reviewer" :items="reviewerItems" />
            </UFormField>

            <UFormField label="Package" help="Technical values may use exact names.">
              <UInputMenu v-model="packageName" :items="packageItems" />
            </UFormField>
          </UForm>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Exact input
              </h3>
              <p class="mt-1 text-sm text-muted">
                Numeric, date, time, and code inputs should stay compact and precise.
              </p>
            </div>

            <UFormField label="Pattern count" help="Use steppers for bounded numeric choices.">
              <UInputNumber v-model="budget" :min="1" :max="12" />
            </UFormField>

            <UFormField label="Review date" help="Group date and time when they describe one decision.">
              <UFieldGroup>
                <UInputDate icon="i-lucide-calendar" />
                <UInputTime />
              </UFieldGroup>
            </UFormField>

            <UFormField label="Access code" help="Pin inputs are for short fixed-length codes.">
              <UPinInput v-model="pin" />
            </UFormField>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Preferences
              </h3>
              <p class="mt-1 text-sm text-muted">
                Groups, switches, and sliders make settings readable without extra decoration.
              </p>
            </div>

            <UFormField label="Checks" help="Grouped choices make validation intent visible.">
              <UCheckboxGroup v-model="checks" :items="checkItems" />
            </UFormField>

            <UFormField label="Include notes" help="Single checkboxes work for one optional choice.">
              <UCheckbox v-model="includeNotes" label="Attach implementation notes" />
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
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Metadata input
              </h3>
              <p class="mt-1 text-sm text-muted">
                Tags and listboxes help internal tools stay compact.
              </p>
            </div>

            <UFormField label="Labels" help="Tags should help scanning, not decorate the form.">
              <UInputTags v-model="tags" />
            </UFormField>

            <UFormField label="Section" help="Listboxes support compact internal choices.">
              <UListbox v-model="selectedSection" :items="listboxItems" />
            </UFormField>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Design tooling
              </h3>
              <p class="mt-1 text-sm text-muted">
                Creative controls need clear labels and enough room to make decisions.
              </p>
            </div>

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
          </div>
        </UCard>

        <UCard variant="outline" class="md:col-span-2">
          <UFormField label="Implementation note" help="Long text fields should carry prose, not layout instructions.">
            <UTextarea v-model="note" :rows="3" spellcheck="false" />
          </UFormField>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'feedback'"
        class="grid gap-4 md:grid-cols-2"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Page notice
              </h3>
              <p class="mt-1 text-sm text-muted">
                Use a banner for a broad message that frames the whole view.
              </p>
            </div>

          <UBanner
            color="secondary"
            icon="i-lucide-info"
            title="Brand layer updated"
          />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Inline status
              </h3>
              <p class="mt-1 text-sm text-muted">
                Alerts stay near the task and explain the current state.
              </p>
            </div>

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
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Progress and loading
              </h3>
              <p class="mt-1 text-sm text-muted">
                Show measurable progress first, then use skeletons for unknown content.
              </p>
            </div>

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
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Toast preview
              </h3>
              <p class="mt-1 text-sm text-muted">
                Toasts confirm finished actions without interrupting the page.
              </p>
            </div>

          <UToast
            title="Changes saved"
            description="The pattern is ready for review."
            icon="i-lucide-circle-check"
            color="success"
          />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Empty state
              </h3>
              <p class="mt-1 text-sm text-muted">
                Empty states should explain what is missing and offer one next action.
              </p>
            </div>

          <UEmpty
            icon="i-lucide-folder-open"
            title="No patterns yet"
            description="Start with a project brief before adding variants."
            :actions="[{ label: 'Create pattern', icon: 'i-lucide-plus' }]"
          />
          </div>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'navigation'"
        class="grid gap-4 md:grid-cols-2"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Primary navigation
              </h3>
              <p class="mt-1 text-sm text-muted">
                Use navigation menus when the choices are peers in the same system.
              </p>
            </div>

            <UNavigationMenu :items="navigationItems" class="w-full" />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Location and views
              </h3>
              <p class="mt-1 text-sm text-muted">
                Breadcrumbs show location; tabs switch local views without leaving the page.
              </p>
            </div>

            <UBreadcrumb :items="breadcrumbItems" />
            <UTabs :items="tabs" />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Guided sequence
              </h3>
              <p class="mt-1 text-sm text-muted">
                Steppers are useful when order is part of the task.
              </p>
            </div>

            <UStepper :items="stepperItems" disabled />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Search navigation
              </h3>
              <p class="mt-1 text-sm text-muted">
                Command palettes support fast access without making the page busier.
              </p>
            </div>

            <UCommandPalette
              :groups="commandGroups"
              placeholder="Search the guide..."
              :autofocus="false"
            />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Content tree
              </h3>
              <p class="mt-1 text-sm text-muted">
                Trees and pagination help dense structures stay navigable.
              </p>
            </div>

            <UTree :items="treeItems" />
            <UPagination :default-page="2" :total="24" :items-per-page="8" class="mt-4" />
            <ULink to="/docs/components" class="mt-3 inline-flex text-sm font-medium text-primary">
              Open component system
            </ULink>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Disclosure
              </h3>
              <p class="mt-1 text-sm text-muted">
                Accordions hide supporting guidance until someone asks for it.
              </p>
            </div>

            <UAccordion :items="accordionItems" />
          </div>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'data-content'"
        class="grid gap-4 md:grid-cols-2"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Structured table
              </h3>
              <p class="mt-1 text-sm text-muted">
                Tables compare repeated objects with clear labels and restrained state.
              </p>
            </div>

            <UTable :data="tableData" :columns="tableColumns" />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Linked content card
              </h3>
              <p class="mt-1 text-sm text-muted">
                Page cards work when the whole block is a navigation target.
              </p>
            </div>

          <UPageCard
            title="Reusable pattern"
            description="Use page cards for repeated navigation or documentation entries."
            icon="i-lucide-layout-grid"
            to="/docs/components"
          />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Collapsible detail
              </h3>
              <p class="mt-1 text-sm text-muted">
                Collapsibles keep secondary implementation detail close without opening it by default.
              </p>
            </div>

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
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                User context
              </h3>
              <p class="mt-1 text-sm text-muted">
                Avatars and user rows should support recognition, not decorate the card.
              </p>
            </div>

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
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Separated metadata
              </h3>
              <p class="mt-1 text-sm text-muted">
                Separators and mono text help exact tokens stand apart from prose.
              </p>
            </div>

          <USeparator label="Token" />

          <div class="rounded-md border border-default bg-muted p-4 font-mono text-sm">
            --ui-primary: coral
          </div>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Sequence preview
              </h3>
              <p class="mt-1 text-sm text-muted">
                Carousel and timeline patterns show ordered content without adding a new page.
              </p>
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
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'overlays'"
        class="grid gap-4 md:grid-cols-2"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Focused decision
              </h3>
              <p class="mt-1 text-sm text-muted">
                Modals work when the user must finish or dismiss one task.
              </p>
            </div>

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
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Supporting panel
              </h3>
              <p class="mt-1 text-sm text-muted">
                Slideovers keep related work available without replacing the page.
              </p>
            </div>

            <USlideover title="Pattern notes" description="Use slideovers for contextual supporting work.">
              <UButton label="Open slideover" variant="outline" color="neutral" />
              <template #body>
                <p class="text-sm text-muted">
                  Slideovers should support the page instead of replacing it.
                </p>
              </template>
            </USlideover>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Mobile sheet
              </h3>
              <p class="mt-1 text-sm text-muted">
                Drawers are useful for short mobile-first settings and actions.
              </p>
            </div>

            <UDrawer title="Mobile settings" description="Use drawers when the interaction starts near a screen edge.">
              <UButton label="Open drawer" variant="outline" color="neutral" />
              <template #body>
                <p class="text-sm text-muted">
                  Drawer content should stay short and easy to dismiss.
                </p>
              </template>
            </UDrawer>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Contextual help
              </h3>
              <p class="mt-1 text-sm text-muted">
                Popovers expose small supporting choices near the trigger.
              </p>
            </div>

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
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Action menu
              </h3>
              <p class="mt-1 text-sm text-muted">
                Dropdown menus collect secondary actions behind one clear trigger.
              </p>
            </div>

            <UDropdownMenu :items="dropdownItems">
              <UButton label="Open menu" variant="outline" color="neutral" trailing-icon="i-lucide-chevron-down" />
            </UDropdownMenu>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Context menu
              </h3>
              <p class="mt-1 text-sm text-muted">
                Context menus should support power use, not hide primary paths.
              </p>
            </div>

            <UContextMenu :items="dropdownItems">
              <div class="flex min-h-10 items-center justify-center rounded-sm border border-dashed border-default px-3 text-sm text-muted">
                Right-click area
              </div>
            </UContextMenu>
          </div>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'layout-page'"
        class="grid gap-4"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Page hero
              </h3>
              <p class="mt-1 text-sm text-muted">
                Heroes carry the main promise and one or two grounded next actions.
              </p>
            </div>

            <div class="overflow-hidden rounded-sm border border-default">
              <UPageHero
                title="Thoughtful design for the modern web."
                description="A compact page opening with visible structure and restrained action hierarchy."
                :links="[
                  { label: 'Open guide', to: '/docs', icon: 'i-lucide-arrow-right', trailing: true },
                  { label: 'View components', to: '/docs/components', color: 'neutral', variant: 'outline', icon: 'i-lucide-component' }
                ]"
                :ui="{
                  container: 'py-8 sm:py-8 lg:py-8 gap-5',
                  title: 'text-3xl sm:text-4xl max-w-2xl',
                  description: 'text-base max-w-2xl'
                }"
              />
            </div>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Section grid
              </h3>
              <p class="mt-1 text-sm text-muted">
                Page sections, grids, features, and cards organize related decisions without making every panel decorative.
              </p>
            </div>

            <UPageSection
              title="Component families"
              description="Use page structure to group related component guidance."
              :ui="{
                container: 'py-0 sm:py-0 lg:py-0 gap-5',
                title: 'text-2xl',
                description: 'text-base'
              }"
            >
              <UPageGrid class="mt-4 sm:grid-cols-2">
                <UPageCard
                  title="Feedback"
                  description="State messages stay close to the task."
                  icon="i-lucide-circle-check"
                  to="/docs/components/feedback"
                />
                <UPageCard
                  title="Overlays"
                  description="Contextual surfaces support the current flow."
                  icon="i-lucide-panel-top-open"
                  to="/docs/components/overlays"
                />
              </UPageGrid>

              <div class="mt-4 grid gap-4 sm:grid-cols-2">
                <UPageFeature
                  title="Actions"
                  description="Buttons and compact metadata."
                  icon="i-lucide-mouse-pointer-click"
                />
                <UPageFeature
                  title="Forms"
                  description="Labels, fields, and validation."
                  icon="i-lucide-text-cursor-input"
                />
              </div>
            </UPageSection>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                CTA and related links
              </h3>
              <p class="mt-1 text-sm text-muted">
                CTAs should connect the guide to implementation without adding a new visual language.
              </p>
            </div>

            <UPageCTA
              title="Use the brand system in real projects."
              description="Open the docs, then install the Nuxt layer when a project should carry the happydesigns system."
              :links="[{ label: 'Open docs', to: '/docs', icon: 'i-lucide-arrow-right', trailing: true }]"
              :ui="{ container: 'py-6 sm:py-6 lg:py-6' }"
            />

            <UPageLinks
              :links="[
                { label: 'Colors', description: 'Palette roles and token behavior.', icon: 'i-lucide-palette', to: '/docs/colors' },
                { label: 'Typography', description: 'Hierarchy and technical type.', icon: 'i-lucide-type', to: '/docs/typography' }
              ]"
            />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Shell frame
              </h3>
              <p class="mt-1 text-sm text-muted">
                Header, main, container, and footer primitives should keep the application frame quiet and reusable.
              </p>
            </div>

            <div class="overflow-hidden rounded-sm border border-default">
              <UHeader
                :ui="{
                  root: 'relative border-b border-default bg-default',
                  container: 'h-14'
                }"
              >
                <template #left>
                  <span class="font-semibold text-highlighted">happydesigns.</span>
                </template>
                <template #right>
                  <UButton label="Docs" variant="ghost" color="neutral" size="sm" />
                </template>
              </UHeader>

              <UMain class="bg-muted p-4">
                <UContainer class="rounded-sm border border-default bg-default py-4">
                  <p class="text-sm font-medium text-highlighted">
                    Shared page frame
                  </p>
                  <p class="mt-1 text-sm text-muted">
                    Content stays inside the same container rhythm.
                  </p>
                </UContainer>
              </UMain>

              <UFooter
                :ui="{
                  root: 'border-t border-default bg-default',
                  container: 'py-4 lg:py-4'
                }"
              >
                <template #left>
                  <span class="text-sm text-muted">Copyright happydesigns</span>
                </template>
                <template #right>
                  <span class="font-mono text-xs text-label">Nuxt UI layer</span>
                </template>
              </UFooter>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UCard>
</template>
