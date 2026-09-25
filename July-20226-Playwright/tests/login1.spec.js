import { test, expect } from '@playwright/test'

test.skip('login test', async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  await expect(page).toHaveTitle(/course/i)
})

test('loginPage', async ({ page }) => {

  await page.goto("https://freelance-learn-automation.vercel.app/login")
  await page.getByRole('textbox', { name: 'Enter Email' }).fill('admin@email.com')
  await page.getByRole('textbox', { name: 'Enter Password' }).pressSequentially("admin@123")
  await page.getByRole('button', { name: 'Sign in' }).click();

  //await page.getByRole('button', { name: 'Add to Cart right arrow' }).nth(1).click();
  await page.context().storageState({path:'storageStage.json'})
})

