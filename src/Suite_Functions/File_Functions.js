 function Get_Test_Data_Path(){
    var path = require('path');
    return path.resolve(__dirname, '../../');
}

 function Get_Test_Data_List_Of_Files(Data_Path){
    let Test_Data_Folders =  this.Get_Test_Data_Path()+  Data_Path;
    // console.log(Test_Data_Folders);
    try {
        const Array_Of_Files =  require("fs").readdirSync(Test_Data_Folders);
        // console.log(Array_Of_Files);
        return Array_Of_Files;
    } catch(e) {
        console.log(e)
    }
}

  function Load_Yaml(Yaml_Path) {
     console.log(Yaml_Path);
     let File_Contents =  require('fs').readFileSync(Yaml_Path, 'utf8');
    let File_Data =  require('js-yaml').safeLoad(File_Contents);
    // console.log(File_Data);
    return File_Data;

}



module.exports ={
    Load_Yaml,
    Get_Test_Data_Path,
    Get_Test_Data_List_Of_Files
};