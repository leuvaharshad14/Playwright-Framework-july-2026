import { test, expect } from '@playwright/test'

test('test1', async ({ page }) => {
    expect(10).toBe(10)
})

test('test2', async ({ page }) => {
    expect(10).toBeGreaterThan(9)
})
test('test3', async ({ page }) => {
    expect(10).toBeLessThanOrEqual(11)
})
test('test4', async ({ page }) => {
    //expect(true).toBeFalsy()
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
})

test('test5', async ({ page }) => {
    expect("Playwright").toBe("Playwright")
})

test('test6', async ({ page }) => {
    expect("This is Playwright").toContain("Playwright")
})