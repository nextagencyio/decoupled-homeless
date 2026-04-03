import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays organization name', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Haven House/)
    await expect(page.locator('text=Haven House').first()).toBeVisible()
  })

  test('displays hero section content from Drupal', async ({ page }) => {
    await page.goto('/')
    // The homepage should have hero content from the CMS
    await expect(page.locator('text=Everyone Deserves').first()).toBeVisible()
  })

  test('displays navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/shelters"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/programs"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/resources"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/stories"]').first()).toBeVisible()
  })
})

test.describe('Shelters', () => {
  test('lists shelters from Drupal', async ({ page }) => {
    await page.goto('/shelters')
    await expect(page).toHaveTitle(/Shelters/)
    // Should have at least one shelter card
    await expect(page.locator('text=Harbor Main Emergency Shelter').first()).toBeVisible()
    await expect(page.locator('text=Family Haven Shelter').first()).toBeVisible()
  })

  test('shelter detail page loads via path', async ({ page }) => {
    await page.goto('/shelters')
    // Click into a shelter
    const shelterLink = page.locator('a:has-text("Harbor Main Emergency Shelter")').first()
    await shelterLink.click()
    await expect(page.locator('h1:has-text("Harbor Main Emergency Shelter")')).toBeVisible()
  })
})

test.describe('Programs', () => {
  test('lists programs from Drupal', async ({ page }) => {
    await page.goto('/programs')
    await expect(page).toHaveTitle(/Programs/)
    await expect(page.locator('text=Job Training').first()).toBeVisible()
  })
})

test.describe('Resources', () => {
  test('lists resources from Drupal', async ({ page }) => {
    await page.goto('/resources')
    await expect(page).toHaveTitle(/Resources/)
    await expect(page.locator('text=Community Food').first()).toBeVisible()
  })
})

test.describe('Impact Stories', () => {
  test('lists stories from Drupal', async ({ page }) => {
    await page.goto('/stories')
    await expect(page).toHaveTitle(/Impact Stories/)
    await expect(page.locator('text=Marcus').first()).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1').nth(1)).toBeVisible()
    await expect(page.locator('text=Harbor of Hope').first()).toBeVisible()
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page).toHaveTitle(/Contact/)
    await expect(page.locator('text=Contact Us').first()).toBeVisible()
  })
})
