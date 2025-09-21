const accountId = 122554
let accountEmail = "rohan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;
// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "2222"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

