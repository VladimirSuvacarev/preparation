//POCETAK KONACNA VERZIJA:
'use strict';

const { Builder, By, until, Key } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

describe('XXX', function() {
    let driver;

    before(async function() {
        let service = new chrome.ServiceBuilder('chromedriver.exe').build();
        chrome.setDefaultService(service);

        driver = await new Builder().forBrowser('chrome').build();
    });

    after(function() {
        return driver.quit();
    });
});

//POCETAK PRVA VERZIJA:
const webdriver = require('selenium-webdriver');
const { By, Key, until } = require('selenium-webdriver');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

describe('XXX', function() {
    let driver;

    before(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    beforeEach(async function() {
        // Pokrece se pre svakog testa
    });

    afterEach(async function() {
        // Pokrece se nakon svakog testa
    });
});


//PRIMER POCETKA TESTA:
it('Open XXX website', async function() {
    await driver.get('https://XXX.rs');

    const pageTitle = await driver.getTitle();

    expect(await driver.findElement(By.css('h1')).getText()).to.contain('XXX');;
});
//OPEN TEST:
it("Opens SITE homepage", async function() {
    await driver.get('https://site.com/');

    expect(await driver.getCurrentUrl()).to.eq('https://site.com/');
});



//PRONADJI ELEMENTE:
//id="ID-ELEMENTA"
const IMEKONSTANTE = await driver.findElement(By.id('ID-ELEMENTA'));
//class="CLASSNAME"
let IMEKONSTANTE = await driver.findElement(By.className('CLASSNAME'));
//<div class="CLASSNAME">VALUE</div>
const IMEKONSTANTE = await emailElement.getAttribute('value');
//preci na prozor alert koji se pojavio
const IMEKONSTANTE = await driver.switchTo().alert();
//<a href="/register">TEXT-LINKA</a>
const IMEKONSTANTE = await driver.findElement(By.linkText('TEXT-LINKA'));
//<a href="/register">DEO LINK TEXTA</a>
const IMEKONSTANTE = await driver.findElement(By.partialLinkText('DEO LINK TEXTA'));
//<input type="submit" name="NAME">
const checkoutBtn = await driver.findElement(By.name('NAME'));
//<TABLE>
const IMEKONSTANTE = await driver.findElement(By.css('table'));
//uzimanje delova stringa (substring(indexStart) ; substring(indexStart, indexEnd))
const IMEKONSTANTE = Number((await IMEKONSTANTEBR2.getText()).substring(1));


//PRONADJENI ELEMENT:
await IMEKONSTANTE.click();
await IMEKONSTANTE.accept();
await confirmation.dismiss();
IMEKONSTANTE.sendKeys(IMEKONSTANTEBR2);
await driver.wait(until.elementIsEnabled(IMEKONSTANTE));
await driver.wait(until.elementIsVisible(IMEKONSTANTE));
await driver.wait(until.alertIsPresent());
//pronaci element i ubaciti konstantu
const IMEKONSTANTE = 'zivojin misic';
const IMEKONSTANTEBR2 = await driver.findElement(By.id('ID-ELEMENTA'));
IMEKONSTANTEBR2.sendKeys(IMEKONSTANTE);
//send keys
await salary.sendKeys(
    Key.chord(Key.CONTROL, 'a'),
    Key.DELETE,
    IMEKONSTANTEBR3
    );
//pronaci vrednost i dodati drugu vednost
const IMEKONSTANTE = await driver.findElement(By.id('ID-ELEMENTA'));
const IMEKONSTANTEBR2 = await salary.getAttribute('VREDNOST');
const IMEKONSTANTEBR3 = Number(IMEKONSTANTEBR2) + 1000;





//EXPECT:
//Kopira se url:
expect(await driver.getCurrentUrl()).to.eq('https://site.com/');
//<div class="CLASSNAME">GETTEXT</div>
expect(await driver.findElement(By.className('CLASSNAME')).getText()).to.eq('GETTEXT');
//<span class="CLASSNAME">TEXT</span>
expect(await IMEKONSTANTE.getText()).to.contain('TEXT');
//<h1>TEXT</h1>
expect(await driver.findElement(By.css('h1')).getText()).to.contain('TEXT');
//cekati da se odredjeni element pojavi ('const IMEKONSTANTE = await driver.findElement(By.id('ID-ELEMENTA')); await driver.wait(until.elementIsEnabled(IMEKONSTANTE));')
expect(await IMEKONSTANTE.isEnabled()).to.be.true;
//posle unosenja odredjenih podataka trazi se potvrda da je sada vidljiv element ('const IMEKONSTANTE = await driver.findElement(By.id('ID-ELEMENTA'));')
expect(await IMEKONSTANTE.isDisplayed()).to.eq(true);
//uporediti text sa brojem pretvorenim u text
expect(await IMEKONSTANTE.getText()).to.eq(newSalary.toString());
//<input type="submit" name="NAME" class="nemari" value="Register">
expect(await driver.findElement(By.name('NAME')).getAttribute('value')).to.contain('Register');



//ocekivanja sa dve konstante:
const fillUserName = 'zivojin misic';
const output = await driver.findElement(By.id('output'));
expect(await output.isDisplayed()).to.eq(true);
const outUserName = await output.findElement(By.id('name'));
expect(await outUserName.getText()).to.contain(fillUserName);





//XPATH:
const IMEKONSTANTE = await driver.findElement(By.xpath('//h5[contains(., "Elements")]/ancestor::div[contains(@class, "top-card")]'));   
await IMEKONSTANTE.click();
const IMEKONSTANTE = await driver.findElement(By.xpath('//label[contains(., "Yes")]'));
await IMEKONSTANTE.click();
const IMEKONSTANTE = await driver.findElement(By.xpath('//label[@for="impressiveRadio"]'));
await IMEKONSTANTE.click();
const IMEKONSTANTE = `//div[@role="row" and contains(., "${email}")]`;
const IMEKONSTANTE = await driver.findElement(By.xpath(`${element}//div[@role="gridcell"][5]`));
const IMEKONSTANTE = await driver.findElement(By.xpath('//*[@class="row" and contains(., "ORDER YOUR BUGS")]'));
const IMEKONSTANTE = await IMEKONSTANTEBR2.findElement(By.xpath('//td[contains(., "STARTER")]/parent::tr'));
const IMEKONSTANTE = await IMEKONSTANTEBR2.findElement(By.xpath('//td[2]'));
const historyRow = await historyTable.findElement(By.xpath(`//td[contains(., "#${orderNum}")]/parent::tr`));


//UNTIL ELEMENT IS ENABLE:
const IMEKONSTANTE = await driver.findElement(By.id('ID-ELEMENTA'));
await driver.wait(until.elementIsEnabled(IMEKONSTANTE));
expect(await IMEKONSTANTE.isEnabled()).to.be.true;

//ELEMENT IS VISIBLE:
const IMEKONSTANTE = await driver.findElement(By.id('ID-ELEMENTA'));
await driver.wait(until.elementIsVisible(IMEKONSTANTE));
expect(await IMEKONSTANTE.isDisplayed()).to.be.true;

//WAIT UNTIL ALERT IS PRESENT
const IMEKONSTANTE = await driver.findElement(By.id('alertButton'));
await IMEKONSTANTE.click();
await driver.wait(until.alertIsPresent());

//SWITCH TO
const IMEKONSTANTE = await driver.switchTo().alert();
expect(await IMEKONSTANTE.getText()).to.contain('TEXT');
await IMEKONSTANTE.accept();

//SWITCH TO FRAME
await driver.switchTo().frame(driver.findElement(By.className('demo-frame')));
    const clickSimpleAlert = await driver.findElement(By.css('button')); // Xpath nije bio dobar, nije u pitanju a element, nego button
    await clickSimpleAlert.click();
    const clickOKButton = driver.switchTo().alert();
    expect(await clickOKButton.getText()).to.contain('I am an alert box!');
    await clickOKButton.accept();
    await driver.switchTo().defaultContent();



//PROMISE - PROVEZBATI
const xpathPackage = '//h3[contains(text(), "starter")]/ancestor::div[contains(@class, "panel")]';
const packageName = await driver.findElement(By.xpath(xpathPackage));
const quantity = await packageName.findElement(By.name('quantity'));
const options = await quantity.findElements(By.css('option'));

await Promise.all(options.map(async function(option) {
const text = await option.getText();
if (text === '2') {
await option.click();

const selectedValue = await quantity.getAttribute('value');
expect(selectedValue).to.contain('2');

const orderButton = await packageName.findElement(By.className('btn btn-primary'));
await orderButton.click();

const url = await driver.getCurrentUrl();
expect(url).to.contain('http://shop.qa.rs/order');
}
}));



//PRIMERI:
//POPUNJAVANJE FORME:
const fillUserName = 'zivojin misic';
const fillUserEmail = 'zivojin.misic@example.loc';
const fillCurrentAddress = 'Kolubarska 1914';
const fillPermanentAddress = 'Kolubarska 1914';

const fullName = await driver.findElement(By.id('userName'));
fullName.sendKeys(fillUserName);

const email = await driver.findElement(By.id('userEmail'));
email.sendKeys(fillUserEmail);

const currentAddress = await driver.findElement(By.id('currentAddress'));
currentAddress.sendKeys(fillCurrentAddress);

const permanentAddress = await driver.findElement(By.id('permanentAddress'));
permanentAddress.sendKeys(fillPermanentAddress);

const buttonSubmit = await driver.findElement(By.id('submit'));
await buttonSubmit.click();

const output = await driver.findElement(By.id('output'));
expect(await output.isDisplayed()).to.eq(true);

const outUserName = await output.findElement(By.id('name'));
const outUserEmail = await output.findElement(By.id('email'));
const outCurrentAddress = await output.findElement(By.id('currentAddress'));
const outPermanentAddress = await output.findElement(By.id('permanentAddress'));

expect(await outUserName.getText()).to.contain(fillUserName);
expect(await outUserEmail.getText()).to.contain(fillUserEmail);
expect(await outCurrentAddress.getText()).to.contain(fillCurrentAddress);
expect(await outPermanentAddress.getText()).to.contain(fillPermanentAddress);