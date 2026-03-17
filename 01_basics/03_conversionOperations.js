let score = null;
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);
// NAN => 34ab
// NULL => 0
//BOOLEAN => 1 (T)
//STRING => NAN => "33"
console.log(typeof valueInNumber);

//Boolean Study
isLoggedIn = 44;
let booleanValueStatus = Boolean(isLoggedIn);
console.log(booleanValueStatus);

// 1 => tRUE
// "manvi" => true
// "" => false
// 44 => True

let stringNumber = 33;
console.log(stringNumber);
console.log(typeof stringNumber);

// Operations
let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2+2);
console.log(2*2);
console.log(2/4);
console.log(2**3);
console.log(2-2);
console.log(2%6);

//Tricky Things
console.log(1+"2"); // 12 In js First number is string it converts all numbers into string
console.log("1" + 2 );//12
console.log(1+2+"3");//33 //Here First it add number then convert them into string

console.log(true) // true
// It's a not good conversion code
console.log(+true); // 1 
//console.log(true-);//won't work
console.log(-true); // -1 
console.log(+""); // 0 
console.log(-""); // -0 

// Quick memory trick:
// x++ → use first, then increase
// ++x → increase first, then use 

// let x = 3;
// const y = x++;
// console.log(`x:${x}, y:${y}`);
// console.table([y])//4

// let a = 3;
// const b = ++a;
// console.table([b,a]) // 4

// let x = 5;
// let y = x++ + ++x; // 5 + 6 //11,
// console.log(x, y); // x= 7, y = 5+7 = 12

// let a = 2;
// let b = a++ * ++a; // a = 3 , a = 4
// console.log(a, b); // 2 x 4 = 12


// let x = 3;
// let y = x++ + x++ + ++x; // x = 3 , x= 4, x = 6
// console.log(x, y); //6,13 // 3+4+6 = 13


// let x = 1;
// let y = x++ + ++x + x; //x => 1, 3 ,3
// console.log(x, y); //y =7 (3,7)

let x = 10;
let y = --x + x-- + ++x; // x = 9,9,9
console.log(x, y); // y = 27 (9,27)