// let body_ = {};
import {Files_Folder} from "../resources/Constants/Constants";
import {Get_Test_Data_Path} from "../Suite_Functions/File_Functions";

let body2_ = {};
const { Take_Screenshot , Navigate, Set_Text, Click_Element, Get_Text} = require('../Suite_Functions/Element_Functions');

const {Delay_For} = require('../Suite_Functions/Generic');
const {API_Get} = require('../Suite_Functions/API_Functions.js');


// Test 01 - First navigate to Expedia and login



describe('Login to Github', async () => {


    test('desc ----- 1',async function aa(done) {
        jest.setTimeout(parseInt( __Test_Project_Properties['Global_Test_Timeout'] ) );
        let Some_Class  = require('../Suite_Functions/Id_Pwd.ts');
        console.log('________');
        console.log(Some_Class);
        let kv1 =  Some_Class = { user:"aa", 1:"Steve" }; // OK
        console.log(kv1);
        let kvp: User_Creds =         require('../Suite_Functions/Id_Pwd.ts').addKeyValue();
        kvp('111', 'Bill');
        done();
    });


});

