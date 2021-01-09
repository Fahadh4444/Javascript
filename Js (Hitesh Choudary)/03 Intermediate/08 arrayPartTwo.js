function isEven(element) {
    if (element % 2 == 0) {
        return true;
    }
    return false;
}
console.log(isEven(2));

function isEveni(element) {
    return element % 2 === 0;
}
console.log(isEveni(3));

// ARROW FUNCTIONS
var isEvenii = (element) => {
    return element % 2 === 0;
}
console.log(isEvenii(2));

/////////////////////////////////////////////EVERY///////////////////////////////////////
var result = [2, 4, 6, 8].every(isEven);// Check every element in Array
console.log(result);
var resulti = [2, 3, 6, 8].every(isEven);
console.log(result);

var resultii = [2, 4, 6, 8].every((e) => {
    return e % 2 === 0;
});// Writing callbacks
console.log(resultii);


// If you returning something then you have to use curly barces or no need of it
var resultiii = [2, 4, 6, 8].every((e) => (e % 2 === 0));// Writing callbacks
console.log(resultiii);