import bottomNavBar from "../pageObjects/bottom-nav-bar";
import alarmPage from "../pageObjects/alarm.page";

describe('Prueba de Alarma 1: Elementos Básicos', () => {
    afterEach(async () => { await browser.reloadSession(); });

    it('Debe mostrar el botón para añadir alarma y las alarmas por defecto', async () => {
        await bottomNavBar.alarmButton.click();
        
        await expect(alarmPage.addAlarmButton).toBeDisplayed();
        
        const alarmCard830 = await alarmPage.getAlarmCard('8:30');
        await expect(alarmCard830).toBeExisting();
        
        const alarmCard900 = await alarmPage.getAlarmCard('9:00');
        await expect(alarmCard900).toBeExisting();
    });
});