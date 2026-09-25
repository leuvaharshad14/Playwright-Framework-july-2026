import { test, expect } from '@playwright/test'

test('login', async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    let pageTitle = await page.title();
    console.log('page title is ' + pageTitle);
    let pageUrl = await page.url();
    //console.console.log(`page url is ${pageUrl}`);
    console.log(`page url is ${pageUrl}`);






})