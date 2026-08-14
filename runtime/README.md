# happydesigns brand runtime layer

This directory is the consumer-safe Nuxt layer for the happydesigns brand. It contains generated runtime data, generated tokens, shared semantic CSS, and public identity assets without the brand-guide pages, content, layouts, or Docus configuration from the repository root.

Until `@happydesigns/brand` is published, pin the remote layer to a reviewed commit:

```ts
export default defineNuxtConfig({
  extends: [
    'github:happydesigns/brand/runtime#<commit>',
    'docus'
  ]
})
```

The consuming project must install Nuxt UI directly. Run `pnpm generate:runtime-layer` in the brand repository after changing its definition, adapter mapping, runtime assets, or semantic variables. Tests reject drift between the source contracts and the committed runtime artifacts.
