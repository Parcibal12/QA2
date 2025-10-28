import Page from "./page";
import { $, $$ } from "@wdio/globals";

class CheckoutPage extends Page {
 
    get firstNameInput() {
        return $('#first-name');
    }

    get lastNameInput() {
        return $('#last-name');
    }

    get postalCodeInput() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }

    get errorMessage() {
        return $('h3[data-test="error"]');
    }

    /**
     * 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} postalCode 
     */
    async checkout(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);

        await this.continueButton.click();
    }

    async getPriceItems() {
        const priceElements = $$('div[data-test="inventory-item-price"]');
        const prices = [];

        for(const element of priceElements) {
            prices.push(await element.getText());
        }
    }
}


export default new CheckoutPage();