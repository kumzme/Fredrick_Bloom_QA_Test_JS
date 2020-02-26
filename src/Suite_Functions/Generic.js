async function Delay_For(This_Number) {
    for (let i = 0; i < This_Number; i++) {
        continue;
    }
};

export async function findAllByKey(Sent_Object, Find_The_Key) {
    return Object.entries(Sent_Object)
        .reduce((Every_Object_In, [key, value]) => {
                if ((key === Find_The_Key)) {
                    Every_Object_In.concat(value);
                } else {
                    if (typeof value === 'object') {
                        Every_Object_In.concat(findAllByKey(value, Find_The_Key))
                    } else {
                        Every_Object_In
                    }
                }
            }
            , [])
}
export async function findAllByKey2(obj, keyToFind) {
    return Object.entries(obj)
        .reduce((acc, [key, value]) => (key === keyToFind)
            ? acc.concat(value)
            : (typeof value === 'object')
                ? acc.concat(findAllByKey(value, keyToFind))
                : acc
            , [])
}
// Get all instances of specified property deep within supplied object
export async function Deep_Search_Json_Recursive(Search_Object, Search_this, Get_Multiple_Values_Array) {
    if (Search_Object instanceof Array) {
        for (let i = 0; i < Search_Object.length; i++) {
            var Indv_Element = Search_Object[i];
            if (Indv_Element instanceof Object || Indv_Element instanceof Array) {
                Get_Multiple_Values_Array =   await Get_Multiple_Values_Array.concat(await Deep_Search_Json_Recursive(Indv_Element, Search_this, Get_Multiple_Values_Array));
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
                    Get_Multiple_Values_Array =  await Get_Multiple_Values_Array.concat( await Deep_Search_Json_Recursive(Current_Val, Search_this, Get_Multiple_Values_Array));
                }
            }
        } else {
            throw new Error('Check passed Type to Deep_Search_Json_Recursive' + typeof Search_Object);
        }
    }
    return Get_Multiple_Values_Array;
}

module.exports = {
    Delay_For, findAllByKey, findAllByKey2, Deep_Search_Json_Recursive
};

