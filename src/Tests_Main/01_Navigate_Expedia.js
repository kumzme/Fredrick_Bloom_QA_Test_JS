// let body_ = {};
let body2_ = {};
const { Take_Screenshot , Navigate, Set_Text, Click_Element, Get_Text} = require('../Suite_Functions/Element_Functions');

const {Delay_For} = require('../Suite_Functions/Generic');
const {API_Get} = require('../Suite_Functions/API_Functions.js');


// Test 01 - First navigate to Expedia and login


describe('Navigate to Expedia .com', async () => {


    test('Navigate to Expedia .com',async function aa(done) {
        jest.setTimeout(parseInt( __Test_Project_Properties['Global_Test_Timeout'] ) );
        console.log("_______");
        console.log(__Chrome_Driver);
        console.log(global.__Chrome_Driver);
        // setTimeout(function(){}, 3000);

        await Navigate( 'Expedia_URL');
        await Set_Text( 'Expedia_Origin_Search_Page','Origin_01');
        await Set_Text('Expedia_Destination_Search_Page','Destination_01');
        await Set_Text( 'Expedia_Start_Date_Search_Page','Start_Date_01');
        await Set_Text( 'Expedia_End_Date_Search_Page','End_Date_01');
        await Click_Element( 'Expedia_Search_Button_Search_Page');
        await Take_Screenshot();
        let error_Text = await Get_Text( 'Expedia_Search_Alert_Error');
        let error_Text_Expected = __Test_Data['Destination_01_Error'];
        var re = new RegExp(error_Text_Expected,"g");
        expect(error_Text).toMatch(re);
        done();
    });


});



// Test 02 - get API and parse  a body
describe('Get API from http://dummy.restapiexample.com', async () => {

    test('Get API from http://dummy.restapiexample.com', async (done) => {
        jest.setTimeout(parseInt(__Test_Project_Properties['Global_Test_Timeout']));
        const aa = new Promise(resolve => {
            const request = require('request');
            request(__Test_Data['API_URL'], function (error, response, body) {
                console.error('error:', error);
                console.log('statusCode:', response && response.statusCode);
                body_ = body;
                console.log(body_);
                done();
            });
        });
    });

    // Test 03 - get API and parse  a body
    test('Data Check', async (done) => {
        jest.setTimeout(parseInt(__Test_Project_Properties['Global_Test_Timeout']));
        let Generic = require('../Suite_Functions/Generic.js');
        body2_ = await Generic.Deep_Search_Json_Recursive(JSON.parse(body_), 'employee_name', []);
        done();

    });


    // Test 03 - promise hell
    test('Data Check - Expect Some values Atleast ', async (done) => {
        console.log(body2_);
        jest.setTimeout(parseInt(__Test_Project_Properties['Global_Test_Timeout']));
        __Test_Data['Api_Call_Expect_Some_Values'].forEach(element => {
            expect(body2_).toContain(element);
        });
        done();
    });

});


