var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval( () => {
    if(count < 1000) {
        count++;
        counter.innerText = count;
    }
} ,1);//In cricket its like stragetic timeout (Not playing cricket in that time interval)


setInterval(() => {
    followers.innerText = "Followers on Instagram"
}, 5000);//Playing cricket in that time interval