# Architecture

`@happydesigns/brand` is both the canonical happydesigns brand guide and a Nuxt layer that consumes the reusable contracts from `@happydesigns/id`.

## Data Flow

The runtime follows one directional path:

1. `app/utils/brand-data.json` contains tool-independent palette and typography values.
2. `app/utils/brand.ts` validates those values with `defineBrand()` and adds happydesigns identity metadata and assets.
3. `app/utils/brand-theme.ts` maps the neutral definition to Nuxt UI semantic roles and component configuration through `nuxtUiAdapter()`.
4. `app/app.config.ts` turns that theme into Nuxt app config with `createNuxtUiAppConfig()` and adds guide-specific metadata.
5. The `id` Nuxt plugin renders semantic theme variables during SSR. `app/assets/css/main.css` consumes them; it does not redeclare them.
6. `scripts/generate-brand-css.mjs` generates the Tailwind palette in `app/assets/css/brand.generated.css` through the generic CSS-variable adapter.

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

## Guide Composition

`app/pages/index.vue` is intentionally a short composition root. Its sections are split by reader intent:

- `BrandHomeHero` demonstrates the change from default Nuxt UI to the happydesigns theme.
- `BrandHomeGuidance` explains the path through the guide.
- `BrandHomeFoundations` covers palette and typography.
- `BrandHomeIdentity` covers logos and voice.
- `BrandHomeApplication` demonstrates product behavior and local form state.
- `BrandHomeInstall` shows the minimal consumer entrypoint.

These are guide components, not a parallel product component library.

## Verification Boundary

Vitest covers deterministic brand data, adapters, generated CSS, SSR variables, contrast pairs, and app-config wiring.

Playwright covers the integration surface changed by this repository:

- representative guide pages load without unexpected accessibility-rule categories
- the custom theme-reveal slider supports keyboard interaction
- desktop and mobile homepage composition remain stable

Known visual contrast and Docus shell findings remain explicit baseline debt until the dedicated visual and accessibility pass. The suite fails when a new rule category appears. It does not retest unchanged Nuxt UI internals.

## Build Boundary

Docus, Nuxt Content, and OG-image generation make this guide heavier than a normal consumer of the brand layer. Build-memory and bundle findings must therefore be attributed to a measured build phase before changing runtime brand code or raising resource limits further.

The current Windows reference build was measured with Node's heap capped at 4 GB:

- the regular Node-server build exhausts the heap while Nitro initializes the prerenderer
- disabling `nuxt-og-image` allows all 69 routes to prerender, but the build then exhausts the heap while bundling the Nitro server
- the static `nuxt generate` path also exhausts the heap while initializing the prerenderer and would remove Docus' MCP server capability

OG-image generation therefore increases peak pressure but is not the root cause. The shared Docus, Nuxt Content, and Nitro build graph exceeds the 4 GB cap before brand-specific runtime code becomes relevant. The `pnpm build` script keeps the explicit 8 GB heap allowance as a documented compatibility measure; it is not a requirement for projects that only consume this brand layer. Re-evaluate it when Docus, Nuxt Content, or Nitro changes rather than propagating the allowance to consumers.
