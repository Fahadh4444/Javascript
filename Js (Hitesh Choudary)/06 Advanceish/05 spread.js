var returnedValue = Math.max(1, 2, 7, 48, 987, 876);
console.log(returnedValue);

var myObject = {}
Object.assign(myObject, {a:1, b:334, c:242}, {x:12, y:1234, z:6557});
console.log(myObject);


function sumOne(a, b){
    return a + b;
}
console.log(sumOne(5,6));
var myArray = [5, 4];
console.log(sumOne(myArray));
console.log(sumOne(4, 7, 9));
console.log(sumOne(...myArray));//* Spread operator it makes the group to spread


function sumTwo(...args){ //! Assume args as an array
    console.log(args); //* Its converts individuals into array
    let sum = 0;
    for(const arg of args){
        sum = sum + arg;
    }
    return sum;
}
console.log(sumTwo(2, 5, 45, 8));

function arthematics(a, b,...args){ //! Assume args as an array
    console.log(args); //* Its converts individuals into array
    let sum = 0;
    let multi = a * b;
    for(const arg of args){
        sum = sum + arg;
    }
    return [sum, multi];
}
console.log(arthematics(2, 7, 9, 8, 98));