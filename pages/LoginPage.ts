import { Page } from '@playwright/test';

export class LoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);    
        await this.page.click('#login-button');
    }

    async isInventoryPageVisible() {
        return await this.page.isVisible('[data-test="shopping-cart-link"]');
    }

    async isErrorMessageVisible() {
        return await this.page.isVisible('[data-test="error"]');
    }
}