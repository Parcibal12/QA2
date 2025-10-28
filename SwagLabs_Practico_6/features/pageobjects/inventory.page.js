import Page from "./page";
import { $ } from "@wdio/globals";
import { sortConf } from "../../conf/sort-config";

class InventoryPage extends Page {

    get inventoryItemList() {
        return $$('div[data-test="inventory-item"]');
    }

    get productSortContainer() {
        return $('select[data-test="product-sort-container"]');        
    }

    get shoppingCart() {
        return $('a[data-test="shopping-cart-link"]');
    }

    get shoppingCartBadge() {
        return $('span[data-test="shopping-cart-badge"]');
    }

    /**
     * 
     * @param {ChainablePromiseElement} item 
     */
    getImageItem(item) {
        return item.$('img');
    }

    /**
     * 
     * @param {ChainablePromiseElement} item 
     */
    getTitleItem(item) {
        return item.$('div[data-test="inventory-item-name"]');
    }

    getDescriptionItem(item) {
        return item.$('div[data-test="inventory-item-desc"]');
    }

    getPriceItem(item) {
        return item.$('div[data-test="inventory-item-price"]');
    }

    /**
     * 
     * @param {ChainablePromiseElement} item 
     * @returns {ChainablePromiseElement}
     */
    getButtonItem(item) {
        return item.$('button');
    }

    getAddButton(item) {
        return item.$('button=Add to cart');
    }

    getRemoveButton(item) {
        return item.$('button=Remove');
    }

    /**
     * 
     * @param {ChainablePromiseElement} value 
     * @returns {ChainablePromiseElement}
     */
    getOptionElement(value) {
        return $(`option[value=${value}]`);
    }

    /**
     * 
     * @param {string} value 
     */
    async sortProducts(value, order) {
        const optionValue = sortConf[value][order];
        const optionElement = this.getOptionElement(optionValue);

        await this.productSortContainer.click();
        await optionElement.click();
    }

    async getTitleTextItem(item) {
        return await this.getTitleItem(item).getText();
    }

    /**
     * 
     * @param {ChainablePromiseArray} items 
     * @returns {Array<string>}
     */
    async getTitleTextItems(items) {
        const titles = [];

        for(const item of items) {
            const title = await this.getTitleItem(item);
            titles.push(await title.getText());
        }

        return titles;
    }
    
    /**
     * 
     * @param {ChainablePromiseArray} items 
     * @returns {Array<string>} 
     */
    async getPriceTextItems(items) {
        const prices = [];

        for(const item of items) {
            const price = await this.getPriceItem(item);
            prices.push(await price.getText());
        }

        return prices;
    }

    async findItemByTitle(items, titleSearched) {
        
        for(const item of items) {
            const title = await this.getTitleTextItem(item);

            if(title == titleSearched) {
                return item;
            }
        }

        return null;
    }
}

export default new InventoryPage();