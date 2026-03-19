const username ="manvi";
let age = 30;
console.log(username + age) // string concatenation // older way
console.log(`${username} ${age}`); // backticks know to be literals // string interpolation

let stringnew = new String("manvi");
// console.log(stringnew);
// console.log(stringnew[0]);
// console.log(stringnew.__proto__);
//charAt() is a string method used to get a character at a specific position (index
// console.log('sd',stringnew.charAt(4));
// console.log('sd',stringnew.indexOf('m')); // to check the charater pos
// console.log('sd',stringnew.toUpperCase());
//console.table({stringnew.charAt('a'),stringnew.toUpperCase()});
console.log(stringnew.slice(0,1));
console.log(stringnew.splice(""));