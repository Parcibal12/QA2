const Page = require('./page.js');

class CheckboxesPage extends Page {
    get checkbox1 () { return $('//input[@type="checkbox"][1]'); }
    get checkbox2 () { return $('//input[@type="checkbox"][2]'); }

    open () {
        return super.open('checkboxes');
    }
}

module.exports = new CheckboxesPage();