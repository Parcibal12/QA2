import Page from './page';
import { $ } from "@wdio/globals";

class BottomNavigationBar extends Page {
    get clockButton() { return $('~Clock'); }
    get timerButton() { return $('~Timer'); }
    get stopwatchButton() { return $('~Stopwatch'); }
    get alarmButton() { return $('~Alarm'); }
    get bedTimeButton() { return $('~Bedtime'); }
}

export default new BottomNavigationBar();