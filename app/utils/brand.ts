export const happydesignsBrand = {
  name: 'happydesigns',
  packageName: '@happydesigns/brand',
  claim: 'Structured design for the modern web.',
  logoAssetPaths: {
    wordmark: 'app/assets/logos/happydesigns.svg',
    wordmarkDark: 'app/assets/logos/happydesigns-dark.svg',
    faviconSvg: 'app/assets/logos/happydesigns-favicon.svg',
    faviconPng: 'app/assets/logos/happydesigns-favicon.png',
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
