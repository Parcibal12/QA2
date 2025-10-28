import { Given, When, Then, world } from "@wdio/cucumber-framework";
import inventoryPage from "../pageobjects/inventory.page";
import { getSortOrder, comparatorFunctions, getSortedList } from "../../utils/sort-utils";

When('Clicks the filter by {string} in {string} order', async function(value, order) {
    await inventoryPage.sortProducts(value, order);
   
    world.sortValue = value;
    world.sortOrder = order; 
});


When('The cart is cleaned', async function() {
    const items = await inventoryPage.inventoryItemList;
    for(const item of items) {
        const button = inventoryPage.getButtonItem(item);
        const text = await button.getText();

        if(text.includes('Remove')) {
            await button.click();
        }
    }
});

Then('The products should be in right order by name', async function() {
    const titleItems = await inventoryPage.getTitleTextItems(await inventoryPage.inventoryItemList);
    const sortItems = await getSortedList(titleItems, comparatorFunctions[world.sortValue], getSortOrder(world.sortOrder));

    await expect(titleItems).toEqual(sortItems);
});

Then('The products should be in right order by price', async function() {
    const titleItems = await inventoryPage.getPriceTextItems(await inventoryPage.inventoryItemList);
    const sortItems = await getSortedList(titleItems, comparatorFunctions[world.sortValue], getSortOrder(world.sortOrder));

    await expect(titleItems).toEqual(sortItems);
});


Then('The products should not be int he right order by price', async function() {
    const titleItems = await inventoryPage.getPriceTextItems(await inventoryPage.inventoryItemList);
    const sortItems = await getSortedList(titleItems, comparatorFunctions[world.sortValue], getSortOrder(world.sortOrder));

    await expect(titleItems).not.toEqual(sortItems);
});

Then('The products should not be int he right order by name', async function() {
    const titleItems = await inventoryPage.getTitleTextItems(await inventoryPage.inventoryItemList);
    const sortItems = await getSortedList(titleItems, comparatorFunctions[world.sortValue], getSortOrder(world.sortOrder));

    await expect(titleItems).not.toEqual(sortItems);
});