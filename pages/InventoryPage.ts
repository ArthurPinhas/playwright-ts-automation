import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class InventoryPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addProductToCart(productName: string) {
        await this.page.click(`[id="add-to-cart-sauce-labs-${productName}"]`);
    }

    async getCartItemCount() {
        const cartCount = await this.page.textContent('.shopping_cart_badge');
        return cartCount ? parseInt(cartCount) : 0;
    }

}