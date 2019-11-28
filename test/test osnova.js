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
    args:['--start-maximized']});
  const page = await browser.newPage();
    await page.goto('https://b2blast.deltacredit.ru');
  await page.setViewport({width: 1600, height: 800})
  await page.click('#bySelection > div:nth-child(4) > div');
  await page.waitForSelector('#userNameInput');
  await page.waitFor(5000)
  await page.type('#userNameInput', 'deltarieltorros@yandex.ru');
  await page.type('#passwordInput', 'Gbdfytn002');
  await page.click('#submitButton');
  //await page.waitFor(10000);
  await page.waitForSelector('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
  await page.click('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
  //await page.waitForSelector('#cdk-overlay-0 > div > div > button.expressLeadButton.mat-menu-item');
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
    await page.keyboard.press('Enter'); 
    await page.waitFor(2000);
  await page.click('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button > span > mat-icon');
  await page.waitForSelector('#emailaddress1');
  await page.click('#emailaddress1');
  await page.type('#emailaddress1', lead.email);
  await page.focus('#shallCreateLK > label > div > div > div.mat-slide-toggle-thumb');
  await page.waitFor(2000);
  await page.click('#shallCreateLK > label > div > div > div.mat-slide-toggle-thumb');
  await page.waitFor(2000);
  await page.click('#shallCreateLK > label > div > div > div.mat-slide-toggle-thumb');
  await page.waitFor(2000);
  await page.keyboard.press('Tab'); 
  await page.keyboard.press('Space'); 
    const nameElement = await context.page.$eval('mat-button-ripple mat-ripple', el => el.text())
  console.log(nameElement)  
  
  //await page.click('...> div > dc-information-panel > div > span.text.ng-star-inserted');
  //await page.waitFor(5000);
  //const [button] = await page.$x("//div[@class='agreementRadioButton mat-radio-button mat-accent mat-radio-checked']/button[contains('Через личный кабинет клиента')]");
  //if (button) {
    //await button.click();}
    //await page.waitFor(2000);
  
   
  //const [button] = await page.$x("//div[@class='mat-button-wrapper']/button[contains(., 'Отправить запрос согласия')]");
  //if (button) {
    //await button.click();}
    await page.screenshot({path: 'b2b.png'});
  await browser.close();
}

getPic();