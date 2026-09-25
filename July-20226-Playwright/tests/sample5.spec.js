import { test, expect } from '@playwright/test'

test('sample test5', async ({ page }) => {
    await page.goto("https://www.flipkart.com/account/login")
    console.log("successfully navigated to flipkart sing in page");
locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fi

})

test('login works', { tag: '@smoke' }, async ({ page }, testInfo) => {
    console.log(testInfo.title);
});

test('login1',{ tag:'@smoke'}, async({page},info) =>
{
console.log("test");

}
)