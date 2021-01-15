var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`${this.firstName} your course count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function(){
    console.log(`Your first name is ${this.firstName}`);
};//To inject it into main User Object


var Hi = User("Hi", 3);
console.log(Hi);

var Fahadh = new User("Fahadh", 3);//new creates unique instances
console.log(Fahadh);

var Majidh = new User("Majidh",4);
console.log(Majidh);

var Yesh = new User("Yesh", 2);
Yesh.getCourseCount();
Yesh.getFirstName();