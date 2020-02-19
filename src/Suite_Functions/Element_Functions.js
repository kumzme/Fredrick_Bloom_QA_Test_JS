const {Builder, By, Key, until} = require('selenium-webdriver');

async function Navigate(Webdriver, URL_String_Reference){
    let Input_Url = __Test_Data[URL_String_Reference];
    console.log(__Test_Data);
    await Webdriver.get(Input_Url);
}
async function Set_Text(Webdriver, Locator_Reference, Text_Reference){
    let Input_Text = __Test_Data[Text_Reference];
    let Input_Locator = __Test_Locators[Locator_Reference]['Xpath'];

    await Webdriver.findElement(By.xpath(Input_Locator)).sendKeys(Input_Text);
}

async function Click_Element(Webdriver, Locator_Reference){
    let Input_Locator = __Test_Locators[Locator_Reference]['Xpath'];
    await Webdriver.findElement(By.xpath(Input_Locator)).click();
}

async function Get_Text(Webdriver, Locator_Reference) {
    let Input_Locator = __Test_Locators[Locator_Reference]['Xpath'];
    await Webdriver.wait(until.elementLocated(By.xpath(Input_Locator)), 15 * 1000);
    return await Webdriver.findElement(By.xpath(Input_Locator)).getText();
}

module.exports ={
    Set_Text, Navigate, Click_Element, Get_Text
};