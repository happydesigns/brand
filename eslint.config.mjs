// @ts-check
import withNuxt from './docs/.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: [
      'docs/app/layouts/**/*.vue',
      'docs/app/pages/**/*.vue'
    ],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
)
