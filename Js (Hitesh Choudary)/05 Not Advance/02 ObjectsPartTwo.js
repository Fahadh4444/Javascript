var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is: ${this.name}`);
    },
};

var Fahadh = Object.create(User);
console.log(Fahadh);
Fahadh.getUserName();
Fahadh.name = "Fahadh";
Fahadh.getUserName();


var sam = Object.create(User, {
    name: { value: "Sam" },
    courseCount: { value: 3 },
});
sam.getUserName();