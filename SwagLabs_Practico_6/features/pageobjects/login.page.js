import Page from "./page";
import { $ } from "@wdio/globals";

class LoginPage extends Page {

    get userNameInput() { 
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }   

    get errorLoginMessage() {
        return $('h3[data-test="error"]');
    }

    async login(username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);

        await this.loginButton.click();
    };

    async open() {
        await super.open(process.env.SWAG_LABS_URL);
    }
}


export default new LoginPage();