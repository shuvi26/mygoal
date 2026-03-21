//Strings are immutable → methods return new strings (don’t change original).
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
//console.log(stringnew.slice(0,1));
//console.log(stringnew.splice(""));

// Extracting Method
// slice(Start,end)
let str = "JavaScript";
console.log(str.slice(-4)); // doesnot include end

//substring(start, end) => Similar to slice but no negative values
console.log(str.substring(2,3));

//substr(start, length) => substr() is a string method used to extract a part of a string.
// start → Index where extraction begins , length → Number of characters to extract
console.log(str.substr(0,3));

// 3. Searching Methods

// indexof()
// lastIndexof()
// includes()
// startsWith() / endsWith()
console.table([str.indexOf('S'),str.lastIndexOf('a'), str.includes('Ja'), str.startsWith('J'),str.endsWith('J')]);
// 🔄 4. Replace Methods
// replace(), replaceAll()
console.table([str.replace('J', 'ma'),str.replaceAll('a', 'ma')])
// 🔠 5. Case Conversion
// toUpperCase(), toLowerCase()
console.table([str.toUpperCase(),str.toLowerCase()])
//✨ 6. Trim Methods (VERY IMPORTANT)
// trim(), trimStart(),trimEnd()
let husband = ' Shubham ';
console.table([husband.trim(),husband.trimStart(),husband.trimEnd()]) // trim remove start and end extra space
//🔗 7. Split & Join
//split()  convert string into arrays
const fruits ="apple,mango";
console.log(fruits.split(','));
// 8. Character Access
// charAt(), at() //charAt() is a string method used to get the character at a specific index.
//at() is a modern method used to access elements by index, including negative index
let arr = [10, 20, 30];

arr[arr.length - 1]; // 😓 old way
console.log(arr.at(-1));
//9. Length Property
console.log(str.length);
// /🔁 10. Repeat & Pad
console.log(str.repeat(3));
// padStart() / padEnd()
console.table(["5".padStart(3, "0"), "4".padEnd(5, "!")])