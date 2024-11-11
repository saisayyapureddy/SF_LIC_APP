let obj = {
    name:'sai',
    company:'IBM',
    email:'sai@123'
}


//Object.keys()
console.log(Object.keys(obj));

//object.values()
console.log(Object.values(obj));

//convert object to string 
let str = JSON.stringify(obj);
console.log(str);

//convert string to object
console.log(JSON.parse(str));