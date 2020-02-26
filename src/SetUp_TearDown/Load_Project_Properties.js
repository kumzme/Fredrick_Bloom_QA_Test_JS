import {Global_TimeOut} from '../resources/Constants/Constants'


 async function Load_Chrome_Driver()   {
    await require('chromedriver');
    var webdriver = await require('selenium-webdriver');
    var driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    return await driver;
};

global.beforeAll(async (done) => {
    global.__Chrome_Driver =  await Load_Chrome_Driver();
    done()
});

global.beforeEach(() => {
    jest.setTimeout(parseInt(__Test_Project_Properties['Global_Test_Timeout']));
});
