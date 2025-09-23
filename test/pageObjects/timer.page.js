import Page from "./page";
import { $, browser } from "@wdio/globals";

class TimerPage extends Page {

    get backspace() {
        return $('~Backspace');
    }

    get startButton() {
        return $('~Start');
    }

    get addTimerButton() {
        return $('~Add timer');
    }


    async getDigitElement(digit) {
        return $(`id=com.google.android.deskclock:id/timer_setup_digit_${digit}`);
    }


    async getNthCardTimer(numberOfcard) {
        numberOfcard += 5;

        return $(`android=new UiSelector().className("android.view.ViewGroup").instance(${numberOfcard})`)
    }


    async getCardPlayButton(card) {
        return card.$('~Start');
    }


    async getCardDeleteButton(card) {
        return card.$('id=com.google.android.deskclock:id/tertiary_button');
    }

    async getCardPauseButton(card) {
        return card.$('~Pause');
    }


    async getCardStopButton(card) {
        return card.$('~Stop');
    }


    async getSecondsRemainingElement(card) {
        return card.$(`id=com.google.android.deskclock:id/timer_text`);
    }


    async setTimer(time) {

        const sequenceOfDigits = time.split(':');

        for(const digitBatch of sequenceOfDigits) {

            for(const digit of digitBatch) {
                const digitElement = await this.getDigitElement(digit);
                await digitElement.click();
            }

        }
    }

    async stopTimer(delayInSeconds, card) {
        await browser.pause(delayInSeconds * 1000);

        const pauseButton = await this.getCardStopButton(card);

        await pauseButton.click();
    }
}

export default new TimerPage();