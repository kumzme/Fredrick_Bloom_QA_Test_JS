async function Delay_For(This_Number) {
    for (let i = 0; i < This_Number; i++) {
        continue;
    }
};
// Get all instances of specified property deep within supplied object
export async function Deep_Search_Json_Recursive(Search_Object, Search_this, Final_Return_Multiple_Values_Array) {
    if (Search_Object instanceof Array) {
        for (let i = 0; i < Search_Object.length; i++) {
            var Indv_Element = Search_Object[i];
            if (Indv_Element instanceof Object || Indv_Element instanceof Array) {
                Final_Return_Multiple_Values_Array =   await Final_Return_Multiple_Values_Array.concat(await Deep_Search_Json_Recursive(Indv_Element, Search_this, Final_Return_Multiple_Values_Array));
            }
        }
    } else {
        if (Search_Object instanceof Object){
            for (let Single_Key in Search_Object) {
                var Current_Val = Search_Object[Single_Key];
                if (Single_Key == Search_this) {
                    return Search_Object[Single_Key];
                }
                if (Current_Val instanceof Object || Current_Val instanceof Array) {
                    Final_Return_Multiple_Values_Array =  await Final_Return_Multiple_Values_Array.concat( await Deep_Search_Json_Recursive(Current_Val, Search_this, Final_Return_Multiple_Values_Array));
                }
            }
        } else {
            throw new Error('Check passed Type to Deep_Search_Json_Recursive' + typeof Search_Object);
        }
    }
    return Final_Return_Multiple_Values_Array;
}

module.exports = {
    Delay_For, findAllByKey, findAllByKey2, Deep_Search_Json_Recursive
};

