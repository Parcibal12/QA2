describe('Página de Dropdown', () => {
    it('debería seleccionar la Opción 2 del menú', async () => {
        // 1. Navegar a la página
        await browser.url('https://the-internet.herokuapp.com/dropdown');
        console.log('Página de dropdown cargada.');

        // 2. Localizar el elemento del menú desplegable por su ID
        const dropdown = await $('#dropdown');

        // 3. Seleccionar la opción por su texto visible
        await dropdown.selectByVisibleText('Option 2');
        console.log('Se seleccionó "Option 2".');

        // 4. Verificar que la opción correcta fue seleccionada
        await expect(dropdown).toHaveValue('2');
        console.log('Verificación: El valor del dropdown es "2".');

        const selectedOption = await $('option:checked');
        await expect(selectedOption).toHaveText('Option 2');
        console.log('Verificación: El texto de la opción seleccionada es "Option 2".');

        await browser.pause(2000);
    });
});