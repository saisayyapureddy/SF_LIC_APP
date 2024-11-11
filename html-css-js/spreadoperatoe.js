// array
let ass = ["a", "b", "c"];
console.log(ass);

//object

let obj = {
  name: "sai",
  age: 22,
};

console.log(obj.name); // standard format
console.log(obj["age"]); // array object notation we use if property is having space like full name

//spread operator
//1.Expanding string string converts into char array

let greeting = "hello world";

let greetAr = [...greeting];
console.log(greetAr);

//2. combing array

let a1 = ["amazona", "flipkart"];
let a2 = ["shopify", "Meesho"];

//cobined array
let a3 = [...a1, ...a2];
console.log(a3);

// we can add values using spred op
let a4 = ["1A", "2A"];
let a5 = [...a4, "3A"];
console.log(a5);

//3.combinig objects

let obj1 = {
  name: "salesforce",
  age: 37,
};

let obj2 = {
  name: "FB",
  age: 55,
};

//overriden properties will display only right obj
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
// //op is {
//     "name": "FB",
//     "age": 55
// }
//printing right obj name only because same property name 


//4.shallow copy 
//shallow copy using spread operator not getting the
//old object reference it will get the shallow of object 
let sac = [1,2,3,"sai"];
let sac1 =[...sac];
sac1.push("sanju");
console.log(sac);
console.log(sac1);

//6.nested copy 
let arrObj =[
    {name:"bottle"},
    {name:"paper"}
]

//first convert this arrObj into string usint JSON.stringfy and 
//again convert into object using  Json.parse

let arrObj1 = JSON.parse(JSON.stringify(arrObj));
arrObj1[0].name='Water';
console.log(arrObj);
console.log(arrObj1);