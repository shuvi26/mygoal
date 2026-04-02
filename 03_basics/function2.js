//Rest Operator
//The rest operator (...) in JavaScript is used to collect multiple values into a single variable. It’s very useful when you don’t know how many values will come.

function myValues(...argus){
    console.log(argus); // This will print an array of all the arguments passed to the function.
}
myValues(1,2,3,4,5); // This will call the function with 5 arguments, and it will print [1, 2, 3, 4, 5] to the console.

const myuser = {
    name:"John",
    age: 30,
}

function handleObject(anyObject){
    console.log(`Hi my name is ${anyObject.name}`); // This will print the object passed to the function.
}
// handleObject(myuser);
handleObject({name:"Alice", age: 25}); // This will call the function with a new object, and it will print "Hi my name is Alice" to the console.

//In case OF Array
let myArray = [1, 2, 3, 4, 5];
function handleArray(args){
    return args;
}
handleArray(myArray); // This will call the function with the array myArray, and it will return [1, 2, 3, 4, 5].
console.log(handleArray(myArray));
