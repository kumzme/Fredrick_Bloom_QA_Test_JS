const {Navigate, Set_Text, Click_Element, Get_Text} = require('../Suite_Functions/Element_Functions');
const {Delay_For} = require('../Suite_Functions/Generic');
const {API_Get} = require('../Suite_Functions/API_Functions');


// Test 01 - Fikrst navigate to Expedia and login

/*
test('Navigate to Expedia .com',async function aa() {
    jest.setTimeout(parseInt( __Test_Project_Properties['Global_Test_Timeout'] ) );
    console.log("_______");
    var Chrome_Driver =    await require('../Suite_Functions/Webdriver').Load_Chrome_Driver;
    // Chrome_Driver.get();
    setTimeout(function(){}, 3000);
    await Navigate(Chrome_Driver, 'Expedia_URL');
    await Set_Text(Chrome_Driver, 'Expedia_Origin_Search_Page','Origin_01');
    await Set_Text(Chrome_Driver, 'Expedia_Destination_Search_Page','Destination_01');
    await Set_Text(Chrome_Driver, 'Expedia_Start_Date_Search_Page','Start_Date_01');
    await Set_Text(Chrome_Driver, 'Expedia_End_Date_Search_Page','End_Date_01');
    await Click_Element(Chrome_Driver, 'Expedia_Search_Button_Search_Page');
    // await Delay_For(100000000);
    let error_Text = await Get_Text(Chrome_Driver, 'Expedia_Search_Alert_Error');
    let error_Text_Expected = __Test_Data['Destination_01_Error'];
    var re = new RegExp(error_Text_Expected,"g");
    expect(error_Text).toMatch(re);
    setTimeout(function(){}, 3000);
    //await Delay_For(10000000000);
});
*/

// Test 02 - get API and parse  a body
test('Get API from http://dummy.restapiexample.com',async () => {
    jest.setTimeout(parseInt( __Test_Project_Properties['Global_Test_Timeout'] ) );
    let Some_Var = await API_Get('API_URL', '');
});