const user = ["Fahadh", 9, "student"];
// var role = user[2];
// var name = user[0];
var [name, courseCount, role] = user;
console.log(role);


const accountUser = {
    fullName: "Kasala Fahadh",
    numberOfCourses: 5,
    batch: "CSE"
};
console.log(accountUser.numberOfCourses);
const {fullName, numberOfCourses, batch} = accountUser;
console.log(numberOfCourses); //* You get error with this object destructuting because of the data type