# Contributing

Read `README.md` before making changes.

This document defines contribution standards for human contributors and automated coding agents.

## Repository Hygiene

Keep the repository conventional and tool-neutral.

Do not add tool-specific files or folders unless they are part of the agreed project setup. Avoid adding files only to support a specific editor, assistant, or automation tool.

Project context should live in normal project documentation such as `README.md`, `ARCHITECTURE.md`, `DESIGN.md`, `SECURITY.md`, `API.md`, `DEPLOYMENT.md`, or `CONTRIBUTING.md`.

Prefer documentation that is useful to all contributors.

Use `@happydesigns/business` as the root package identity unless a later naming decision changes it. Keep module package names under the `@happydesigns` scope when package names are needed.

## Project Knowledge Files

Use these files for their intended purpose:

- `README.md` - project purpose, setup, usage, and current MVP scope
- `ARCHITECTURE.md` - system structure, module boundaries, data flow, and major technical decisions
- `DESIGN.md` - product UX, Nuxt UI usage, branding, and Nuxt Layer expectations
- `SECURITY.md` - privacy rules, sensitive boundaries, secrets, uploads, financial artifacts, and AI/provider handling
- `API.md` - HTTP API, MCP, OAuth, automation, and integration contracts
- `DEPLOYMENT.md` - local setup, deployment targets, runtime configuration, and hosting notes

Prefer updating one of these files over introducing new documentation files. Add new root-level documentation only when the topic has a durable purpose that does not fit the existing files.

## Scope and Change Size

Keep changes focused on the agreed scope.

Prefer small, reviewable changes over large rewrites. Roadmap items, opportunistic improvements, and unrelated refactors should be handled separately.

Preserve existing behavior unless the change intentionally modifies it.

## Implementation Standards

Follow the existing project structure, naming conventions, and coding style.

Prefer precise types, explicit data shapes, and clear interfaces. Validate external inputs at system boundaries.

Do not silently swallow errors. Return or throw meaningful errors appropriate to the layer.

Avoid bypassing type, lint, formatting, or static-analysis rules. Suppressions should be local, justified, and used only when the alternative would make the code worse.

Prefer straightforward implementation over cleverness.

## Architecture

Favor simple, readable architecture.

Keep core business logic separate from framework, infrastructure, and integration details where practical.

Keep entry points thin. Reusable logic should live in domain services, application services, packages, or utilities rather than directly in UI components or route handlers.

Use plain TypeScript for deterministic core logic when Nuxt is not needed. Use Nitro for server/runtime integration. Use Nuxt for the user experience, app composition, and UI. Do not make the user experience worse for abstraction, and do not split packages before the boundary is useful.

Use abstractions when they make code easier to understand, test, or change. Avoid abstractions that only add indirection.

Document important architectural decisions when they affect future contributors.

## Branding and Nuxt Layers

Keep the core product brand-neutral. Use Nuxt UI for the default component system and token-driven styling.

Personal, tenant-specific, or customer-specific branding should be supplied through importable Nuxt Layers. Branding layers may override app config, colors, logos, metadata, public assets, layouts, and customer-facing copy.

Branding layers must not own core domain logic, privacy enforcement, deterministic checks, financial artifact handling, authorization, audit behavior, storage behavior, or public API contracts.

When adding UI, prefer semantic product components and Nuxt UI primitives. Avoid hardcoded brand colors, logos, slogans, gradients, or customer-specific assumptions in reusable product code.

## Security and Privacy

Never hardcode secrets, tokens, credentials, or environment-specific endpoints.

Do not commit generated local data, uploaded files, logs, private financial artifacts, or secrets.

Use environment variables or runtime configuration for deployment-specific values.

Do not send private or sensitive user data to external services unless the project explicitly allows it.

Avoid logging sensitive payloads, credentials, personal data, invoice data, tax data, payment data, or internal-only information.

## Dependencies

Do not add new dependencies unless they are necessary for the current change.

Prefer well-maintained, widely used packages. Before adding a dependency, consider whether the existing stack already solves the problem.

If a dependency is added, ensure it is justified by the implementation and reflected in the appropriate lockfile.

## Testing

Add or update tests when changing logic.

Prioritize tests for:

- parsing
- validation
- authorization
- security-sensitive behavior
- financial calculations
- invoice numbering
- E-Rechnung generation and parsing
- data transformation
- public contracts or APIs

If tests are not practical for a change, note the reason in the pull request or final summary.

## Commits

Use Conventional Commits.

Examples:

- `feat: add invoice draft model`
- `fix: validate missing buyer address`
- `test: add e-invoice parser cases`
- `docs: update deployment notes`
- `refactor: extract document storage adapter`

Avoid vague commit messages such as `update`, `fix stuff`, `changes`, or `wip`.

## Review Checklist

Before finishing a change, verify that it:

- matches the agreed scope
- follows repository conventions
- does not introduce unrelated changes
- does not add unnecessary files or dependencies
- preserves existing behavior unless intentionally changed
- includes relevant tests or has a clear reason why tests are not needed
- updates documentation when relevant
- avoids leaking secrets, private data, or environment-specific values
