import puppeteer from 'puppeteer';

describe('The website', () => {
  let browser;

  beforeAll(async () => {
    // Before all tests start we'll open a new browser window
    browser = await puppeteer.launch({ headless: false, slowMo: 80 });
  });

  afterAll(async () => {
    // When the tests are done we'll exit the browser
    await browser.close();
  });

  describe('start page', () => {
    it('has a title', async () => {
      const page = await browser.newPage(); // open a new tab
      await page.goto('http://localhost:3000/'); // visit a page
      await page.waitForSelector('body'); // wait for the body to load

      const text = await page.evaluate(() => document.querySelector('h1').innerText);
      expect(text).toContain('Accra Times'); // The page should contain some text
    });

    it('has working links to about and contact', async () => {
      const page = await browser.newPage(); // open a new tab
      await page.goto('http://localhost:3000/'); // visit a page
      await page.click('a[href="/about"]'); // click on a link with href to /about
      await page.waitForSelector('body'); // wait for the body to load

      await page.goto('http://localhost:3000/'); // visit a page
      await page.click('a[href="/contact"]'); // click on a link with href to /about
      await page.waitForSelector('body'); // wait for the body to load
    });
  });
});