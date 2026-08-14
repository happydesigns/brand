import runtime from './brand-runtime.json'

const theme = runtime.theme

export default defineAppConfig({
  ui: theme.ui,
  id: {
    name: 'happydesigns-brand',
    theme,
    defaultTheme: theme.name,
    themes: [theme],
    assets: runtime.assets
  }
})
