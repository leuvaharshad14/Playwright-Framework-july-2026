import { test } from '@playwright/test'

test('secondTest', async ({ page }) => {

    await page.goto("https://google.com")
    let pageTitle = await page.title();
    console.log(`title of the page is ${pageTitle}`);



}


)