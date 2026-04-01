//js arrays are used to store multiple values in a single variable and
// they are resizable, meaning you can add or remove items from an array as needed.
//Arrays can hold any type of data, including numbers, strings, objects, and even other arrays.
// array cannot be accessed by arbitrary names, but rather by their index, which is a number that represents the position of the item in the array.
const arrays = [1,2,3,4,5]; 
const arr = new Array(1,2,3,4,5); // Another way to create an array using the Array constructor
/*  This is a constructor function create a new array object and initializes it with the provided values.
If we pass 1 value then it creates an array with empty slots and calcuates its length as the value passed.
 If we pass more than 1 value then it creates an array with those values and calculates its length as the number of values passed.
 */
const arr1 = new Array(5); // This creates an array with 5 empty slots and a length of 5
arr1.fill(2,3); // This fills the array with the value 2 starting from index 3 to the end of the array
console.log(arr1); // Output: [ <5 empty items> ]
//each element in the array is called an item,
//and each item has an index, which is its position in the array.
//The first item has an index of 0, the second item has an index of 1, and so on.
//Deep copying an array
// Donot change the original array when you want to create a new array with the same values.
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Using spread operator to create a deep copy
// Now you can modify copiedArray without affecting originalArray
copiedArray.push(4);
console.log(originalArray);
//Shallow copying an array
//It only copies the top-level elements of the array, but if the array contains nested arrays or objects, those nested structures are not copied but rather referenced.
// When you create a new array that references the same items as the original array, any changes made to the new array will affect the original array.
const shallowCopiedArray = originalArray; // This creates a reference to the original array
shallowCopiedArray.push(5);
console.log(originalArray); // This will show [1, 2, 3, 5] because both variables reference the same array
// Array Methods
// push() - adds an item to the end of the array
// pop() - removes the last item from the array and returns it
// shift() - removes the first item from the array and returns it
// unshift() - adds an item to the beginning of the array
// indexOf() - returns the index of the first occurrence of a specified value in the array, or -1 if it is not found
// includes() - determines whether an array includes a certain value among its entries, returning true or false as appropriate
// slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// forEach() - executes a provided function once for each array element
// map() - creates a new array populated with the results of calling a provided function on every element in the calling array
// filter() - creates a new array with all elements that pass the test implemented by the provided function
// reduce() - executes a reducer function on each element of the array, resulting in a single output value

const numbers = [1, 2, 3, 4, 5];
numbers.push(6); // Adds 6 to the end of the array
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
console.log(numbers.pop()); // Removes and returns the last item (6)
console.log('vhvj',numbers.unshift(5)); // Adds 5 to the beginning of the array
console.log(numbers.shift()); // Output: [5, 1, 2, 3, 4, 5]
console.log(numbers.indexOf(3)); // Output: 3
console.log(numbers.includes(4)); // true
console.log(numbers.slice(1,4)); // Output: [1, 2, 3]
numbers.splice(2, 2); // Removes 1 item at index 2 and adds 10
//manipulate the original array by removing 2 items starting from index 2 and adding 10 at index 2
console.log(numbers); // Output: [5, 1, 10, 5]