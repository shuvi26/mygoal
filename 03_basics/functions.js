function myProgram() {
    console.log("Hello World");
}
myProgram //This is a reference to the function, but it does not execute it. It will print the function definition.
myProgram() //This will execute the function and print "Hello World" to the console.

function add(a,b){ // function declaration with parameters a and b
 return a+b;
}
const result = add(5,5);//function call with arguments 5 and 5, which will return the sum of 10 and store it in the variable result.
const result2 = add();// when we don't pass anything to the function, it will return NaN (Not a Number) because it tries to add undefined values.
console.log(result); // This will print 10 to the console.
console.log(result2); // This will print NaN to the console.
function mygreet(name = "Guest"){ // function declaration with parameter name
    if(!name){ // Check if name is undefined
        return name // If name is undefined, assign it a default value of "Guest"
    }
 return "Hello, " + name + "!";
}
mygreet("Alice"); // This will return "Hello, Alice!" when called with the argument "Alice".
mygreet(); // This will return "Hello, Guest!" when called without an argument, because name will be undefined.