const Page = require('./page.js');

class CartPage extends Page {
    get checkoutButton() { return $('#checkout'); }

    async goToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = new CartPage();