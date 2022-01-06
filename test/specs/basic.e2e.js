const expect = require('chai').expect;

const homePage = process.env.HOME_PAGE || "http://www.google.com";

let titleMatcher = process.env.HOME_PAGE ? '' : 'Google';

// Uncomment this and fill this in if your home page has a "title" substring to match on
// titleMatcher = '<some title wildcard>';

describe(`Basic Sauce Labs test for ${homePage}`, () => {
    before(async function () {
    });
    it(`should check document.title of ${homePage}`, async () => {
        await browser.url(homePage);
        expect(await browser.getTitle()).to.include(titleMatcher);
    });
    after(async function () {
    });
});

