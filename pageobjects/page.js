// pageobjects/page.js

module.exports = class Page {
    /**
     * Abre una ruta relativa a la baseUrl
     * @param path la ruta a abrir (ej. '/')
     */
    open(path) {
        // Ya no necesita la URL completa, la toma de wdio.conf.js
        return browser.url(path);
    }
}