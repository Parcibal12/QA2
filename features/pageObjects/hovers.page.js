const Page = require('./page.js');

class HoversPage extends Page {
    get figure1 () { return $('.figure:nth-child(3)'); }
    get figure1Caption () { return $('.figure:nth-child(3) .figcaption'); }

    async hoverOnFigure1 () {
        await this.figure1.moveTo();
    }

    open () {
        return super.open('hovers');
    }
}

module.exports = new HoversPage();