import { defineBrand } from '@happydesigns/id'
import brandData from './brand-data.json' with { type: 'json' }

export const happydesignsBrand = defineBrand({
  name: 'happydesigns',
  packageName: '@happydesigns/brand',
  claim: 'Thoughtful design for the modern web.',
  logoAssetPaths: {
    // Primary everyday identity
    wordmark: '/logos/happydesigns-wordmark.svg',
    wordmarkInverse: '/logos/happydesigns-wordmark-inverse.svg',

    // Primary symbol
    symbol: '/logos/happydesigns-symbol.svg',

    // Utility / production symbols
    symbolReduced: '/logos/happydesigns-symbol-reduced.svg',
    symbolReducedInverse: '/logos/happydesigns-symbol-reduced-inverse.svg',
    symbolReducedTile: '/logos/happydesigns-symbol-reduced-tile.svg',
    symbolReducedTileInverse: '/logos/happydesigns-symbol-reduced-tile-inverse.svg',

    // Teaching / introduction lockups
    lockup: '/logos/happydesigns-lockup.svg',
    lockupInverse: '/logos/happydesigns-lockup-inverse.svg',

    // Constrained / production lockups
    lockupReduced: '/logos/happydesigns-lockup-reduced.svg',
    lockupReducedInverse: '/logos/happydesigns-lockup-reduced-inverse.svg',

    // Brand-owned compositions
    signature: '/logos/happydesigns-signature.svg',
    signatureInverse: '/logos/happydesigns-signature-inverse.svg',

    // Public / build output
    publicFavicon: '/favicon.svg',
    publicAppIcon: '/app-icon.png'
  },
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
  typography: brandData.typography
} as const)
