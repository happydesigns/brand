// @ts-check
import withNuxt from './guide/.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: [
      'guide/app/layouts/**/*.vue',
      'guide/app/pages/**/*.vue'
    ],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
)
