const accountId = 123;
let accountEmail = "y@gmail.com"
var accountPassword = 12345;
accountCity = "Jaipur"; //Don't use this hahahahah
let accountState;

// accountId= 2; Not allowed

accountEmail = "a@gmail.com"
accountPassword = 2323;
accountCity = "Delhi"

/* 
Prefer not to use var, because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])