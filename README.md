# happydesigns brand layer

Nuxt UI brand layer for happydesigns: thoughtful design for the modern web.

This package uses native Nuxt UI configuration with happydesigns Tailwind v4 theme tokens, Nuxt UI semantic color mappings, warm brand CSS variables, typography defaults, logos, and brand primitives. The repository also contains the brand guide as a separate consumer of the public layer and the optional `@happydesigns/id/studio` and `@happydesigns/id/guide` helpers.

## Brand sources and adapters

The editable source is `src/brand/brand.studio.json`: identity, named palettes, typography, asset roles and the complete Nuxt UI theme. `src/brand/brand.ts` and `src/brand/brand-theme.ts` validate and expose its values. The guide reuses those sources and adds explanatory usage text without becoming a runtime dependency.

The explicit Nuxt UI integration stays in `src/brand/brand-theme.ts`. It preserves the explicit mapping from named brand colors to Nuxt UI roles; Nuxt UI keeps its normal color-mode behavior, while the brand supplies targeted CSS-variable overrides for the surfaces it owns.

The runtime data flow is deliberately one-way:

```text
brand.studio.json → validation → native app config, asset metadata and CSS
```

`app/app.config.ts`, `app/brand.generated.json`, `app/assets/css/tokens.generated.css`, and `app/assets/css/theme.generated.css` are generated from these sources. Run `pnpm generate:layer` after editing brand data or adapter mappings. Build, dev, and typecheck regenerate them automatically, and `pnpm test` rejects drift. See `ARCHITECTURE.md` for the ownership boundary between this package and `@happydesigns/id`.

## Usage

The Studio host opts into the Course and Booking packages' `/preview` layers.
The catalog uses stable capability names and keys (`course`, `booking`).
Course embeds its real `/courses` application. Each capability owns its
renderer, page navigation and isolated fixtures. ID owns the editor and preview
protocol, without depending on the capability packages.

Studio's product link returns to the Brand homepage; its Docs link opens the
brand guide. Template cards show the real applications with the current draft
and color mode, loading only while the template picker is open.

For local development, keep `id`, `course` and `booking` as sibling checkouts and
build Booking with `pnpm --dir ../booking build` before installing this host.

Course uses Comark 0.6 while Docus's assistant still uses Comark 0.4. The
versioned `@comark/nuxt` patch resolves its component and helper imports from
the module's own package, so both runtimes can coexist. It adds no global
alias or version override. Remove the patch once the upstream module resolves
these imports itself; the Course workspace and Docus browser tests cover this
integration.

`pnpm prepare:docs` generates the isolated `.nuxt-check` types referenced by
`docs/tsconfig.json`. Lint, tests and typechecking prepare that directory
automatically, without reusing a running dev server's generated types.

CI checks out the same packages at pinned commits. For the private Booking
repository, configure the `HAPPYDESIGNS_BOOKING_TOKEN` Actions secret with
read-only repository contents access to `happydesigns/booking`. The default
GitHub token can only read the current private repository. If ID is private,
provide `HAPPYDESIGNS_ID_TOKEN` with the corresponding read-only access as well.

The repository and package root is the guide-free Nuxt layer. It registers `@nuxt/ui` and native generated app config, while the Docus application in `docs/` extends the root plus `@happydesigns/id/studio` and `@happydesigns/id/guide` and acts as its reference consumer. Downstream applications extend only `@happydesigns/brand`; they do not need id or Docus at runtime.

Until the package is published, pin the remote layer to a reviewed commit:

```ts
export default defineNuxtConfig({
  extends: ['github:happydesigns/brand#<commit>']
})
```

After publication, consumers can extend `@happydesigns/brand`; for local workspace usage, point `extends` at `../brand`. The consuming project installs Nuxt UI directly.

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

- `HDBrandMark` — the full happydesigns symbol, used for app icons, social avatars, square contexts, and brand moments
- `HDWordmark` — the default identity mark for headers, navigation, documentation, and slim horizontal layouts
- `HDLogo` — role-based logo renderer; use `variant="wordmark"`, `variant="symbol"`, `variant="lockup"`, or `variant="signature"`
- `HDSectionLabel` — eyebrow label with the brand dot, used to open sections
- `HDDot` — the coral oval from the logo, reused as a recurring visual motif in design elements
- `HDColorField` — atmospheric canvas panel for brand color moments
Logo components use the supplied final SVG assets in `app/assets/logos`. The wordmark is the everyday identity for website and documentation headers. The full symbol is the square mark for favicon, app icon, social/GitHub avatar, covers, and brand moments. Lockups are controlled compositions for introductions, covers, production contexts, and brand-owned sections; they should not replace the wordmark in cramped headers.

## Brand System Notes

The visual system should feel modern, warm, fresh, professional, design-led, technically excellent, approachable, clean, sustainable, and thoughtful without becoming sterile.

Structure comes first. Use visible frames, fine borders, quiet grids, and warm neutrals as the main system. Artistic gestures belong in controlled canvas areas such as `HDColorField` — not as global wallpaper.

## Development

```bash
pnpm install
pnpm generate:layer
pnpm test
pnpm test:e2e
pnpm dev
pnpm verify
```

The browser suite covers representative brand integration rather than retesting Nuxt UI itself. It guards the homepage composition, mobile first fold, the custom theme-reveal interaction, and unexpected accessibility-rule regressions on central guide pages.

## Explore and customize

Open `/studio?browse=true` for Components and Templates. Customize opens Brand, Palette, Typography and Appearance. Compare the draft with the applied brand, then use Changes to review it. In local development, Apply updates the connected `src/brand/brand.studio.json` after a revision check and regenerates the derived files. On the public site, download the source and run `pnpm generate:layer` after applying it in your checkout. New client brands start from New brand in the project menu.

The short guide keeps palette meaning, typography, logos and voice. Nuxt UI owns the component API documentation. Legacy component-family URLs redirect to the shared preview. `/use` explains installation and the source workflow.

## Capability template previews

The docs host opts into `@happydesigns/course-nuxt/preview`. Its real `/courses`
catalog, course and lesson routes, shared layout and Markdown content live in
**course**. The Course playground and Studio render those same pages. There is
no separate Academy implementation.
The public brand layer does not extend Course; this dependency belongs only to the
docs application. Selecting Course in Studio previews the brand in the full application;
it does not add Course to an exported brand project.

For this unpublished integration, keep `id`, `course` and `brand` as sibling
checkouts. Run `pnpm --dir ../course --filter @happydesigns/course build`, then
`pnpm install` here. Local file dependencies and the workspace core override model
the package boundaries without publishing experimental versions. Refresh the local
file package installation after changing a sibling package. Stop the Brand dev
server, run `pnpm install --frozen-lockfile --ignore-scripts` in this repository,
then restart `pnpm dev`. Existing files can reflect sibling edits through pnpm's
hard links while newly added files are still missing from the installed package;
refreshing the installation restores a consistent package file set. If a sibling's
dependencies changed, use `pnpm install` and review the resulting lockfile changes.
Rebuild the Course core or Booking first when their compiled output changed.
Replace these local references with reviewed published versions together when
releasing this pilot.

The host pins one Nuxt Content version for Docus and Course. The existing database
startup patch is retained for that version. ID's route-preview protocol opens
`/courses` on selection and synchronizes course navigation between comparison
frames. Each Studio frame keeps learner state in memory; normal Course visits
retain browser persistence. The catalog, lessons, checkpoints and code workspace
use the same components and content in both contexts.
The host shell takes precedence over capability layers: keep Docus before the
optional preview in the extends array. Otherwise an inherited foundation app shell
can replace Docus navigation, metadata and footer.

## Studio project downloads

The development and documentation build prepare a reviewed id tarball from the documented sibling id checkout using `pnpm prepare:studio`. It is served only by the docs host under `/studio-packages/id.tgz`, and bundled into Studio project ZIPs. Download recipients can install and build without sibling repositories. The generated asset is ignored by Git and is not part of the public Brand runtime layer.

The Docs template renders the actual Docus guide routes. Its header, search, page layout and navigation come from Docus; only the logo config, Studio shortcut and copyright slot are brand-specific. The same content works in the guide and the isolated Studio frame.
