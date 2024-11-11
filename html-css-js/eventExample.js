function onClickFunction()
{
    console.log('selected')
}

document.addEventListener("mouseover",handler1)
function handler1()
{
    document.querySelector(".demo").innerHTML  = Math.random();
}

//remove handler 

function removeHandler()
{
    document.removeEventListener("mouseover",handler1)
}