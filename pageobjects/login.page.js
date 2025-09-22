// pageobjects/login.page.js

const Page = require('./page.js');

class LoginPage extends Page {
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('#login-button'); }
    get errorMessage() { return $('h3[data-test="error"]'); }

    open() {
        // Abre la ruta '/' relativa a la baseUrl
        return super.open('/');
    }
}

module.exports = new LoginPage();