var user = {
    firstName : "Fahadh",
    lastName  : "Kasala",
    role      : "Admin",
    loginCount: 36,
    facebookSignedIn : true
};

console.log(`${user.lastName} ${user.firstName}`);
console.log(user.lastName + user.firstName);
console.log(user["lastName"] + user["firstName"]);
console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.log(user);
console.table(user);