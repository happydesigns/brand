import { happydesignsBrand } from './brand'

export type BrandGuideColor = {
  name: string
  token: string
  hex: string
  role: string
  usage: string
}

export type BrandGuideFont = {
  name: string
  role: string
  stack: string
  sample: string
  notes: string
}

export type BrandGuideComponent = {
  name: string
  purpose: string
  guidance: string
}

export type BrandGuideSection = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  description: string
  icon: string
  anchors: string[]
}

export type BrandGuide = {
  brand: typeof happydesignsBrand
  principles: string[]
  sections: BrandGuideSection[]
  colors: BrandGuideColor[]
  fonts: BrandGuideFont[]
  components: BrandGuideComponent[]
  voice: {
    attributes: string[]
    dos: string[]
    donts: string[]
  }
  assets: {
    name: string
    path: string
    usage: string
  }[]
}

export const brandGuide = {
  brand: happydesignsBrand,
  principles: [
    'Use visible structure before decoration.',
    'Keep the system warm, precise, and restrained.',
    'Document decisions as reusable tokens and patterns.',
    'Prefer durable defaults over one-off brand moments.'
  ],
  sections: [
    {
      slug: 'colors',
      title: 'Colors',
      eyebrow: 'tokens and roles',
      summary: 'Core palette, semantic roles, and practical usage guidance.',
      description: 'Color decisions are documented as named tokens first, then mapped to interface intent. This keeps future brand guides portable while preserving local expression.',
      icon: 'i-lucide-palette',
      anchors: ['Palette', 'Semantic roles', 'Usage rules']
    },
    {
      slug: 'typography',
      title: 'Typography',
      eyebrow: 'fonts and hierarchy',
      summary: 'Type families, hierarchy, rhythm, and sample applications.',
      description: 'Typography defines the reading voice of the brand. The guide captures font roles, fallback stacks, sizing principles, and samples that can be swapped for another brand.',
      icon: 'i-lucide-type',
      anchors: ['Families', 'Hierarchy', 'Samples']
    },
    {
      slug: 'logos',
      title: 'Logos',
      eyebrow: 'identity assets',
      summary: 'Wordmark, app icon, favicon, asset paths, and usage rules.',
      description: 'Logo documentation keeps the source files, output files, clearspace expectations, and common placements in one place so identity work is repeatable.',
      icon: 'i-lucide-badge-check',
      anchors: ['Assets', 'Usage', 'Placement']
    },
    {
      slug: 'components',
      title: 'Components',
      eyebrow: 'interface system',
      summary: 'Reusable UI examples that prove the brand in product contexts.',
      description: 'Component guidance connects brand tokens to real interface states. Each future guide can replace the data while keeping the same documentation shell.',
      icon: 'i-lucide-component',
      anchors: ['Buttons', 'Forms', 'Cards']
    },
    {
      slug: 'voice',
      title: 'Voice',
      eyebrow: 'messaging',
      summary: 'Writing traits, do and do-not rules, and interface copy guidance.',
      description: 'A useful brand guide documents how the brand sounds in headings, labels, errors, and supporting copy, not only how it looks.',
      icon: 'i-lucide-message-square-text',
      anchors: ['Attributes', 'Do', 'Do not']
    }
  ],
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
    { name: 'Cards and panels', purpose: 'Frame repeated content.', guidance: 'Use small radii, direct borders, and minimal shadow so structure remains visible.' },
    { name: 'Badges', purpose: 'Mark metadata or state.', guidance: 'Use compact rounded badges for short status labels only.' }
  ],
  voice: {
    attributes: ['Thoughtful', 'warm', 'precise', 'maintainable'],
    dos: [
      'Use concrete nouns and direct verbs.',
      'Explain decisions through reusable rules.',
      'Keep interface labels short and action-oriented.'
    ],
    donts: [
      'Do not over-explain simple controls.',
      'Do not rely on hype, vague claims, or decorative wording.',
      'Do not let brand copy obscure product behavior.'
    ]
  },
  assets: [
    { name: 'Wordmark', path: happydesignsBrand.logoAssetPaths.wordmark, usage: 'Default identity mark for headers, covers, and documentation.' },
    { name: 'Dark wordmark', path: happydesignsBrand.logoAssetPaths.wordmarkDark, usage: 'Use on graphite or other dark surfaces.' },
    { name: 'Favicon SVG', path: happydesignsBrand.logoAssetPaths.faviconSvg, usage: 'Browser tab and small vector contexts.' },
    { name: 'App icon PNG', path: happydesignsBrand.logoAssetPaths.publicAppIcon, usage: 'Touch icon and square app contexts.' }
  ]
} satisfies BrandGuide

export function getBrandGuideSection(slug: string) {
  return brandGuide.sections.find(section => section.slug === slug)
}
