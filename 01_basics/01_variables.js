const accountId = 144553
let accountEmail = "gannu@gmail.com"
var accountPassword = "12345"
accountCity = "Darbhanga"
let accountState;

// accountId = 2  // not allowed

accountEmail = "hc@gmail.com"
accountPassword = "212121"
accountCity = "Bengaluru"
console.log(accountId);

/*
prefer not to use var
because of issue in block 
*/
console.log([accountEmail,accountState, accountId, accountPassword, accountCity]);
