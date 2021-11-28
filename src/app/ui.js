const Header = require('./objects/controls/header');
const chai = require('chai');
const BaseObject = require('./objects/baseObject');


class Ui extends BaseObject {

    get expect() {
        return chai.expect;
    }

    get header() {
        return this.createGetter(Header);
    }

    async navigate(url = '') {
        if (!url.includes('http')) {
            url = `${this.ph.baseUrl}${url}`;
        }
        await this.ph.page.goto(url);
    }

    // header = new Header();
}

module.exports = new Ui();