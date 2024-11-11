// array destructurinig

let arr = ["amazon",'flipkart','Netflix'];


//old way
// let cmp1 = arr[0];
// let cmp2 = arr[1];

// arry destructuring use []

let [cmp1,cmp2] = arr;
console.log(cmp1+cmp2);

//object destructuiruing use {}

let obj = {
    name1:'sai',
    age:'22',
    email:'sai@gmail'
}

let { name1,age,email} = obj
console.log(name1);
console.log(age);
console.log(email);