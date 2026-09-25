import { test, expect } from '@playwright/test'

test("register", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()

    /*let [page2] = await Promise.all([
        page.waitForEvent("popup"),
        await page.getByRole('button', { name: 'Login' }).click()
    ])*/

    await page.locator("//span[text()='Recruitment']").click();

    await page.getByRole('button', { name: 'Add' }).click()

    await page.locator("//input[@name='firstName']").fill("Ajay")
    await page.locator("//input[@name='lastName']").fill("Shukla")
    await page.locator("//div[text()='-- Select --']").click();
    //await page.locator("//div[text()='Senior QA Lead']").click()
    await page.getByText("Senior QA Lead", { exact: true }).click();
    await page.getByRole('textbox', { name: 'Type here' }).first().fill("ajayshukla@gmail.com")
    await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill('+91 90909090')
    await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).fill("playwright");
    await page.locator("//input[@placeholder='yyyy-dd-mm']").fill("2025-08-03");
    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/addCandidate/)
    //await expect(page.getByText("Ajay Shukla", { exact: true })).toBeVisible();
    await expect(page.getByText('Reject', { exact: true })).toBeVisible();
    await expect(page.getByText('Shortlist', { exact: true })).toBeVisible();


})
