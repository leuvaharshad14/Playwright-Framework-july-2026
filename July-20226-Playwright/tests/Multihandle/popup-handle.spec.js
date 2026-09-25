

import { test, expect } from "@playwright/test"
import { promises } from "node:dns"


test.skip("test2", async ({ page }) => {
    // test.setTimeout(50000)
    await page.goto("https://www.redbus.in/")
    await page.locator("//button[text()='Account']").click()
    await page.locator("//button[text()='Log in']").click()

    let newPopupPromise = page.waitForEvent("popup")
    page.frameLocator("//iframe[@title='Sign in with Google Button']").locator("//span[text()='Sign in with Google']").click();

    let newpopup = await newPopupPromise;
    await newpopup.locator("//input[@aria-label='Email or phone']").pressSequentially("test@abc.com")

})

test.only("test with promiseall", async ({ page }) => {
    // test.setTimeout(50000)
    await page.goto("https://www.redbus.in/")
    await page.locator("//button[text()='Account']").click()
    await page.locator("//button[text()='Log in']").click()



    let [newPopup] = await Promise.all([
        page.waitForEvent("popup"),
        page.frameLocator("//iframe[@title='Sign in with Google Button']").locator("//span[text()='Sign in with Google']").click()
    ])


    await newPopup.locator("//input[@aria-label='Email or phone']").fill("test@abc.com")

})
