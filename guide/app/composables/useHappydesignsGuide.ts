import { brandGuide, getBrandGuideSection } from '../../../src/brand/brand-guide'

export function useHappydesignsGuide() {
  return brandGuide
}

export function useHappydesignsGuideSection(slug: string) {
  return getBrandGuideSection(slug)
}
