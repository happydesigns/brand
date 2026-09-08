import {
  createGuideDocsSections,
  defineBrandGuide,
  defineGuideSections,
  findGuideSection,
  type BrandComponentCoverage,
  type BrandGuideContent,
  type BrandGuideSection
} from '@happydesigns/id'
import { happydesignsBrand } from './brand'
import { happydesignsBrandTheme, happydesignsSemanticColors } from './brand-theme'

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
      to: '/docs/guide/colors',
      eyebrow: 'tokens and roles',
      summary: 'Core palette, semantic roles, and practical usage guidance.',
      description: 'Color decisions are documented as named tokens first, then mapped to interface intent. This keeps happydesigns calm, structured, and expressive in the right moments.',
      icon: 'i-lucide-palette',
      anchors: ['Palette', 'Semantic roles', 'Usage rules']
    },
    {
      slug: 'typography',
      title: 'Typography',
      to: '/docs/guide/typography',
      eyebrow: 'fonts and hierarchy',
      summary: 'Type roles, hierarchy, rhythm, and practical writing samples.',
      description: 'Typography defines the reading voice of the brand. The guide captures font roles, hierarchy behavior, mono usage, and practical examples for clear happydesigns communication.',
      icon: 'i-lucide-type',
      anchors: ['Type roles', 'Primary typeface', 'Mono typeface', 'Hierarchy principles', 'Hierarchy in practice', 'Practical examples']
    },
    {
      slug: 'logos',
      title: 'Logos',
      to: '/docs/guide/logos',
      eyebrow: 'identity assets',
      summary: 'Logo forms, lockups, brand roles, and practical usage guidance.',
      description: 'The logo system separates core identity marks from controlled combinations. Wordmark, symbol, and reduced symbol are logo forms. Horizontal, reduced horizontal, and vertical signature compositions are lockups.',
      icon: 'i-lucide-badge-check',
      anchors: ['Logo forms', 'Lockups', 'Choosing the right form', 'Header usage', 'Footer usage']
    },
    {
      slug: 'voice',
      title: 'Voice',
      to: '/docs/guide/voice',
      eyebrow: 'messaging',
      summary: 'Writing traits, examples, and interface copy guidance.',
      description: 'Voice guidance defines how happydesigns sounds across marketing, documentation, interface labels, CTAs, and error states.',
      icon: 'i-lucide-message-square-text',
      anchors: ['Voice attributes', 'Writing principles', 'Marketing copy', 'Interface copy', 'Error and validation copy']
    },
    {
      slug: 'components',
      title: 'Components',
      to: '/studio?browse=true',
      eyebrow: 'interface system',
      summary: 'Real Nuxt UI components and page templates in the shared Brand Studio.',
      description: 'Explore the identity in shared Components, Landing and Docs scenes. Customize a copy and compare it with the original before exporting.',
      icon: 'i-lucide-component',
      anchors: []
    }
  ]),
  colors: [
    { name: 'Warm White', token: 'warmWhite', hex: happydesignsBrand.colors.warmWhite, role: 'Page background', usage: 'Use for primary surfaces and calm editorial space.' },
    { name: 'Graphite', token: 'graphite', hex: happydesignsBrand.colors.graphite, role: 'Text and premium fills', usage: 'Use for primary text, high-emphasis panels, and dark mode base.' },
    { name: 'Coral', token: 'coral', hex: happydesignsBrand.colors.coral[500], role: 'Signature accent', usage: 'Use sparingly for action emphasis, focus, and brand punctuation.' },
    { name: 'Peach', token: 'peach', hex: happydesignsBrand.colors.peach[200], role: 'Logo field and atmosphere', usage: 'Use for warm fields, gentle section contrast, and identity moments.' },
    { name: 'Petrol', token: 'petrol', hex: happydesignsBrand.colors.petrol[500], role: 'Technical counterweight', usage: 'Use for secondary actions, diagrams, and analytical context.' },
    { name: 'Butter', token: 'butter', hex: happydesignsBrand.colors.butter[500], role: 'Soft warning', usage: 'Use for caution states that should not feel alarming.' },
    { name: 'Plum', token: 'plum', hex: happydesignsBrand.colors.plum[500], role: 'Quiet information', usage: 'Use for labels, metadata, and non-primary informational moments.' },
    { name: 'Seafoam', token: 'seafoam', hex: happydesignsBrand.colors.seafoam[500], role: 'Constructive success', usage: 'Use for confirmations, progress, and positive validation.' },
    { name: 'Sand', token: 'sand', hex: happydesignsBrand.colors.sand[200], role: 'Lines and muted surfaces', usage: 'Use for borders, dividers, subdued panels, and secondary backgrounds.' },
    { name: 'Rose', token: 'rose', hex: happydesignsBrand.colors.rose[500], role: 'Restrained errors', usage: 'Use for destructive actions, errors, and critical validation.' }
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
    {
      name: 'Wordmark',
      role: 'wordmark',
      path: happydesignsBrand.assets.logos.wordmark.src,
      usage: 'Default identity for headers, navigation, documentation, and slim horizontal layouts.',
      media: 'light',
      alt: 'happydesigns wordmark'
    },
    {
      name: 'Wordmark inverse',
      role: 'wordmarkInverse',
      path: happydesignsBrand.assets.logos.wordmarkInverse.src,
      usage: 'Wordmark for dark surfaces.',
      media: 'dark',
      alt: 'happydesigns wordmark'
    },
    {
      name: 'Symbol',
      role: 'symbol',
      path: happydesignsBrand.assets.logos.symbol.src,
      usage: 'Favicon, app icon, social avatars, square contexts, and brand moments. Unchanged across light and dark.',
      media: 'any',
      alt: 'happydesigns symbol'
    },
    {
      name: 'Symbol reduced',
      role: 'symbolReduced',
      path: happydesignsBrand.assets.logos.symbolReduced.src,
      usage: 'Simplified h + coral dot for constrained, monochrome, or production contexts.',
      media: 'light',
      alt: 'happydesigns reduced symbol'
    },
    {
      name: 'Symbol reduced inverse',
      role: 'symbolReducedInverse',
      path: happydesignsBrand.assets.logos.symbolReducedInverse.src,
      usage: 'Reduced symbol for dark surfaces.',
      media: 'dark',
      alt: 'happydesigns reduced symbol'
    },
    {
      name: 'Symbol reduced tile',
      role: 'symbolReducedTile',
      path: happydesignsBrand.assets.logos.symbolReducedTile.src,
      usage: 'Reduced symbol on a light tile. Use when the raw reduced symbol needs a stable bounding surface.',
      media: 'light',
      alt: 'happydesigns reduced symbol tile'
    },
    {
      name: 'Symbol reduced tile inverse',
      role: 'symbolReducedTileInverse',
      path: happydesignsBrand.assets.logos.symbolReducedTileInverse.src,
      usage: 'Reduced symbol on a dark tile.',
      media: 'dark',
      alt: 'happydesigns reduced symbol tile'
    },
    {
      name: 'Lockup',
      role: 'lockup',
      path: happydesignsBrand.assets.logos.lockup.src,
      usage: 'Full symbol + wordmark for brand introductions, covers, and teaching moments.',
      media: 'light',
      alt: 'happydesigns lockup'
    },
    {
      name: 'Lockup inverse',
      role: 'lockupInverse',
      path: happydesignsBrand.assets.logos.lockupInverse.src,
      usage: 'Lockup for dark surfaces.',
      media: 'dark',
      alt: 'happydesigns lockup'
    },
    {
      name: 'Lockup reduced',
      role: 'lockupReduced',
      path: happydesignsBrand.assets.logos.lockupReduced.src,
      usage: 'Reduced symbol + wordmark for production, print, and constrained horizontal contexts.',
      media: 'light',
      alt: 'happydesigns reduced lockup'
    },
    {
      name: 'Lockup reduced inverse',
      role: 'lockupReducedInverse',
      path: happydesignsBrand.assets.logos.lockupReducedInverse.src,
      usage: 'Reduced lockup for dark surfaces.',
      media: 'dark',
      alt: 'happydesigns reduced lockup'
    },
    {
      name: 'Brand signature',
      role: 'signature',
      path: happydesignsBrand.assets.logos.signature.src,
      usage: 'Standardized brand composition for footers, proposals, and brand-owned sections.',
      media: 'light',
      alt: 'happydesigns brand signature'
    },
    {
      name: 'Brand signature inverse',
      role: 'signatureInverse',
      path: happydesignsBrand.assets.logos.signatureInverse.src,
      usage: 'Brand signature for dark surfaces.',
      media: 'dark',
      alt: 'happydesigns brand signature'
    },
    {
      name: 'App icon PNG',
      role: 'appIcon',
      path: happydesignsBrand.assets.logos.appIcon.src,
      usage: 'Touch icon and square app contexts.',
      media: 'any',
      alt: 'happydesigns app icon'
    }
  ]
} satisfies BrandGuideContent<typeof happydesignsBrand>

export const happydesignsRuntimeAssets = happydesignsBrand.assets

export const happydesignsComponentCoverage = [
  { family: 'Actions', components: ['UButton', 'UBadge'], status: 'documented', notes: 'Shared Studio actions and status labels' },
  { family: 'Forms', components: ['UFormField', 'UInput', 'USelect', 'USwitch'], status: 'documented', notes: 'Interactive invitation form and validation state' },
  { family: 'Feedback', components: ['UAlert', 'UProgress'], status: 'documented', notes: 'Shared Studio success, error and progress states' },
  { family: 'Content', components: ['UCard', 'UTable'], status: 'documented', notes: 'Shared Components, Landing and Docs scenes' },
  { family: 'Overlays', components: ['UModal'], status: 'documented', notes: 'Interactive review dialog' }
] satisfies BrandComponentCoverage[]

export const happydesignsBrandGuide = defineBrandGuide({
  name: happydesignsBrand.name,
  packageName: happydesignsBrand.packageName,
  title: 'happydesigns',
  description: happydesignsBrand.claim,
  homepage: 'https://happydesigns.de',
  repository: 'https://github.com/happydesigns/brand',
  assets: happydesignsRuntimeAssets,
  palette: happydesignsBrand.colors,
  semanticColors: happydesignsSemanticColors,
  cssVariables: happydesignsBrandTheme.cssVariables,
  typography: happydesignsBrandTheme.typography,
  voice: brandGuide.voice,
  componentCoverage: happydesignsComponentCoverage,
  docs: {
    sections: createGuideDocsSections(brandGuide.sections)
  }
})

export function getBrandGuideSection(slug: string): BrandGuideSection | undefined {
  return findGuideSection(brandGuide.sections, slug)
}
