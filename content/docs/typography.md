---
title: Typography
description: Type roles, hierarchy, rhythm, and practical writing samples.
navigation:
  icon: i-lucide-type
---

Typography defines the reading voice of happydesigns. It should feel warm, modern, and precise: clear enough for technical documentation, but not stripped of character.

The current guide defines font roles and behavior, not a rigid final type scale. Use the examples here as direction for hierarchy and application.

## Type Roles

| Role | Typeface | Use |
| --- | --- | --- |
| Primary sans | Bricolage Grotesque | Headings, body copy, navigation, labels, buttons, and editorial text. |
| Technical mono | Geist Mono | Code, tokens, file names, package names, versions, and compact metadata. |

## Primary Typeface

Bricolage Grotesque carries the warmth and character of the brand. It should make happydesigns feel design-led and approachable without becoming playful for its own sake.

Use it for:

- Page titles and section headings.
- Body copy and longer explanations.
- Navigation, buttons, and compact interface text.
- Labels that need to feel structured but still human.

```css
font-family: "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
```

## Mono Typeface

Geist Mono is the technical counterweight. It helps code, tokens, versions, and compact metadata scan as implementation detail.

Use mono for:

- Token names such as `--ui-primary` or `colors.coral`.
- File names such as `happydesigns-wordmark.svg`.
- Package names such as `@happydesigns/brand`.
- Code snippets, terminal examples, and version labels.

```css
font-family: "Geist Mono", "SFMono-Regular", ui-monospace, monospace;
```

Do not use mono simply to make something feel technical. If the content is normal language, use the primary sans.

## Hierarchy Principles

- Make structure visible before adding expression.
- Use size, weight, spacing, and position before color.
- Keep headings confident and compact.
- Keep body copy calm, readable, and easy to scan.
- Use one clear hierarchy per view; avoid many competing heading styles.
- Keep letter spacing at `0` for normal prose and display text.

## Heading Behavior

Headings can feel editorial and confident, especially on landing pages, documentation intros, and brand-owned moments. They should still read directly.

Good heading behavior:

- Short enough to scan.
- Strong enough to anchor the page.
- Paired with plain supporting copy.
- Set in the primary sans, not mono.

Avoid:

- Decorative headings that obscure meaning.
- Overly playful phrasing.
- Tightened letter spacing.
- Stacking multiple hero-sized headings in one view.

## Body Copy Behavior

Body copy should sound considered and practical. It should explain what matters without turning every rule into a manifesto.

Use body copy to:

- Explain why a decision exists.
- Connect visual choices to product use.
- Make guidance actionable.
- Support accessibility and maintainability.

Keep paragraphs short. If a rule needs more than a few sentences, split it into a table, list, or example.

## Labels And Metadata

Labels should be compact, structured, and restrained. They help people scan the system.

Use labels for:

- Section eyebrows.
- Token categories.
- Status and metadata.
- Short technical identifiers.

Labels may use uppercase styling in controlled places, but avoid turning every small text element into tracked uppercase. Too much label styling makes the system feel mechanical.

## Code And Tokens

Code and token typography should be precise and quiet.

Use inline code for exact names:

- `bg-default`
- `text-body`
- `happydesigns-symbol.svg`
- `@happydesigns/brand`

Use code blocks for implementation examples:

```css
--ui-bg: var(--color-warm-white);
--ui-primary: var(--color-coral-500);
--ui-secondary: var(--color-petrol-500);
```

## Practical Examples

| Context | Recommended behavior |
| --- | --- |
| Brand headline | Confident, direct, primary sans. Example: "Thoughtful design for the modern web." |
| Documentation intro | Plain explanation with one clear idea per paragraph. |
| Button label | Short verb phrase. Example: "Start a project", "Save changes", "Copy token". |
| Metadata | Mono only when it names a token, file, package, or version. |
| Error text | Primary sans, calm and specific. Reserve mono for the exact technical object if needed. |

## Do

- Use Bricolage Grotesque as the default reading voice.
- Use mono for exact technical references.
- Keep headings clear before expressive.
- Keep body text calm and scannable.
- Let spacing and borders support hierarchy.

## Do Not

- Do not invent a rigid type scale before the system defines one.
- Do not overuse monospace to fake technical depth.
- Do not use excessive letter spacing in prose.
- Do not make headings decorative at the cost of meaning.
- Do not mix too many type treatments in one small surface.
