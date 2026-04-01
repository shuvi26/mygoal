const myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); // to get the date as a string
console.log(myDate.toDateString()); // to get the date as a string without the time
console.log(myDate.toTimeString()); // to get the time as a string
console.log(myDate.toLocaleDateString()); // to get the date in a localized format
console.log(myDate.toLocaleTimeString()); // to get the time in a localized format
console.log(myDate.getFullYear()); // to get the year
console.log(myDate.getMonth()); // to get the month (0-11)
console.log(myDate.getDate()); // to get the day of the month
console.log(myDate.getDay()); // to get the day of the week (0-6)
console.log(myDate.getHours()); // to get the hours
console.log(myDate.getMinutes());

const myBirthday = new Date(1993,1,15);
console.log(myBirthday.toDateString()); // to get the date in a localized format

let myTimeStamp = Date.now();
console.log(myTimeStamp); // to get the current timestamp in milliseconds since January 1, 1970
console.log(myBirthday.getTime()); // to get the milliseconds of the birthday date

const newDate = new Date();
console.log(newDate);
const newnewDate = new Date();
console.log(newnewDate.toLocaleDateString('default',{
    weekday:"long",
    year:"numeric", 
    month:"long",
    day:"numeric"
}))
//console.log(newDate);
