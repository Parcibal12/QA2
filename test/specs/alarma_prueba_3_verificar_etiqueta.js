import bottomNavBar from "../pageObjects/bottom-nav-bar";
import alarmPage from "../pageObjects/alarm.page";

describe('Prueba de Alarma 3: Verificar Etiqueta por Defecto', () => {

    afterEach(async () => {
        await browser.reloadSession();
    });

    it('Debe mostrar "Label" como la etiqueta por defecto de una alarma', async () => {
        await bottomNavBar.alarmButton.click();
        
        const horaAlarma = '8:30';
        
        await alarmPage.getExpandButton(horaAlarma).click();
        
        const labelElement = await alarmPage.getLabelElement('Label');
        
        await expect(labelElement).toBeDisplayed();
    });
});