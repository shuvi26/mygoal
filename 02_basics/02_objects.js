// Singleton ek design pattern hai jisme sirf ek hi instance 
// (object) create hota hai poori application me.
//"Ek class ka sirf ek object banega, baar-baar nahi"
// Real-life example:
// 🧾 Printer → ek hi printer sab use karte hain
// 🌐 Database connection → ek hi connection reuse hota hai

const tinderUser = new Object();
// console.log(tinderUser); // Output: {}
tinderUser.id = "12345";
tinderUser.name = "manvi";
tinderUser.age = 25;
// console.log(tinderUser); // Output: { id: '12345', name: 'manvi', age: 25 }
const tinderUser2 = {}
// console.log(tinderUser2); // Output: {}
const regularUser ={
    fullName:{
        userFullName: "manvi",
        hobbies: ['reading', 'traveling', 'cooking'],
        education: {
            degree: "Bachelor's",
            field: "Computer Science",
        }
    }
}
// console.log(regularUser.fullName.userFullName); // Output: manvi
// console.log(regularUser.fullName.hobbies[1]);
// console.log(regularUser.fullName.education.degree); 
// Object combination
const obj1 ={a :1,b:2};
const obj2 ={b:3,d:4};
//console.log(obj1,obj2);
//👉 Ye method obj2 ke properties ko obj1 me copy (merge) karta hai
//console.log(Object.assign({},obj1,obj2)); // Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will modify the target object and return it. In this case, it will copy the properties of obj2 into obj1, resulting in obj1 being modified to { a: 1, b: 3, d: 4 }.
const combinedObj = {...obj1,...obj2};// with spread operator we can combine two objects into a new object. It takes all the properties from obj1 and obj2 and creates a new object that contains all those properties.
//console.log(combinedObj); // Output: { a: 1, b: 2, c: 3, d: 4 }

users =[
    {id:1, name:"manvi", age:25},
    {id:2, name:"shubham", age:25},   
]
// console.log(users[0].id);
// console.log(users[1].name);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));// Key value pair in form of array
console.log(Object.hasOwn(tinderUser,'name')); // Check if the object has a specific property (key) and returns true or false accordingly. In this case, it checks if the tinderUser object has the property 'name' and returns true because it does exist in the tinderUser object.

//Constructor function
//Multiple objects create karne ke liye -> use karte hain constructor function, jisse hum ek template bana sakte hain jisse hum multiple objects create kar sakte hain. Constructor function ek special function hota hai jo object create karta hai. Jab hum constructor function ko new keyword ke sath call karte hain, to wo ek naya object banata hai aur us object ko this keyword ke sath refer karta hai. Is tarah se hum ek hi constructor function se multiple objects create kar sakte hain, jisme har object apne alag properties aur values rakh sakta hai.
//Constructor ek special function hota hai jo object create karta hai
//Har object same structure follow karega
//Ek hi template se multiple objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// new keyword → naya object banata hai
// this → current object ko refer karta hai
const person1 = new Person("manvi", 25);
const person2 = new Person();
console.log(person1); // Output: Person { name: 'manvi', age: 25 }
console.log(person2); // Output: Person { name: 'shubham', age: 30 }
// Singleton → ek hi object (global access)
// Constructor → multiple objects create karne ka tarika
// new keyword → object banata hai
// this → current object ko refer karta hai