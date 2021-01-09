// Declaration of Arrays
var countries = ["India", "USA", "Japan", "Australia"];
var states = new Array("Andhra Pradesh", "Telangana", "Delhi", "Kerala");

console.log(states);
console.log(states[1]);

//Length of array
console.log(states.length);

//replace values
states[2] = "Karnataka";
console.log(states);

var user = ["Fahadh", "mdfahadh2000@gmail.com", 3, 34, true];
console.log(user);

user.pop();//To Get rid of element from last first place
console.log(user);

user.unshift("NEW VALUE");//To add elements at first place
console.log(user);

user.shift();//To get rid of element from first place
user.shift();
console.log(user);

console.log(user.indexOf(3));// Gives index of element
console.log(user.indexOf("mdfahadh2000@gmail.com"));
console.log(user.indexOf("I am not there"));//Gives -1 if not present in array

console.log(Array.from("Fahadh"));//Converts string to array