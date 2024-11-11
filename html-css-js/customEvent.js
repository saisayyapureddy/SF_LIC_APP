 /*
 html code

 <button onclick="callCustomEvent()">Click Me to call event</button>

 */
 
 
 
 
 function callCustomEvent()
 {
    let ele = new CustomEvent("hello",
        {
            detail:{name:'sai'}
        }
    )
    //dispatching the event
    document.dispatchEvent(ele)
 }

 document.addEventListener("hello",function(data)
{
    console.log('hey Event called and ', data.detail)
})



