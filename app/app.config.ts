export default defineAppConfig(({
  docus: {
    locale: 'en',
    colorMode: ''
  },
  seo: {
    title: 'happydesigns brand guide',
    description: 'Structured design guidance for the happydesigns brand system.'
  },
  header: {
    title: 'happydesigns',
    logo: {
      light: '/app-icon.png',
      dark: '/app-icon.png',
      alt: 'happydesigns',
      class: 'rounded-sm'
    }
  },
  socials: {
    github: 'https://github.com/happydesigns'
  },
  toc: {
    title: 'On this page',
    bottom: {
      title: 'Brand system',
      links: [{
        icon: 'i-lucide-home',
        label: 'Overview',
        to: '/',
        target: '_self'
      }]
    }
  },
  assistant: {
    floatingInput: false,
    explainWithAi: false
  },
  ui: {
    colors: {
      primary: 'coral',
      secondary: 'petrol',
      success: 'seafoam',
      info: 'plum',
      warning: 'butter',
      error: 'rose',
      neutral: 'sand'
    },
    button: {
      defaultVariants: {
        color: 'primary',
        size: 'md'
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-graphite text-warm-white hover:bg-sand-800 active:bg-sand-900 focus-visible:ring-2 focus-visible:ring-coral-500 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white dark:bg-sand-100 dark:text-graphite dark:hover:bg-warm-white dark:focus-visible:ring-coral-400 dark:focus-visible:ring-offset-graphite'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'border-sand-300 bg-warm-white text-graphite hover:bg-sand-100 dark:border-white/15 dark:bg-transparent dark:text-sand-100 dark:hover:bg-white/5'
        },
        {
          color: 'secondary',
          variant: 'subtle',
          class: 'bg-petrol-50 text-petrol-700 hover:bg-petrol-100 dark:bg-petrol-400/10 dark:text-petrol-200 dark:hover:bg-petrol-400/15'
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
        root: 'rounded-sm border border-sand-200 bg-warm-white/90 shadow-none dark:border-white/10 dark:bg-sand-800/35',
        header: 'border-b border-sand-200 dark:border-white/10',
        footer: 'border-t border-sand-200 dark:border-white/10'
      }
    },
    input: {
      slots: {
        base: 'bg-warm-white text-graphite ring-sand-300 focus-visible:ring-coral-500 dark:bg-sand-800/80 dark:text-sand-100 dark:ring-white/15 dark:focus-visible:ring-coral-400'
      }
    },
    textarea: {
      slots: {
        base: 'bg-warm-white text-graphite ring-sand-300 focus-visible:ring-coral-500 dark:bg-sand-800/80 dark:text-sand-100 dark:ring-white/15 dark:focus-visible:ring-coral-400'
      }
    },
    select: {
      slots: {
        base: 'bg-warm-white text-graphite ring-sand-300 focus-visible:ring-coral-500 dark:bg-sand-800/80 dark:text-sand-100 dark:ring-white/15 dark:focus-visible:ring-coral-400'
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
      base: 'rounded-[3px] border border-sand-300 bg-sand-100 font-mono text-graphite shadow-none dark:border-white/15 dark:bg-white/5 dark:text-sand-100'
    },
    prose: {
      codeGroup: {
        slots: {
          root: 'bg-white dark:bg-graphite',
          list: 'border-sand-300 bg-white dark:border-white/10 dark:bg-graphite',
          indicator: 'border border-sand-300 bg-warm-white shadow-none dark:border-white/10 dark:bg-sand-800/45',
          trigger: 'text-sand-700 data-[state=active]:bg-warm-white data-[state=active]:text-graphite data-[state=active]:ring-1 data-[state=active]:ring-sand-300 dark:text-sand-300 dark:data-[state=active]:bg-sand-800/45 dark:data-[state=active]:text-sand-50 dark:data-[state=active]:ring-white/10'
        }
      },
      pre: {
        slots: {
          base: 'border-sand-300 bg-warm-white text-graphite dark:border-white/10 dark:bg-sand-800/45 dark:text-sand-50'
        }
      }
    }
  }
}) as never)
