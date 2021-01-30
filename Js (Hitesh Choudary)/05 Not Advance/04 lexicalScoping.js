function init() {
    var firstName = "Fahadh";
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName();
}
init();
console.log(firstName); // !Wrong because firstNAme out of scope