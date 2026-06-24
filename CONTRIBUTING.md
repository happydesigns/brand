# Contributing

Read `README.md` before making changes.

This document defines contribution standards for human contributors and automated coding agents.

## Repository Hygiene

Keep the repository conventional and tool-neutral.

Do not add tool-specific files or folders unless they are part of the agreed project setup. Avoid adding files only to support a specific editor, assistant, or automation tool.

Project context should live in normal project documentation such as `README.md`, `ARCHITECTURE.md`, `DESIGN.md`, `SECURITY.md`, `API.md`, `DEPLOYMENT.md`, or `CONTRIBUTING.md`.

Prefer documentation that is useful to all contributors.

Use `@happydesigns/brand` as the root package identity unless a later naming decision changes it. Keep related package names under the `@happydesigns` scope when package names are needed.

## Project Knowledge Files

Use these files for their intended purpose:

- `README.md` - project purpose, setup, usage, and current MVP scope
- `ARCHITECTURE.md` - system structure, module boundaries, data flow, and major technical decisions
- `DESIGN.md` - product UX, Nuxt UI usage, branding, and Nuxt Layer expectations
- `SECURITY.md` - privacy rules, sensitive boundaries, secrets, uploads, and external-provider handling
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

Keep brand data, theme configuration, visual assets, and page-specific documentation clearly separated. Durable brand values belong in typed data, app config, CSS tokens, assets, or content files rather than being repeated as one-off component markup.

Use Nuxt for the guide experience, app composition, and layer behavior. Use plain TypeScript utilities for deterministic brand data, mapping, and reusable helpers when Nuxt is not needed.

Use abstractions when they make the brand layer easier to understand, test, or reuse. Avoid abstractions that only add indirection.

Document important architectural decisions when they affect future contributors or the boundary between the brand layer and future shared guide infrastructure.

## Branding and Nuxt Layers

This repository is the happydesigns Nuxt UI brand layer and brand guide. It should prove how the happydesigns identity behaves through Nuxt UI components without creating a parallel component system.

Prefer `app.config.ts`, semantic Nuxt UI utilities, and shared CSS tokens for repeated theme behavior. Use local component wrappers only for happydesigns brand primitives, such as logos, section labels, color fields, and structural guide helpers.

Public documentation should speak as the happydesigns brand guide. Do not describe the guide as a generic template, even when a pattern may later move into shared guide infrastructure.

When a pattern is meant to become reusable beyond this brand, keep the happydesigns-specific identity, copy, assets, and tokens separate from the reusable guide structure.

## Security and Privacy

Never hardcode secrets, tokens, credentials, or environment-specific endpoints.

Do not commit generated local data, uploads, logs, private artifacts, or secrets.

Use environment variables or runtime configuration for deployment-specific values.

Do not send private or sensitive user data to external services unless the project explicitly allows it.

Avoid logging sensitive payloads, credentials, personal data, or internal-only information.

## Dependencies

Do not add new dependencies unless they are necessary for the current change.

Prefer well-maintained, widely used packages. Before adding a dependency, consider whether the existing stack already solves the problem.

If a dependency is added, ensure it is justified by the implementation and reflected in the appropriate lockfile.

## Testing

Add or update tests when changing logic.

Prioritize tests for:

- token and theme mappings
- brand data transformations
- reusable utilities
- component behavior with interactive state
- accessibility-sensitive interactions
- public layer contracts and exports

If tests are not practical for a change, note the reason in the pull request or final summary.

## Commits

Use Conventional Commits.

Examples:

- `feat: add logo usage showcase`
- `fix: correct inverse wordmark treatment`
- `test: add brand token mapping cases`
- `docs: update logo usage guidance`
- `refactor: extract component example data`

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
