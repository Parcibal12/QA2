import Page from "./page";
import { $ } from "@wdio/globals";

class AlarmPage extends Page {

    get addAlarmButton() { return $('~Add alarm'); }
    get snackBarElement() { return $('id=com.google.android.deskclock:id/snackbar_text'); }
    
    get timePickerOkButton() { return $('id=android:id/button1'); }
    
    get deleteButton() { return $('id=com.google.android.deskclock:id/delete'); }
    get editLabelButton() { return $('id=com.google.android.deskclock:id/edit_label'); }
    get addLabelOkButton() { return $('id=android:id/button1'); }
    get editLabelInput() { return $('id=com.google.android.deskclock:id/label_input_field'); }
    get repeatCheckbox() { return $('id=com.google.android.deskclock:id/repeat_onoff'); }


    getAlarmCard(hour) {
        const selector = `//androidx.cardview.widget.CardView[contains(@content-desc, "${hour}") and contains(@content-desc, "Alarm")]`;
        return $(selector);
    }


    getExpandButton(hour) {
        const alarmCard = this.getAlarmCard(hour);
        return alarmCard.$('~Expand alarm');
    }


    getSwitchElement(hour) {
        const alarmCard = this.getAlarmCard(hour);
        return alarmCard.$('id=com.google.android.deskclock:id/onoff');
    }


    getLabelElement() {
        return $('id=com.google.android.deskclock:id/edit_label');
    }
}

export default new AlarmPage();