import { test, except } from '@playwright/test'

test('normal alert', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", function (alert) {
        alert.accept();
    })
    await page.getByText("Click for JS Alert").click();

})

test('confirm_alert', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", function (alert) {
        alert.accept();
    })
    await page.getByText("Click for JS Confirm").click();
})

test('prompt_alert', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog", function (alert) {

        alert.accept("This is for testing");
    })
    await page.getByText("Click for JS Prompt").click();
    
})