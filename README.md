# happydesigns brand layer

Nuxt UI brand layer for happydesigns: thoughtful design for the modern web.

This package provides Tailwind v4 theme tokens, Nuxt UI semantic color mappings, warm brand CSS variables, typography defaults, logo and brand primitives, frame/grid primitives, and a small visual QA playground.

## Usage

Extend the layer from a Nuxt project:

```ts
export default defineNuxtConfig({
  extends: ['@happydesigns/brand']
})
```

For local workspace usage, point `extends` at this package directory or install it under the package name `@happydesigns/brand`.

## Color Roles

- `coral` is the signature accent and logo dot. Canonical value: `#F28564`.
- `graphite` is the premium text and filled-control color. Canonical value: `#242423`.
- `warm-white` is the default page ground. Canonical value: `#FAF7F2`.
- `peach` is atmosphere and logo-field color. Canonical value: `#FFE4D4`.
- `petrol` is the technical counterweight for developer, module, and system signals.
- `butter` is a soft warning color.
- `plum` is quiet informational color.
- `seafoam` is constructive success and sustainability color.
- `sand` is the warm neutral scale for borders, muted surfaces, and secondary UI.
- `rose` is restrained destructive and error color.

Peach is intentionally not mapped as a Nuxt UI semantic color. It is available as raw Tailwind tokens and should appear in controlled canvas areas, logo fields, and atmospheric accents.

Coral should not become the default large CTA surface everywhere. Use graphite for premium filled actions and coral for focus rings, dots, active states, and precise signature details.

## Nuxt UI Mapping

The layer configures Nuxt UI semantic colors:

```ts
primary: 'coral'
secondary: 'petrol'
success: 'seafoam'
info: 'plum'
warning: 'butter'
error: 'rose'
neutral: 'sand'
```

It also adds light-touch defaults for buttons, badges, cards, inputs, textarea, select, tabs, alerts, and keyboard hints.

## Typography

The brand font stack is:

```css
--font-sans: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
--font-mono: "Geist Mono", "SFMono-Regular", ui-monospace, monospace;
```

The layer does not bundle external font files. Add font loading in the consuming app if those fonts are not already available.

## Components

- `HDBrandMark` — the favicon-derived symbol, used standalone or as an app icon in product contexts
- `HDWordmark` — the text logo, for headers and document covers
- `HDLogo` — combines `HDBrandMark` and `HDWordmark`; use `variant="wordmark"` or `variant="symbol"`
- `HDSectionLabel` — eyebrow label with the brand dot, used to open sections
- `HDDot` — the coral oval from the logo, reused as a recurring visual motif in design elements
- `HDColorField` — atmospheric canvas panel for brand color moments
Logo components use the supplied final SVG assets in `app/assets/logos`. The text-only wordmark is used for website display. The favicon mark is reserved for favicon and app-icon usage. Do not combine them as a lockup — they are intentionally separate brand assets.

## Brand System Notes

The visual system should feel modern, warm, fresh, professional, design-led, technically excellent, approachable, clean, sustainable, and thoughtful without becoming sterile.

Structure comes first. Use visible frames, fine borders, quiet grids, and warm neutrals as the main system. Artistic gestures belong in controlled canvas areas such as `HDColorField` — not as global wallpaper.

## Development

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
```
