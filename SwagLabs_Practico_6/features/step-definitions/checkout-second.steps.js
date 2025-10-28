import { When, Then } from "@wdio/cucumber-framework";
import checkoutStepTwoPage from "../pageobjects/checkout-step-two.page";

When('The user completes the purchase', async function () {
    await checkoutStepTwoPage.finishCheckout();
});


Then('The sum of the prices and the subtotal should be equal to {float}', async function(expectedSubtotal) {
    const elements = await checkoutStepTwoPage.checkoutListProducts;
    let subtotal = 0;

    for(const element of elements) {
        const priceElement = await checkoutStepTwoPage.getPriceElement(element);
        const price = await checkoutStepTwoPage.getPriceNumber(priceElement);
        subtotal += price;
    }

    await expect(subtotal).toBe(expectedSubtotal);
});