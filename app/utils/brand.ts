import { defineBrand } from '@happydesigns/id'
import brandData from './brand-data.json' with { type: 'json' }

export const happydesignsBrand = defineBrand({
  name: 'happydesigns',
  packageName: '@happydesigns/brand',
  claim: 'Thoughtful design for the modern web.',
  colors: brandData.colors,
  roles: {
    signature: 'coral',
    technical: 'petrol',
    positive: 'seafoam',
    informational: 'plum',
    caution: 'butter',
    destructive: 'rose',
    structure: 'sand'
  },
  typography: brandData.typography,
  assets: {
    logos: {
      wordmark: {
        name: 'Wordmark',
        src: '/logos/happydesigns-wordmark.svg',
        role: 'wordmark',
        media: 'light',
        alt: 'happydesigns wordmark'
      },
      wordmarkInverse: {
        name: 'Wordmark inverse',
        src: '/logos/happydesigns-wordmark-inverse.svg',
        role: 'wordmarkInverse',
        media: 'dark',
        alt: 'happydesigns wordmark'
      },
      symbol: {
        name: 'Symbol',
        src: '/logos/happydesigns-symbol.svg',
        role: 'symbol',
        media: 'any',
        alt: 'happydesigns symbol'
      },
      symbolReduced: {
        name: 'Symbol reduced',
        src: '/logos/happydesigns-symbol-reduced.svg',
        role: 'symbolReduced',
        media: 'light',
        alt: 'happydesigns reduced symbol'
      },
      symbolReducedInverse: {
        name: 'Symbol reduced inverse',
        src: '/logos/happydesigns-symbol-reduced-inverse.svg',
        role: 'symbolReducedInverse',
        media: 'dark',
        alt: 'happydesigns reduced symbol'
      },
      symbolReducedTile: {
        name: 'Symbol reduced tile',
        src: '/logos/happydesigns-symbol-reduced-tile.svg',
        role: 'symbolReducedTile',
        media: 'light',
        alt: 'happydesigns reduced symbol tile'
      },
      symbolReducedTileInverse: {
        name: 'Symbol reduced tile inverse',
        src: '/logos/happydesigns-symbol-reduced-tile-inverse.svg',
        role: 'symbolReducedTileInverse',
        media: 'dark',
        alt: 'happydesigns reduced symbol tile'
      },
      lockup: {
        name: 'Lockup',
        src: '/logos/happydesigns-lockup.svg',
        role: 'lockup',
        media: 'light',
        alt: 'happydesigns lockup'
      },
      lockupInverse: {
        name: 'Lockup inverse',
        src: '/logos/happydesigns-lockup-inverse.svg',
        role: 'lockupInverse',
        media: 'dark',
        alt: 'happydesigns lockup'
      },
      lockupReduced: {
        name: 'Lockup reduced',
        src: '/logos/happydesigns-lockup-reduced.svg',
        role: 'lockupReduced',
        media: 'light',
        alt: 'happydesigns reduced lockup'
      },
      lockupReducedInverse: {
        name: 'Lockup reduced inverse',
        src: '/logos/happydesigns-lockup-reduced-inverse.svg',
        role: 'lockupReducedInverse',
        media: 'dark',
        alt: 'happydesigns reduced lockup'
      },
      signature: {
        name: 'Brand signature',
        src: '/logos/happydesigns-signature.svg',
        role: 'signature',
        media: 'light',
        alt: 'happydesigns brand signature'
      },
      signatureInverse: {
        name: 'Brand signature inverse',
        src: '/logos/happydesigns-signature-inverse.svg',
        role: 'signatureInverse',
        media: 'dark',
        alt: 'happydesigns brand signature'
      },
      appIcon: {
        name: 'App icon PNG',
        src: '/app-icon.png',
        role: 'appIcon',
        media: 'any',
        alt: 'happydesigns app icon'
      }
    }
  }
} as const)
