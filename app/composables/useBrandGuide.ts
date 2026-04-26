import { brandGuide, getBrandGuideSection } from '../utils/brand-guide'

export function useBrandGuide() {
  return brandGuide
}

export function useBrandGuideSection(slug: string) {
  return getBrandGuideSection(slug)
}
