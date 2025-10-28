import { When, Then } from "@wdio/cucumber-framework";
import inventoryPage from "../pageobjects/inventory.page";
import cartPage from "../pageobjects/cart.page";

When('Goes to the detail cart section', async function() {
    await inventoryPage.shoppingCart.click();
});

Then('The item list have {int} elements', async function(size) {
    await expect(await cartPage.cartList).toBeElementsArrayOfSize(size);
});

Then('The details contain an element with a name: {string}', async function(name) {
    const item = await inventoryPage.findItemByTitle(await cartPage.cartList, name);

    await expect(item).not.toBeNull();
});