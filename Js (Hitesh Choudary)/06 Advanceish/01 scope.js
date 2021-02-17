console.log(name);
var name = "Fahadh";
console.log(name);

if(true){
    var lastName = "Kasala";
    console.log(lastName);
}
console.log(lastName);//* Available outside scope also when we use var, it won't give error
                      //* In JS scope is not based on {}, but based on function
if(true){
    let fullName = "Kasala Fahadh";
    console.log(fullName);
}
console.log(fullName);//* while using let it gives error for scope
                      //* Its makes scope based on {}, but not on function

