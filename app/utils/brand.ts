export const happydesignsBrand = {
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
  colors: {
    warmWhite: '#FAF7F2',
    graphite: '#242423',
    coral: '#F28564',
    peach: '#FFE4D4',
    petrol: '#2F6374',
    butter: '#E8CE69',
    plum: '#71617F',
    seafoam: '#1FA573',
    sand: '#E9E4DC',
    rose: '#BD4D49'
  }
} as const

export type HappydesignsBrand = typeof happydesignsBrand
export type HappydesignsBrandColor = keyof typeof happydesignsBrand.colors
