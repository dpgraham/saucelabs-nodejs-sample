const homePage = process.env.HOME_PAGE || "http://www.google.com";

describe('Sauce Labs visual test', () => {
    before(async function () {
        await browser.execute('/*@visual.init*/', 'My Web Page');
    });
    it('should take a snapshot of application home page', async () => {
        await browser.url(homePage);
        await browser.execute('/*@visual.snapshot*/', 'Home Page');
    });
    after(async function () {
        //End visual test and get result
        const result = await browser.execute('/*@visual.end*/');
        console.log('Visual test completed. Result: ', result);
        if (result === null) {
            console.log(`Visual testing not supported for account '${process.env.SAUCE_USERNAME}'. ` +
                `To subscribe, please visit saucelabs.com`); // TODO: Where can you sign up for Visual
        }
    });
});

