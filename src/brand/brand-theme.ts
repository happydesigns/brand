import { defineBrandTheme } from '@happydesigns/id'
import { parseStudioDocument } from '@happydesigns/id/studio/core'
import source from './brand.studio.json' with { type: 'json' }

// Validate the complete authoring document before generating public assets.
parseStudioDocument(source)
export const happydesignsSemanticColors = source.theme.ui.colors
export const cssVariables = source.theme.cssVariables
const { colors: _colors, ...components } = source.theme.ui
export const happydesignsUiConfig = components
export const happydesignsBrandTheme = defineBrandTheme(source.theme)
