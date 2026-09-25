import { test, expect } from '@playwright/test'
import { promises } from 'node:dns'

test('multipage', async ({ browser }) => {

    let context = await browser.newContext()
    let page1 = await context.newPage()
    page1.goto("https://freelance-learn-automation.vercel.app/login")

    let [page2] = await Promise.all([
        page1.waitForEvent("popup"),
        page1.locator("(//div[@class='social-btns']//a[contains(@href,'facebook')])[1]").click()

    ])
    await page2.locator("(//input[@name='email'])[2]").fill("harsha@test.com")

    let [page3] = await Promise.all([

        page2.waitForEvent("popup"),
        page2.getByRole('button', { name: 'Create new account' }).click()

    ])

})

