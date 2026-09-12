import { defineConfig } from '@playwright/test'
import config from './playwright.config'

process.env.STUDIO_PRODUCTION = 'true'

export default defineConfig({
  ...config,
  grep: /production loads|homepage retains|real Docus routes|Course template|capability template|Booking template|live template/,
  use: { ...config.use, baseURL: 'http://127.0.0.1:3031' },
  webServer: {
    command: 'node .output/server/index.mjs',
    env: { ...process.env, PORT: '3031', HOST: '127.0.0.1' },
    url: 'http://127.0.0.1:3031',
    reuseExistingServer: false,
    timeout: 60_000
  }
})
