//Stack memory ( Primitive) , Heap memory (Non-primitive)

//1. Whenever primitive datatype is used you get a copy
// if the original is changed then copy will change not vice versa
let name = "Akshaykumar";

let anotherName = name; //copy is created in stack

console.log(anotherName);

anotherName = "name changed";

console.log("anotherName value is: " + anotherName);

console.log(name);

//2. Whenever non-primitive datatype is used you get a reference
//(whatever change happen to reference original value will change)

//object creation in key value pair (it will go in heap)
//inside object comma is used instead of semicolon
let userOne = { 
    email:"akshay07042002@gmail.com",
    username:"Gambler"
}

let userTwo = userOne;

userTwo.email ="kumar.akshay7@gmail.com"; //reference is taken so the original will change as well
//value will be updated of original

console.log(userOne); 
console.log(userTwo);
