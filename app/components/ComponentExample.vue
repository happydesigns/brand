<script setup lang="ts">
import ComponentExampleActions from './component-example/Actions.vue'
import ComponentExampleEditorPreview from './component-example/EditorPreview.vue'
import ComponentExampleFeedback from './component-example/Feedback.vue'
import ComponentExampleForms from './component-example/Forms.vue'
import symbolLogo from '~/assets/logos/happydesigns-symbol.svg'
import wordmarkLogo from '~/assets/logos/happydesigns-wordmark.svg'
import wordmarkLogoInverse from '~/assets/logos/happydesigns-wordmark-inverse.svg'
import { actionExampleNames, feedbackExampleNames, formExampleNames } from '~/utils/component-example-names'

const props = withDefaults(defineProps<{
  name: string
  frame?: 'default' | 'none'
}>(), {
  frame: 'default'
})

const plainExampleNames = new Set([
  'table',
  'card',
  'page-card',
  'page-hero',
  'page-section',
  'page-cta',
  'page-grid',
  'page-feature',
  'page-links',
  'page-header',
  'page-body',
  'page-columns',
  'page-list',
  'page-logos',
  'page-anchors',
  'separator',
  'collapsible',
  'carousel',
  'timeline',
  'content-navigation',
  'content-system',
  'content-toc',
  'content-surround',
  'content-search',
  'header',
  'main',
  'container',
  'footer',
  'footer-columns',
  'error',
  'theme',
  'dashboard-shell',
  'dashboard-group',
  'sidebar',
  'scroll-area',
  'blog-posts',
  'blog-post',
  'changelog-versions',
  'changelog-version',
  'pricing-plans',
  'pricing-plan',
  'pricing-table',
  'marquee',
  'chat-palette',
  'chat-messages',
  'chat-message',
  'chat-prompt',
  'chat-reasoning',
  'chat-tool',
  'editor',
  'editor-toolbar',
  'editor-drag-handle',
  'editor-emoji-menu',
  'editor-mention-menu',
  'editor-suggestion-menu',
  'color-mode-image',
])

const exampleClass = computed(() => [
  props.frame === 'none' ? 'contents' : 'not-prose my-5',
  props.frame === 'none' || plainExampleNames.has(props.name)
    ? 'overflow-visible'
    : 'overflow-hidden rounded-sm border border-default bg-default p-4 sm:p-6',
])

const status = ref('Ready for review')
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

const listboxItems = [
  { label: 'Colors', value: 'colors' },
  { label: 'Typography', value: 'typography' },
  { label: 'Logos', value: 'logos' },
  { label: 'Components', value: 'components' },
  { label: 'Voice', value: 'voice' },
]

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
    content: 'Panels, forms, tables, and navigation surfaces should use semantic neutral surfaces and visible borders.',
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
      {
        label: 'components/',
        icon: 'i-lucide-folder',
        defaultExpanded: true,
        children: [
          { label: 'Button.vue', icon: 'i-lucide-file-code' },
          { label: 'Card.vue', icon: 'i-lucide-file-code' },
        ],
      },
    ],
  },
]

const contentNavigationItems = [
  {
    title: 'Overview',
    path: '/docs',
    icon: 'i-lucide-book-open',
  },
  {
    title: 'Components',
    path: '/docs/components',
    icon: 'i-lucide-component',
    children: [
      { title: 'Actions', path: '/docs/components/actions' },
      { title: 'Forms', path: '/docs/components/forms' },
      { title: 'Docs and prose', path: '/docs/components/docs-prose' },
    ],
  },
  {
    title: 'Voice',
    path: '/docs/voice',
    icon: 'i-lucide-message-square',
  },
]

const contentTocLinks = [
  { id: 'decision-notes', depth: 2, text: 'Decision notes' },
  { id: 'code-examples', depth: 2, text: 'Code examples' },
  { id: 'content-navigation', depth: 2, text: 'Content navigation' },
]

const contentSurroundItems = [
  {
    title: 'Layout',
    description: 'Page primitives.',
    path: '/docs/components/layout-page',
  },
  {
    title: 'System',
    description: 'Theme helpers.',
    path: '/docs/components/system-helpers',
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
  { src: wordmarkLogo, alt: 'happydesigns wordmark' },
  { src: symbolLogo, alt: 'happydesigns symbol' },
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

const pricingTableTiers = [{
  id: 'guide',
  title: 'Guide',
  description: 'Documentation',
}, {
  id: 'layer',
  title: 'Layer',
  description: 'Implementation',
  highlight: true,
}]

const pricingTableSections = [{
  title: 'Coverage',
  features: [{
    title: 'Brand decisions',
    tiers: { guide: true, layer: true },
  }, {
    title: 'Nuxt UI defaults',
    tiers: { guide: false, layer: true },
  }],
}]

const chatMessages = [
  {
    id: 'user-1',
    role: 'user',
    parts: [{ type: 'text', text: 'Can this interface stay useful before it feels branded?' }],
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
</script>

<template>
  <div :class="exampleClass">
    <ComponentExampleActions v-if="actionExampleNames.has(props.name)" :name="props.name" />

    <ComponentExampleForms v-else-if="formExampleNames.has(props.name)" :name="props.name" />

    <ComponentExampleFeedback v-else-if="feedbackExampleNames.has(props.name)" :name="props.name" />

    <UTable v-else-if="props.name === 'table'" :data="tableData" :columns="tableColumns" />

    <div v-else-if="props.name === 'data-comparison-pattern'" class="space-y-4">
      <UTable :data="tableData" :columns="tableColumns" />
      <div class="flex flex-wrap items-center gap-2 text-sm text-muted">
        <UIcon name="i-lucide-circle-check" class="size-4 text-success" />
        Tables should make comparison easier before color or badges are added.
      </div>
    </div>

    <UCard v-else-if="props.name === 'card'" variant="outline" :ui="{ body: 'p-4' }">
      <p class="font-semibold text-highlighted">Reusable pattern</p>
      <p class="mt-1 text-sm text-muted">Cards contain one object, decision, or tool.</p>
    </UCard>

    <UPageCard
      v-else-if="props.name === 'page-card'"
      title="Reusable pattern"
      description="Use page cards for repeated navigation or documentation entries."
      icon="i-lucide-layout-grid"
      to="/docs/components"
    />

    <UAvatar v-else-if="props.name === 'avatar'" :src="symbolLogo" alt="happydesigns symbol" size="xl" />

    <UAvatarGroup v-else-if="props.name === 'avatar-group'">
      <UAvatar text="HD" />
      <UAvatar icon="i-lucide-code-2" />
      <UAvatar icon="i-lucide-palette" />
    </UAvatarGroup>

    <UUser
      v-else-if="props.name === 'user'"
      name="Brand layer"
      description="Nuxt UI components styled for happydesigns."
      :avatar="{ src: symbolLogo, alt: 'happydesigns symbol' }"
    />

    <div v-else-if="props.name === 'data-object-pattern'" class="grid gap-4 md:grid-cols-[1fr_1fr]">
      <UCard variant="outline" :ui="{ body: 'p-4' }">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="font-semibold text-highlighted">Reusable pattern</p>
            <p class="mt-1 text-sm text-muted">A card contains one object, decision, or tool.</p>
          </div>
          <UAvatarGroup>
            <UAvatar text="HD" />
            <UAvatar icon="i-lucide-code-2" />
            <UAvatar icon="i-lucide-palette" />
          </UAvatarGroup>
        </div>
      </UCard>
      <UPageCard
        title="Component family"
        description="Page cards work for linked or repeated page-level entries."
        icon="i-lucide-layout-grid"
        to="/docs/components"
      />
      <div class="md:col-span-2">
        <UUser
          name="Brand layer"
          description="Nuxt UI components styled for happydesigns."
          :avatar="{ src: symbolLogo, alt: 'happydesigns symbol' }"
        />
      </div>
    </div>

    <div v-else-if="props.name === 'separator'" class="space-y-4">
      <USeparator label="Token" />
      <div class="rounded-sm bg-muted px-4 py-3 font-mono text-sm text-toned">--ui-primary: coral</div>
    </div>

    <div v-else-if="props.name === 'collapsible'" class="space-y-3">
      <UCollapsible>
        <UButton label="Show token detail" color="neutral" variant="outline" trailing-icon="i-lucide-chevron-down" />
        <template #content>
          <div class="mt-3 rounded-sm bg-muted p-4 font-mono text-sm text-toned">--ui-bg-muted: semantic surface</div>
        </template>
      </UCollapsible>
    </div>

    <div v-else-if="props.name === 'carousel'" class="overflow-hidden rounded-sm bg-muted">
      <UCarousel
        v-slot="{ item }"
        :items="carouselItems"
        :ui="{ item: 'basis-full' }"
      >
        <div class="flex h-28 items-center justify-center gap-3 px-4">
          <UIcon :name="item.icon" class="size-5 text-primary" />
          <span class="font-semibold text-highlighted">{{ item.title }}</span>
        </div>
      </UCarousel>
    </div>

    <div v-else-if="props.name === 'timeline'" class="rounded-sm border border-default bg-default p-5">
      <UTimeline :items="timelineItems" size="sm" />
    </div>

    <UNavigationMenu
      v-else-if="props.name === 'navigation-menu'"
      :items="navigationItems"
      class="w-full"
    />

    <div v-else-if="props.name === 'navigation-primary-pattern'" class="space-y-5">
      <UNavigationMenu :items="navigationItems" class="w-full" />
      <USeparator />
      <ULink to="/docs/components" class="inline-flex items-center gap-2 text-primary hover:text-primary">
        Open component system
        <UIcon name="i-lucide-arrow-right" class="size-4" />
      </ULink>
    </div>

    <ULink
      v-else-if="props.name === 'link'"
      to="/docs/components"
      class="inline-flex items-center gap-2 text-primary hover:text-primary"
    >
      Open component system
      <UIcon name="i-lucide-arrow-right" class="size-4" />
    </ULink>

    <UBreadcrumb v-else-if="props.name === 'breadcrumb'" :items="breadcrumbItems" />

    <UTabs v-else-if="props.name === 'tabs'" :items="tabs" class="w-full" />

    <div v-else-if="props.name === 'navigation-location-pattern'" class="space-y-5">
      <UBreadcrumb :items="breadcrumbItems" />
      <UTabs :items="tabs" class="w-full" />
    </div>

    <UStepper
      v-else-if="props.name === 'stepper'"
      :items="stepperItems"
      orientation="vertical"
      class="max-w-md"
    />

    <UAccordion
      v-else-if="props.name === 'accordion'"
      :items="accordionItems"
      class="w-full"
    />

    <UPagination
      v-else-if="props.name === 'pagination'"
      :page="2"
      :total="30"
      :items-per-page="10"
    />

    <UCommandPalette
      v-else-if="props.name === 'command-palette'"
      :groups="commandGroups"
      class="max-h-72"
    />

    <UTree
      v-else-if="props.name === 'tree'"
      :items="treeItems"
      class="max-w-md"
    />

    <div v-else-if="props.name === 'navigation-structure-pattern'" class="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <div class="space-y-4">
        <p class="text-sm font-semibold text-highlighted">Ordered guidance</p>
        <UStepper :items="stepperItems" orientation="vertical" class="max-w-md" />
      </div>
      <div class="space-y-5">
        <div class="space-y-3">
          <p class="text-sm font-semibold text-highlighted">Optional detail</p>
          <UAccordion :items="accordionItems" />
        </div>
        <div class="grid gap-5">
          <div class="space-y-3">
            <p class="text-sm font-semibold text-highlighted">List position</p>
            <div class="overflow-x-auto pb-1">
              <UPagination :page="2" :total="30" :items-per-page="10" />
            </div>
          </div>
          <div class="space-y-3">
            <p class="text-sm font-semibold text-highlighted">Nested content</p>
            <UTree :items="treeItems" class="max-w-sm" />
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="props.name === 'navigation-fast-pattern'" class="space-y-4">
      <UCommandPalette :groups="commandGroups" class="max-h-72" />
      <p class="text-sm text-muted">Command palettes are useful when a product has enough destinations or commands to justify fast search.</p>
    </div>

    <UModal v-else-if="props.name === 'modal'" title="Review pattern" description="Use modals for focused decisions.">
      <UButton label="Open modal" color="neutral" variant="outline" />
      <template #body>
        <p class="text-sm text-muted">Modal content should stay direct and easy to close.</p>
      </template>
      <template #footer>
        <UButton label="Save" />
        <UButton label="Cancel" color="neutral" variant="outline" />
      </template>
    </UModal>

    <USlideover v-else-if="props.name === 'slideover'" title="Pattern notes" description="Use slideovers for contextual supporting work.">
      <UButton label="Open slideover" color="neutral" variant="outline" />
      <template #body>
        <p class="text-sm text-muted">Slideovers support the page instead of replacing it.</p>
      </template>
    </USlideover>

    <UDrawer v-else-if="props.name === 'drawer'" title="Mobile settings" description="Use drawers when the interaction starts near a screen edge.">
      <UButton label="Open drawer" color="neutral" variant="outline" />
      <template #body>
        <p class="text-sm text-muted">Drawer content should stay short and easy to dismiss.</p>
      </template>
    </UDrawer>

    <div v-else-if="props.name === 'overlay-focused-pattern'" class="grid gap-3 sm:grid-cols-3">
      <UModal title="Review pattern" description="Use modals for focused decisions.">
        <UButton label="Open modal" color="neutral" variant="outline" block />
        <template #body>
          <p class="text-sm text-muted">Modal content should stay direct and easy to close.</p>
        </template>
        <template #footer>
          <UButton label="Save" />
          <UButton label="Cancel" color="neutral" variant="outline" />
        </template>
      </UModal>
      <USlideover title="Pattern notes" description="Use slideovers for contextual supporting work.">
        <UButton label="Open slideover" color="neutral" variant="outline" block />
        <template #body>
          <p class="text-sm text-muted">Slideovers support the page instead of replacing it.</p>
        </template>
      </USlideover>
      <UDrawer title="Mobile settings" description="Use drawers for compact edge-based flows.">
        <UButton label="Open drawer" color="neutral" variant="outline" block />
        <template #body>
          <p class="text-sm text-muted">Drawer content should stay short and easy to dismiss.</p>
        </template>
      </UDrawer>
    </div>

    <UPopover v-else-if="props.name === 'popover'">
      <UButton label="Open popover" color="neutral" variant="outline" />
      <template #content>
        <div class="w-56 p-4">
          <p class="font-semibold text-highlighted">Compact detail</p>
          <p class="mt-1 text-sm text-muted">Popovers are useful for small supporting choices.</p>
        </div>
      </template>
    </UPopover>

    <UDropdownMenu v-else-if="props.name === 'dropdown-menu'" :items="dropdownItems">
      <UButton label="Open menu" color="neutral" variant="outline" trailing-icon="i-lucide-chevron-down" />
    </UDropdownMenu>

    <UContextMenu v-else-if="props.name === 'context-menu'" :items="dropdownItems">
      <div class="flex min-h-20 items-center justify-center rounded-sm border border-dashed border-default px-3 text-sm text-muted">Right-click area</div>
    </UContextMenu>

    <div v-else-if="props.name === 'overlay-context-pattern'" class="flex flex-wrap items-center gap-3">
      <UPopover>
        <UButton label="Open popover" color="neutral" variant="outline" />
        <template #content>
          <div class="w-56 p-4">
            <p class="font-semibold text-highlighted">Compact detail</p>
            <p class="mt-1 text-sm text-muted">Popovers are useful for small supporting choices.</p>
          </div>
        </template>
      </UPopover>
      <UTooltip text="Clarify compact controls, not required instructions.">
        <UButton icon="i-lucide-info" label="Hover for hint" color="neutral" variant="outline" />
      </UTooltip>
    </div>

    <div v-else-if="props.name === 'overlay-menu-pattern'" class="grid gap-4 sm:grid-cols-2">
      <div class="space-y-3">
        <p class="text-sm font-semibold text-highlighted">Explicit menu</p>
        <UDropdownMenu :items="dropdownItems">
          <UButton label="Open menu" color="neutral" variant="outline" trailing-icon="i-lucide-chevron-down" />
        </UDropdownMenu>
      </div>
      <div class="space-y-3">
        <p class="text-sm font-semibold text-highlighted">Context menu</p>
        <UContextMenu :items="dropdownItems">
          <div class="flex min-h-20 items-center justify-center rounded-sm border border-dashed border-default px-3 text-sm text-muted">Right-click area</div>
        </UContextMenu>
      </div>
    </div>

    <div v-else-if="props.name === 'page-hero'" class="overflow-hidden rounded-sm border border-default">
      <UPageHero
        title="Thoughtful design for the modern web."
        description="A compact page opening with visible structure and restrained action hierarchy."
        :links="[
          { label: 'Open guide', to: '/docs', icon: 'i-lucide-arrow-right', trailing: true },
          { label: 'View components', to: '/docs/components', color: 'neutral', variant: 'outline', icon: 'i-lucide-component' },
        ]"
        :ui="{ container: 'py-6 sm:py-8 lg:py-8 gap-4', title: 'text-2xl sm:text-3xl max-w-2xl', description: 'text-sm sm:text-base max-w-2xl', footer: 'mt-6' }"
      />
    </div>

    <UPageSection
      v-else-if="props.name === 'page-section'"
      title="Component families"
      description="Use page structure to group related guidance without inventing one-off layouts."
      :features="[
        { title: 'Actions', description: 'Buttons and compact metadata.', icon: 'i-lucide-mouse-pointer-click' },
        { title: 'Forms', description: 'Labels, fields, and validation.', icon: 'i-lucide-text-cursor-input' },
      ]"
      :ui="{ container: 'py-0 sm:py-0 lg:py-0 gap-4', title: 'text-2xl sm:text-3xl', description: 'text-sm sm:text-base', features: 'mt-5' }"
    />

    <UPageCTA
      v-else-if="props.name === 'page-cta'"
      title="Use the brand system in real projects."
      description="Open the docs, then install the Nuxt layer when a project should carry the happydesigns system."
      :links="[{ label: 'Open docs', to: '/docs', icon: 'i-lucide-arrow-right', trailing: true }]"
      :ui="{ container: 'py-6 sm:py-6 lg:py-6' }"
    />

    <UPageGrid v-else-if="props.name === 'page-grid'" class="sm:grid-cols-2">
      <UPageCard title="Feedback" description="State messages stay close to the task." icon="i-lucide-circle-check" />
      <UPageCard title="Overlays" description="Contextual surfaces support the current flow." icon="i-lucide-panel-top-open" />
    </UPageGrid>

    <UPageFeature v-else-if="props.name === 'page-feature'" title="Useful before branded" description="Every component needs a clear job before it carries brand character." icon="i-lucide-circle-check" />

    <UPageLinks
      v-else-if="props.name === 'page-links'"
      :links="[
        { label: 'Colors', description: 'Palette roles and token behavior.', icon: 'i-lucide-palette', to: '/docs/colors' },
        { label: 'Typography', description: 'Hierarchy and technical type.', icon: 'i-lucide-type', to: '/docs/typography' },
      ]"
    />

    <UPageHeader
      v-else-if="props.name === 'page-header'"
      headline="Component docs"
      title="Structured pages stay easier to scan."
      description="Use page-level primitives for repeated docs and landing surfaces."
      :links="[{ label: 'Open docs', to: '/docs/components', color: 'neutral', variant: 'outline', trailingIcon: 'i-lucide-arrow-right' }]"
      :ui="{ root: '!mx-0 !px-0 py-0 sm:!px-0 lg:!mx-0 lg:!px-0', wrapper: '!flex-col !items-start gap-3', title: 'text-2xl sm:text-3xl', description: 'text-sm sm:text-base max-w-xl' }"
    />

    <UPageBody v-else-if="props.name === 'page-body'" class="p-0">
      <p class="text-sm text-muted">Page bodies keep content spacing predictable after the header.</p>
    </UPageBody>

    <UPageColumns v-else-if="props.name === 'page-columns'" class="!columns-1 gap-4 space-y-4">
      <UCard variant="outline"><p class="text-sm text-muted">Foundation guidance</p></UCard>
      <UCard variant="outline"><p class="text-sm text-muted">Application guidance</p></UCard>
    </UPageColumns>

    <UPageList v-else-if="props.name === 'page-list'" divide>
      <UPageCard title="Foundations" description="Color and type create the calm base." icon="i-lucide-palette" variant="ghost" />
      <UPageCard title="Application" description="Components carry the system into interfaces." icon="i-lucide-component" variant="ghost" />
    </UPageList>

    <UPageLogos v-else-if="props.name === 'page-logos'" title="Logo forms in one system" :logos="pageLogos" :marquee="false" />

    <UPageAnchors v-else-if="props.name === 'page-anchors'" :links="pageAnchors" />

    <div v-else-if="props.name === 'content-navigation'" class="max-w-sm rounded-sm border border-default bg-default p-3">
      <UContentNavigation :navigation="contentNavigationItems" />
    </div>

    <div v-else-if="props.name === 'content-system'" class="overflow-hidden rounded-sm border border-default bg-default">
      <div class="grid divide-y divide-default lg:grid-cols-[12rem_1fr_11rem] lg:divide-x lg:divide-y-0">
        <aside class="bg-muted/40 p-4">
          <p class="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-label">Navigation</p>
          <UContentNavigation :navigation="contentNavigationItems" />
        </aside>
        <main class="space-y-4 p-4">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div class="min-w-0">
              <p class="font-semibold text-highlighted">Component docs</p>
              <p class="mt-1 max-w-md text-sm text-muted">Navigation and search keep the guide usable without adding another CTA layer.</p>
            </div>
            <UContentSearchButton label="Search" />
          </div>
          <USeparator />
          <UContentSurround :surround="contentSurroundItems" />
        </main>
        <aside class="bg-muted/30 p-4">
          <UContentToc title="On this page" :links="contentTocLinks" />
        </aside>
      </div>
    </div>

    <div v-else-if="props.name === 'content-toc'" class="max-w-sm rounded-sm border border-default bg-default p-3">
      <UContentToc title="On this page" :links="contentTocLinks" />
    </div>

    <div v-else-if="props.name === 'content-surround'" class="overflow-hidden rounded-sm border border-default bg-default">
      <UContentSurround :surround="contentSurroundItems" />
    </div>

    <div v-else-if="props.name === 'content-search'" class="space-y-4">
      <UContentSearchButton label="Search docs" />
      <div class="flex items-start gap-3 rounded-sm border border-default bg-muted p-4">
        <UIcon name="i-lucide-search" class="mt-0.5 size-4 text-primary" />
        <div>
          <p class="font-semibold text-highlighted">Global documentation search</p>
          <p class="mt-1 text-sm text-muted">Keep search available in the shell without making each page busier.</p>
        </div>
      </div>
    </div>

    <div v-else-if="props.name === 'header'" class="overflow-hidden rounded-sm border border-default">
      <UHeader :ui="{ root: 'relative border-b border-default bg-default', container: 'h-14' }">
        <template #left>
          <span class="font-semibold text-highlighted">happydesigns.</span>
        </template>
        <template #right>
          <UButton label="Docs" variant="ghost" color="neutral" size="sm" />
        </template>
      </UHeader>
    </div>

    <UMain v-else-if="props.name === 'main'" class="rounded-sm border border-default bg-muted p-4">
      <p class="text-sm text-muted">Main keeps the primary surface below the header.</p>
    </UMain>

    <UContainer v-else-if="props.name === 'container'" class="rounded-sm border border-default bg-default py-4">
      <p class="text-sm text-muted">Container sets a reusable readable width.</p>
    </UContainer>

    <UFooter v-else-if="props.name === 'footer'" :ui="{ root: 'border border-default bg-default', container: 'py-4 lg:py-4' }">
      <template #left>
        <span class="text-sm text-muted">Copyright happydesigns</span>
      </template>
      <template #right>
        <span class="font-mono text-xs text-label">Nuxt UI layer</span>
      </template>
    </UFooter>

    <UFooterColumns v-else-if="props.name === 'footer-columns'" :columns="footerColumns" />

    <div v-else-if="props.name === 'page-opening-pattern'" class="space-y-6">
      <UPageHero
        title="Thoughtful design for the modern web."
        description="A compact page opening with visible structure and restrained action hierarchy."
        :links="[
          { label: 'Open guide', to: '/docs', icon: 'i-lucide-arrow-right', trailing: true },
          { label: 'View components', to: '/docs/components', color: 'neutral', variant: 'outline', icon: 'i-lucide-component' },
        ]"
        :ui="{ container: 'py-0 sm:py-0 lg:py-0 gap-4', title: 'text-2xl sm:text-3xl max-w-2xl', description: 'text-sm sm:text-base max-w-2xl', footer: 'mt-6' }"
      />
      <USeparator />
      <UPageHeader
        headline="Component docs"
        title="Structured pages stay easier to scan."
        description="Use page headers when the view needs a clear title, short context, and one compact action row."
        :links="[{ label: 'Open docs', to: '/docs/components', color: 'neutral', variant: 'outline', trailingIcon: 'i-lucide-arrow-right' }]"
        :ui="{ root: '!mx-0 !px-0 pt-0 pb-6 sm:!px-0 lg:!mx-0 lg:!px-0', wrapper: '!flex-col !items-start gap-3', title: 'text-2xl sm:text-3xl', description: 'text-sm sm:text-base max-w-xl' }"
      />
    </div>

    <div v-else-if="props.name === 'section-system-pattern'" class="space-y-6">
      <UPageSection
        title="Component families"
        description="Use section primitives to group related guidance without inventing one-off layouts."
        :features="[
          { title: 'Actions', description: 'Buttons and compact metadata.', icon: 'i-lucide-mouse-pointer-click' },
          { title: 'Forms', description: 'Labels, fields, and validation.', icon: 'i-lucide-text-cursor-input' },
        ]"
        :ui="{ container: 'py-0 sm:py-0 lg:py-0 gap-4', title: 'text-2xl sm:text-3xl', description: 'text-sm sm:text-base', features: 'mt-5' }"
      />
      <UPageGrid class="sm:grid-cols-2">
        <UPageCard title="Feedback" description="State messages stay close to the task." icon="i-lucide-circle-check" />
        <UPageCard title="Overlays" description="Contextual surfaces support the current flow." icon="i-lucide-panel-top-open" />
      </UPageGrid>
    </div>

    <div v-else-if="props.name === 'page-support-pattern'" class="space-y-5">
      <UPageLinks
        :links="[
          { label: 'Colors', description: 'Palette roles and token behavior.', icon: 'i-lucide-palette', to: '/docs/colors' },
          { label: 'Typography', description: 'Hierarchy and technical type.', icon: 'i-lucide-type', to: '/docs/typography' },
        ]"
      />
      <UPageList divide>
        <UPageCard title="Foundations" description="Color and type create the calm base." icon="i-lucide-palette" variant="ghost" />
        <UPageCard title="Application" description="Components carry the system into interfaces." icon="i-lucide-component" variant="ghost" />
      </UPageList>
      <div class="grid gap-4 sm:grid-cols-2">
        <UPageLogos title="Logo forms" :logos="pageLogos" :marquee="false" />
        <UPageAnchors :links="pageAnchors" />
      </div>
    </div>

    <div v-else-if="props.name === 'page-shell-pattern'" class="overflow-hidden rounded-sm border border-default">
      <UHeader :ui="{ root: 'relative border-b border-default bg-default', container: 'h-14' }">
        <template #left>
          <span class="font-semibold text-highlighted">happydesigns.</span>
        </template>
        <template #right>
          <UButton label="Docs" variant="ghost" color="neutral" size="sm" />
        </template>
      </UHeader>
      <UMain class="bg-muted p-4">
        <UContainer class="rounded-sm border border-default bg-default py-4">
          <p class="text-sm text-muted">Main and container keep page content aligned inside the shell.</p>
        </UContainer>
      </UMain>
      <UFooter :ui="{ root: 'border-t border-default bg-default', container: 'py-4 lg:py-4' }">
        <template #left>
          <span class="text-sm text-muted">Copyright happydesigns</span>
        </template>
        <template #right>
          <span class="font-mono text-xs text-label">Nuxt UI layer</span>
        </template>
      </UFooter>
    </div>

    <ClientOnly v-else-if="props.name === 'color-mode-button'">
      <UColorModeButton />
    </ClientOnly>

    <ClientOnly v-else-if="props.name === 'color-mode-switch'">
      <UColorModeSwitch />
    </ClientOnly>

    <ClientOnly v-else-if="props.name === 'color-mode-select'">
      <UColorModeSelect class="max-w-xs" />
    </ClientOnly>

    <ClientOnly v-else-if="props.name === 'color-mode-avatar'">
      <UColorModeAvatar :light="symbolLogo" :dark="symbolLogo" alt="happydesigns symbol" />
    </ClientOnly>

    <ClientOnly v-else-if="props.name === 'color-mode-image'">
      <div class="grid gap-3 rounded-sm border border-default bg-default p-4 sm:grid-cols-2">
        <div class="flex min-h-28 items-center justify-center rounded-sm border border-default bg-warm-white p-5">
          <img :src="wordmarkLogo" alt="happydesigns wordmark" class="h-6 w-auto">
        </div>
        <div class="flex min-h-28 items-center justify-center rounded-sm border border-default bg-graphite p-5">
          <img :src="wordmarkLogoInverse" alt="happydesigns inverse wordmark" class="h-6 w-auto">
        </div>
      </div>
    </ClientOnly>

    <ULocaleSelect v-else-if="props.name === 'locale-select'" v-model="locale" :locales="locales" class="max-w-xs" />

    <ClientOnly v-else-if="props.name === 'auth-form'">
      <UAuthForm title="Access project" description="Use clear labels and one primary path." icon="i-lucide-lock-keyhole" :fields="authFields" :submit="{ label: 'Continue' }" />
      <template #fallback>
        <div class="rounded-sm border border-default bg-muted p-4 text-sm text-muted">Auth form preview</div>
      </template>
    </ClientOnly>

    <div v-else-if="props.name === 'error'" class="overflow-hidden rounded-sm border border-default">
      <UError
        :error="{ statusCode: 404, statusMessage: 'Pattern not found', message: 'The requested component pattern is not available yet.' }"
        :links="[{ label: 'Open components', to: '/docs/components', color: 'neutral', variant: 'outline' }]"
        :ui="{ root: 'min-h-0 px-4 py-8', statusMessage: 'text-2xl', message: 'text-sm' }"
      />
    </div>

    <UTheme v-else-if="props.name === 'theme'" :props="scopedThemeProps">
      <div class="grid gap-3 rounded-sm border border-default bg-muted p-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <UAlert icon="i-lucide-info" title="Theme scope" description="Use scoped theme props for controlled demos and reusable layer previews." />
        <div class="flex flex-wrap items-center gap-2">
          <UBadge label="Scoped" />
          <UButton label="Preview" icon="i-lucide-eye" />
        </div>
      </div>
    </UTheme>

    <ClientOnly v-else-if="props.name === 'system-appearance-pattern'">
      <div class="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div class="space-y-4">
          <div class="space-y-2">
            <p class="font-semibold text-highlighted">Header control</p>
            <UColorModeButton />
          </div>
          <div class="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <UColorModeSwitch />
            <UColorModeSelect />
          </div>
        </div>
        <UTheme :props="scopedThemeProps">
          <div class="grid gap-3 rounded-sm border border-default bg-muted p-4">
            <UAlert icon="i-lucide-info" title="Theme scope" description="Use scoped theme props for controlled previews and reusable layer examples." />
            <div class="flex flex-wrap items-center gap-2">
              <UBadge label="Scoped" />
              <UButton label="Preview" icon="i-lucide-eye" />
            </div>
          </div>
        </UTheme>
      </div>
      <template #fallback>
        <div class="rounded-sm border border-default bg-muted p-4 text-sm text-muted">System controls load on the client.</div>
      </template>
    </ClientOnly>

    <div v-else-if="props.name === 'system-assets-pattern'" class="space-y-5">
      <div class="grid gap-5 lg:grid-cols-2">
        <div class="space-y-3">
          <p class="font-semibold text-highlighted">Wordmark variants</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="flex min-h-28 items-center justify-center rounded-sm border border-default bg-warm-white p-5">
              <img :src="wordmarkLogo" alt="happydesigns wordmark on light surface" class="h-6 w-auto">
            </div>
            <div class="flex min-h-28 items-center justify-center rounded-sm border border-default bg-graphite p-5">
              <img :src="wordmarkLogoInverse" alt="happydesigns inverse wordmark on dark surface" class="h-6 w-auto">
            </div>
          </div>
        </div>
        <div class="space-y-3">
          <p class="font-semibold text-highlighted">Symbol object</p>
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="flex min-h-28 items-center justify-center rounded-sm border border-default bg-warm-white p-5">
              <img :src="symbolLogo" alt="happydesigns symbol on light surface" class="size-16">
            </div>
            <div class="flex min-h-28 items-center justify-center rounded-sm border border-default bg-graphite p-5">
              <img :src="symbolLogo" alt="happydesigns symbol on dark surface" class="size-16">
            </div>
          </div>
        </div>
      </div>
      <p class="text-sm text-muted">Wordmarks swap for contrast. The full symbol keeps its original colors across light and dark surfaces.</p>
    </div>

    <div v-else-if="props.name === 'system-access-pattern'" class="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
      <div class="space-y-4">
        <UFormField label="Language" help="Locale controls stay close to language-sensitive content.">
          <ULocaleSelect v-model="locale" :locales="locales" />
        </UFormField>
        <div class="overflow-hidden rounded-sm border border-default">
          <UError
            :error="{ statusCode: 404, statusMessage: 'Pattern not found', message: 'The requested component pattern is not available yet.' }"
            :links="[{ label: 'Open components', to: '/docs/components', color: 'neutral', variant: 'outline' }]"
            :ui="{ root: 'min-h-0 px-4 py-6', statusMessage: 'text-xl', message: 'text-sm' }"
          />
        </div>
      </div>
      <ClientOnly>
        <UAuthForm title="Access project" description="Use clear labels and one primary path." icon="i-lucide-lock-keyhole" :fields="authFields" :submit="{ label: 'Continue' }" />
        <template #fallback>
          <div class="rounded-sm border border-default bg-muted p-4 text-sm text-muted">Auth form preview</div>
        </template>
      </ClientOnly>
    </div>

    <UDashboardGroup
      v-else-if="props.name === 'dashboard-shell' || props.name === 'dashboard-group'"
      storage="component-example-dashboard"
      class="!relative !inset-auto h-[30rem] overflow-hidden rounded-sm border border-default bg-default"
    >
      <UDashboardSidebar
        collapsible
        resizable
        :default-size="34"
        :min-size="24"
        :max-size="42"
        :collapsed-size="10"
        class="!flex min-h-full transition-[width,min-width,max-width,flex-basis] duration-200 ease-out"
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
            :aria-label="collapsed ? 'Brand layer' : undefined"
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
              <UDashboardSidebarToggle class="lg:hidden" />
              <UDashboardSidebarCollapse class="hidden lg:inline-flex" />
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
          <div class="grid gap-3">
            <UCard variant="outline" :ui="{ body: 'p-4' }">
              <div class="space-y-1">
                <p class="font-semibold text-highlighted">Website refresh</p>
                <p class="text-sm text-muted">Review component behavior before release.</p>
              </div>
            </UCard>
            <UCard variant="outline" :ui="{ body: 'p-4' }">
              <div class="space-y-1">
                <p class="font-semibold text-highlighted">Brand guide</p>
                <p class="text-sm text-muted">Keep docs and theme decisions aligned.</p>
              </div>
            </UCard>
          </div>
        </template>
      </UDashboardPanel>

      <UDashboardSearch :groups="dashboardSearchGroups" />
    </UDashboardGroup>

    <USidebar
      v-else-if="props.name === 'sidebar'"
      collapsible="none"
      title="Components"
      description="Brand layer"
      class="!relative h-80 overflow-hidden rounded-sm border border-default bg-default"
      :ui="{ container: '!absolute !inset-y-0 !left-0 !flex !h-full', gap: 'hidden' }"
    >
      <UNavigationMenu :items="navigationItems" orientation="vertical" />
      <template #footer>
        <UButton label="Brand layer" color="neutral" variant="ghost" block />
      </template>
    </USidebar>

    <UScrollArea
      v-else-if="props.name === 'scroll-area'"
      class="h-72 rounded-sm border border-default bg-default p-4"
    >
      <div class="grid gap-3">
        <UCard v-for="item in listboxItems" :key="item.value" variant="outline" :ui="{ body: 'p-3' }">
          <p class="font-medium text-highlighted">{{ item.label }}</p>
          <p class="mt-1 text-sm text-muted">Overflow remains reachable without stretching the page.</p>
        </UCard>
      </div>
    </UScrollArea>

    <div v-else-if="props.name === 'structure-sequence-pattern'" class="grid gap-7 md:grid-cols-2">
      <div class="space-y-3">
        <p class="font-semibold text-highlighted">Optional detail</p>
        <p class="text-sm text-muted">Keep supporting notes close without making the first read heavier.</p>
        <UCollapsible>
          <UButton label="Show token detail" color="neutral" variant="outline" trailing-icon="i-lucide-chevron-down" />
          <template #content>
            <div class="mt-3 rounded-sm bg-muted px-4 py-3 font-mono text-sm text-toned">--ui-primary: coral</div>
          </template>
        </UCollapsible>
      </div>
      <div class="space-y-3">
        <p class="font-semibold text-highlighted">Ordered history</p>
        <p class="text-sm text-muted">Use timelines when sequence explains the decision.</p>
        <UTimeline :items="timelineItems" size="sm" />
      </div>
      <div class="space-y-3">
        <p class="font-semibold text-highlighted">Comparable previews</p>
        <p class="text-sm text-muted">Use carousels when nearby items are useful to compare.</p>
        <UCarousel
          v-slot="{ item }"
          :items="carouselItems"
          class="overflow-hidden rounded-sm border border-default bg-default"
          :ui="{ item: 'basis-full' }"
        >
          <div class="flex h-24 items-center justify-center gap-3 px-4">
            <UIcon :name="item.icon" class="size-5 text-primary" />
            <span class="font-semibold text-highlighted">{{ item.title }}</span>
          </div>
        </UCarousel>
      </div>
      <div class="space-y-3">
        <p class="font-semibold text-highlighted">Overflow reference</p>
        <p class="text-sm text-muted">Scroll long reference lists without stretching the page.</p>
        <UScrollArea class="h-32 rounded-sm border border-default bg-default">
          <div class="divide-y divide-default">
            <div v-for="item in listboxItems" :key="item.value" class="px-3 py-2">
              <p class="font-medium text-highlighted">{{ item.label }}</p>
              <p class="mt-0.5 text-sm text-muted">Reference content stays reachable.</p>
            </div>
          </div>
        </UScrollArea>
      </div>
    </div>

    <div v-else-if="props.name === 'publishing-editorial-pattern'" class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="space-y-3">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="font-semibold text-highlighted">Editorial updates</p>
            <p class="mt-1 text-sm text-muted">Blog cards keep written updates scannable without making each card a campaign.</p>
          </div>
          <UBadge color="neutral" variant="outline">Editorial</UBadge>
        </div>
        <UBlogPosts orientation="vertical">
          <UBlogPost v-for="post in blogPosts" :key="post.title" v-bind="post" variant="outline" />
        </UBlogPosts>
      </div>
      <div class="space-y-3">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="font-semibold text-highlighted">Release history</p>
            <p class="mt-1 text-sm text-muted">Changelog entries make product history readable as a sequence.</p>
          </div>
          <UBadge color="neutral" variant="outline">Changelog</UBadge>
        </div>
        <UChangelogVersions
          :ui="{
            container: 'gap-y-3 sm:gap-y-3 lg:gap-y-3',
            indicator: '!hidden'
          }"
        >
          <UChangelogVersion
            v-for="version in changelogVersions"
            :key="version.title"
            v-bind="version"
            :ui="{
              root: 'rounded-sm border border-default bg-default p-3',
              container: 'mx-0 max-w-none',
              meta: '!flex items-center gap-2 mb-2',
              date: 'font-mono text-xs text-label',
              badge: 'text-xs',
              title: 'text-base leading-snug',
              description: 'text-sm leading-relaxed',
              indicator: '!hidden'
            }"
          />
        </UChangelogVersions>
      </div>
    </div>

    <div v-else-if="props.name === 'publishing-package-pattern'" class="space-y-6">
      <div class="space-y-3">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="font-semibold text-highlighted">Package choices</p>
            <p class="mt-1 text-sm text-muted">Pricing surfaces can explain editions, packages, or implementation paths.</p>
          </div>
          <UBadge color="neutral" variant="outline">Packages</UBadge>
        </div>
        <UPricingPlans :plans="pricingPlans" />
      </div>
      <UPricingTable :tiers="pricingTableTiers" :sections="pricingTableSections" />
      <UMarquee pause-on-hover overlay class="rounded-sm border border-default bg-muted p-4">
        <UBadge color="neutral" variant="outline">Nuxt UI layer</UBadge>
        <UBadge color="primary" variant="subtle">Coral focus</UBadge>
        <UBadge color="secondary" variant="subtle">Technical clarity</UBadge>
        <UBadge color="success" variant="subtle">Durable defaults</UBadge>
      </UMarquee>
    </div>

    <UBlogPosts v-else-if="props.name === 'blog-posts'" orientation="horizontal">
      <UBlogPost v-for="post in blogPosts" :key="post.title" v-bind="post" variant="outline" />
    </UBlogPosts>

    <UBlogPost v-else-if="props.name === 'blog-post'" v-bind="blogPosts[0]" variant="outline" />

    <div v-else-if="props.name === 'changelog-versions'" class="grid gap-3">
      <UCard v-for="version in changelogVersions" :key="version.title" variant="outline" :ui="{ body: 'p-4' }">
        <UBadge color="neutral" variant="outline">{{ version.date }}</UBadge>
        <h3 class="mt-3 font-semibold text-highlighted">{{ version.title }}</h3>
        <p class="mt-1 text-sm text-muted">{{ version.description }}</p>
      </UCard>
    </div>

    <UCard v-else-if="props.name === 'changelog-version'" variant="outline" :ui="{ body: 'p-4' }">
      <UBadge color="neutral" variant="outline">v0.2</UBadge>
      <h3 class="mt-3 font-semibold text-highlighted">Component coverage expanded</h3>
      <p class="mt-1 text-sm text-muted">Dashboard, publishing, chat, and editor families now have brand guidance.</p>
    </UCard>

    <UPricingPlans v-else-if="props.name === 'pricing-plans'" :plans="pricingPlans" />

    <UPricingPlan v-else-if="props.name === 'pricing-plan'" v-bind="pricingPlans[1]" />

    <UPricingTable v-else-if="props.name === 'pricing-table'" :tiers="pricingTableTiers" :sections="pricingTableSections" />

    <UMarquee v-else-if="props.name === 'marquee'" pause-on-hover overlay class="rounded-sm border border-default bg-muted p-4">
      <UBadge color="neutral" variant="outline">Nuxt UI layer</UBadge>
      <UBadge color="primary" variant="subtle">Coral focus</UBadge>
      <UBadge color="secondary" variant="subtle">Technical clarity</UBadge>
      <UBadge color="success" variant="subtle">Durable defaults</UBadge>
    </UMarquee>

    <UChatPalette
      v-else-if="props.name === 'chat-palette'"
      class="overflow-hidden rounded-sm border border-default bg-default"
      :ui="{ content: 'p-3 sm:p-4', prompt: 'border-t border-default bg-muted p-3' }"
    >
      <UChatMessages :messages="chatMessages" status="ready" compact class="min-h-40 max-h-64 rounded-sm bg-muted px-2 py-2">
        <template #content="{ message }">
          <p class="text-sm text-default">{{ message.parts?.[0]?.text }}</p>
        </template>
        <template #indicator><UChatShimmer text="Checking component behavior" /></template>
      </UChatMessages>
      <template #prompt>
        <UChatPrompt v-model="chatInput" placeholder="Ask about component behavior" class="bg-default" :ui="{ root: 'rounded-sm', footer: 'justify-end pt-1' }">
          <template #footer><UChatPromptSubmit status="ready" /></template>
        </UChatPrompt>
      </template>
    </UChatPalette>

    <UChatMessages v-else-if="props.name === 'chat-messages'" :messages="chatMessages" status="ready" compact class="min-h-40 rounded-sm bg-muted px-2 py-2">
      <template #content="{ message }">
        <p class="text-sm text-default">{{ message.parts?.[0]?.text }}</p>
      </template>
    </UChatMessages>

    <UChatMessage v-else-if="props.name === 'chat-message'" :message="chatMessages[1]" />

    <UChatPrompt v-else-if="props.name === 'chat-prompt'" v-model="chatInput" placeholder="Ask about component behavior" />

    <UChatPromptSubmit v-else-if="props.name === 'chat-prompt-submit'" status="ready" />

    <UChatReasoning
      v-else-if="props.name === 'chat-reasoning'"
      text="Check structure, then color usage, then interaction copy."
      variant="soft"
    />

    <UChatShimmer v-else-if="props.name === 'chat-shimmer'" text="Checking component behavior" />

    <UChatTool
      v-else-if="props.name === 'chat-tool'"
      text="Checked contrast"
      icon="i-lucide-contrast"
      variant="soft"
    />

    <div v-else-if="props.name === 'chat-activity-pattern'" class="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
      <div class="space-y-3">
        <p class="font-semibold text-highlighted">Reasoning stays secondary</p>
        <UChatReasoning
          text="Check hierarchy first, then color behavior, then recovery copy."
          variant="soft"
        />
      </div>
      <div class="space-y-3 rounded-sm border border-default bg-muted p-4">
        <p class="font-semibold text-highlighted">System activity</p>
        <UChatTool
          text="Checked contrast"
          icon="i-lucide-contrast"
          variant="soft"
        />
        <div class="rounded-sm bg-default p-3">
          <UChatShimmer text="Checking component behavior" />
        </div>
      </div>
    </div>

    <ClientOnly v-else-if="props.name === 'editor'">
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
        <ComponentExampleEditorPreview />
      </template>
    </ClientOnly>

    <ClientOnly
      v-else-if="['editor-toolbar', 'editor-drag-handle', 'editor-emoji-menu', 'editor-mention-menu', 'editor-suggestion-menu'].includes(props.name)"
    >
      <UEditor v-slot="{ editor }" v-model="editorContent" class="min-h-64 rounded-sm border border-default bg-default p-4">
        <UEditorToolbar v-if="props.name === 'editor-toolbar'" :editor="editor" />
        <UEditorSuggestionMenu v-if="props.name === 'editor-suggestion-menu'" :editor="editor" />
        <UEditorMentionMenu v-if="props.name === 'editor-mention-menu'" :editor="editor" :items="editorMentions" />
        <UEditorEmojiMenu v-if="props.name === 'editor-emoji-menu'" :editor="editor" />
        <UEditorDragHandle v-if="props.name === 'editor-drag-handle'" :editor="editor" />
      </UEditor>
      <template #fallback>
        <ComponentExampleEditorPreview />
      </template>
    </ClientOnly>
  </div>
</template>
