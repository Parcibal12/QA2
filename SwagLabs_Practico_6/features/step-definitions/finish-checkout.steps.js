import { When, Then } from "@wdio/cucumber-framework";
import checkoutCompletePage from "../pageobjects/checkout-complete.page";

When('Goes back to home', async function () {
    await checkoutCompletePage.backToHomeButton.click();
});

Then('The header should have the message {string}', async function(message) {
    await expect(checkoutCompletePage.mainMessage).toHaveText(message);
});

Then('The full text should contains {string}', async function(message) {
    await expect(checkoutCompletePage.secondMessage).toHaveText(message);
});

Then('The check image should be displayed', async function() {
    await expect(checkoutCompletePage.checkImage).toBeDisplayed();
});
