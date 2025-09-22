const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const CartPage = require('../pageobjects/cart.page.js');
const CheckoutPage = require('../pageobjects/checkout.page.js');

Given('Estoy en la página de login de Sauce Demo', async () => {
    await LoginPage.open();
});

Given('Estoy autenticado en la página de Sauce Demo', async () => {
    await LoginPage.open();
    await LoginPage.inputUsername.setValue('standard_user');
    await LoginPage.inputPassword.setValue('secret_sauce');
    await LoginPage.btnSubmit.click();
});

When('Ingreso el usuario "{string}" y la contraseña "{string}"', async (username, password) => {
    await LoginPage.inputUsername.setValue(username);
    await LoginPage.inputPassword.setValue(password);
});

When('Hago clic en el botón de login', async () => {
    await LoginPage.btnSubmit.click();
});

Then('Debería ser redirigido a la página de inventario', async () => {
    await expect(browser).toHaveUrlContaining('inventory.html');
    await expect(InventoryPage.pageTitle).toBeDisplayed();
});

Then('Debería ver un mensaje de error que dice "{string}"', async (message) => {
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveTextContaining(message);
});

Then('Estoy en la página de inventario', async () => {
    await expect(InventoryPage.pageTitle).toHaveText('Products');
});

When('Agrego el producto "{string}" al carrito', async (productName) => {
    await InventoryPage.addProductToCart(productName);
});

Then('El ícono del carrito debería mostrar "{string}"', async (count) => {
    await expect(InventoryPage.shoppingCartBadge).toHaveText(count);
});

When('Ordeno los productos por "{string}"', async (optionText) => {
    await InventoryPage.sortBy(optionText);
});

Then('Los productos deberían estar ordenados correctamente por precio ascendente', async () => {
    const prices = await InventoryPage.getProductPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);
    await expect(prices).toEqual(sortedPrices);
});

When('Voy al carrito de compras', async () => {
    await InventoryPage.goToCart();
});

When('Hago clic en el botón de checkout', async () => {
    await CartPage.goToCheckout();
});

When('Ingreso mi nombre "{string}", apellido "{string}" y código postal "{string}"', async (firstName, lastName, postalCode) => {
    await CheckoutPage.fillInformation(firstName, lastName, postalCode);
});

When('Continúo al siguiente paso del checkout', async () => {
    await CheckoutPage.continueToNextStep();
});

Then('Verifico que el total de la compra sea correcto', async () => {
    await expect(CheckoutPage.summaryTotalLabel).toBeDisplayed();
});

When('Finalizo la compra', async () => {
    await CheckoutPage.finishCheckout();
});

Then('Debería ver el mensaje de confirmación "{string}"', async (message) => {
    await expect(CheckoutPage.completeHeader).toHaveText(message);
});