import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page, viewport }) => {
  await page.goto('http://localhost:3000/about')
  await expect(page.getByText('笹木 信吾')).toBeVisible()
  if (viewport.width < 920) {
    await page.getByRole('button', { name: 'メインメニュー' }).click()
  }
})

test('about', async ({ page }) => {
  await page.getByRole('link', { name: 'about' }).click()
  await expect(page).toHaveScreenshot('about.png')
})

test('outputs', async ({ page }) => {
  await page.getByRole('link', { name: 'outputs' }).click()

  await page.getByText('Medium').click()
  await expect(page).toHaveScreenshot('outputs-medium.png')

  await page.getByText('Zenn').click()
  await expect(page).toHaveScreenshot('outputs-zenn.png')

  await page.getByText('Slideshare').click()
  await expect(page).toHaveScreenshot('outputs-slideshare.png')
})

test('experience', async ({ page }) => {
  await page.getByRole('link', { name: 'experience' }).click()
  await expect(page).toHaveScreenshot('experience-1.png', { fullPage: true })
  await page.getByRole('button', { name: '自社開発Webアプリケーション開発のリード' }).click()
  await expect(page).toHaveScreenshot('experience-2.png', { fullPage: true })
})
