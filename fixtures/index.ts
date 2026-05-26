import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { credentials } from '../test-data/testData';
import { InventoryPage } from '../pages/InventoryPage';

type MyFixtures = {
    loginPage: LoginPage;
    loggedInPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await use(loginPage);
        },
    loggedInPage: async ({ page }, use) => {
        const loggedInPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        await page.goto('/');
        await loggedInPage.login(credentials.username, credentials.password);
        await use(inventoryPage);
        },
});

export { expect } from '@playwright/test';