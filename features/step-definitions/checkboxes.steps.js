const { Given, When, Then } = require('@wdio/cucumber-framework');
const CheckboxesPage = require('../pageObjects/checkboxes.page');
const expect = require('chai').expect;

Given('Estoy en la página de casillas de verificación', async () => {
    await CheckboxesPage.open();
});

When('Marco la primera casilla de verificación', async () => {
    await CheckboxesPage.checkbox1.click();
});

Then('La primera casilla de verificación debería estar marcada', async () => {
    expect(await CheckboxesPage.checkbox1.isSelected()).to.be.true;
});

When('Desmarco la segunda casilla de verificación', async () => {
    await CheckboxesPage.checkbox2.click();
});

Then('La segunda casilla de verificación debería estar desmarcada', async () => {
    expect(await CheckboxesPage.checkbox2.isSelected()).to.be.false;
});