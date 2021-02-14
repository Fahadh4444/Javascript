const civilizations = [
    {
        name: "Ancient China",
        year: "2.10"
    },
    {
        name: "Ancient Greece",
        year: "0.80"
    },
    {
        name: "Ancient Egypt",
        year: "3.15"
    },
    {
        name: "Rama Empire",
        year: "10.0"
    }
];

function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""; //* Makes ul innerHTML empty every time when they call for generateLIST()
    civilizations.forEach(civilization => {
        
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(civilization.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const year = document.createTextNode("Year: " + civilization.year);
        span.appendChild(year);

        li.appendChild(span);
        ul.appendChild(li);
    });
}
// generateLIST();

window.addEventListener("load",generateLIST); //* same as generateList()

const buttonIncreasingOrder = document.querySelector(".sort-btn-i");
buttonIncreasingOrder.addEventListener("click", () => {
    civilizations.sort((a, b) => a.year - b.year);
    generateLIST();
})

const buttonDecreasingOrder = document.querySelector(".sort-btn-d");
buttonDecreasingOrder.addEventListener("click", () => {
    civilizations.sort((a, b) => b.year - a.year);
    generateLIST();
})