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
