import {test, expect} from '@playwright/test';
import { credentials } from '../testData';
import { LoginPage } from '../pages/LoginPage';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
});

test('valid login', async ({page}) => {
    await loginPage.login(credentials.username, credentials.password);
    expect(await loginPage.isInventoryPageVisible()).toBe(true);
})

test('invalid login', async ({page}) => {
    await loginPage.login(credentials.invalidUsername, credentials.invalidPassword);
    expect(await loginPage.isErrorMessageVisible()).toBe(true);
});
