// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

const myStates = [
    "Andhra Pradesh",
    "Telangana",
    "Kerala",
    "Karnataka", 
    "Tamil Nadu"
];
for(let i = 0; i < myStates.length; i++){
    console.log(myStates[i]);
}

// var i = 0;
// for(;;){
//     if(i > 3) break;
//     console.log(i);
//     i++;
// }

const myStatesi = [
    "Andhra Pradesh",
    "Telangana",
    1947,
    "Kerala",
    "Karnataka", 
    "Tamil Nadu"
];
for(let i = 0; i < myStates.length; i++){
    if(typeof myStatesi[i] !== "string") continue;
    console.log(myStates[i]);
}

const myStatesii = [
    "Andhra Pradesh",
    "Telangana",
    1947,
    "Kerala",
    "Karnataka", 
    "Tamil Nadu"
];
let i = 0;
while(i < myStatesii.length){
    console.log(myStatesii[i]);
    i++;
}

const myStatesiii = [
    "Andhra Pradesh",
    "Telangana",
    1947,
    "Kerala",
    "Karnataka", 
    "Tamil Nadu"
];
let j = 0;
do  {
    console.log(myStatesiii[j]);
    j++;
}while(j < myStatesiii.length);