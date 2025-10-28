import Page from "./page";
import { $, $$ } from "@wdio/globals";


class CartPage extends Page {

    get cartList() {
        return $$('div[data-test="inventory-item"]');
    }

    get checkoutButton() {
        return $('#checkout');
    }

}

export default new CartPage();