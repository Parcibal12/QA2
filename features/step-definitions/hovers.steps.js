const { Given, When, Then } = require('@wdio/cucumber-framework');
const HoversPage = require('../pageObjects/hovers.page');
const expect = require('chai').expect;

Given('Estoy en la página de hovers', async () => {
    await HoversPage.open();
});

When('Paso el ratón sobre la primera imagen', async () => {
    await HoversPage.hoverOnFigure1();
});

Then('La información del primer usuario debería ser visible', async () => {
    expect(await HoversPage.figure1Caption.isDisplayed()).to.be.true;
});