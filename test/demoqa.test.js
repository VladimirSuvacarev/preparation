'use strict';

const { Builder, By, until, Key, } = require('selenium-webdriver');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();
const chrome = require('selenium-webdriver/chrome');

describe('demoQA', function() {
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
    await driver.get('https://demoqa.com/');
    
    expect(await driver.getCurrentUrl()).to.eq('https://demoqa.com/');
});


it("Click On Elements", async function(){
    const elementsButton = await driver.findElement(By.css('h5'));
    await elementsButton.click();
    
    expect(await driver.findElement(By.className('main-header')).getText()).to.eq('Elements');
})

it("Click On Text Box", async function(){
    const textBoxButton = await driver.findElement(By.id('item-0'));
    await textBoxButton.click();
    
    expect(await driver.findElement(By.className('main-header')).getText()).to.eq('Text Box');
})

it("Fill form and confirm", async function(){
    const fillFullName = 'Petar Petrovic';
    const fillEmail = 'petarpetrovic@egmail.com';
    const fillPurrentAddress = 'trgPalihHeroja1'
    const fillPermanentAddress = 'trgPalihHeroja1'

    const fullName = await driver.findElement(By.id('userName'));
    fullName.sendKeys(fillFullName);

    const email = await driver.findElement(By.id('userEmail'));
    email.sendKeys(fillEmail);

    const currentAddress = await driver.findElement(By.id('currentAddress'));
    currentAddress.sendKeys(fillPurrentAddress);

    const permanentAddress = await driver.findElement(By.id('permanentAddress'));
    permanentAddress.sendKeys(fillPermanentAddress);

    const submitButton = await driver.findElement(By.id('submit'));
    await submitButton.click();

    const output = await driver.findElement(By.id('output'));
    await driver.wait(until.elementIsVisible(output));
    expect(await output.isDisplayed()).to.be.true;
})

it("Click On Check Box", async function(){
    const textBoxButton = await driver.findElement(By.id('item-1'));
    await textBoxButton.click();
    
    expect(await driver.findElement(By.className('main-header')).getText()).to.eq('Check Box');
})

it("Check Box", async function(){
    const clickOnCheckBox  = await driver.findElement(By.xpath(`//span[contains(@class, 'rct-checkbox')]`));
    await clickOnCheckBox.click();
    
    const result = await driver.findElement(By.id('result'));
    await driver.wait(until.elementIsVisible(result));
    expect(await result.isDisplayed()).to.be.true;

    await clickOnCheckBox.click();

    driver.findElements(By.id('result')).then(function(elements){expect(elements.length).to.equal(0)})

    const expandAll = await driver.findElement(By.className('rct-icon rct-icon-expand-all'));
    await expandAll.click();

    expect(await driver.findElement(By.className('rct-node rct-node-parent rct-node-expanded')).getText()).to.contain('General');

    const clickOnGeneral = await driver.findElement(By.xpath(`//span[text()="General"]`))
    await clickOnGeneral.click();

    expect(await driver.findElement(By.id('result')));

    await clickOnGeneral.click();

    const collapseAll = await driver.findElement(By.className('rct-icon rct-icon-collapse-all'));
    await collapseAll.click();

    driver.findElements(By.id('result')).then(function(elements){expect(elements.length).to.equal(0)})
})

it("Click On Radio Button", async function(){
    const textBoxButton = await driver.findElement(By.id('item-2'));
    await textBoxButton.click();
    
    expect(await driver.findElement(By.className('main-header')).getText()).to.eq('Radio Button');
})

it("Radion Button", async function(){
    const clickOnYes = await driver.findElement(By.xpath(`//label[(text()='Yes')]`));
    await clickOnYes.click();

    const messagge = await driver.findElement(By.className('text-success'));
    await driver.wait(until.elementIsVisible(messagge));
    expect(await messagge.isDisplayed()).to.be.true;
    expect(await messagge.getText()).to.contain('Yes');
    
    const clickOnImpressive = await driver.findElement(By.xpath(`//label[(text()='Impressive')]`));
    await clickOnImpressive.click();

    await driver.wait(until.elementIsVisible(messagge));
    expect(await messagge.isDisplayed()).to.be.true;
    expect(await messagge.getText()).to.contain('Impressive');
})

it("Click On Web Tables", async function(){
    const webTablesButton = await driver.findElement(By.id('item-3'));
    await webTablesButton.click();
    
    expect(await driver.findElement(By.className('main-header')).getText()).to.eq('Web Tables');
})

it("Web Tables", async function(){
    const clickOnYes = await driver.findElement(By.id('addNewRecordButton'));
    await clickOnYes.click();
    
    const registrationForm = await driver.findElement(By.id('registration-form-modal'));
    await driver.wait(until.elementIsVisible(registrationForm));
    expect(await registrationForm.isDisplayed()).to.be.true;

    const fillFirstName = 'Petar';
    const fillLastName = 'Petrovic';
    const fillEmail = 'petarpetrovic@egmail.com'
    const fillAge = '50'
    const fillSelary = '1'
    const fillDepartment = 'Production'

    const fistName = await driver.findElement(By.id('firstName'));
    await fistName.sendKeys(fillFirstName);
    
    const lastName = await driver.findElement(By.id('lastName'));
    await lastName.sendKeys(fillLastName);

    const Email = await driver.findElement(By.id('userEmail'));
    await Email.sendKeys(fillEmail);
    
    const age = await driver.findElement(By.id('age'));
    await age.sendKeys(fillAge);
    
    const salary = await driver.findElement(By.id('salary'));
    await salary.sendKeys(fillSelary);
    
    const department = await driver.findElement(By.id('department'));
    await department.sendKeys(fillDepartment);

    const submit = await driver.findElement(By.id('submit'));
    await submit.click();

    expect(await driver.findElement(By.className('main-header')).getText()).to.eq('Web Tables');


})







it('Weith', async function() {
    await driver.wait(until.elementLocated(By.id('bbbb')), 3000);
})


});