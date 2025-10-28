import { Given, When, Then } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";
import { browser } from "@wdio/globals";

Given('The user is on the login page of Saucedemo', async function() {
    await loginPage.open();
});

When('The user logs in with a username {string} with a password {string}', async function(username, password) {
    await loginPage.login(username, password);
});

Then('The user is redirected to the inventory page', async function() {
    const baseUrl = process.env.SWAG_LABS_URL.trim();

    await expect(browser).toHaveUrl(`${baseUrl}/inventory.html`);
});

Then('The system displays the message: {string}', async function(message) {
    await expect(loginPage.errorLoginMessage).toBeDisplayed();
    await expect(loginPage.errorLoginMessage).toHaveText(message);
});