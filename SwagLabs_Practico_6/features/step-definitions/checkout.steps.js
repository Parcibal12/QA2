import { When, Then } from "@wdio/cucumber-framework";
import checkoutPage from "../pageobjects/checkout.page";
import cartPage from "../pageobjects/cart.page";
import { browser } from "@wdio/globals";

When('Goes to checkout page', async function() {
    await cartPage.checkoutButton.click();
});

When('Fills the form with firstname {string}, a lastname {string} and a postal code {string}', async function(firstName, lastName, postalCode) {
    await checkoutPage.checkout(firstName, lastName, postalCode);
});

Then('The user should be redirected to the second checkout page', async function() {
    const baseUrl = process.env.SWAG_LABS_URL.trim();

    await expect(browser).toHaveUrl(`${baseUrl}/checkout-step-two.html`);
});

Then('A warning should be displayed with the message {string}', async function(message) {
    await expect(checkoutPage.errorMessage).toBeDisplayed();
    await expect(checkoutPage.errorMessage).toHaveText(message);
}); 