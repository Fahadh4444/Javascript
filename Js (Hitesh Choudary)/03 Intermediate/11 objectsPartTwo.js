var user = {
    firstName : "Fahadh",
    lastName  : "Kasala",
    role      : "Admin",
    loginCount: 36,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`
    },
    info : function () {
        return `${this.lastName} ${this.firstName} is a ${this.role} of this website. Do he signedIn through Facebook: ${user.facebookSignedIn} and with login count ${user.loginCount} times with enrollment in ${this.courseList}`;
    }
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React Js Course");
console.log(user.getCourseCount());
user.buyCourse("Full Stack Course");
console.log(user.getCourseCount());
console.log(user.info());