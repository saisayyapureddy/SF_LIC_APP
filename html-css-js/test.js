//spread operator

//1.expanding of string
let s = "Hello every one";

let char = [...s];
console.log(char);

//2.combinig array

let arr1 = ["Amazon", "flipkart"];
let arr2 = ["50% sale", "100%sale"];

let mergedarray = [...arr1, ...arr2];
console.log(mergedarray);

//3.adding values to array

let arr3 = ["a", "b"];
let arr4 = [...arr3, "madz"];
console.log(arr4);

//4.combing objects 

let obj1 = { name:"facebook",age:'33'};
let obj2 = { name:"whatsUp",age:'50'};

let obj3 = {...obj1,obj2};
console.log(obj3);

//5.shallow copy

//if we go with traditional way we are getting 
// unexpected results 

//if we go this way refence also copied and if we change arr6
//chnages coming in arr5 also , so this problem 
//we can do this using shadow op


// let arr5 = ['m','n']
// let arr6 = arr5;
// console.log(arr5);
// arr6.push('o');

// console.log(arr5);
// console.log(arr6);

let arr5 = ['m','n']
let arr6 =[...arr5];
console.log(arr5);
arr6.push('o');


console.log(arr6);
console.log(arr5);


//6. nested copy 

// this spread opertor doesn't work for two 
//datastructure at one time below we have array of 
//objects
let arrobj =[
    {
        name:'praveen',
        age:70
    }
]
// console.log(arrobj);
// let arrobj1 = [...arrobj];
// arrobj1[0].name="superman";
// console.log(arrobj1)


//Hack for nested copy 

var arrobj1 = JSON.parse(JSON.stringify(arrobj));
arrobj1[0].name="sandy";
console.log(arrobj);
console.log(arrobj1)


