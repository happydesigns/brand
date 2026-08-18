import { nuxtUiAdapter } from '@happydesigns/id/adapters/nuxt-ui'
import { happydesignsBrand } from './brand'

export const happydesignsSemanticColors = {
  primary: happydesignsBrand.roles.signature,
  secondary: happydesignsBrand.roles.technical,
  success: happydesignsBrand.roles.positive,
  info: happydesignsBrand.roles.informational,
  warning: happydesignsBrand.roles.caution,
  error: happydesignsBrand.roles.destructive,
  neutral: happydesignsBrand.roles.structure
} as const

export const happydesignsUiConfig = {
  button: {
    defaultVariants: {
      color: 'primary',
      size: 'md'
    },
    compoundVariants: [
      {
        color: 'primary',
        variant: 'solid',
        class: 'bg-inverted text-inverted hover:bg-inverted/90 active:bg-inverted focus-visible:ring-2 focus-visible:ring-primary'
      },
      {
        color: 'neutral',
        variant: 'outline',
        class: 'border-default bg-elevated text-highlighted hover:bg-muted'
      },
      {
        color: 'secondary',
        variant: 'subtle',
        class: 'bg-muted text-secondary hover:bg-accented'
      }
    ]
  },
  badge: {
    defaultVariants: {
      color: 'neutral',
      variant: 'subtle',
      size: 'sm'
    },
    slots: {
      base: 'rounded-full font-medium ring-1 ring-inset'
    }
  },
  card: {
    slots: {
      root: 'rounded-sm bg-default shadow-none transition-colors',
      header: 'border-b border-default',
      footer: 'border-t border-default'
    }
  },
  pageCard: {
    slots: {
      root: 'rounded-sm bg-default shadow-none transition-colors'
    },
    variants: {
      variant: {
        outline: {
          root: 'bg-default ring-default'
        }
      }
    },
    compoundVariants: [
      {
        variant: 'outline',
        to: true,
        class: {
          root: 'hover:bg-muted'
        }
      }
    ]
  },
  pageHero: {
    slots: {
      container: 'py-20 sm:py-24 lg:py-28 gap-10 sm:gap-y-14',
      title: 'font-semibold leading-[0.98] tracking-normal',
      description: 'text-body'
    }
  },
  pageSection: {
    slots: {
      container: 'py-12 sm:py-14 lg:py-16 gap-8 sm:gap-10',
      title: 'font-semibold tracking-normal',
      description: 'text-body'
    }
  },
  pageCTA: {
    slots: {
      root: 'rounded-sm',
      container: 'px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12',
      title: 'font-semibold tracking-normal',
      description: 'text-body'
    }
  },
  page: {
    slots: {
      root: 'isolate lg:gap-0',
      left: 'lg:border-r lg:border-default',
      center: 'lg:px-10',
      right: 'lg:border-l lg:border-default lg:pl-8'
    }
  },
  pageAside: {
    slots: {
      root: 'lg:pe-6 lg:ps-6 lg:ms-0',
      topHeader: 'bg-transparent',
      topBody: 'bg-transparent',
      topFooter: 'bg-transparent'
    }
  },
  pageAnchors: {
    slots: {
      linkLeading: 'bg-muted ring-default text-primary group-hover:bg-primary group-hover:ring-primary group-hover:text-inverted',
      link: 'hover:text-primary'
    }
  },
  pageHeader: {
    slots: {
      root: 'relative border-b border-default py-8',
      description: 'text-body'
    }
  },
  contentSurround: {
    slots: {
      link: 'rounded-sm border border-default bg-default transition-colors hover:bg-muted',
      linkLeading: 'bg-muted ring-default group-hover:bg-primary/10 group-hover:ring-primary'
    }
  },
  input: {
    slots: {
      base: 'bg-default text-highlighted ring-default focus-visible:ring-primary'
    }
  },
  textarea: {
    slots: {
      base: 'min-h-24 resize-y bg-default text-highlighted ring-default focus-visible:ring-primary'
    }
  },
  select: {
    slots: {
      base: 'bg-default text-highlighted ring-default focus-visible:ring-primary'
    }
  },
  formField: {
    slots: {
      label: 'text-sm font-medium text-highlighted',
      help: 'text-xs/5 text-muted',
      hint: 'font-mono text-xs text-muted'
    }
  },
  tabs: {
    defaultVariants: {
      color: 'primary',
      variant: 'link',
      size: 'md'
    }
  },
  alert: {
    slots: {
      root: 'rounded-sm border shadow-none'
    }
  },
  kbd: {
    base: 'rounded-[3px] border border-default bg-elevated font-mono text-highlighted shadow-none'
  },
  prose: {
    th: {
      base: 'py-3 px-4 font-semibold text-sm border-e border-b first:border-s border-t border-default bg-elevated text-highlighted'
    },
    td: {
      base: 'py-3 px-4 text-sm align-top border-e border-b first:border-s border-default text-body [&_code]:text-xs/5 [&_p]:my-0 [&_p]:leading-6 [&_ul]:my-0 [&_ol]:my-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:leading-6 [&_li]:my-0.5'
    },
    code: {
      base: 'inline-block rounded-[3px] border border-default bg-elevated px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-secondary'
    },
    codeGroup: {
      slots: {
        root: 'relative group my-5 overflow-hidden rounded-md bg-default *:not-first:static! *:not-first:my-0!',
        list: 'border-default bg-default border-b-0 rounded-t-md p-2',
        indicator: 'border border-default bg-muted shadow-none',
        trigger: 'text-muted data-[state=active]:bg-muted data-[state=active]:text-highlighted data-[state=active]:ring-1 data-[state=active]:ring-default'
      }
    },
    pre: {
      slots: {
        root: 'relative my-6 group',
        header: 'flex items-center gap-1.5 rounded-t-sm border border-default border-b-0 bg-elevated px-4 py-3',
        filename: 'font-mono text-xs/6 text-label',
        copy: 'absolute right-[11px] top-[11px] transition',
        base: 'group overflow-x-auto whitespace-pre-wrap break-words rounded-md border border-default bg-elevated px-4 py-3 font-mono text-sm/7 text-highlighted focus:outline-none **:[.line.highlight]:-mx-4 **:[.line.highlight]:bg-accented/50 **:[.line.highlight]:px-4 **:[.line]:block'
      }
    }
  }
} as const

export const cssVariables = {
  light: {
    '--ui-container': 'var(--container-8xl)',
    '--ui-bg': 'var(--color-warm-white)',
    '--ui-bg-muted': 'var(--color-sand-100)',
    '--ui-bg-elevated': '#FDFBF8',
    '--ui-bg-accented': 'var(--color-sand-300)',
    '--ui-bg-inverted': 'var(--color-graphite)',
    '--ui-text': 'var(--color-graphite)',
    '--ui-text-highlighted': 'var(--color-graphite)',
    '--ui-text-muted': 'var(--color-sand-700)',
    '--ui-text-dimmed': 'var(--color-sand-600)',
    '--ui-text-inverted': 'var(--color-warm-white)',
    '--ui-border': 'var(--color-sand-300)',
    '--ui-border-muted': 'var(--color-sand-200)',
    '--ui-border-accented': 'var(--color-sand-400)',
    '--ui-primary': 'var(--color-coral-700)',
    '--ui-secondary': 'var(--color-petrol-500)',
    '--ui-success': 'var(--color-seafoam-500)',
    '--ui-info': 'var(--color-plum-500)',
    '--ui-warning': 'var(--color-butter-500)',
    '--ui-error': 'var(--color-rose-500)',
    '--hd-text-body': 'var(--color-sand-800)',
    '--hd-text-label': 'var(--color-plum-600)',
    '--hd-bg-surface': 'var(--ui-bg)',
    '--hd-bg-card': 'var(--ui-bg-elevated)',
    '--hd-bg-raised': '#FFFDFB',
    '--hd-bg-inset': 'var(--color-sand-200)',
    '--hd-bg-separator': 'var(--ui-bg-accented)',
    '--hd-bg-tinted': 'color-mix(in srgb, var(--color-sand-200) 55%, transparent)',
    '--hd-bg-hover': 'var(--color-peach-50)'
  },
  dark: {
    '--ui-bg': 'var(--color-graphite)',
    '--ui-bg-muted': '#292827',
    '--ui-bg-elevated': '#302E2C',
    '--ui-bg-accented': 'color-mix(in srgb, var(--color-warm-white) 12%, transparent)',
    '--ui-bg-inverted': 'var(--color-sand-100)',
    '--ui-text': 'var(--color-sand-100)',
    '--ui-text-highlighted': 'var(--color-sand-50)',
    '--ui-text-muted': 'var(--color-sand-300)',
    '--ui-text-dimmed': 'var(--color-sand-400)',
    '--ui-text-inverted': 'var(--color-graphite)',
    '--ui-border': 'color-mix(in srgb, var(--color-warm-white) 12%, transparent)',
    '--ui-border-muted': 'color-mix(in srgb, var(--color-warm-white) 8%, transparent)',
    '--ui-border-accented': 'color-mix(in srgb, var(--color-warm-white) 18%, transparent)',
    '--ui-primary': 'var(--color-coral-400)',
    '--ui-secondary': 'var(--color-petrol-400)',
    '--ui-success': 'var(--color-seafoam-400)',
    '--ui-info': 'var(--color-plum-400)',
    '--ui-warning': 'var(--color-butter-400)',
    '--ui-error': 'var(--color-rose-400)',
    '--hd-text-body': 'var(--color-sand-300)',
    '--hd-text-label': 'var(--color-plum-300)',
    '--hd-bg-surface': 'var(--ui-bg)',
    '--hd-bg-card': 'var(--ui-bg-elevated)',
    '--hd-bg-raised': '#383532',
    '--hd-bg-inset': 'var(--color-sand-950)',
    '--hd-bg-separator': 'var(--ui-bg-accented)',
    '--hd-bg-tinted': 'color-mix(in srgb, var(--color-sand-800) 25%, transparent)',
    '--hd-bg-hover': 'color-mix(in srgb, var(--color-warm-white) 8%, transparent)'
  }
} as const

const happydesignsNuxtUiOptions = {
  label: 'happydesigns',
  description: 'The canonical Nuxt UI theme contract for the happydesigns brand guide.',
  cssVariables,
  colors: happydesignsSemanticColors,
  components: happydesignsUiConfig
} as const

export const happydesignsBrandTheme = nuxtUiAdapter.transform(happydesignsBrand, happydesignsNuxtUiOptions)
