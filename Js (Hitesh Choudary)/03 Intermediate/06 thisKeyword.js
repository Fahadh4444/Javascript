// part 1 for this keyword

console.log(this);//But in browser it's different

var game = "Cricket";

function sayName() {
    var name = "Fahadh";
    console.log(this);
}
sayName();