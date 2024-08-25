const accountId = 14445853
let accountEmail = "pintu@mail.com"
var accountPassword = "123456"
accountCity = "balasore"
let accountState;

// accountId = 2 //not allowed

accountEmail = "pintu@ht.com"
accountPassword = "1234512"
accountCity = "soro"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
