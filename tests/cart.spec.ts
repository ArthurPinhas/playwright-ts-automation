import {test, expect} from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import { credentials } from '../testData';

let inventoryPage: InventoryPage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    inventoryPage = new InventoryPage(page);
    loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(credentials.username, credentials.password);
});

test('add product to cart', async ({ page }) => {
    await inventoryPage.addProductToCart('backpack');
    const cartItemCount = await inventoryPage.getCartItemCount();
    expect(cartItemCount).toBe(1);
});
