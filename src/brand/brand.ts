import { defineBrand, type BrandDefinition } from '@happydesigns/id'
import source from './brand.studio.json' with { type: 'json' }

/** Editable identity source shared by the runtime, guide and Brand Studio. */
export const happydesignsBrand = defineBrand(source.brand as typeof source.brand & BrandDefinition)
