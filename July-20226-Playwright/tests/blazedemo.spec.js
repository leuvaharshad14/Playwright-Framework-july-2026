import { test, expect } from '@playwright/test'

test("assignment", async ({ page }) => {
    await page.goto("https://blazedemo.com/");

    await page.locator("//select[@name='fromPort']").selectOption({ value: 'Boston' })
    await page.locator("//select[@name='toPort']").selectOption({ value: 'New York' })
    await page.getByRole('button', { name: 'Find Flights' }).click()
    await page.locator("//form[@name='L4346']/following::td[1]/input").click();

    await expect(page).toHaveURL(/purchase/)
    await expect(page).toHaveTitle(/Purchase/)

    await expect(page.getByText('Airline: United')).toBeVisible();
    await expect(page.getByText('Flight Number: UA954')).toBeVisible();
    await expect(page.getByText('Price: 400')).toBeVisible();
    await expect(page.getByText('Arbitrary Fees and Taxes: 514.76')).toBeVisible();
    await expect(page.getByText('Total Cost: 914.76')).toBeVisible();


    await page.getByPlaceholder('First Last').fill("Playwright JS")
    await page.locator("//input[@id='address']").fill("Banglore")
    await page.locator("//input[@id='state']").fill("Karnataka")
    // await page.locator("//select[@id='cardType']").selectOption({ value: 'amex' })
    await page.locator("//select[@id='cardType']").selectOption({ label: 'American Express' })
    await page.locator("//input[@id='creditCardNumber']").pressSequentially("556622337788")
    await page.getByPlaceholder('Year').fill("2025")
    await page.locator("//input[@id='nameOnCard']").fill("Playwright by Microsoft")


    const rememberme = await page.locator("//input[@type='checkbox' and @name='rememberMe' ]");
    rememberme.click();
    await expect(rememberme).toBeChecked
    //await expect(page.locator("//input[@type='checkbox' and @name='rememberMe').to

    // await page.getByRole('button', { name: 'Purchase Flight' }).click()
    await page.getByRole("button", { name: "Purchase Flight" }).click();

    await expect(page).toHaveURL(/confirmation/)
    let id = await page.locator("//td[text()='Id']/following::td[1]").textContent()
    console.log(`order id is ${id}`);

    await expect(id).not.toBeNull();
    await expect(id).not.toBe("");



})
