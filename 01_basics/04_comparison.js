// console.log("1"< 0);
// console.log(4 < 5);
// Try to avoid these kind of conversions always use strict mode
console.log(null<0); // false
console.log(null==0);// false
console.log(null>0);// false
console.log(null>=0);// true
console.log(null<=0);// true

console.log(undefined<0); // false
console.log(undefined==0);// false
console.log(undefined>0);// false

// ++++++++++++++++++++++++++++++++++++++++++++++
//  we have two memories to store data
//  Stack(Primitive) => Whenever we declare the variable it creates a copy
//  Heap(Non Primitive) => HERE WE GET THE REFERENCE (whatever we make changes orginal file get impacted)

const username = "MANVI";
let userdATA = username;

userdATA = "Shubham";
console.log(userdATA);
console.log(username);

let user ={
    "email": "bmanvi32@gmail.com",
    "ui":"bmn@ybl"
}
console.log(user);
let user2 = user;
user2.email ="abd@gmail.com"
console.table({user,user2});