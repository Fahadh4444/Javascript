var myMap = new Map();

myMap.set(1,"Uno");
myMap.set(2,"Dos");
myMap.set(3,"Tres");
myMap.set(4,"Cutro");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Key is ${value}`);
}

for(let [key, value] of myMap){  //* When we use for loop we get key then value
    console.log(`Key is ${key} and Value is ${value}`);
}

myMap.forEach( (key) => console.log(`${key}`) ); //* When we use forEach it gives value first and then key
myMap.forEach( (value, key) => console.log(`Key is ${key} and Value is ${value}`) );

myMap.delete(2); //*Parameter is key
console.log(myMap);