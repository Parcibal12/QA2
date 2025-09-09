describe('Página de Añadir/Eliminar Elementos', () => {
    it('debería añadir un elemento y luego eliminarlo', async () => {
        // 1. Navegar a la página
        await browser.url('https://the-internet.herokuapp.com/add_remove_elements/');
        console.log('Página de Add/Remove Elements cargada.');

        // 2. Localizar el botón "Add Element"
        const addButton = await $('button=Add Element');

        // 3. Verificar que inicialmente no hay botones de "Delete"
        let deleteButtons = await $$('.added-manually');
        await expect(deleteButtons).toHaveLength(0);
        console.log('Verificación: Inicialmente hay 0 botones de "Delete".');

        // 4. Hacer clic para añadir un elemento
        await addButton.click();
        console.log('Se hizo clic en "Add Element".');
        await browser.pause(500);

        // 5. Verificar que ahora existe UN botón de "Delete"
        deleteButtons = await $$('.added-manually');
        await expect(deleteButtons).toHaveLength(1);
        console.log('Verificación: Ahora hay 1 botón de "Delete".');

        // 6. Hacer clic en el botón "Delete" para eliminarlo
        await deleteButtons[0].click();
        console.log('Se hizo clic en "Delete".');
        await browser.pause(500);

        // 7. Verificar que el botón de "Delete" ya no existe
        deleteButtons = await $$('.added-manually');
        await expect(deleteButtons).toHaveLength(0);
        console.log('Verificación: El botón "Delete" fue eliminado correctamente.');
    });
});