---
title: Components
description: Reusable UI examples that prove the brand in product contexts.
navigation:
  icon: i-lucide-component
---

Component guidance connects brand tokens to real interface states. The same documentation shape can be reused for future brands while the underlying token data changes.

## Buttons

- Primary actions use graphite fills with coral focus treatment.
- Secondary actions use outlined or subtle treatments.
- Icon choice should clarify the command, not decorate it.

::u-button
Primary action
::

::u-button{color="neutral" variant="outline" icon="i-lucide-search-check"}
Review
::

## Forms

- Labels stay short and concrete.
- Borders remain visible.
- Focus states use the coral accent.

::u-alert{icon="i-lucide-info" color="secondary" variant="subtle" title="Form tone"}
Use direct labels and avoid explaining controls that behave conventionally.
::

## Cards

- Use cards for repeated items, previews, and genuinely framed tools.
- Keep radii small and shadows minimal.
- Do not nest cards inside cards.

## Badges

Use badges for short status labels and metadata only.

::u-badge{color="secondary" variant="subtle"}
Nuxt layer
::

::u-badge{color="success" variant="subtle"}
maintainable
::
