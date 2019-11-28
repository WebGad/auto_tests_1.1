const puppeteer = require('puppeteer');
const faker = require('faker');
faker.locale = 'ru';
const lead = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
  date: faker.date.past(),
};
0// Рандом буквы для адресов
['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ч', 'Ш', 'Э', 'Ю', '1', '2', '3', '4', 'E', 'F', 'H', 'I', 'P', 'S', 'W'];
function getRandomChar() {
    const chars = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ы', 'Э', 'Ю', 'Я'];
    const charNumber = Math.floor(Math.random() * (chars.length - 0) + 0);

    return chars[charNumber];
}
// Рандом для поля Должность
function getRandomChar2() {
  const chars2 = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ч', 'Ш', 'Э', 'Ю', 'E', 'F', 'H', 'I', 'P', 'S', 'W'];
  const charNumber = Math.floor(Math.random() * (chars2.length - 0) + 0);

  return chars2[charNumber];
}
// Рандом для повторения фунции и ИНН в Место работы
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// Генерация времени для добавление в имя скриншота при ошибке
function getNowTime() { 
  var date = new Date();
  const yy = date.getFullYear().toString();
  const mn = date.getMonth().toString();
  const hh = date.getHours().toString();
  const mm = date.getMinutes().toString();

  return yy + '.' + mn + '.' + hh + '.' + mm;
}
async function getPic(){
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
  // try{
    // throw new Error('Karina');
    
  
  await page.waitForSelector('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
   await page.click('#wrapper > div > app-home > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > div > button > span > mat-icon');
    await page.waitFor(5000)

    await page.click('#cdk-overlay-0 > div > div > button.fullLeadButton.mat-menu-item');
    await page.waitFor(5000);

  await page.click('#mat-tab-content-0-0 > div > personal-data > row:nth-child(2) > div > dc-dadata-selector > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix');
//   console.log(getRandomChar());
  await page.type('#mat-tab-content-0-0 > div > personal-data > row:nth-child(2) > div > dc-dadata-selector > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix', lead.name + ' ' + getRandomChar());
  await page.waitFor(3000);
      let i = getRandomInt(1, 3);
    // console.log(i);
    while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
      await page.keyboard.press('ArrowDown');
      i--;
      }
  await page.keyboard.press('Enter');

  await page.click('#mobilephone');
  await page.type('#mobilephone', lead.phone);
    await page.waitFor(1000);
       
    //  job-place > div.ng-star-inserted > row:nth-child(1) > div > dc-autocomplete
    // #mat-tab-content-8-0 > div > job-place > div.ng-star-inserted > row:nth-child(1) > div > dc-autocomplete > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix

  await page.click('#mcdsoft_type_object > div > div.mat-select-value > span');  
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');

  await page.click('#navicons_credit_sum');
  await page.type('#navicons_credit_sum', '' + getRandomInt(10000, 80000));
  
  await page.click('#mcdsoft_familystatus > div > div.mat-select-value > span');
  await page.keyboard.press('Enter');
  await page.waitFor(1000);

  await page.click('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button > span > mat-icon'); //Сохранение
  const idc = page.url().slice(-36);
  await page.waitForSelector('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button > span > mat-icon');

  await page.click('#emailaddress1');
  await page.type('#emailaddress1', lead.email);
  await page.click('#mat-input-4'); //Уровень образования
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');

   await page.click('#mat-input-14'); //Страна рождения
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

  await page.click('#mat-tab-content-0-0 > div > personal-data > textbox > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix'); //Место рождения
   await page.type('#mat-tab-content-0-0 > div > personal-data > textbox > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix', 'Балалайка');
   var fileUploader = await page.$('#mat-tab-content-0-0 > div > personal-data > personal-document > app-recognition > section > div.upload-file-container > form > input[type=file]');
   fileUploader.uploadFile('G:/Files/Pasport_RF.jpg'); 
   await page.waitFor(5000);

  await page.click('#mat-tab-content-0-0 > div > personal-data > personal-document > app-recognition > section > div.previews.ng-star-inserted > div > div > div > button');
   await page.waitFor(5000);

  await page.click('#inputField');
   await page.type('#inputField', 'Выдан и хорошо');
 
  await page.click('#mcdsoft_full_address');
   await page.type('#mcdsoft_full_address', '' + getRandomChar());
   await page.waitFor(5000);

  await page.keyboard.press('ArrowDown');
   await page.keyboard.press('Enter');
   await page.waitFor(5000);

  await page.click('#mcdsoft_form_attest > div > div.mat-select-value > span');
   await page.keyboard.press('Enter');
   await page.waitFor(5000);

  var fileUploader = await page.$('#mat-tab-content-0-0 > div > income > div > row:nth-child(2) > div > app-recognition > section > div.upload-file-container > form > input[type=file]');
  fileUploader.uploadFile('G:/Files/2_NDFL.jpg'); 
   await page.waitFor(5000);

  await page.click('#mat-tab-content-0-0 > div > income > div > row:nth-child(2) > div > app-recognition > section > div.previews.ng-star-inserted > div > div > div > button');
   await page.waitFor(5000);

  await page.click('#mcdsoft_grey_avg');
   await page.type('#mcdsoft_grey_avg', '100500');
  
   //Сфера деятельности компании 
  var elem = document.getElementsByClassName('mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-pristine ng-invalid ng-touched')(0);
   await page.click(elem);
//  await page.click('#mat-tab-content-0-0 > div > job-place > div.ng-star-inserted > row:nth-child(1) > div > dc-autocomplete > mat-form-field > div > div.mat-form-field-flex > div.mat-form-field-infix');
    let s = getRandomInt(1, 63);
     while (s) { // когда s будет равно 0, условие станет ложным, и цикл выбора Сферы деятельности остановится
     await page.keyboard.press('ArrowDown');
    s--;
  }
  await page.keyboard.press('Enter');

  await page.click('#companyname');
  await page.type('#companyname', '' + getRandomInt(99, 300));
  await page.waitFor(5000);
    let k = getRandomInt(2, 4);
     while (k) { // когда k будет равно 0, условие станет ложным, и цикл остановится
     await page.keyboard.press('ArrowDown');
    console.log(k);
    k--;
     }
  await page.keyboard.press('Enter');
  await page.waitFor(5000);

  await page.click('#mcdsoft_company_phone');
  await page.type('#mcdsoft_company_phone', lead.phone);

  await page.click('#mcdsoft_company_address');
  await page.type('#mcdsoft_company_address', '' + getRandomChar());
  await page.waitFor(5000);
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');

  // Должность
  await page.click('#jobtitle');
  await page.type('#jobtitle', '' + getRandomChar2());
    let d = getRandomInt(1, 20);
     while (d) { // когда s будет равно 0, условие станет ложным, и цикл выбора Сферы деятельности остановится
     await page.keyboard.press('ArrowDown');
    d--;
  }
  await page.keyboard.press('Enter');

  await page.click('#mcdsoft_nature_of_work > div > div.mat-select-value > span');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');


  
  // Выкусить id заявки после создания лида
  // console.log('#send_digital_' + page.url().slice(-36));
  // await page.click('#upload_print_' + idc);
  // console.log(fileUploader);


  // Загрузка печатного согласия
  await page.click('#print_' + idc);
  var fileUploader = await page.$('#image_uploads3');
  fileUploader.uploadFile('G:/Files/Podor.txt');
  await page.waitFor(5000);
   

  
  // }catch {
  //   await page.screenshot({path: 'b2b' + getNowTime() + '.png'});
  // } //скрин при возникновении ошибки
  await page.click('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button > span > mat-icon'); //Сохранение
  await page.waitForSelector('#wrapper > div > lead-ex > dc-header > div.portalHeader > div > div.headerButtonsGrid > div:nth-child(2) > button > span > mat-icon');
  // await browser.close();
}

getPic();   
