function init() {
    var firstName = "Fahadh";
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}
var value = init();
value();



function doAddition(x){
    return function (y){
        return x+y;
    };
};
console.log(doAddition(5)(5));
//* doAddition()()()  //! Curring