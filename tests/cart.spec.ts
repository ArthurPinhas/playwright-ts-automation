import {test, expect} from '../fixtures';

test('add product to cart', async ({ loggedInPage }) => {
    await loggedInPage.addProductToCart('backpack');
    const cartItemCount = await loggedInPage.getCartItemCount();
    expect(cartItemCount).toBe(1);
});
