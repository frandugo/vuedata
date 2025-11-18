import { test, expect } from '@playwright/test';


test.describe("Global test", () => {

    // test.beforeEach(async ({ page }) => {
    //     await page.goto('https://automationexercise.com/');
    // })

    // test('my test', async ({ page }) => {
    //     await expect(page.locator('#newButtonName')).toBeVisible();
    //     await page.locator('#newButtonName').fill('test');
    //     await page.locator('#updatingButton').click();
    //     await expect(page.locator('#updatingButton')).toHaveText('test');
    // });

    // test('testing store', async ({ page }) => {
    //     await page.mouse.wheel(0,500)
    //     const firstProductCard = page.locator("#cartModal + .col-sm-4 .single-products")
	// 	await firstProductCard.hover()

    //     const cardOverlay = page.locator("#cartModal + .col-sm-4 .product-overlay")
    //     const cardOverlayDisplayAttribute = await cardOverlay.evaluate((e) =>
    //         window.getComputedStyle((e as HTMLDivElement)).display
    //     )
    //     await expect(cardOverlayDisplayAttribute).toBe("block")

    //     await page.click("#cartModal + .col-sm-4 .overlay-content > a.add-to-cart")

    //     const modal = page.locator("#cartModal")
    //     await expect(modal).toHaveClass(/show/)

    //     await page.click("button[data-dismiss='modal']")
    //     await expect(modal).toHaveClass(/fade/)

    // })
}) 


