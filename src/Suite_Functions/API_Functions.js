

async function API_Get(Url_Reference, Body_Text) {
    const request = await require('request');
    var body_Return = {};
/*
    let aa = await request.get(__Test_Data[Url_Reference]);let aa01 = await request.get(__Test_Data[Url_Reference]).on('response', function(response) {console.log(response.statusCode);console.log(response.headers['content-type']);console.log(JSON.stringify(response));Object.assign(body_Return, response);});
    let aa_01 = await aa.on('response', function(response) {console.log(response.statusCode);console.log(response.headers['content-type']);console.log(JSON.stringify(response));Object.assign(body_Return, response);});
*/


    await request(__Test_Data[Url_Reference], function (error, response, body) {
       body_Return = body;
       console.log(body)
    });
    console.log(await body_Return);
}

module.exports ={
    API_Get
};