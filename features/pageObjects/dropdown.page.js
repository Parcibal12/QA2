const Page = require('./page.js');

class DropdownPage extends Page {
    get dropdown () { return $('#dropdown'); }

    async selectOption (optionText) {
        await this.dropdown.selectByVisibleText(optionText);
    }

    open () {
        return super.open('dropdown');
    }
}

module.exports = new DropdownPage();