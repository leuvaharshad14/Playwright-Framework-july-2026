import { test, expect } from '@playwright/test'

test("google search", async ({ page }) => {

    await page.goto("https://www.google.com/")
    await page.locator("//textarea[@aria-label='Search']").pressSequentially("Mukesh Otwani", { delay: 200 })
    let total_text = await page.locator("//ul[@role='listbox']/li").all();
    console.log(`total text we got is : ${total_text.length}`);


    for (let i = 0; i < total_text.length; i++) {
        let text = await total_text.at(i).innerText();
        console.log(text);

        if (text.includes("playwright")) {
            await total_text.at(i).click();
            break;

        }




    }

    await expect(page).toHaveURL(/playwright/)
    console.log("End");
    





})