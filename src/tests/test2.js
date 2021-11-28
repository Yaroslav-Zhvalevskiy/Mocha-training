const ui = require('../app/ui');

describe('example spec', function () {
    before(async () => {
        await ui.ph.launch();
    })

    after(() => ui.ph.finish());

    beforeEach(async () => {
        await ui.ph.create();
        await ui.navigate();
    })

    afterEach(() => ui.ph.close());

    it('second test', async function () {
        await ui.ph.page.waitForResponse(resp => {
            return resp.url() === 'https://img.shields.io/npm/v/puppeteer.svg' && resp.status() === 200;
        });
        // await page.waitForTimeout(5000);
        const text2 = await ui.header.getText('title');
        const text3 = await ui.header.getText('title');
        ui.expect(text2).to.equal('Puppeteerv12.0.0Search:');
    })
});