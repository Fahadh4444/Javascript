class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    getInfo(){
        return {name: this.name, email: this.email}
    }
    enrollCourse(name){ //* Setters
        this.#courseList.push(name);
    }
    getCourseList(){ //* getters
        return this.#courseList;
    }

    login(){
        return "You are loggedIn";
    }

    static logOut(){ //* This makes child not to inherit from parent class
        return "You are loggedOut";
    }
}


class subAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am Admin"; // * This makes to over write parent class
    }
    login(){
        return "I am loggedIn as Admin"
    }
}

module.exports = User;


const fullbuster = new User("Fullbuster", "Fullbuster@gmail.com");
console.log(fullbuster.getInfo());
fullbuster.enrollCourse("React");
console.log(fullbuster.getInfo());
console.log(fullbuster.getCourseList());
console.log(fullbuster.courseList);


const tom = new subAdmin("Tom", "Tom@Jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
// console.log(tom.logOut()); //! ERROR
