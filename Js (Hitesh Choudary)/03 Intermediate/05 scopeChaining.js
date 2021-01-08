var name = "Fahadh";

console.log("Line number 3", name);

function sayName() {
    console.log("Line number 6", name);
}
sayName();

function sayNameOne() {
    var name = "Me F";
    console.log("Line number 12", name);
    function sayNameTwo() {
        console.log("Line number 14", name);
    }
    sayNameTwo();
}
sayNameOne();

function sayNameOnei() {
    var name = "Me F";
    console.log("Line number 22", name);
    function sayNameTwoi() {
        var name = "Hi you";
        console.log("Line number 25", name);
    }
    sayNameTwoi();
}
sayNameOnei();

function sayNameOneii() {
    console.log("Line number 32", name);
    function sayNameTwoii() {
        console.log("Line number 34", name);
    }
    sayNameTwoii();
}
sayNameOneii();