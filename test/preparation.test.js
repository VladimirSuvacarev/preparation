'use strict';

const { Builder, By, until, Key, } = require('selenium-webdriver');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();
const chrome = require('selenium-webdriver/chrome');
const { assert } = require('chai');

describe('novo', function() {
    let driver;

    before(async function() {
        let service = new chrome.ServiceBuilder('chromedriver.exe').build();
        chrome.setDefaultService(service);

        driver = await new Builder().forBrowser('chrome').build();
    });

    after(function() {
        return driver.quit();
    });

it("Opens demoQA homepage", async function() {
    await driver.get('https://www.way2automation.com/way2auto_jquery/automation-practice-site.html');
    
    expect(await driver.getCurrentUrl()).to.eq('https://www.way2automation.com/way2auto_jquery/automation-practice-site.html');
});

it("Click on Registration and fill form", async function() {
    const originalWindow = await driver.getWindowHandle();
    expect((await driver.getAllWindowHandles()).length === 2);
    await driver.findElement(By.linkText('Registration')).click();

    await driver.wait(
    async () => (await driver.getAllWindowHandles()).length === 2,
    10000);

    const windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
    if (handle !== originalWindow) {
    await driver.switchTo().window(handle);
    }

    await driver.wait(until.elementTextContains(h2, 'Registration'), 10000);});

    expect(await driver.findElement(By.css('h2')).getText()).to.contain('Registration');

    const fillFirstName = await driver.findElement(By.xpath(`//label[.='First Name:']//following-sibling::input`));
    fillFirstName.sendKeys('John');

    const fillLastName = await driver.findElement(By.xpath(`//label[.='Last Name:']//following-sibling::input`));
    fillLastName.sendKeys('Smit');

    const chooseSingle = await driver.findElement(By.xpath(`//fieldset[*='Marital Status:']/div/label[.=' Single']`));
    await chooseSingle.click();
    const chooseDivorced = await driver.findElement(By.xpath(`//fieldset[*='Marital Status:']/div/label[.=' Divorced']`));
    await chooseDivorced.click();
    const chooseMarried = await driver.findElement(By.xpath(`//fieldset[*='Marital Status:']/div/label[.=' Married']`));
    await chooseMarried.click();

    const chooseHobby = await driver.findElement(By.xpath(`//fieldset[*='Hobby:']/div/label[.=' Dance']`));
    await chooseHobby.click();

    //ovde mi test prolazi,ali pri pokretanju testa ne vidim da se vrednosti menjaju. 

    /*const xpathCountry = await driver.findElement(By.xpath(`//fieldset[*='Country:']/select`));
    const pickCountry = await driver.findElement(By.xpath(`//fieldset[4]/select`));
    const optionsCountry = await pickCountry.findElements(By.css('option'));

    await Promise.all(optionsCountry.map(async function(option) {
    const text = await option.getText();
    if (text === 'India') {
    
        await option.click();
    
    const selectedValue = await pickCountry.getAttribute('value');
    expect(selectedValue).to.contain('India');
    }
    }));

    const pickMonth = await driver.findElement(By.xpath(`//fieldset[*='Date of Birth:']/div[1]`));
    const optionsMonth = await pickMonth.findElements(By.css('option'));

    await Promise.all(optionsMonth.map(async function(option) {
    const text = await option.getText();
    if (Number == 1) {
    
        await option.click();
    
    const selectedValueMonth = await pickMonth.getAttribute('value');
    expect(selectedValueMonth).to.contain(Number === 1);
    }
    }));

    const pickDay = await driver.findElement(By.xpath(`//fieldset[*='Date of Birth:']/div[2]`));
    const optionsDay = await pickDay.findElements(By.css('option'));

    await Promise.all(optionsDay.map(async function(option) {
    const text = await option.getText();
    if (Number === 1) {
    
        await option.click();
    
    const selectedValueDay = await pickDay.getAttribute('value');
    expect(selectedValueDay).to.contain(1);
    }
    }));

    const pickYear = await driver.findElement(By.xpath(`//fieldset[*='Date of Birth:']/div[3]`));
    const optionsYear = await pickYear.findElements(By.css('option'));

    await Promise.all(optionsYear.map(async function(option) {
        const text = await option.getText();
        if (Number === '2014') {
        
            await option.click();
        
        const selectedValueYear = await pickYear.getAttribute('value');
        expect(selectedValueYear).to.contain('2014');
        }
        }));
        */

    const fillPhoneNumber = await driver.findElement(By.xpath(`//fieldset[*='Phone Number:']/input[@name='phone']`));
    fillPhoneNumber.sendKeys('+381451552452');

    const fillUserName = await driver.findElement(By.xpath(`//fieldset[@class='fieldset'][3]/input`));
    fillUserName.sendKeys('johan');

    const fillEmail = await driver.findElement(By.xpath(`//fieldset[*='E-mail:']/input[@name='email']`));
    fillEmail.sendKeys('jonhsmith@example.local');

    const fillAboutYourself = await driver.findElement(By.xpath(`//fieldset[*='About Yourself']/textarea`));
    fillAboutYourself.sendKeys('I am young and beautiful');

    const fillPassword = await driver.findElement(By.xpath(`//fieldset[*='Password:']/input`));
    fillPassword.sendKeys('12345');

    const fillConfirmPassword = await driver.findElement(By.xpath(`//fieldset[*='Confirm Password:']/input`));
    fillConfirmPassword.sendKeys('12345');

    const clickSubmit = await driver.findElement(By.xpath(`//fieldset/input[@value='submit']`));
    clickSubmit.click();

});

it('Click on alert and test alert', async function(){
    await driver.findElement(By.linkText('Alert')).click();

    expect(await driver.getCurrentUrl()).to.eq('https://www.way2automation.com/way2auto_jquery/alert.php#load_box');
   
    await driver.switchTo().frame(driver.findElement(By.className('demo-frame')));
    const clickSimpleAlert = await driver.findElement(By.css('button'));
    await clickSimpleAlert.click();
    const clickOKButton = driver.switchTo().alert();
    expect(await clickOKButton.getText()).to.contain('I am an alert box!');
    await clickOKButton.accept();
    await driver.switchTo().defaultContent();
    
    const clickInputAlert = await driver.findElement(By.xpath(`//a[.='Input Alert']`));
    clickInputAlert.click();

    const IMEKONSTANTE = await driver.findElement(By.css('h1'));
    await driver.wait(until.elementIsVisible(IMEKONSTANTE));

    expect(await driver.findElement(By.className('active')).getText()).to.eq('INPUT ALERT');

    await driver.switchTo().frame(driver.findElement(By.className('demo-frame')));
    const clickInputAlertButton = await driver.findElement(By.css('button'));
    await clickInputAlertButton.click();
    const clickOKButton2 = driver.switchTo().alert();
    expect(await clickOKButton2.getText()).to.contain('Please enter your name');
    await clickOKButton2.accept();
    await driver.switchTo().defaultContent();
});


});