import {Wait_Times, Find_Types, Flags} from "../resources/Constants/Constants.ts";
const {Builder, By, Key, until} = require('selenium-webdriver');
const {Find_Element, Find_Elements} = require('./Locator_Functions');

async function Navigate( URL_String_Reference){
    let Input_Url = __Test_Data[URL_String_Reference];
    console.log(__Test_Data);
    console.log(typeof __Chrome_Driver);
    await __Chrome_Driver.get(Input_Url);
}
async function Set_Text( Locator_Reference, Text_Reference){
    let Input_Text = __Test_Data[Text_Reference];
    let aa = await Find_Element(Locator_Reference);
    let Test_Locator = await __Test_Locators[Locator_Reference];
    if (Flags.Clear_Text in Test_Locator){
       aa.clear()
    }
    await aa.sendKeys(Input_Text);
}

async function Click_Element( Locator_Reference){
    let aa = await Find_Element(Locator_Reference);
    await aa.click();
}

async function Take_Screenshot(){

    await __Chrome_Driver.takeScreenshot();
}

async function Get_Text(Locator_Reference) {
    let aa = await Find_Element(Locator_Reference);
    return await aa.getText();
}

module.exports ={
    Set_Text, Navigate, Click_Element, Get_Text, Take_Screenshot
};
