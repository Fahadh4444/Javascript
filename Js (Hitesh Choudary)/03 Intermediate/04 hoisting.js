function tipper(a) {
    var bill = a;
    console.log(bill+5);
}
tipper("5");

function tipperOne(a) {
    var bill = parseInt(a);
    console.log(bill+5);
}
tipperOne("5");

bigTipper("200");
function bigTipper(a) {
    var bill = parseInt(a);
    console.log(bill+15);
}

// bigTipperOne("200");
// var bigTipperOne = function (a) {
//     var bill = parseInt(a);
//     console.log(bill+15);
// }//This gives a error


var bigTipperOne = function (a) {
    var bill = parseInt(a);
    console.log(bill+15);
}//This wont give a error
bigTipperOne("200");

console.log(name);
var name = "Fahadh";

// console.log(city);
// // var city = "Tirupati";


function sayName() {
    var name = "MR. F"
    console.log(name);
}
sayName();

console.log(name);