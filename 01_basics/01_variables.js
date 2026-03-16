const accountId = 12345;
var accountEmail = "shuvi@gmail.com"; 
let accountPassword="12345";// value can only reassign not redeclare
accountCity ="Jaipur";
let accountStatus; // when we declare the variable without value js makes it undefined(because value not defined)

//accountId = 3 not allowed const redeclare and reassign not allowed
// prefer not to use var because this creates an issue in block scope and functional scope
accountEmail="hello@gmail.com"; 
accountPassword="111111";
accountCity ="Bangalore";
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.table([accountId,accountEmail,accountPassword,accountCity,accountStatus]);