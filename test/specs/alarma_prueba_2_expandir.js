import bottomNavBar from "../pageObjects/bottom-nav-bar";
import alarmPage from "../pageObjects/alarm.page";

describe('Prueba de Alarma 2: Expandir Opciones', () => {
    afterEach(async () => { await browser.reloadSession(); });

    it('Debe mostrar el botón de eliminar al expandir una alarma', async () => {
        await bottomNavBar.alarmButton.click();
        const horaAlarma = '8:30';
        
        await expect(alarmPage.deleteButton).not.toBeExisting();

        await alarmPage.getExpandButton(horaAlarma).click();
        
        await expect(alarmPage.deleteButton).toBeDisplayed();
    });
});