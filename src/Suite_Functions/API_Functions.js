

async function API_Get(Url_Reference, Body_Text) {
    const request = await require('request');
    var body_Return = {};
    let aa = await request.get(__Test_Data[Url_Reference]);
    let aa_01 = await aa.on('response', function(response) {
            console.log(response.statusCode);
            console.log(response.headers['content-type']);
            console.log(JSON.stringify(response));
            Object.assign(body_Return, response);
        })
        ;
    console.log(body_Return);
}

module.exports ={
    API_Get
};