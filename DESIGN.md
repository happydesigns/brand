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

Use shared semantic utilities for repeated guide surfaces instead of pairing one-off light and dark classes on each element.

- `bg-guide-band` is the wide section band that creates rhythm between major parts of the landing page. In light mode it is the darker beige field; in dark mode it is the lifted graphite field used for large split sections, such as the hero media field.
- `bg-guide-frame` is the outer framed module surface. In light mode it is warm white (`#FAF7F2`), while pure white is reserved for content cards. In dark mode it shares the lifted graphite field with the band to avoid a stack of similar gray values.
- `bg-guide-card` is the static content-card surface for guide route cards, color cells, operating principles, typography, logo, voice, and component samples. It should be the clearest resting surface: white in light mode and `#2F2F2E` in dark mode.
- `bg-guide-panel` is reserved for small secondary elements inside components, such as timeline indicators. It should not introduce another major section tone.
- `bg-guide-canvas` is for asset previews, code-like insets, and other placed objects inside a panel.
- `text-accent`, `text-technical`, `text-meta`, and `text-label` should be preferred over direct paired classes such as `text-petrol-700 dark:text-petrol-200`.

New landing-page surfaces should first choose one of those roles. Add a new semantic utility only when a genuinely new hierarchy level appears.

Static guide cards should not signal interactivity through hover states. Use the section/card surface roles, borders, spacing, and type hierarchy to create emphasis at rest.

## Page Composition

Homepage and guide pages should guide the reader through a clear sequence:

1. Foundations: color roles, type hierarchy, and base system decisions.
2. Identity: wordmark, symbol, lockups, and voice behavior.
3. Application: components, forms, feedback, and repeated interface patterns.

Sections may use framed layouts, separators, and contrasting warm surfaces to create rhythm, but they should remain calm and ordered. Avoid stacking visually similar blocks without a clear heading, route, or reason for the next section.

## Reusable Layer Expectations

This package may become the basis for future happydesigns projects, but the guide itself should not read like a generic template. Public copy should speak as the happydesigns brand guide.

When refining the layer, keep changes token-driven and Nuxt-native where possible. Do not add unrelated dependencies, hardcode one-off brand behavior into generic product code, or create a parallel component system beside Nuxt UI.
