const accountID = "1554433"
let accountEmail= "pranav@google.com"
var accountPassword= "12345"
accountCity ="Ujjain"
//accountID="2"//  not allowed bcoz constant cannot be changed

console.log(accountID);
/*Prefer not to use var
because of issue of block scope and functional scope in JS
*/

accountEmail="yahoo.com";
accountPassword="2222";
accountCity="Indore";

console.table([accountEmail,accountPassword,accountCity]);