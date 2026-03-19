//Primitive
// String
// Number
// Boolean
// null => It's a empty (We don't what's temp is even we can't take 0 becoz it's also temp we defined null)
// undefined => We have decrealed the varaible but still not decided what to assign we have memory space defined
// BigInt
// Symbol => To create value unique
const bigNumber = 3456543576654356754n;
// console.log(bigNumber);
// console.log(typeof bigNumber);
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
//NON Primitive (Refernce types)
// Array  => 
    const RealHeros =["manvi", "shubham"];
// Objects => key value pair
let userdetails = {
    "name":"manvi",
    "age":33
}
// Functions
const myfunction = function(){
    console.log("Hello world");
    //return "hellow"
}
// Simple concept:
// myfunction → function (object)
// myfunction() → function execution

console.log(myfunction); //It will print the function itself, not the return value:
//It is a function object, here function is a reference, not calling it
console.log(myfunction()); // function of objects
console.log(typeof userdetails); //objects
console.log(typeof RealHeros);//objects