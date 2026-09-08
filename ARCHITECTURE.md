# Architecture

`@happydesigns/brand` is both the canonical happydesigns brand guide and a concrete brand layer built on the reusable contracts and runtime from `@happydesigns/id`.

## Data Flow

The runtime follows one directional path:

1. `src/brand/brand.studio.json` owns identity data and the complete Nuxt UI theme.
2. `src/brand/brand.ts` and `src/brand/brand-theme.ts` validate and expose that document.
3. `scripts/brand-layer.ts` generates `app/brand.generated.json`, `tokens.generated.css` and `theme.generated.css`.
4. The public layer applies those generated assets; the guide adds human-readable brand principles.
5. The optional `@happydesigns/id/studio` layer renders shared Components, Landing and Docs scenes. Browser drafts never mutate repository files. Applying a downloaded source follows the normal generation and validation workflow.

Tests reject drift between the neutral definition, adapter output, generated CSS, SSR variables, and app config.

## Ownership Boundary

`id` owns reusable contracts and mechanics:

- validated brand, theme, guide, and asset types
- adapters and app-config helpers
- SSR theme-variable injection
- reusable example frames, install surfaces, and coverage helpers

`brand` owns happydesigns decisions:

- palette meaning, typography, assets, logo doctrine, and voice
- semantic role choices and Nuxt UI component styling
- guide copy and brand-specific examples
- homepage composition and local demonstration state

A mechanism moves to `id` only after it is demonstrably brand-neutral. Visual taste, copy, tokens, and happydesigns examples stay here.

## Layer Composition

The public root layer extends `@happydesigns/id/nuxt` and adds only happydesigns theme data, generated CSS, assets, metadata, and brand primitives. A product extends `@happydesigns/brand` and receives the complete happydesigns runtime without separately composing `id`.

The Docus application extends the public root layer, the optional `@happydesigns/id/studio` and `@happydesigns/id/guide` add-ons, and Docus. The guide add-on contributes neutral documentation components such as example frames and install surfaces; it is not part of the production brand layer.

```text
@happydesigns/id/nuxt
  -> @happydesigns/brand
    -> docs + @happydesigns/id/studio + @happydesigns/id/guide + docus
```

Other brands depend directly on `@happydesigns/id`; they must not extend this package or inherit happydesigns tokens, assets, doctrine, or component styling.

## Guide Composition

`docs/app/pages/index.vue` pairs the interactive `BrandHomeHero` with three clear entry points: Studio, principles, and installation. `/studio?browse=true` presents the shared Components scene; Landing and Docs offer the same identity in page contexts. Customize opens the inspector without switching to another preview implementation.

Brand-owned documentation covers meaning, typography, logo usage, and voice. Component API documentation stays upstream in Nuxt UI. Historical component URLs redirect into Studio. `/use` explains installation and applying a reviewed source export.

## Verification Boundary

Vitest covers deterministic brand data, adapters, generated CSS, SSR variables, contrast pairs, and app-config wiring.

Playwright covers the integration surface changed by this repository:

- representative guide pages load without unexpected accessibility-rule categories
- the custom theme-reveal slider supports keyboard interaction
- desktop and mobile homepage composition remain stable
- Studio isolates draft/original styles and dialogs, restores local work, rejects invalid imports, and exports source plus assets

The Studio suite includes contrast checks. Light-mode semantic colors use accessible steps within the existing palettes. Independent iframe notification regions share an upstream label, so the cross-frame landmark-unique rule is excluded explicitly. Existing guide-shell accessibility categories remain bounded by the guide tests; those are not a claim of full WCAG conformance.

## Build Boundary

Docus, Nuxt Content, and OG-image generation make this guide heavier than a normal consumer of the brand layer. Build-memory and bundle findings must therefore be attributed to a measured build phase before changing runtime brand code or raising resource limits further.

The earlier, larger guide was measured with Node's heap capped at 4 GB:

- the regular Node-server build exhausts the heap while Nitro initializes the prerenderer
- disabling `nuxt-og-image` allows all 69 routes to prerender, but the build then exhausts the heap while bundling the Nitro server
- the static `nuxt generate` path also exhausts the heap while initializing the prerenderer and would remove Docus' MCP server capability

OG-image generation therefore increases peak pressure but is not the root cause. The shared Docus, Nuxt Content, and Nitro build graph exceeds the 4 GB cap before brand-specific runtime code becomes relevant. The Studio integration was validated with an explicit 8 GB heap cap through NODE_OPTIONS; that successful run does not establish the minimum required heap, and it is not a requirement for projects that only consume this brand layer. Re-evaluate it when Docus, Nuxt Content, or Nitro changes rather than propagating the allowance to consumers.
