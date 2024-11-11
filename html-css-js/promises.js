//used in asynchronous process
//has 3 states
/*
pending
fulfillied- (succesed),
rejected   -(rejected)
*/



function checkIsSuccess(data)
{
    return new Promise(function (resolve,reject)
    {
       if(data =="success")
       {
        return resolve("successsssss");
       }
       else{
        return reject("rejected")
       }

    })
}


console.log(checkIsSuccess('success'));

//in normal usages we can call api using fetch()

fetch('https://api.github.com/users/karkranikhil')
.then(function (records)
{
    return records.json();
}).then( function (response)
{
    console.log(response);
})
