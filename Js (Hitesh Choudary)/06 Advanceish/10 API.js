//! Won't work in node.j, so check in browser console
fetch('https://api.chucknorris.io/jokes/random')
.then(response => {
    return response.json();
})
.then((data) => {
    // console.log("DATA is: ",data);
    var joke = data.value;
    console.log("JOKE: ",joke);
})
.catch()