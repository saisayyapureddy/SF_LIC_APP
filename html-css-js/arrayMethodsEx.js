let arr = [2,4,6,7,8,9,10];

//1.map syntax
//all most all method signature is same 
//below is the syntax

// arr.methodName(function (currentItem,index,actualArry)
// {
//     return;
// })


/*
  let newarray = arr.map(function(currentItem, index,actualaray)
{
    console.log(`currentItem is ${currentItem} : index ${index} and array is ${actualaray}`)
    return currentItem*2;
})

console.log(newarray)
*/


// 2.filter 
// return the values (condition passed)

let newary =  arr.filter(function (currentItem,index, currentAry)
{ 
    return currentItem > 4;
});

console.log(newary)

//3. every() is used to check the specific condition is satiesfied in
//array it gives the true or false whether all are passed specific condition

let age = [32,11,34,66,15];

let isadult = age.every(function (currentItem)
{
    return currentItem>18;
})
console.log(isadult);



//4. some() is used to check the specific condition is satiesfied in
//array it gives the true or false if any of the elemenet satiefies the 
//condition

let ageSome = [32,11,34,66,15];

let isadultSome = age.some(function (ageSome)
{
    return ageSome>18;
})
console.log(isadultSome);

//5.sort() assending order or default setting 
let names = ['sai','madz','abc'];
sortedArray = names.sort();
console.log(names);

//custom sorting 
let numbers1 = [1,344,55,333,223,34];
customSorted = numbers1.sort(function (a,b)
{
    //return a-b; //returns as sorting array asc
    return b-a; //dsc order 
})
console.log(numbers1);

//6.reduce() -used to combine.sum the array elements into sum
// syntax Array.reduce(function (total,currentvalue,index, actual ary)
// {},initialvalue)

let red = [10,30,33];
sum = red.reduce(function (total,currentvalue,index, arrayactual)
{
     return total+currentvalue;
},0);
console.log(sum);
//7.forEach -> 

red.forEach( function (currentItem)
{
  console.log(currentItem);
})




