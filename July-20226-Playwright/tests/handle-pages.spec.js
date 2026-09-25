

import { test, expect } from "@playwright/test"


test("Login Test", async ({ page }) => {
   // test.setTimeout(50000)
    await page.goto("https://www.redbus.in/")
    await page.getByRole("button", { name: "Account", exact: true }).click()
    await page.getByRole("button", { name: "Log in" }).click()


    let newPagePromise = page.waitForEvent("popup")
    await page.frameLocator("//iframe[@title='Sign in with Google Button']").locator("//span[text()='Sign in with Google']").click()
    let newPopup = await newPagePromise

    newPopup.getByLabel("Email or phone").pressSequentially("mukesh@gmail.com")

    

})
/*

test.skip("Handle Popup", async ({ page }) => {


    await page.goto("https://www.redbus.in/")


    await page.getByRole("button", { name: "Account", exact: true }).click()

    await page.getByRole("button", { name: "Log in" }).click()


    let [newPopup] = await Promise.all(
        [
            page.waitForEvent("popup"),

            page.frameLocator("//iframe[@title='Sign in with Google Button']").locator("//span[text()='Sign in with Google']").click()

        ]
    )

    await newPopup.getByLabel("Email or phone").fill("mukesh@gmail.com")

})


test.skip("Ramya", async ({ page }) => {


    await page.goto("https://www.redbus.in/")


    let element = page.getByPlaceholder("")


    await element.click()

})

*/

