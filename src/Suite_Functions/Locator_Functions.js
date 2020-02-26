import {Wait_Times, Find_Types, Flags} from "../resources/Constants/Constants.ts";


const {Builder, By, Key, until} = require('selenium-webdriver');

async function Find_Element(Locator_Reference) {
    let Test_Locator = await __Test_Locators[Locator_Reference];
    let Wait_Time_For_This_El = 10; /*global waikt times.*/

    if (Wait_Times in Test_Locator) {
        Wait_Time_For_This_El = await Test_Locator[Wait_Times]
    }

    switch (true) {
        case (Find_Types.Xpath in Test_Locator):
            let aaa1 = await __Chrome_Driver.wait(until.elementLocated(By.xpath(Test_Locator[Find_Types.Xpath])), Wait_Time_For_This_El * 1000);
            return await __Chrome_Driver.findElement(By.xpath(Test_Locator[Find_Types.Xpath]));
        case (Find_Types.ClassName in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.className(Test_Locator[Find_Types.ClassName])), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElement(By.xpath(Test_Locator[Find_Types.ClassName]));
        case (Find_Types.Css in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.css(Test_Locator[Find_Types.Css])), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElement(By.xpath(Test_Locator[Find_Types.Css]));
        case (Find_Types.Id in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.id(Test_Locator[Find_Types.Id])), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElement(By.xpath(Test_Locator[Find_Types.Id]));
        case (Find_Types.Name in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.name(Test_Locator[Find_Types.Name])), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElement(By.xpath(Test_Locator[Find_Types.Name]));
        default:
            throw new Error('Invalid Find Type from the Locators File. Pls check: ' + Test_Locator.toString());
    }
}

async function Find_Elements(Locator_Reference) {
    let Test_Locator = __Test_Locators[Locator_Reference];
    let Wait_Time_For_This_El = 10; /*global waikt times.*/

    if (Wait_Times in Test_Locator) {
        Wait_Time_For_This_El = Test_Locator[Wait_Times]
    }

    switch (true) {
        case (Find_Types.Xpath in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.xpath(Input_Locator)), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElements(By.xpath(Input_Locator));
        case (Find_Types.ClassName in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.className(Input_Locator)), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElements(By.xpath(Input_Locator));
        case (Find_Types.Css in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.css(Input_Locator)), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElements(By.xpath(Input_Locator));
        case (Find_Types.Id in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.id(Input_Locator)), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElements(By.xpath(Input_Locator));
        case (Find_Types.Name in Test_Locator):
            await __Chrome_Driver.wait(until.elementLocated(By.name(Input_Locator)), Wait_Time_For_This_El * 1000);
            return __Chrome_Driver.findElements(By.xpath(Input_Locator));
        default:
            throw new Error('Invalid Find Type from the Locators File. Pls check: ' + Test_Locator.toString());
    }
}

module.exports = {
    Find_Element,
    Find_Elements
};
