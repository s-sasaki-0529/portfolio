import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './spec',
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [['list'], ['html']],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 14'] }
    }
  ],
  snapshotPathTemplate: 'spec/__snapshots__/{testFilePath}/{projectName}/{arg}.snap.png'
})
