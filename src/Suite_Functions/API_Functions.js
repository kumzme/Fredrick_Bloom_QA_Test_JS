

export async function API_Get(Url_Reference, Body_Text, done) {
/*
    let aa = await request.get(__Test_Data[Url_Reference]);let aa01 = await request.get(__Test_Data[Url_Reference]).on('response', function(response) {console.log(response.statusCode);console.log(response.headers['content-type']);console.log(JSON.stringify(response));Object.assign(body_Return, response);});
    let aa_01 = await aa.on('response', function(response) {console.log(response.statusCode);console.log(response.headers['content-type']);console.log(JSON.stringify(response));Object.assign(body_Return, response);});
*/

    const request = await require('request');
    const request_01 = await request.get(__Test_Data[Url_Reference]).on('response',
        (response) => {
            return  response;
            done();
        },
    );
    return request_01;
    done();
}
