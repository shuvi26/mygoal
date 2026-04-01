// singleton object
// when we create an object from constructor
//Object Literals
const mySym = Symbol('mySymbol'); // Create a unique symbol
const user ={
    name:"manvi",
    age: 25,
    city: "Delhi",
    isLoggedIn: true,
    hobbies:['reading', 'traveling', 'cooking'],
    [mySym]: mySym, // Add the symbol as a property of the object
    greeting: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    greet(){
        console.log("Hello, welcome to my profile!");
    }
}

console.log(user.name);
console.log(user['name']);
console.log(typeof user[mySym]);
//key is a string and value can be any data type
// To change the value of a property
Object.freeze(user); // This will prevent any changes to the user object, including adding new properties or modifying existing ones
user.age= 26;
console.log(user.age);
//It's only refernce that is frozen, not the value itself. So if the value is an object or array, we can still modify its properties or elements.
console.log(user.greeting);//Function doesnot execute when we log it, it just shows the function definition. To execute the function, we need to call it with parentheses.
console.log(user.greeting());
console.log(user.greet());