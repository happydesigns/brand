# Design Direction

happydesigns/brand is a Nuxt UI brand layer for happydesigns. The guide is the public source of truth for the happydesigns identity, and the implementation should prove how that identity behaves through Nuxt UI components.

## Package Architecture

The repository root is the public, guide-free Nuxt layer. Consumers extend `@happydesigns/brand`, a pinned `github:happydesigns/brand#<commit>`, or the local repository root. The `docs/` application extends that same layer together with Docus and contains all explanatory pages, coverage examples, and guide-only UI.

Keep consumer-safe runtime configuration, CSS, public assets, and reusable brand primitives in the root layer. Keep neutral source definitions in `src/brand`, and keep guide pages, content, and presentation-only components in `docs/`. A consumer must never need to select an internal `runtime/` subdirectory or inherit Docus to use the brand.

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
- Section bands use `bg-muted` to create a quieter ground around major framed content.
- Static content cards and examples use the lighter `bg-elevated` surface. `bg-raised` is reserved for rare focus surfaces and remains a warm off-white rather than pure white.
- Grid gaps and structural dividers use `bg-accented` with normal `border-default` or `border-muted` rules.
- Coral, petrol, metadata, and inverted states use semantic utilities such as `text-primary`, `text-secondary`, `text-dimmed`, `bg-inverted`, and `text-inverted`.

New landing-page surfaces should first reuse Nuxt UI semantic utilities. Add a custom utility only when Nuxt UI does not provide the needed role.

Static guide cards should not signal interactivity through hover states. Use surface contrast, borders, spacing, and type hierarchy to create emphasis at rest.

## Page Composition

The homepage combines the interactive theme comparison with the brand journey, foundations (palette and typography), identity (logos and voice), applied component examples, and installation. These brand-specific sections remain part of the homepage when shared component catalogs move to Studio. Studio complements this content; three navigation links are not a replacement for it. Shared Components, Landing and Docs scenes belong to id; brand owns the identity applied to them.

Customization stays in the same Studio preview. The inspector exposes identity, palettes, typography and a few useful component defaults. Before/after frames share scene, mode and viewport while keeping their styles and interaction state isolated. Original source, local draft and reviewed export are distinct states.

## Reusable Layer Expectations

This package may become the basis for future happydesigns projects, but the guide itself should not read like a generic template. Public copy should speak as the happydesigns brand guide.

When refining the layer, keep changes token-driven and Nuxt-native where possible. Do not add unrelated dependencies, hardcode one-off brand behavior into shared guide structure, or create a parallel component system beside Nuxt UI.

## ID Extraction Boundary

The public brand layer uses generated native Nuxt UI configuration, CSS and assets; its guide adds `@happydesigns/id/studio` and `@happydesigns/id/guide`. `brand` remains the canonical happydesigns guide. Use `id` for reusable authoring and guide infrastructure; keep happydesigns identity decisions in this repository.

Keep in `brand`:

- happydesigns assets, logo doctrine, palette meaning, voice, final copy, and examples.
- docs pages that teach the happydesigns system, even when they use reusable mechanics.
- visual personality that belongs to this guide rather than to a generic brand-guide layer.

Use or upstream to `id` only when the pattern is proven generic:

- typed theme and guide contracts, package exports, app-config helpers, and Nuxt layer wiring.
- reusable guide shell primitives, component example framing, docs-link patterns, coverage helpers, and install/code surfaces when their API is brand-neutral.

Move mechanics into `id` after the brand migration proves the abstraction under real content. Do not move taste, doctrine, or copy just because another brand may also need colors, logos, typography, or components.
