const dc_heros = ["Batman", "Superman"];
const marvel_heros = ["Spider-Man", "Iron Man"];
//console.log(dc_heros);
//console.log(marvel_heros);
//marvel_heros.push(dc_heros); // Adds the entire dc_heros array to the end of the marvel_heros array
//console.log(marvel_heros); // Output will show the marvel_heros array with the dc_heros array as the last item
//marvel_heros.push([...dc_heros]); // Adds each element of the dc_heros array to the end of the marvel_heros array
//Instead of adding the entire dc_heros array as a single item, it adds each element of the dc_heros array to the end of the marvel_heros array
console.table([...marvel_heros,...dc_heros]);
//console.table(marvel_heros);
const combinedHeros = marvel_heros.concat(dc_heros); // Creates a new array that combines the elements of marvel_heros and dc_heros, but does not modify the original marvel_heros array
//console.log('combinedHeros',combinedHeros);
const anotherArray = [1, 2, 3,[4, 5,[6, 7]],8];
console.log(anotherArray.flat(Infinity));
console.log(Array.isArray("manvi"));
//Array.from kisi cheez se array banaya
console.log('sds',Array.from([1, 2, 3], x => x * 2)); //Convert an array-like or iterable object into an array and applies a mapping function to each element. In this example, it takes the array [1, 2, 3] and creates a new array where each element is multiplied by 2, resulting in [2, 4, 6].
console.log(Array.from("manvi"));//Convert a string into an array of characters
// Array.of jo diya wahi array me daal diya
console.log(Array.of("manvi")); //Direct values se array banana
console.log(Array.from({name:"manvi"})); //Convert an object into an array. It creates an array with a single element, which is the object itself. The resulting array will have one item that is the object { name: "manvi" }.
//Array.from() kaam karnai kai liye chaiye strings or array
// ❌ length nahi hai, ❌ iterable bhi nahi hai
//Result = []

