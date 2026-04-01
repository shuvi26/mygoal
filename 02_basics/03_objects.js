//Destructure
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const {city: personCity, name:usernames} = person;
console.log(personCity); // Output: New York
console.log(usernames);

// API concept
// API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other. APIs define how requests and responses should be structured, what data can be accessed, and how to interact with the functionality provided by the API. They enable developers to integrate third-party services, access data, and perform various operations without having to build everything from scratch. APIs are commonly used in web development, mobile app development, and many other areas of software development to facilitate communication between different systems and services.
//  {
//     "name": "manvi",
//     "age": 25,
//     "city": "Delhi",
//     "isLoggedIn": true,
//     "hobbies": ['reading', 'traveling', 'cooking']
//  }
// [
//     {
//     "name": "manvi",
//     "age": 25,
//     "city": "Delhi",
//     "isLoggedIn": true,
//     "hobbies": ['reading', 'traveling', 'cooking']
//     }
// ]

