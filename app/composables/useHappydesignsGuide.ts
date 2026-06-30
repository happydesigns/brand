import { brandGuide, getBrandGuideSection } from '../utils/brand-guide'

export function useHappydesignsGuide() {
  return brandGuide
}

export function useHappydesignsGuideSection(slug: string) {
  return getBrandGuideSection(slug)
}
