import Page from "./page";
import { $, $$ } from "@wdio/globals";

class CheckoutStepTwoPage extends Page {

    get finishButton() {
        return $('#finish');
    }

    get checkoutListProducts() {
        return $$('div[data-test="inventory-item"]')
    }

    get subtotalLabel() {
        return $('div[data-test="subtotal-label"]');
    }

    get taxLabel() {
        return $('div[data-test="tax-label"]');
    }

    get totalLabel() {
        return $('div[data-test="total-label"]');
    }

    async finishCheckout() {
        await this.finishButton.click();
    }


    /**
     * 
     * @param {ChainablePromiseElement} item 
     * @returns {ChainablePromiseElement}
     */
    async getPriceElement(item) {
        const element = await item.$('div[data-test="inventory-item-price"]');
        return element;
    }

    /**
     * 
     * @param {ChainablePromiseElement} item 
     * @returns {number}
     */
    async getPriceNumber(item) {
        const priceElement = await item.getText();
        const price = parseFloat(priceElement.replace('$', ''));

        return price;
    }
}

export default new CheckoutStepTwoPage();