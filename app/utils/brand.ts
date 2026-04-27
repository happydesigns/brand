export const happydesignsBrand = {
  name: 'happydesigns',
  packageName: '@happydesigns/brand',
  claim: 'Thoughtful design for the modern web.',
  logoAssetPaths: {
    // Primary everyday identity
    wordmark: 'app/assets/logos/happydesigns-wordmark.svg',
    wordmarkInverse: 'app/assets/logos/happydesigns-wordmark-inverse.svg',

    // Primary symbol
    symbol: 'app/assets/logos/happydesigns-symbol.svg',

    // Utility / production symbols
    symbolReduced: 'app/assets/logos/happydesigns-symbol-reduced.svg',
    symbolReducedInverse: 'app/assets/logos/happydesigns-symbol-reduced-inverse.svg',
    symbolReducedTile: 'app/assets/logos/happydesigns-symbol-reduced-tile.svg',
    symbolReducedTileInverse: 'app/assets/logos/happydesigns-symbol-reduced-tile-inverse.svg',

    // Teaching / introduction lockups
    lockup: 'app/assets/logos/happydesigns-lockup.svg',
    lockupInverse: 'app/assets/logos/happydesigns-lockup-inverse.svg',

    // Constrained / production lockups
    lockupReduced: 'app/assets/logos/happydesigns-lockup-reduced.svg',
    lockupReducedInverse: 'app/assets/logos/happydesigns-lockup-reduced-inverse.svg',

    // Brand-owned compositions
    signature: 'app/assets/logos/happydesigns-signature.svg',
    signatureInverse: 'app/assets/logos/happydesigns-signature-inverse.svg',

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
