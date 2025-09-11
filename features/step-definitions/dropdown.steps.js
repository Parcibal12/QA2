const { Given, When, Then } = require('@wdio/cucumber-framework');
const DropdownPage = require('../pageObjects/dropdown.page');
const expect = require('chai').expect;

Given('Estoy en la página de menú desplegable', async () => {
    await DropdownPage.open();
});

When('Selecciono la {string} del menú', async (option) => {
    await DropdownPage.selectOption(option);
});

Then('La {string} debería estar seleccionada', async (option) => {
    const selectedText = await DropdownPage.dropdown.$('option:checked').getText();
    expect(selectedText).to.equal(option);
});