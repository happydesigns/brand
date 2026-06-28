import {
  createGuideDocsSections,
  defineBrandGuide,
  defineGuideSections,
  findGuideSection,
  type BrandAsset,
  type BrandComponentCoverage,
  type BrandGuideSection,
  type BrandGuideSectionInput
} from '@happydesigns/id'
import { happydesignsBrand } from './brand'
import { happydesignsBrandTheme, happydesignsSemanticColors } from './brand-theme'

export type HappydesignsGuideColor = {
  name: string
  token: string
  hex: string
  role: string
  usage: string
}

export type HappydesignsGuideFont = {
  name: string
  role: string
  stack: string
  sample: string
  notes: string
}

export type HappydesignsGuideComponent = {
  name: string
  purpose: string
  guidance: string
}

export type HappydesignsGuidePrinciple = {
  title: string
  description: string
  icon: string
}

export type HappydesignsGuideContent = {
  brand: typeof happydesignsBrand
  principles: HappydesignsGuidePrinciple[]
  sections: readonly BrandGuideSectionInput[]
  colors: HappydesignsGuideColor[]
  fonts: HappydesignsGuideFont[]
  components: HappydesignsGuideComponent[]
  voice: {
    attributes: string[]
    dos: string[]
    donts: string[]
  }
  assets: {
    name: string
    role: string
    path: string
    usage: string
  }[]
}

export const brandGuide = {
  brand: happydesignsBrand,
  principles: [
    {
      title: 'Structure before decoration.',
      description: 'Layout, spacing, borders, and hierarchy carry the base experience.',
      icon: 'i-lucide-layout-grid'
    },
    {
      title: 'Useful before branded.',
      description: 'Every interface element needs a clear job, even when it carries brand character.',
      icon: 'i-lucide-circle-check'
    },
    {
      title: 'Meaningful expression.',
      description: 'Use expressive moments to guide attention or make the system memorable.',
      icon: 'i-lucide-sparkles'
    },
    {
      title: 'Durable defaults over one-offs.',
      description: 'Choose patterns that can repeat across pages, products, and projects.',
      icon: 'i-lucide-repeat-2'
    }
  ],
  sections: defineGuideSections([
    {
      slug: 'colors',
      title: 'Colors',
      eyebrow: 'tokens and roles',
      summary: 'Core palette, semantic roles, and practical usage guidance.',
      description: 'Color decisions are documented as named tokens first, then mapped to interface intent. This keeps happydesigns calm, structured, and expressive in the right moments.',
      icon: 'i-lucide-palette',
      anchors: ['Palette', 'Semantic roles', 'Usage rules']
    },
    {
      slug: 'typography',
      title: 'Typography',
      eyebrow: 'fonts and hierarchy',
      summary: 'Type roles, hierarchy, rhythm, and practical writing samples.',
      description: 'Typography defines the reading voice of the brand. The guide captures font roles, hierarchy behavior, mono usage, and practical examples for clear happydesigns communication.',
      icon: 'i-lucide-type',
      anchors: ['Type roles', 'Primary typeface', 'Mono typeface', 'Hierarchy principles', 'Hierarchy in practice', 'Practical examples']
    },
    {
      slug: 'logos',
      title: 'Logos',
      eyebrow: 'identity assets',
      summary: 'Logo forms, lockups, brand roles, and practical usage guidance.',
      description: 'The logo system separates core identity marks from controlled combinations. Wordmark, symbol, and reduced symbol are logo forms. Horizontal, reduced horizontal, and vertical signature compositions are lockups.',
      icon: 'i-lucide-badge-check',
      anchors: ['Logo forms', 'Lockups', 'Choosing the right form', 'Header usage', 'Footer usage']
    },
    {
      slug: 'components',
      title: 'Components',
      eyebrow: 'interface system',
      summary: 'Nuxt UI component families, brand behavior, and coverage guidance.',
      description: 'Component guidance connects brand tokens to real interface states. The section groups Nuxt UI components by use so the happydesigns layer can stay useful, structured, and consistent.',
      icon: 'i-lucide-component',
      anchors: ['Component philosophy', 'Component families', 'Theme ownership', 'Coverage model']
    },
    {
      slug: 'voice',
      title: 'Voice',
      eyebrow: 'messaging',
      summary: 'Writing traits, examples, and interface copy guidance.',
      description: 'Voice guidance defines how happydesigns sounds across marketing, documentation, interface labels, CTAs, and error states.',
      icon: 'i-lucide-message-square-text',
      anchors: ['Voice attributes', 'Writing principles', 'Marketing copy', 'Interface copy', 'Error and validation copy']
    }
  ]),
  colors: [
    { name: 'Warm White', token: 'warmWhite', hex: happydesignsBrand.colors.warmWhite, role: 'Page background', usage: 'Use for primary surfaces and calm editorial space.' },
    { name: 'Graphite', token: 'graphite', hex: happydesignsBrand.colors.graphite, role: 'Text and premium fills', usage: 'Use for primary text, high-emphasis panels, and dark mode base.' },
    { name: 'Coral', token: 'coral', hex: happydesignsBrand.colors.coral, role: 'Signature accent', usage: 'Use sparingly for action emphasis, focus, and brand punctuation.' },
    { name: 'Peach', token: 'peach', hex: happydesignsBrand.colors.peach, role: 'Logo field and atmosphere', usage: 'Use for warm fields, gentle section contrast, and identity moments.' },
    { name: 'Petrol', token: 'petrol', hex: happydesignsBrand.colors.petrol, role: 'Technical counterweight', usage: 'Use for secondary actions, diagrams, and analytical context.' },
    { name: 'Butter', token: 'butter', hex: happydesignsBrand.colors.butter, role: 'Soft warning', usage: 'Use for caution states that should not feel alarming.' },
    { name: 'Plum', token: 'plum', hex: happydesignsBrand.colors.plum, role: 'Quiet information', usage: 'Use for labels, metadata, and non-primary informational moments.' },
    { name: 'Seafoam', token: 'seafoam', hex: happydesignsBrand.colors.seafoam, role: 'Constructive success', usage: 'Use for confirmations, progress, and positive validation.' },
    { name: 'Sand', token: 'sand', hex: happydesignsBrand.colors.sand, role: 'Lines and muted surfaces', usage: 'Use for borders, dividers, subdued panels, and secondary backgrounds.' },
    { name: 'Rose', token: 'rose', hex: happydesignsBrand.colors.rose, role: 'Restrained errors', usage: 'Use for destructive actions, errors, and critical validation.' }
  ],
  fonts: [
    {
      name: 'Bricolage Grotesque',
      role: 'Primary sans',
      stack: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
      sample: 'Thoughtful design for the modern web.',
      notes: 'Warm and practical for headings, navigation, labels, and body copy.'
    },
    {
      name: 'Geist Mono',
      role: 'Technical mono',
      stack: '"Geist Mono", "SFMono-Regular", ui-monospace, monospace',
      sample: 'tokens.colors.coral = #F28564',
      notes: 'Use for code, token names, version labels, and compact metadata.'
    }
  ],
  components: [
    { name: 'Primary action', purpose: 'Move the user forward.', guidance: 'Use graphite fills with coral focus treatment for confident, brand-owned actions.' },
    { name: 'Secondary action', purpose: 'Offer an alternate path.', guidance: 'Use outlined or subtle treatments to keep hierarchy clear.' },
    { name: 'Form fields', purpose: 'Collect structured input.', guidance: 'Keep labels plain, borders visible, and focus states aligned to the coral accent.' },
    { name: 'Cards and panels', purpose: 'Frame repeated content.', guidance: 'Use fine borders, direct spacing, and minimal shadow so structure remains visible.' },
    { name: 'Badges and status', purpose: 'Mark metadata or state.', guidance: 'Use compact badges for short labels only, with color tied to semantic intent.' },
    { name: 'Alerts and feedback', purpose: 'Explain state changes.', guidance: 'Keep messages calm, specific, and recovery-oriented.' }
  ],
  voice: {
    attributes: ['Thoughtful', 'warm', 'precise', 'practical', 'maintainable'],
    dos: [
      'Use concrete nouns and direct verbs.',
      'Explain decisions through durable rules.',
      'Keep interface labels short and action-oriented.'
    ],
    donts: [
      'Do not over-explain simple controls.',
      'Do not rely on hype, vague claims, or decorative wording.',
      'Do not let brand copy obscure product behavior.'
    ]
  },
  assets: [
    { name: 'Wordmark', role: 'wordmark', path: happydesignsBrand.logoAssetPaths.wordmark, usage: 'Default identity for headers, navigation, documentation, and slim horizontal layouts.' },
    { name: 'Wordmark inverse', role: 'wordmarkInverse', path: happydesignsBrand.logoAssetPaths.wordmarkInverse, usage: 'Wordmark for dark surfaces.' },
    { name: 'Symbol', role: 'symbol', path: happydesignsBrand.logoAssetPaths.symbol, usage: 'Favicon, app icon, social avatars, square contexts, and brand moments. Unchanged across light and dark.' },
    { name: 'Symbol reduced', role: 'symbolReduced', path: happydesignsBrand.logoAssetPaths.symbolReduced, usage: 'Simplified h + coral dot for constrained, monochrome, or production contexts.' },
    { name: 'Symbol reduced inverse', role: 'symbolReducedInverse', path: happydesignsBrand.logoAssetPaths.symbolReducedInverse, usage: 'Reduced symbol for dark surfaces.' },
    { name: 'Symbol reduced tile', role: 'symbolReducedTile', path: happydesignsBrand.logoAssetPaths.symbolReducedTile, usage: 'Reduced symbol on a light tile. Use when the raw reduced symbol needs a stable bounding surface.' },
    { name: 'Symbol reduced tile inverse', role: 'symbolReducedTileInverse', path: happydesignsBrand.logoAssetPaths.symbolReducedTileInverse, usage: 'Reduced symbol on a dark tile.' },
    { name: 'Lockup', role: 'lockup', path: happydesignsBrand.logoAssetPaths.lockup, usage: 'Full symbol + wordmark for brand introductions, covers, and teaching moments.' },
    { name: 'Lockup inverse', role: 'lockupInverse', path: happydesignsBrand.logoAssetPaths.lockupInverse, usage: 'Lockup for dark surfaces.' },
    { name: 'Lockup reduced', role: 'lockupReduced', path: happydesignsBrand.logoAssetPaths.lockupReduced, usage: 'Reduced symbol + wordmark for production, print, and constrained horizontal contexts.' },
    { name: 'Lockup reduced inverse', role: 'lockupReducedInverse', path: happydesignsBrand.logoAssetPaths.lockupReducedInverse, usage: 'Reduced lockup for dark surfaces.' },
    { name: 'Brand signature', role: 'signature', path: happydesignsBrand.logoAssetPaths.signature, usage: 'Standardized brand composition for footers, proposals, and brand-owned sections.' },
    { name: 'Brand signature inverse', role: 'signatureInverse', path: happydesignsBrand.logoAssetPaths.signatureInverse, usage: 'Brand signature for dark surfaces.' },
    { name: 'App icon PNG', role: 'appIcon', path: happydesignsBrand.logoAssetPaths.publicAppIcon, usage: 'Touch icon and square app contexts.' }
  ]
} satisfies HappydesignsGuideContent

const happydesignsLogoAssets = Object.fromEntries(
  brandGuide.assets.map(asset => [
    asset.role,
    {
      name: asset.name,
      src: asset.path,
      role: asset.role,
      alt: asset.name
    }
  ])
) as Record<string, BrandAsset>

export const happydesignsComponentCoverage = [
  {
    family: 'Actions',
    components: ['UButton', 'UBadge', 'UChip', 'UFieldGroup', 'UKbd', 'UTooltip'],
    status: 'documented',
    notes: 'Focused examples'
  },
  {
    family: 'Forms',
    components: ['UForm', 'UFormField', 'UFieldGroup', 'UInput', 'UTextarea', 'USelect', 'USelectMenu', 'UInputMenu', 'UInputNumber', 'UInputTags', 'UInputDate', 'UInputTime', 'UCheckbox', 'UCheckboxGroup', 'URadioGroup', 'USwitch', 'USlider', 'UPinInput', 'UFileUpload', 'UColorPicker', 'UCalendar', 'UListbox'],
    status: 'documented',
    notes: 'Focused examples'
  },
  {
    family: 'Feedback',
    components: ['UAlert', 'UBanner', 'UProgress', 'USkeleton', 'UToast', 'UEmpty', 'UIcon'],
    status: 'documented',
    notes: 'Focused state examples'
  },
  {
    family: 'Feedback infrastructure',
    components: ['UToaster'],
    status: 'documented',
    notes: 'Covered through toast behavior'
  },
  {
    family: 'Navigation',
    components: ['UNavigationMenu', 'UBreadcrumb', 'UTabs', 'UStepper', 'UAccordion', 'UPagination', 'ULink', 'UCommandPalette', 'UTree', 'USidebar'],
    status: 'documented',
    notes: 'Focused examples'
  },
  {
    family: 'Data and content',
    components: ['UTable', 'UCard', 'UPageCard', 'UAvatar', 'UAvatarGroup', 'UUser', 'USeparator', 'UCollapsible', 'UCarousel', 'UTimeline', 'UScrollArea'],
    status: 'documented',
    notes: 'Focused examples'
  },
  {
    family: 'Overlays',
    components: ['UModal', 'USlideover', 'UDrawer', 'UPopover', 'UTooltip', 'UDropdownMenu', 'UContextMenu'],
    status: 'documented',
    notes: 'Focused flow examples'
  },
  {
    family: 'Overlay infrastructure',
    components: ['UDropdownMenuContent', 'UContextMenuContent', 'UOverlayProvider'],
    status: 'documented',
    notes: 'Covered through parent patterns'
  },
  {
    family: 'Layout and page',
    components: ['UHeader', 'UFooter', 'UFooterColumns', 'UMain', 'UContainer', 'UPageHero', 'UPageSection', 'UPageCTA', 'UPageGrid', 'UPageCard', 'UPageFeature', 'UPageLinks', 'UPageHeader', 'UPageBody', 'UPageColumns', 'UPageList', 'UPageLogos', 'UPageAnchors'],
    status: 'documented',
    notes: 'Pattern examples'
  },
  {
    family: 'Page structure',
    components: ['UApp', 'UPage', 'UPageAside'],
    status: 'documented',
    notes: 'Used by the docs shell'
  },
  {
    family: 'Docs and prose',
    components: ['Markdown prose', 'Callout', 'Card', 'CardGroup', 'Steps', 'Tabs', 'TabsItem', 'CodeGroup', 'Code', 'Pre', 'Kbd', 'Icon', 'Badge', 'Field', 'FieldGroup', 'Collapsible', 'Accordion', 'CodeCollapse', 'CodePreview', 'CodeTree'],
    status: 'documented',
    notes: 'Focused prose examples'
  },
  {
    family: 'Content infrastructure',
    components: ['UContentNavigation', 'UContentToc', 'UContentSurround', 'UContentSearch', 'UContentSearchButton'],
    status: 'documented',
    notes: 'Integrated docs-navigation example'
  },
  {
    family: 'System helpers',
    components: ['UColorModeAvatar', 'UColorModeButton', 'UColorModeImage', 'UColorModeSelect', 'UColorModeSwitch', 'ULocaleSelect', 'UAuthForm', 'UError', 'UTheme'],
    status: 'documented',
    notes: 'Focused examples'
  },
  {
    family: 'Dashboard',
    components: ['UDashboardGroup', 'UDashboardNavbar', 'UDashboardPanel', 'UDashboardResizeHandle', 'UDashboardSearch', 'UDashboardSearchButton', 'UDashboardSidebar', 'UDashboardSidebarCollapse', 'UDashboardSidebarToggle', 'UDashboardToolbar'],
    status: 'documented',
    notes: 'Integrated application-shell example'
  },
  {
    family: 'Publishing and marketing',
    components: ['UBlogPost', 'UBlogPosts', 'UChangelogVersion', 'UChangelogVersions', 'UPricingPlan', 'UPricingPlans', 'UPricingTable', 'UMarquee'],
    status: 'documented',
    notes: 'Integrated publishing examples'
  },
  {
    family: 'Chat and editor',
    components: ['UChatMessage', 'UChatMessages', 'UChatPalette', 'UChatPrompt', 'UChatPromptSubmit', 'UChatReasoning', 'UChatShimmer', 'UChatTool', 'UEditor', 'UEditorToolbar', 'UEditorDragHandle', 'UEditorEmojiMenu', 'UEditorMentionMenu', 'UEditorSuggestionMenu'],
    status: 'documented',
    notes: 'Integrated chat/editor examples'
  }
] satisfies BrandComponentCoverage[]

export const happydesignsBrandGuide = defineBrandGuide({
  name: happydesignsBrand.name,
  packageName: happydesignsBrand.packageName,
  title: 'happydesigns',
  description: happydesignsBrand.claim,
  homepage: 'https://happydesigns.de',
  repository: 'https://github.com/happydesigns/brand',
  assets: {
    logos: happydesignsLogoAssets,
    files: brandGuide.assets.map(asset => ({
      name: asset.name,
      src: asset.path,
      role: asset.role,
      alt: asset.name
    }))
  },
  palette: happydesignsBrand.colors,
  semanticColors: happydesignsSemanticColors,
  cssVariables: happydesignsBrandTheme.cssVariables,
  typography: happydesignsBrandTheme.typography,
  voice: brandGuide.voice,
  componentCoverage: happydesignsComponentCoverage,
  docs: {
    sections: createGuideDocsSections(brandGuide.sections)
  },
  ui: happydesignsBrandTheme.ui
})

export function getBrandGuideSection(slug: string): BrandGuideSection | undefined {
  return findGuideSection(brandGuide.sections, slug)
}
