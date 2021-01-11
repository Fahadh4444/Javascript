const names = ["Youtube", "Insta", "Netflix", "Amazon", "Flipkart"];

for(const n of names){
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Insta",
    fb: "Facebook",
    lco: "LearnCodeOnline.in"
}
// for( const n in symbols){
//     console.log(symbols[n]);
// }
// for( const n in symbols){
//     console.log(n);
// }
for( const n in symbols){
    console.log(`Key is ${n} and value is ${symbols[n]}`);
}