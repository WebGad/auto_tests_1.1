const puppeteer = require('puppeteer');
const faker = require('faker');

async function getPic() {
  const browser = await puppeteer.launch({
    headless: false,
    args:['--start-maximized']});
  const page = await browser.newPage();
    await page.goto('https://b2blast.deltacredit.ru');
  await page.setViewport({width: 1400, height: 900})
  await page.click('#bySelection > div:nth-child(4) > div');
  await page.waitForSelector('#userNameInput');
  await page.waitFor(5000)
  await page.type('#userNameInput', 'deltarieltorros@yandex.ru');
  await page.type('#passwordInput', 'Gbdfytn002');
  await page.click('#submitButton');
  // await page.waitFor(5000);
  await page.waitForSelector('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button');
  await page.click('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button');
  await page.click('#cdk-overlay-0 > div > div > button.expressLeadButton.mat-menu-item > div.flexColumn > span.menuItemText');
  await page.waitFor(1000);
  await page.click('#cdk-overlay-0 > div > div > button.expressLeadButton.mat-menu-item');
  await page.waitFor(5000);
  await page.click('#full_fio');
  await page.type('#full_fio', 'Фамилия Имя Отчество');
  await page.click('#mobilephone');
  await page.type('#mobilephone', '9546845123');
  await page.waitFor(1000);
  await page.click('#wrapper > div > lead-ex > div:nth-child(3) > div > app-lead-ex-express > object > div:nth-child(2) > row:nth-child(1) > div > m-select.col-lg-4.col-md-4.col-sm-6.col-xs-12.test-type-of-object.ng-untouched.ng-pristine.ng-invalid > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix');
  await page.waitFor(1000);
    await page.keyboard.press('Enter'); 
    await page.waitFor(2000);
  await page.click('#emailaddress1');
  await page.type('#emailaddress1', 'sdfsd@dsgdf.dfg');
  await page.click('#isOnlyDigitalClientApprove_d219114e-bf07-ea11-8460-005056bf2b6e > div:nth-child(1) > div > div');
  await page.click('#send_digital_d219114e-bf07-ea11-8460-005056bf2b6e > span');
    await page.screenshot({path: 'b2b.png'});
  await browser.close();
}

getPic();