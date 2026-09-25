import { test, expect } from '@playwright/test'

test('verify page title', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    let pageTitle = await page.title();
    console.log(`page title is ${pageTitle}`);
    expect(page).toHaveTitle(/HRM/)
})

test('verify page Url', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    expect(page).toHaveURL(/orangehrmlive/)
})

test('login Validation', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).pressSequentially('admin123');
    await page.getByRole('button', { name: 'Login' }).click

   // await expect(page).toHaveURL(/dashboard/);
})
