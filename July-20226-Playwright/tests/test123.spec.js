import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/account/login');
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.pause();
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('link', { name: 'iPhone' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
});