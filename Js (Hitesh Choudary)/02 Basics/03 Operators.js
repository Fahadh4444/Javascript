var num1 = 25;
var num2 = 7;

console.log(num1*num2);

var answer = num1 < num2;
console.log(answer);


var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice-sellingPrice)/ listingPrice) * 100;
console.log("Discount percentage is "+ discountPercent);


//To round number 
var displayDiscountPercentage = Math.round(discountPercent);
console.log("Discount percentage is "+ displayDiscountPercentage + "% off");


var result = listingPrice > sellingPrice;
console.log(result);
// To Find which type of variable
console.log(typeof result);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

