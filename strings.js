//old method
const Name = "golang";
const id =" asldfkhjasdlfj@gmail.com";
console.log("hello" + Name + "my id is:"+ id);
//we use string interpolation which is a modern way of initializing sting

const name = "Akshay Kumar";
const mynumber = 9520556458;
//you can also use the methods on the variable
console.log(`hello everyone my name is: ${name.charCodeAt(5)} and my phone number is :${mynumber}`);

//another way of declaring string using object
const myString = new String('heptic');

console.log(myString.length);
//another prototype syntax is
console.log(myString.__proto__.charCodeAt(4));

//to find which character at which position
console.log(myString.charAt(3));

// to find which position one character is
console.log(myString.indexOf('c'));

const big = `  hello everyone my name is ${name} and go on   `;
//substring does not include end position
let newString = big.substring(0,9);
console.log(newString);

//trim delete white spaces from start and in end(does not take negative values)
console.log(big.trim());

//replace ('search','replacewith')
console.log(big.replace('hello','this cow'));

//slice (can take negative values)
console.log(big.slice(-4,8));

//include method 
console.log(big.includes("cow"));

//split fucntion
console.log(big.split(' ',4));
