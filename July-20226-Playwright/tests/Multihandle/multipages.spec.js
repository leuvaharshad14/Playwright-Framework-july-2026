import { test, expect } from '@playwright/test'

test('multiple pages', async ({ browser }) => {
    test.setTimeout(120000)

    let context = await browser.newContext()
    let page1 = await context.newPage();

    await page1.goto("https://google.com")
    await expect(page1).toHaveTitle(/Google/)
    console.log(await page1.title());


    let page2 = await context.newPage();
    await page2.goto("https://www.amazon.in")


    let page3 = await context.newPage();
    await page3.goto("https://titan.com")



})