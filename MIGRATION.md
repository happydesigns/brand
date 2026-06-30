# Brand to ID Migration Map

This branch migrates `@happydesigns/brand` onto `@happydesigns/id` without changing the public happydesigns guide.

## Stays in `brand`

- happydesigns logo assets, favicon, app icon, and logo doctrine
- happydesigns palette meaning, color roles, typography guidance, and voice
- public documentation copy and page personality
- landing page, footer, showcase examples, and component guidance
- final happydesigns theme decisions that are not reusable infrastructure

## Uses `id`

- `@happydesigns/id/nuxt` as reusable Nuxt UI brand-guide infrastructure
- `defineBrandTheme()` for the canonical happydesigns theme contract
- `defineBrandGuide()` for machine-readable guide metadata
- `createNuxtUiAppConfig()` to turn the happydesigns theme into Nuxt UI app config

## Possible Upstream Later

- docs-link patterns for Nuxt UI component references
- component example framing when it is generic enough for other brand guides
- guide shell primitives that are not specific to the happydesigns visual language

Do not upstream a pattern just because it looks reusable. Move it into `id` only when the migrated brand guide proves it is generic Nuxt UI brand-layer infrastructure.
