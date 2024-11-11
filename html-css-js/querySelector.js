
//if i use queryselector it will print the elements for first selector property
let ele = document.querySelector('div');
console.log(ele);

//if we want to print all elements from selector use querySelectorAll
//return type is NodeList not array

let ele1 = document.querySelectorAll('div');
console.log(ele1);
Array.from(ele1).forEach(function(item)
{
    console.log(item);
})