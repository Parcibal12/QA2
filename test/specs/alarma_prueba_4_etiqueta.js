import bottomNavBar from "../pageObjects/bottom-nav-bar";
import alarmPage from "../pageObjects/alarm.page";

describe('Prueba de Alarma 4: Añadir Etiqueta', () => {
    afterEach(async () => { await browser.reloadSession(); });

    it('Debe añadir una etiqueta y verificar que se guarda correctamente', async () => {
        await bottomNavBar.alarmButton.click();
        const horaAlarma = '8:30';
        const textoEtiqueta = 'Entregar práctico de QA2';
        
        await alarmPage.getExpandButton(horaAlarma).click();
        
        await alarmPage.editLabelButton.click();
        await alarmPage.editLabelInput.setValue(textoEtiqueta);
        await alarmPage.addLabelOkButton.click();
        
        const labelElement = await alarmPage.getLabelElement();
        await expect(labelElement).toHaveText(textoEtiqueta);
    });
});