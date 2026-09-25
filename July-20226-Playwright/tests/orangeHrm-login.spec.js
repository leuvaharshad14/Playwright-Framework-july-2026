import { test, expect } from '@playwright/test'
test('login Validation', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).pressSequentially('admin123');
    await page.getByRole('button', { name: 'Login' }).click()

    await expect(page).not.toHaveURL(/login/);

    await page.context().storageState({ path: 'storageState.json' })



    // await expect(page).toHaveURL(/dashboard/);
})

test.use({ storageState: 'StorageState.json' })
test('login with storageState', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")





})