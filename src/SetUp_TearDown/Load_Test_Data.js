

let File_Functions  = require('../Suite_Functions/File_Functions.js');

var Load_All_Test_Data =    (Dir_Path, Files_Located_At) => {
    let Test_Data_Folders =  File_Functions.Get_Test_Data_Path() + Dir_Path ;
    // console.log(Test_Data_Folders);
    var All_Test_Data = {};
    let List_Of_Files =  File_Functions.Get_Test_Data_List_Of_Files(Files_Located_At);
    // console.log(List_Of_Files);
    for (const File_Name of List_Of_Files) {
        // console.log(Test_Data_Folders + File_Name);
        let File__Data =  File_Functions.Load_Yaml(Test_Data_Folders + File_Name);
        Object.assign(All_Test_Data, File__Data);
    }
    // console.log(All_Test_Data);
    return All_Test_Data;

};






module.exports = {
    Load_All_Test_Data: Load_All_Test_Data("\\src\\resources\\Test_Data\\", "\\src\\resources\\Test_Data\\"),
    Load_All_Test_Locators: Load_All_Test_Data("\\src\\resources\\Test_Data_Locators\\", "\\src\\resources\\Test_Data_Locators\\"),
    Load_All_Project_Properties: Load_All_Test_Data("\\src\\resources\\Project_Properties\\", "\\src\\resources\\Project_Properties\\")
};
