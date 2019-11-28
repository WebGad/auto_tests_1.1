const puppeteer = require('puppeteer');
const faker = require('faker');
faker.locale = 'ru';
const lead = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
};
async function getPic() {
  const browser = await puppeteer.launch({
    headless: false,
    args:['--start-maximized']
  });
  const [page] = await browser.pages();
  await page.goto('https://b2blast.deltacredit.ru');
  await page.setViewport({width: 1600, height: 800})
  await page.click('#bySelection > div:nth-child(4) > div');
  await page.waitForSelector('#userNameInput');
  await page.waitFor(5000)
  await page.type('#userNameInput', 'deltarieltorros@yandex.ru');
  await page.type('#passwordInput', 'Gbdfytn002');
  await page.click('#submitButton');  
  await page.waitForSelector('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
  await page.click('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
  await page.waitFor(5000)
  await page.click('#cdk-overlay-0 > div > div > button.expressLeadButton.mat-menu-item');
  await page.waitFor(5000);
  await page.click('#wrapper > div > lead-ex > div:nth-child(3) > div > app-lead-ex-express > personal-data-short > row > div > dc-dadata-selector > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix');
  await page.type('#wrapper > div > lead-ex > div:nth-child(3) > div > app-lead-ex-express > personal-data-short > row > div > dc-dadata-selector > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix', lead.name);
  await page.click('#mobilephone');
  await page.type('#mobilephone', lead.phone);
  await page.waitFor(1000);
  await page.click('#wrapper > div > lead-ex > div:nth-child(3) > div > app-lead-ex-express > object > div:nth-child(2) > row:nth-child(1) > div > m-select.col-lg-4.col-md-4.col-sm-6.col-xs-12.test-type-of-object.ng-untouched.ng-pristine.ng-invalid > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix');
  await page.waitFor(1000);
  //await page.click('[id="mat-option-472"]');
  await page.keyboard.press('Enter'); 
    await page.waitFor(2000);
  await page.click('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button > span > mat-icon'); //Сохранение
  const idc = page.url().slice(-36);
  await page.waitForSelector('#emailaddress1');
  await page.click('#emailaddress1');
  await page.type('#emailaddress1', lead.email);
  await page.click("#description");
await page.type ('#description','Здааасьте');
await page.waitFor(2000);
  // const id = 00
  // console.log('#send_digital_' + page.url().slice(-36));
  await page.click('#digital_' + idc);
  await page.click('#send_digital_' + idc);
  await page.waitFor(5000);

     await page.screenshot({path: 'b2b.png'});
  await browser.close();

}

getPic();   