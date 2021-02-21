// import User from "./06 classJS"; //* This won't work here

const User = require("./06 classJS.js");


const fahadh = new User("Fahadh", "mdfahadh2000@gmail.com")

console.log(fahadh.getInfo());
console.log(fahadh.getInfo().email);

fahadh.enrollCourse("Flutter");
fahadh.enrollCourse("Full Stack Development");
console.log(fahadh.getCourseList());

let courses = fahadh.getCourseList();
courses.forEach( (c) => {
    console.log(c);
});