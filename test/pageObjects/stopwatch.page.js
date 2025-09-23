import Page from "./page";
import { $ } from "@wdio/globals";

class StopwatchPage extends Page {

    get startButton() {
        return $('~Start');
    }

    get pauseButton() {
        return $('~Pause'); 
    }

    get resetButton() {
        return $('~Reset');
    }

    get lapButton() {
        return $('~Lap');
    }

    get lapList() {
        return $('id=com.google.android.deskclock:id/laps_list');
    }

    get stopwatchTimeText() {
        return $('id=com.google.android.deskclock:id/stopwatch_time_text');
    }
}

export default new StopwatchPage();