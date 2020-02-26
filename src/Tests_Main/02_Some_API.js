// let body_ = {};
import {Files_Folder} from "../resources/Constants/Constants";
import {Get_Test_Data_Path} from "../Suite_Functions/File_Functions";

let body2_ = {};
const { Take_Screenshot , Navigate, Set_Text, Click_Element, Get_Text} = require('../Suite_Functions/Element_Functions');

const {Delay_For} = require('../Suite_Functions/Generic');
const {API_Get} = require('../Suite_Functions/API_Functions.js');


// Test 01 - First navigate to Expedia and login


describe('Post some rest data', async () => {


    test('Post data from json file',async function aa(done) {
        jest.setTimeout(parseInt( __Test_Project_Properties['Global_Test_Timeout'] ) );
        var fs = require('fs');

        var contents = fs.readFileSync(Get_Test_Data_Path() + Files_Folder + __Test_Data['File_Path_For_Post_01'], 'utf8');
        console.log(contents);

        const request = require('request');
        var req = await request.post(__Test_Data['API_POST_URL'], function (err, resp, body) {
            if (err) {
                console.log('Error!');
            } else {
                console.log('URL: ' + body);
            }
            done();
        });
        var form = req.form();
        form.append('file', contents, {
            filename: 'Json_File.json',
            contentType: 'application/json'
        });
    });


    test('Post data from json file__02',async function aa(done) {
        jest.setTimeout(parseInt( __Test_Project_Properties['Global_Test_Timeout'] ) );
        var fs = require('fs');
        const request = require('request');

        var contents = fs.readFileSync(Get_Test_Data_Path() + Files_Folder + __Test_Data['File_Path_For_Post_01'], 'utf8');
        console.log(contents);

        const formData = {
            my_file: fs.createReadStream(Get_Test_Data_Path() + Files_Folder + __Test_Data['File_Path_For_Post_01'])
        };
        await request.post({url:__Test_Data['API_POST_URL'], formData: formData}, function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            } else {
                console.log('Upload successful!  Server responded with:', body);
            }
            done();
        });


    });


});

