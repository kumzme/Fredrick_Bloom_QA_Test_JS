

export async function API_Get(Url_Reference, Body_Text, done) {
    const request = await require('request');
    const request_01 = await request.get(__Test_Data[Url_Reference]).on('response',
        (response) => {
            return  response;
            done();
        },
    ).on('error', (error)=>{
        console.log("Api Call Error:" + error);
        throw new Error("Api Call Error:" + error);
    });
    return request_01;
    done();
}
