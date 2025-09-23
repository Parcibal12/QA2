import { browser } from "@wdio/globals";

export async function scrollToElement(scrollableElement, elementIdentifier, maxScrolls) {
    for (let scroll = 0; scroll < maxScrolls; scroll++) {
        const elements = await $$(elementIdentifier);
        if (elements.length > 0 && (await elements[0].isDisplayed())) {
            return true;
        }
        await browser.touchAction([
            { action: 'press', x: 500, y: 1500 },
            { action: 'wait', ms: 500 },
            { action: 'moveTo', x: 500, y: 500 },
            'release'
        ]);
    }
    return false;
}