# Design Direction

happydesigns/brand is a Nuxt UI brand layer for happydesigns. The guide is the public source of truth for the happydesigns identity, and the implementation should prove how that identity behaves through Nuxt UI components.

## Nuxt UI First

Build on Nuxt UI primitives before introducing custom markup.

- Prefer `app.config.ts` theme overrides for shared component behavior, spacing, color roles, borders, and typography.
- Prefer Nuxt UI components such as `UPageHero`, `UPageSection`, `UPageCTA`, `UCard`, `UButton`, `UBadge`, `UFormField`, and Nuxt UI prose components for page composition.
- Use local component wrappers only when they express a reusable happydesigns brand primitive, such as logos, section labels, color fields, or structural spacers.
- Keep examples useful as Nuxt UI examples, because this layer should make future Nuxt projects feel like happydesigns without rewriting their component system.

## Brand Behavior

The visual system should feel warm, precise, thoughtful, design-led, technically excellent, approachable, clean, and sustainable by construction.

Use visible structure before decoration. Fine borders, controlled spacing, clear hierarchy, and warm neutral surfaces should carry the base experience. Coral is the signature accent for focus, activation, selection, and small brand details. Petrol is the technical and editorial counterweight. Artistic or colorful expression belongs in controlled canvas moments, not everywhere.

## Surface Hierarchy

Use Nuxt UI primitives and semantic Tailwind utilities for repeated guide surfaces. The light/dark pairing belongs in the token definitions, not in every page component.

- Page and panel surfaces use `bg-default`.
- Section bands use `bg-elevated` to create rhythm around major framed content.
- Static content cards and examples use `bg-muted` so they remain the clearest resting surface.
- Grid gaps and structural dividers use `bg-accented` with normal `border-default` or `border-muted` rules.
- Coral, petrol, metadata, and inverted states use semantic utilities such as `text-primary`, `text-secondary`, `text-dimmed`, `bg-inverted`, and `text-inverted`.

New landing-page surfaces should first reuse Nuxt UI semantic utilities. Add a custom utility only when Nuxt UI does not provide the needed role.

Static guide cards should not signal interactivity through hover states. Use surface contrast, borders, spacing, and type hierarchy to create emphasis at rest.

## Page Composition

Homepage and guide pages should guide the reader through a clear sequence:

1. Foundations: color roles, type hierarchy, and base system decisions.
2. Identity: wordmark, symbol, lockups, and voice behavior.
3. Application: components, forms, feedback, and repeated interface patterns.

Sections may use framed layouts, separators, and contrasting warm surfaces to create rhythm, but they should remain calm and ordered. Avoid stacking visually similar blocks without a clear heading, route, or reason for the next section.

## Reusable Layer Expectations

This package may become the basis for future happydesigns projects, but the guide itself should not read like a generic template. Public copy should speak as the happydesigns brand guide.

When refining the layer, keep changes token-driven and Nuxt-native where possible. Do not add unrelated dependencies, hardcode one-off brand behavior into shared guide structure, or create a parallel component system beside Nuxt UI.

## ID Extraction Boundary

The migrated guide may extend `@happydesigns/id/nuxt`, but `brand` remains the canonical happydesigns guide. Use `id` for reusable Nuxt UI brand-guide infrastructure; keep happydesigns identity decisions in this repository.

Keep in `brand`:

- happydesigns assets, logo doctrine, palette meaning, voice, final copy, and examples.
- docs pages that teach the happydesigns system, even when they use reusable mechanics.
- visual personality that belongs to this guide rather than to a generic brand-guide layer.

Use or upstream to `id` only when the pattern is proven generic:

- typed theme and guide contracts, package exports, app-config helpers, and Nuxt layer wiring.
- reusable guide shell primitives, component example framing, docs-link patterns, coverage helpers, and install/code surfaces when their API is brand-neutral.

Move mechanics into `id` after the brand migration proves the abstraction under real content. Do not move taste, doctrine, or copy just because another brand may also need colors, logos, typography, or components.
