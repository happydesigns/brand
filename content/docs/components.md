---
title: Components
description: UI guidance for carrying the happydesigns brand into product contexts.
navigation:
  icon: i-lucide-component
---

Components should feel useful before they feel branded. The happydesigns interface system uses visible structure, warm neutral surfaces, precise spacing, and controlled color.

The guidance here documents how existing Nuxt UI components and brand tokens should be used. It does not introduce new component designs.

## Component Philosophy

- Start with clarity, accessibility, and repeatable behavior.
- Use fine borders and spacing before decorative color.
- Keep controls compact, confident, and predictable.
- Use color to clarify state or intent, not to decorate every surface.
- Let coral stay valuable by using it sparingly.

## Buttons

Primary actions use graphite fills with coral focus treatment. They should feel confident and brand-owned without becoming loud.

::u-button
Start a project
::

Secondary actions use outlined or subtle treatments. They should support the main action without competing with it.

::u-button{color="neutral" variant="outline" icon="i-lucide-search-check"}
Review details
::

Use button labels that describe the action:

- `Save changes`
- `Copy token`
- `Start a project`
- `Review details`

Avoid vague labels such as `Submit`, `Click here`, or `Learn more` when a more specific action exists.

## Cards And Panels

Cards frame repeated items, previews, and genuinely contained tools. They should rely on borders, spacing, and calm surfaces rather than heavy shadows.

Use cards for:

- Repeated resources or examples.
- Component previews.
- Small tools or settings groups.
- Asset or token summaries.

Do not nest cards inside cards. If content needs more structure, use dividers, headings, spacing, or a full-width section.

## Forms And Focus States

Forms should feel clear and trustworthy. Labels stay short, borders remain visible, and focus states use coral as a precise signal.

::u-alert{icon="i-lucide-info" color="secondary" variant="subtle" title="Form tone"}
Use direct labels and avoid explaining controls that behave conventionally.
::

Good form behavior:

- Use concrete labels: `Email`, `Project type`, `Budget range`.
- Keep help text short and close to the field.
- Use coral for focus, not for every border.
- Use rose only for actual errors.
- Make recovery clear when validation fails.

## Badges And Status

Badges are for short status labels and compact metadata. They should help scanning, not decorate lists.

::u-badge{color="secondary" variant="subtle"}
Nuxt module
::

::u-badge{color="success" variant="subtle"}
Available
::

Use badge colors with intent:

| Intent | Color role |
| --- | --- |
| Technical/editorial | Petrol |
| Success, availability, constructive progress | Seafoam |
| Metadata and quiet information | Plum or neutral |
| Soft warning | Butter |
| Error or destructive state | Rose |

## Alerts And Feedback

Feedback should be calm, specific, and recovery-oriented.

- Use petrol for informational guidance.
- Use seafoam for successful completion or availability.
- Use butter for warnings that need attention but are not blocking.
- Use rose for destructive actions, errors, and blocking validation.

Avoid generic alert text. Explain what happened and what the user can do next.

## Technical Surfaces

Technical surfaces include code blocks, token tables, package references, changelog notes, and implementation examples.

They should feel precise and quiet:

- Use mono for exact code and token names.
- Use sand borders and warm white or inset surfaces.
- Use petrol as the technical/editorial counterweight.
- Avoid glossy panels, complex shadows, or saturated backgrounds.

## Empty, Success, And Error States

Empty states should help users understand the next useful action. They should not become marketing panels.

Good empty state:

- Title: `No projects yet`
- Text: `Start with the first project brief, then add details as the scope becomes clear.`
- Action: `Start a project`

Success states should be short and constructive:

- `Changes saved.`
- `Token copied.`
- `Preview generated.`

Error states should be specific:

- `The file could not be uploaded. Check the format and try again.`
- `The token name is already used. Choose a unique name.`

## Color Behavior

| Color | Component use |
| --- | --- |
| Graphite | Strong primary actions, high-emphasis text, dark surfaces. |
| Coral | Focus, activation, selection, signature details. |
| Petrol | Secondary depth, technical/editorial guidance. |
| Seafoam | Success, availability, constructive states. |
| Plum | Metadata, quiet labels, non-primary information. |
| Butter | Soft warnings. |
| Rose | Errors and destructive actions only. |
| Sand | Borders, separators, muted panels, subdued structure. |

## Do

- Use graphite for strong primary actions.
- Use coral for focus and activation.
- Use fine borders and spacing to create structure.
- Keep cards and controls compact.
- Use semantic color roles consistently.
- Make component copy specific and action-oriented.

## Do Not

- Do not make huge coral CTA surfaces the default.
- Do not add decorative color dots to every component.
- Do not use rose for anything other than errors or destructive behavior.
- Do not rely on heavy shadows, glossy effects, or generic SaaS dashboard styling.
- Do not make components feel branded at the expense of usability.
