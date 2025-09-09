describe('Página de Checkboxes', () => {
    it('debería poder marcar y desmarcar los checkboxes', async () => {
        // 1. Navegar a la página
        await browser.url('https://the-internet.herokuapp.com/checkboxes');
        console.log('Página de checkboxes cargada.');

        // 2. Localizar los checkboxes
        const checkboxes = await $$('input[type="checkbox"]');
        const firstCheckbox = checkboxes[0];
        const secondCheckbox = checkboxes[1];

        // 3. Verificar el estado inicial
        await expect(firstCheckbox).not.toBeSelected();
        console.log('Verificación: El primer checkbox está desmarcado inicialmente.');

        // El segundo checkbox viene marcado.
        await expect(secondCheckbox).toBeSelected();
        console.log('Verificación: El segundo checkbox está marcado inicialmente.');

        // 4. Hacer clic en el primer checkbox para marcarlo
        await firstCheckbox.click();
        console.log('Se hizo clic en el primer checkbox.');

        // 5. Verificar que el primer checkbox ahora está marcado
        await expect(firstCheckbox).toBeSelected();
        console.log('Verificación: El primer checkbox ahora está marcado.');
        
        await browser.pause(2000); 
    });
});