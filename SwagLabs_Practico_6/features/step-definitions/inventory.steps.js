import { Given, When, Then } from "@wdio/cucumber-framework";
import inventoryPage from "../pageobjects/inventory.page";
import { allowedImages } from "../../conf/allowed-images";

Then('There should be {int} item cards', async function(numberOfItems) {
    await expect(inventoryPage.inventoryItemList).toBeElementsArrayOfSize(numberOfItems);
});


Then('Every element should contain a title, description, price and an add button', async function() {
    const items = await inventoryPage.inventoryItemList;
    
    for(const item of items) {
        await expect(inventoryPage.getTitleItem(item)).toBeDisplayed();
        await expect(inventoryPage.getDescriptionItem(item)).toBeDisplayed();
        await expect(inventoryPage.getPriceItem(item)).toBeDisplayed();
        await expect(inventoryPage.getImageItem(item)).toBeDisplayed();
        await expect(inventoryPage.getButtonItem(item)).toBeClickable();
    }
});

Then('Every element should contain a valid image', async function () {
    const items = await inventoryPage.inventoryItemList;
    
    for(const item of items) {
        const image = await inventoryPage.getImageItem(item);
        const src = await image.getAttribute('src');
        await expect(allowedImages.includes(src)).toBe(true);
    }
});

Then('Any element should not contain a valid image', async function () {
    const items = await inventoryPage.inventoryItemList;
    let valid = true;
    for(const item of items) {
        const image = await inventoryPage.getImageItem(item);
        const src = await image.getAttribute('src');

        if(!allowedImages.includes(src)) {
            valid = false;
            break;
        }

    }
    await expect(valid).toBe(false);
});