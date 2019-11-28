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
  try{
    // throw new Error('Karina');
  await page.waitForSelector('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
  await page.click('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
  await page.waitFor(5000)
  await page.click('#cdk-overlay-0 > div > div > button.expressLeadButton.mat-menu-item');
  await page.waitFor(5000);
  await page.click('#wrapper > div > lead-ex > div:nth-child(3) > div > app-lead-ex-express > personal-data-short > row > div > dc-dadata-selector > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix');
//   console.log(getRandomChar());
  await page.type('#wrapper > div > lead-ex > div:nth-child(3) > div > app-lead-ex-express > personal-data-short > row > div > dc-dadata-selector > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix', lead.name + ' ' + getRandomChar());
  await page.waitFor(3000);

  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
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
  
  // console.log('#send_digital_' + page.url().slice(-36));
  // await page.click('#upload_print_' + idc);
  // console.log(fileUploader);
  var fileUploader = await page.$('#mat-tab-content-0-0 > div > personal-data > personal-document > app-recognition > section > div.upload-file-container > form > input[type=file]'); //Загрузка паспорта, надо искать input
  fileUploader.uploadFile('G:/Files/Passport.png');
  await page.waitFor(5000);
  await page.click('#print_' + idc);
  var fileUploader = await page.$('#image_uploads3');
  fileUploader.uploadFile('G:/Files/Podor.txt');
  await page.waitFor(5000);
   

  
  }catch {
    await page.screenshot({path: 'b2b' + getNowTime() + '.png'});
  } //скрин при возникновении ошибки
  await browser.close();
}
getPic();   

function getRandomChar() {
    const chars = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я'];
    const charNumber = Math.floor(Math.random() * (chars.length - 0) + 0);

    return chars[charNumber];
}


function getRandomClick() {
    const clicks = [1, 2, 3];
        const clickNumber = Math.floor(Math.random() * (chars.length - 0) + 0);

    return chars[charNumber];
}

function getNowTime() { // Генерация времени для добавление в имя скриншота при ошибке
  var date = new Date();

  const yy = date.getFullYear().toString();
  const mn = date.getMonth().toString();
  const hh = date.getHours().toString();
  const mm = date.getMinutes().toString();

  return yy + '.' + mn + '.' + hh + '.' + mm;
}