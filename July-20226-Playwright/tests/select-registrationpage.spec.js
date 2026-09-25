import { test, expect } from '@playwright/test'

test('page Registration', async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//a[text()='New user? Signup']").click()

    await page.getByRole('textbox', { name: 'Name' }).fill("Test123")

    let emaiiid = `Example${Date.now()}@gmail.com`
    console.log(emaiiid);

    await page.getByRole('textbox', { name: 'Email' }).pressSequentially(emaiiid) |
        await page.getByRole('textbox', { name: 'Password' }).fill("test@1234")

    await page.locator("//label[text()='Playwright']").click();
    await page.locator("//input[@id='gender2']").click();

    await page.locator("//select[@id='state']").selectOption({ value: 'Assam' })
    await page.locator("//select[@id='hobbies']").selectOption(['Reading', 'Singing', 'Dancing'])

    await page.getByRole('button', { name: 'Sign Up' }).click()

    //await page.locator("//div[text()='Signup successfully, Please login!']").isVisible
    await expect(page.locator("//div[text()='Signup successfully, Please login!']"), { message: 'validation failed' }).toBeVisible()


})