const Page = require('./page.js');

class CheckoutPage extends Page {
    get inputFirstName() { return $('#first-name'); }
    get inputLastName() { return $('#last-name'); }
    get inputPostalCode() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }
    get completeHeader() { return $('.complete-header'); }
    get summaryTotalLabel() { return $('.summary_total_label'); }

    async fillInformation(firstName, lastName, postalCode) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPostalCode.setValue(postalCode);
    }

    async continueToNextStep() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}

module.exports = new CheckoutPage();