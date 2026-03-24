const Score = 400;
// console.log(Score);
// const balance = new Number(100);
// const humdreds = new Number(10000000);
// console.log(humdreds.toLocaleString('en-IN')); // to format the number with commas as thousands separators
// //.log(balance);Formats numbers with appropriate separators, currency symbols, units, and more
// console.log(balance.toString()); // to get the primitive value of the number object
// console.log(balance.toFixed(3)); // to fix the number of decimal places
// console.log(balance.toPrecision(2)); // to specify the total number of significant digits
// console.log(balance.valueOf()); // to get the primitive value of the number object
// let num = new Number(10);
// console.log(num.valueOf());
// //valueOf() is a built-in method used to get the actual value inside an object.
// console.log(Number.isInteger(Score)); // to check if the value is an integer
// console.log(Number.isNaN(Score)); // to check if the value is NaN
// console.log(Number.isFinite(Score)); // to check if the value is a finite number
// console.log(Number.parseInt("100px")); // to parse a string and return an integer
// console.log(Number.parseFloat("100.5px")); // to parse a string and return a floating-point number
// console.log(Math.PI); // to get the value of pi
// console.log(Math.E); // to get the value of e
// console.log(Math.sqrt(16)); // to get the square root of a number

// /++++++++++++++++++++++++++++++++++
// console.log(Math.abs(-4));
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.max(1, 2, 3)); // 3
// console.log(Math.min(1,2,3)); // 1

console.log(Math.random()); // to get a random number between 0 and 1
console.log(Math.ceil(Math.random() * 10)); // to get a random number between 0 and 10
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // to get a random number between min and max (inclusive)