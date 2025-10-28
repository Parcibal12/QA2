import { Given, Then, When } from "@wdio/cucumber-framework";
import inventoryPage from "../pageobjects/inventory.page";

When('Adds the product number {int} to the cart', async function(number) {
    const item = await inventoryPage.inventoryItemList[number - 1];
    await inventoryPage.getAddButton(item).click();
});

When('Removes the product number {int} of his cart', async function(number) {
    const item = await inventoryPage.inventoryItemList[number - 1];
    await inventoryPage.getRemoveButton(item).click();
});

When('Adds the product with the name {string} to the cart', async function(name) {
    const item = await inventoryPage.findItemByTitle(await inventoryPage.inventoryItemList, name);
    await inventoryPage.getAddButton(item).click();
});

When('Removes the product with the name {string} to the cart', async function(name) {
    const item = await inventoryPage.findItemByTitle(await inventoryPage.inventoryItemList, name);
    await inventoryPage.getRemoveButton(item).click();
});

Then('The button of the product number {int} should have the message: {string}', async function (number, message) {
    const item = await inventoryPage.inventoryItemList[number - 1];
    await expect(inventoryPage.getButtonItem(item)).toHaveText(message);
});

Then('The cart should have counter with {int} elements', async function(number) {
    number = String(number);

    await expect(inventoryPage.shoppingCartBadge).toHaveText(number);
});

Then('The cart should not have counter with {int} elements', async function(number) {
    number = String(number);

    await expect(inventoryPage.shoppingCartBadge).not.toHaveText(number);
});

Then('The cart should not to be displayed', async function () {
    await expect(inventoryPage.shoppingCartBadge).not.toBeDisplayed(); 
});

