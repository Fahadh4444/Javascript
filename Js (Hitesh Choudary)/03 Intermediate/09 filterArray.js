var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

console.log(testArray.fill(0));//Fills every element with given parameter
console.log(testArray.fill("F"));
console.log(testArray.fill("A",2));
/////////////////////////Start - inclusive //////// End - exclusive //////////////////////////////////////////
console.log(testArray.fill("H",2,5));


const myNumber = [23, 24, 42, 45, 11, 62, 17, 98];
const result = myNumber.filter( (num) => num != 45);// Filters the given parameter
console.log(result);


var users = ["Fahadh", "Majidh", "Channu", "Bhannu", "Yesh", "Yeshwanth"];
console.log(users.slice(1,3));
console.log(users.slice(1));

users.splice(2,2,"Hello");// hello inserted instead Channu Bhannu
console.log(users);
users.splice(1,3,"Hi", "Hlo");
console.log(users);