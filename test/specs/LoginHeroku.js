describe('Login en HerokuApp', () => {
    it('Debe iniciar sesión exitosamente con credenciales válidas', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        const successMessage = await $('#flash');
        await expect(successMessage).toBeDisplayed();
        await expect(await successMessage.getText()).toContain('You logged into a secure area!');
    });

    it('Debe fallar el login con credenciales inválidas', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await $('#username').setValue('usuario_invalido');
        await $('#password').setValue('clave_invalida');
        await $('button[type="submit"]').click();

        const errorMessage = await $('#flash');
        await expect(errorMessage).toBeDisplayed();
        await expect(await errorMessage.getText()).toContain('Your username is invalid!');
    });
});