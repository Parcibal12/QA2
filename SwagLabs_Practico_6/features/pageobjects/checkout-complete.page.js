import Page from "./page";
import { $, $$ } from "@wdio/globals";

class CheckoutCompletePage extends Page {
    get checkImage() {
        return $('img[data-test="pony-express"]');
    }

    get mainMessage() {
        return $('h2[data-test="complete-header"]');
    }

    get secondMessage() {
        return $('div[data-test="complete-text"]');
    }

    get backToHomeButton() {
        return $('#back-to-products');
    }
}

export default new CheckoutCompletePage();