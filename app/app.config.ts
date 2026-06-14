export default defineAppConfig({
  docus: {
    locale: 'en',
    colorMode: ''
  },
  seo: {
    title: 'happydesigns brand guide',
    description: 'Thoughtful design guidance for the happydesigns brand system.'
  },
  header: {
    title: 'happydesigns'
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
          class: 'border-sand-300 bg-sand-150 text-graphite hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-sand-100 dark:hover:bg-white/10'
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
        root: 'rounded-sm bg-default shadow-none transition-colors',
        header: 'border-b border-sand-300 dark:border-white/10',
        footer: 'border-t border-sand-300 dark:border-white/10'
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
        root: 'lg:gap-0',
        left: 'lg:border-r lg:border-sand-300 dark:lg:border-white/10',
        center: 'lg:px-10',
        right: 'lg:border-l lg:border-sand-300 dark:lg:border-white/10 lg:pl-8'
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
        linkLeading: 'bg-white ring-sand-300 text-coral-500 group-hover:bg-coral-500 group-hover:ring-coral-500 group-hover:text-white dark:bg-white/5 dark:ring-white/10',
        link: 'hover:text-coral-700 dark:hover:text-coral-300'
      }
    },
    pageHeader: {
      slots: {
        root: 'relative border-b border-sand-300 py-8 lg:-mx-10 lg:px-10 dark:border-white/10',
        description: 'text-sand-700 dark:text-sand-300'
      }
    },
    contentSurround: {
      slots: {
        link: 'rounded-sm border border-default bg-default transition-colors hover:bg-muted',
        linkLeading: 'bg-white ring-sand-300 group-hover:bg-coral-50 group-hover:ring-coral-500/50 dark:bg-white/5 dark:ring-white/10 dark:group-hover:bg-coral-400/10'
      }
    },
    input: {
      slots: {
        base: 'bg-default text-highlighted ring-default focus-visible:ring-primary'
      }
    },
    textarea: {
      slots: {
        base: 'bg-default text-highlighted ring-default focus-visible:ring-primary'
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
      base: 'rounded-[3px] border border-sand-300 bg-sand-100 font-mono text-graphite shadow-none dark:border-white/15 dark:bg-white/5 dark:text-sand-100'
    },
    prose: {
      th: {
        base: 'py-3 px-4 font-semibold text-sm border-e border-b first:border-s border-t border-sand-300 bg-sand-100 text-graphite dark:border-white/10 dark:bg-white/5 dark:text-sand-100'
      },
      td: {
        base: 'py-3 px-4 text-sm align-top border-e border-b first:border-s border-sand-300 text-sand-700 [&_code]:text-xs/5 [&_p]:my-0 [&_p]:leading-6 [&_ul]:my-0 [&_ol]:my-0 [&_ul]:ps-4.5 [&_ol]:ps-4.5 [&_li]:leading-6 [&_li]:my-0.5 dark:border-white/10 dark:text-sand-300'
      },
      code: {
        base: 'inline-block rounded-[3px] border border-sand-300 bg-sand-100 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-petrol-700 dark:border-white/15 dark:bg-white/5 dark:text-petrol-200'
      },
      codeGroup: {
        slots: {
          root: 'overflow-hidden rounded-md bg-white dark:bg-graphite',
          list: 'border-sand-300 bg-white dark:border-white/10 dark:bg-graphite',
          indicator: 'border border-sand-300 bg-warm-white shadow-none dark:border-white/10 dark:bg-sand-800/45',
          trigger: 'text-sand-700 data-[state=active]:bg-warm-white data-[state=active]:text-graphite data-[state=active]:ring-1 data-[state=active]:ring-sand-300 dark:text-sand-300 dark:data-[state=active]:bg-sand-800/45 dark:data-[state=active]:text-sand-50 dark:data-[state=active]:ring-white/10'
        }
      },
      pre: {
        slots: {
          root: 'relative my-6 group',
          header: 'flex items-center gap-1.5 rounded-t-sm border border-sand-300 border-b-0 bg-sand-100 px-4 py-3 dark:border-white/10 dark:bg-white/5',
          filename: 'font-mono text-xs text-plum-600 dark:text-sand-300',
          copy: 'absolute right-[11px] top-[11px] transition lg:opacity-0 lg:group-hover:opacity-100',
          base: 'group overflow-x-auto whitespace-pre-wrap break-words rounded-sm border border-l-[3px] border-sand-300 border-l-petrol-500 bg-warm-white px-4 py-3 font-mono text-sm/7 text-graphite focus:outline-none **:[.line.highlight]:-mx-4 **:[.line.highlight]:bg-petrol-50 **:[.line.highlight]:px-4 **:[.line]:block dark:border-white/10 dark:border-l-petrol-300 dark:bg-sand-800/45 dark:text-sand-50 dark:**:[.line.highlight]:bg-petrol-400/10'
        }
      }
    }
  }
})
