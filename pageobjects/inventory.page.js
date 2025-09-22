const Page = require('./page.js');

class InventoryPage extends Page {
    get pageTitle() { return $('.title'); }
    get inventoryContainer() { return $('#inventory_container'); }
    get shoppingCartLink() { return $('.shopping_cart_link'); }
    get shoppingCartBadge() { return $('.shopping_cart_badge'); }
    get sortDropdown() { return $('.product_sort_container'); }

    async getProductByName(productName) {
        const product = await this.inventoryContainer.$(
            `//div[text()='${productName}']/ancestor::div[@class='inventory_item']`
        );
        return product;
    }

    async addProductToCart(productName) {
        const productElement = await this.getProductByName(productName);
        const addButton = await productElement.$('button=Add to cart');
        await addButton.click();
    }

    async sortBy(optionText) {
        await this.sortDropdown.selectByVisibleText(optionText);
    }

    async getProductPrices() {
        const priceElements = await $$('.inventory_item_price');
        const prices = await Promise.all(priceElements.map(async (elem) => {
            const priceText = await elem.getText();
            return parseFloat(priceText.replace('$', ''));
        }));
        return prices;
    }

    async goToCart() {
        await this.shoppingCartLink.click();
    }
}

module.exports = new InventoryPage();