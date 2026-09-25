import { test, expect } from '@playwright/test'

test('login test', async ({ page }) => {
    await page.goto("https://www.flipkart.com/account/login")
    await page.locator("(//input[@type='text'])[2]").fill("123")




})