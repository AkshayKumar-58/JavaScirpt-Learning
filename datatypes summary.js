//Primitive 7 types

// Boolean, Number, Null, Undefined, BigInt, String, Symbol



//JavaScript is dynamically typed, meaning that type checking happens at runtime, not when the program is compiled

const score = 100;

const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail; //automatically undefined

//symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId); //false because they are unique

const bigNumber = 12342356345692345235n; //n represent bigInt

//Non primitive  (Reference)
// Array, functions, objects

//array intialization

const arr = ["simple", "unique", 'extra'];
for(index=0;index<3;index++)
{
    console.log(arr[index]);
}

//objects are intialize in curly brackets in key: value pair
//if you don't want to create an variable of an object
//then

console.log({city:"jupiter",value:34});

//by bracket notation
console.log({ city: "jupiter", value: true }['city']);  // Output: jupiter
console.log({ city: "jupiter", value: true }['value']); // Output: true

//you can also store object in an variable
let myobject = {
    name: 'Akshay Kumar',
    age : 23,
}
console.log(myobject);

//function syntax
//function () {};

//you can treat function as variable
const myfunction = function() {
    console.log("hello world");
}

console.log(typeof myfunction); //it is called object function

console.log(typeof anotherId);

