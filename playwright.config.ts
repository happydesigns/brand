import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  snapshotPathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'github' : 'list',
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      maxDiffPixelRatio: 0.03
    }
  },
  use: {
    baseURL: 'http://127.0.0.1:3030',
    colorScheme: 'light',
    trace: 'retain-on-failure'
  },
  projects: [
    {
      name: 'desktop',
      grepInvert: /@mobile/,
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 1000 }
      }
    },
    {
      name: 'mobile',
      use: {
        ...devices['Pixel 7']
      },
      grep: /@mobile/
    }
  ],
  webServer: {
    command: 'pnpm dev --host 127.0.0.1 --port 3030',
    env: {
      ...process.env,
      NUXT_DEVTOOLS: 'false'
    },
    url: 'http://127.0.0.1:3030',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
})
