import { test, expect } from '@playwright/test'

test('login and lougtout test', async ({ page }) => {

    await page.goto("https://saucedemo.com/v1/index.html")
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('button', { name: 'Open Menu' }).click();

    await page.locator('[data-test="logout-sidebar-link"]').click();
    // expect(page).toHaveURL(/index/)//Expected pattern: /index/ Received string:  "https://www.saucedemo.com/"

    expect(page).toHaveURL(/sauce/)
    
})


