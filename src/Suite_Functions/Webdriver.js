let File_Functions  = require('../Suite_Functions/File_Functions.js');
var Load_Chrome_Driver =    () =>  {
    let Test_Driver_Folders =  File_Functions.Get_Test_Data_Path() +  "\\src\\resources\\Drivers\\";
    require('chromedriver');
    var webdriver = require('selenium-webdriver');
    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    return driver;
};

module.exports = {
    Load_Chrome_Driver: Load_Chrome_Driver()
};
