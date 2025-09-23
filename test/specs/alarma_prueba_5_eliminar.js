import bottomNavBar from "../pageObjects/bottom-nav-bar";
import alarmPage from "../pageObjects/alarm.page";

describe('Prueba de Alarma 5: Eliminar Alarma', () => {
    afterEach(async () => { await browser.reloadSession(); });

    it('Debe eliminar la alarma de las 8:30 AM', async () => {
        await bottomNavBar.alarmButton.click();
        const horaAlarma = '8:30';
        
        await alarmPage.getExpandButton(horaAlarma).click();
        await alarmPage.deleteButton.click();
        
        const deletedAlarmCard = await alarmPage.getAlarmCard(horaAlarma);
        await expect(deletedAlarmCard).not.toBeExisting();
    });
});