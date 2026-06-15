<script setup lang="ts">
type Family =
  | 'actions'
  | 'forms'
  | 'feedback'
  | 'navigation'
  | 'data-content'
  | 'overlays'
  | 'layout-page'
  | 'system-helpers'
  | 'dashboard'
  | 'publishing'
  | 'chat-editor'

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
const locale = ref('en')
const chatInput = ref('Review the component hierarchy.')
const editorContent = ref({
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', text: 'Component note' }],
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'Use visible structure before adding brand expression.' }],
    },
  ],
})

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

const footerColumns = [{
  label: 'Guide',
  children: [
    { label: 'Overview', to: '/docs/components' },
    { label: 'Coverage', to: '/docs/components/coverage' },
  ],
}, {
  label: 'Families',
  children: [
    { label: 'Actions', to: '/docs/components/actions' },
    { label: 'Forms', to: '/docs/components/forms' },
  ],
}]

const pageAnchors = [
  { label: 'Foundation', icon: 'i-lucide-palette', to: '#foundation', active: true },
  { label: 'Application', icon: 'i-lucide-component', to: '#application' },
]

const pageLogos = [
  { src: '/logos/happydesigns-wordmark.svg', alt: 'happydesigns wordmark' },
  { src: '/logos/happydesigns-symbol.svg', alt: 'happydesigns symbol' },
]

const locales = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
]

const authFields = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'hello@happydesigns.de',
}, {
  name: 'password',
  type: 'password',
  label: 'Password',
  placeholder: 'Password',
}]

const authProviders = [{
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  color: 'neutral' as const,
  variant: 'outline' as const,
}]

const scopedThemeProps = {
  button: {
    color: 'secondary' as const,
    variant: 'solid' as const,
    size: 'sm' as const,
  },
  badge: {
    color: 'secondary' as const,
    variant: 'subtle' as const,
  },
  alert: {
    color: 'secondary' as const,
    variant: 'soft' as const,
  },
}

const dashboardItems = [
  { label: 'Projects', icon: 'i-lucide-folder-kanban', active: true },
  { label: 'Components', icon: 'i-lucide-component' },
  { label: 'Settings', icon: 'i-lucide-settings' },
]

const dashboardSearchGroups = [{
  id: 'dashboard',
  label: 'Dashboard',
  items: [
    { label: 'Open projects', icon: 'i-lucide-folder-kanban' },
    { label: 'Review components', icon: 'i-lucide-component' },
  ],
}]

const blogPosts = [{
  title: 'Designing durable defaults',
  description: 'How the brand layer keeps repeated interfaces calm and recognizable.',
  date: 'Jun 15, 2026',
  badge: { label: 'Guide', color: 'primary' as const, variant: 'subtle' as const },
}, {
  title: 'Structure before decoration',
  description: 'A practical note on borders, spacing, type, and restrained accent use.',
  date: 'Jun 12, 2026',
}]

const changelogVersions = [{
  title: 'Component coverage expanded',
  description: 'Dashboard, publishing, chat, and editor families now have brand guidance.',
  date: 'v0.2',
  badge: { label: 'Docs', color: 'primary' as const, variant: 'subtle' as const },
}, {
  title: 'Logo system refined',
  description: 'Logo forms and lockups use clearer role-based guidance.',
  date: 'v0.1',
}]

const pricingPlans = [{
  title: 'Guide',
  price: 'Docs',
  description: 'Brand decisions for readers and maintainers.',
  features: ['Color roles', 'Logo guidance', 'Component rules'],
  button: { label: 'Open docs', to: '/docs' },
}, {
  title: 'Layer',
  price: 'Nuxt',
  description: 'Reusable Nuxt UI theme behavior for projects.',
  features: ['App config', 'Semantic tokens', 'Component defaults'],
  button: { label: 'Install layer', to: '/docs/components' },
  highlight: true,
}]

const pricingTablePlans = [{
  title: 'Guide',
  description: 'Documentation',
}, {
  title: 'Layer',
  description: 'Implementation',
  highlight: true,
}]

const pricingTableSections = [{
  title: 'Coverage',
  features: [{
    title: 'Brand decisions',
    tiers: { Guide: true, Layer: true },
  }, {
    title: 'Nuxt UI defaults',
    tiers: { Guide: false, Layer: true },
  }],
}]

const chatMessages = [
  {
    id: 'user-1',
    role: 'user',
    parts: [{ type: 'text', text: 'Can this interface stay useful before branded?' }],
  },
  {
    id: 'assistant-1',
    role: 'assistant',
    parts: [{ type: 'text', text: 'Yes. Start with clear structure, then add recognition through restrained details.' }],
  },
]

const editorMentions = [
  { label: 'Brand owner', avatar: { text: 'BO' } },
  { label: 'Design review', avatar: { icon: 'i-lucide-palette' } },
]

const familyLabels: Record<Family, string> = {
  actions: 'Actions',
  forms: 'Forms',
  feedback: 'Feedback',
  navigation: 'Navigation',
  'data-content': 'Data and content',
  overlays: 'Overlays',
  'layout-page': 'Layout and page',
  'system-helpers': 'System helpers',
  dashboard: 'Dashboard',
  publishing: 'Publishing',
  'chat-editor': 'Chat and editor',
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
          <div class="space-y-5">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Page structure
              </h3>
              <p class="mt-1 text-sm text-muted">
                Page headers, bodies, columns, lists, logos, and anchors create reusable content structure before custom layouts are needed.
              </p>
            </div>

            <div class="overflow-hidden rounded-sm border border-default bg-default">
              <UPageHeader
                headline="Component docs"
                title="Structured pages stay easier to scan."
                description="Use page-level primitives for repeated docs and landing surfaces."
                :links="[{ label: 'Open docs', to: '/docs/components', color: 'neutral', variant: 'outline', trailingIcon: 'i-lucide-arrow-right' }]"
                :ui="{
                  root: 'px-4 py-4',
                  title: 'text-2xl',
                  description: 'text-sm'
                }"
              />

              <UPageBody class="px-4 pb-4">
                <UPageColumns class="gap-4">
                  <UCard variant="outline">
                    <UPageList divide>
                      <UPageCard
                        title="Foundations"
                        description="Color and type create the calm base."
                        icon="i-lucide-palette"
                        variant="ghost"
                      />
                      <UPageCard
                        title="Application"
                        description="Components carry the system into interfaces."
                        icon="i-lucide-component"
                        variant="ghost"
                      />
                    </UPageList>
                  </UCard>

                  <UCard variant="outline">
                    <UPageAnchors :links="pageAnchors" />
                  </UCard>
                </UPageColumns>
              </UPageBody>
            </div>

            <UPageLogos title="Logo forms in one system" :logos="pageLogos" :marquee="false" />

            <div class="rounded-sm border border-default p-4">
              <UFooterColumns :columns="footerColumns">
                <template #left>
                  <p class="text-sm text-muted">
                    Footer columns keep repeated links grouped and quiet.
                  </p>
                </template>
              </UFooterColumns>
            </div>
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

      <div
        v-else-if="props.family === 'system-helpers'"
        class="grid gap-4 md:grid-cols-2"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Mode and locale controls
              </h3>
              <p class="mt-1 text-sm text-muted">
                System helpers should stay compact and use the same form hierarchy as other controls.
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <UFormField label="Color mode" help="Use the Nuxt UI mode select when the choice matters.">
                <UColorModeSelect />
              </UFormField>

              <UFormField label="Locale" help="Use locale controls only when the product supports several languages.">
                <ULocaleSelect v-model="locale" :locales="locales" />
              </UFormField>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <UColorModeButton />
              <UColorModeSwitch />
              <UColorModeAvatar
                light="/logos/happydesigns-symbol.svg"
                dark="/logos/happydesigns-symbol.svg"
                alt="happydesigns symbol"
              />
            </div>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Mode-aware asset
              </h3>
              <p class="mt-1 text-sm text-muted">
                Image swaps belong to assets that need contrast changes. The full symbol keeps its original colors.
              </p>
            </div>

            <div class="flex min-h-32 items-center justify-center rounded-sm border border-default bg-muted p-6">
              <UColorModeImage
                light="/logos/happydesigns-wordmark.svg"
                dark="/logos/happydesigns-wordmark-inverse.svg"
                alt="happydesigns wordmark"
                class="h-8 w-auto"
              />
            </div>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Auth surface
              </h3>
              <p class="mt-1 text-sm text-muted">
                Auth forms should feel trustworthy and direct before any brand expression appears.
              </p>
            </div>

            <ClientOnly>
              <UAuthForm
                title="Access project"
                description="Use clear labels and one primary path."
                icon="i-lucide-lock-keyhole"
                :fields="authFields"
                :providers="authProviders"
                :submit="{ label: 'Continue' }"
              />
              <template #fallback>
                <div class="rounded-sm border border-default bg-muted p-4 text-sm text-muted">
                  Auth form preview
                </div>
              </template>
            </ClientOnly>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Error page
              </h3>
              <p class="mt-1 text-sm text-muted">
                Error surfaces should explain what happened and offer a grounded recovery path.
              </p>
            </div>

            <div class="overflow-hidden rounded-sm border border-default">
              <UError
                :error="{ statusCode: 404, statusMessage: 'Pattern not found', message: 'The requested component pattern is not available yet.' }"
                :links="[{ label: 'Open components', to: '/docs/components', color: 'neutral', variant: 'outline' }]"
                :ui="{ root: 'min-h-0 px-4 py-8', statusMessage: 'text-2xl', message: 'text-sm' }"
              />
            </div>
          </div>
        </UCard>

        <UCard variant="outline" class="md:col-span-2">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Scoped theme
              </h3>
              <p class="mt-1 text-sm text-muted">
                Theme scopes should prove component behavior without creating a parallel design system.
              </p>
            </div>

            <UTheme :props="scopedThemeProps">
              <div class="grid gap-3 rounded-sm border border-default bg-muted p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <UAlert
                  icon="i-lucide-info"
                  title="Theme scope"
                  description="Use scoped theme props for controlled demos and reusable layer previews."
                />
                <div class="flex flex-wrap items-center gap-2">
                  <UBadge label="Scoped" />
                  <UButton label="Preview" icon="i-lucide-eye" />
                </div>
              </div>
            </UTheme>
          </div>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'dashboard'"
        class="grid gap-4"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Application shell
              </h3>
              <p class="mt-1 text-sm text-muted">
                Dashboard primitives should keep dense product work structured, resizable, and calm.
              </p>
            </div>

            <UDashboardGroup
              :storage="false"
              class="!relative !inset-auto h-[30rem] overflow-hidden rounded-sm border border-default bg-default"
            >
              <UDashboardSidebar
                collapsible
                resizable
                class="!flex min-h-full w-56 min-w-56"
                :ui="{ header: 'h-12 px-3', body: 'p-3', footer: 'p-3' }"
              >
                <template #header="{ collapsed }">
                  <UDashboardSearchButton :collapsed="collapsed" />
                </template>

                <template #default="{ collapsed }">
                  <UNavigationMenu
                    :collapsed="collapsed"
                    :items="dashboardItems"
                    orientation="vertical"
                  />
                </template>

                <template #footer="{ collapsed }">
                  <UButton
                    :label="collapsed ? undefined : 'Brand layer'"
                    :icon="collapsed ? 'i-lucide-component' : undefined"
                    color="neutral"
                    variant="ghost"
                    block
                  />
                </template>
              </UDashboardSidebar>

              <UDashboardResizeHandle />

              <UDashboardPanel :ui="{ root: 'min-h-full', body: 'p-4' }">
                <template #header>
                  <UDashboardNavbar title="Projects">
                    <template #leading>
                      <UDashboardSidebarCollapse />
                      <UDashboardSidebarToggle />
                    </template>

                    <template #right>
                      <UButton label="New" icon="i-lucide-plus" size="sm" />
                    </template>
                  </UDashboardNavbar>

                  <UDashboardToolbar>
                    <template #left>
                      <UInput icon="i-lucide-search" placeholder="Search projects" />
                    </template>
                    <template #right>
                      <USelect v-model="status" :items="statusItems" size="sm" />
                    </template>
                  </UDashboardToolbar>
                </template>

                <template #body>
                  <UScrollArea class="h-full">
                    <div class="grid gap-3 sm:grid-cols-2">
                      <UCard variant="outline">
                        <p class="font-semibold text-highlighted">
                          Website refresh
                        </p>
                        <p class="mt-1 text-sm text-muted">
                          Review component behavior before release.
                        </p>
                      </UCard>
                      <UCard variant="outline">
                        <p class="font-semibold text-highlighted">
                          Brand guide
                        </p>
                        <p class="mt-1 text-sm text-muted">
                          Keep docs and theme decisions aligned.
                        </p>
                      </UCard>
                    </div>
                  </UScrollArea>
                </template>
              </UDashboardPanel>

              <UDashboardSearch :groups="dashboardSearchGroups" />
            </UDashboardGroup>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Standalone sidebar
              </h3>
              <p class="mt-1 text-sm text-muted">
                Sidebar and scroll areas support product navigation outside the full dashboard shell.
              </p>
            </div>

            <div class="relative h-72 overflow-hidden rounded-sm border border-default bg-default">
              <USidebar
                collapsible="none"
                title="Components"
                description="Brand layer"
                class="!relative h-full"
                :ui="{ container: '!absolute !inset-y-0 !left-0 !flex !h-full', gap: 'hidden' }"
              >
                <UScrollArea class="h-full">
                  <UNavigationMenu
                    :items="navigationItems"
                    orientation="vertical"
                  />
                </UScrollArea>
              </USidebar>
            </div>
          </div>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'publishing'"
        class="grid gap-4"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Editorial listings
              </h3>
              <p class="mt-1 text-sm text-muted">
                Blog and changelog components should keep publishing surfaces structured and understated.
              </p>
            </div>

            <UBlogPosts orientation="horizontal">
              <UBlogPost
                v-for="post in blogPosts"
                :key="post.title"
                v-bind="post"
                variant="outline"
              />
            </UBlogPosts>

            <USeparator label="Changelog" />

            <UChangelogVersions>
              <UChangelogVersion
                v-for="version in changelogVersions"
                :key="version.title"
                v-bind="version"
              />
            </UChangelogVersions>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Pricing and package choices
              </h3>
              <p class="mt-1 text-sm text-muted">
                Pricing components can describe packages, layers, and implementation tiers without becoming decorative.
              </p>
            </div>

            <UPricingPlans :plans="pricingPlans" />

            <UPricingTable
              :plans="pricingTablePlans"
              :sections="pricingTableSections"
            />
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Quiet movement
              </h3>
              <p class="mt-1 text-sm text-muted">
                Marquee motion is reserved for controlled proof or partner rows, not normal navigation.
              </p>
            </div>

            <UMarquee pause-on-hover overlay class="rounded-sm border border-default bg-muted p-4">
              <UBadge color="neutral" variant="outline">
                Nuxt UI layer
              </UBadge>
              <UBadge color="primary" variant="subtle">
                Coral focus
              </UBadge>
              <UBadge color="secondary" variant="subtle">
                Technical clarity
              </UBadge>
              <UBadge color="success" variant="subtle">
                Durable defaults
              </UBadge>
            </UMarquee>
          </div>
        </UCard>
      </div>

      <div
        v-else-if="props.family === 'chat-editor'"
        class="grid gap-4"
      >
        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Chat surface
              </h3>
              <p class="mt-1 text-sm text-muted">
                Chat components should support readable streams, visible tools, and compact prompts.
              </p>
            </div>

            <UChatPalette class="rounded-sm border border-default bg-default p-3">
              <UChatMessages
                :messages="chatMessages"
                status="ready"
                compact
                class="max-h-72"
              >
                <template #content="{ message }">
                  <p class="text-sm text-default">
                    {{ message.parts?.[0]?.text }}
                  </p>
                </template>

                <template #indicator>
                  <UChatShimmer />
                </template>
              </UChatMessages>

              <template #prompt>
                <UChatPrompt v-model="chatInput" placeholder="Ask about component behavior">
                  <UChatPromptSubmit status="ready" />
                </UChatPrompt>
              </template>
            </UChatPalette>

            <div class="grid gap-3 md:grid-cols-2">
              <UChatReasoning
                text="Check structure, then color usage, then interaction copy."
                variant="card"
              />
              <UChatTool
                text="contrast_check"
                variant="card"
              />
            </div>
          </div>
        </UCard>

        <UCard variant="outline">
          <div class="space-y-4">
            <div>
              <h3 class="text-base font-semibold text-highlighted">
                Editor surface
              </h3>
              <p class="mt-1 text-sm text-muted">
                Editor components should keep authoring tools useful without letting controls dominate the writing.
              </p>
            </div>

            <ClientOnly>
              <UEditor
                v-slot="{ editor }"
                v-model="editorContent"
                class="min-h-64 rounded-sm border border-default bg-default p-4"
              >
                <UEditorToolbar :editor="editor" />
                <UEditorSuggestionMenu :editor="editor" />
                <UEditorMentionMenu :editor="editor" :items="editorMentions" />
                <UEditorEmojiMenu :editor="editor" />
                <UEditorDragHandle :editor="editor" />
              </UEditor>

              <template #fallback>
                <div class="min-h-64 rounded-sm border border-default bg-muted p-4">
                  <p class="font-semibold text-highlighted">
                    Component note
                  </p>
                  <p class="mt-2 text-sm text-muted">
                    Editor preview loads on the client.
                  </p>
                </div>
              </template>
            </ClientOnly>
          </div>
        </UCard>
      </div>
    </div>
  </UCard>
</template>
