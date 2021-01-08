// Falsy values:
// undefined
// here user is undefined
// null
// 0
// ""
// NaN



var user = "2";

if (2 == user)
{
    console.log("Condition is true");    
}
// Above is coercion

if (2 === user)
{
    console.log("Condition is also true here");    
}

console.log("2+2");
console.log(2+2);
console.log("2"+2);