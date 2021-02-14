const fahadh = {
    firstName: "Fahadh",
    lastName: "Kasala",
    role: "Game Changer",
    courseCount: 3,
    getInfo: function(){
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studing ${this.courseCount} courses
        `);
    }
}
fahadh.getInfo();

const jk = {
    firstName : "Fullbuster",
    lastName : "JK",
    role : "Sub-Admin",
    courseCount : 4
};
//! jk.getInfo(); (Worng)

fahadh.getInfo.bind(jk); //*Won't give output because it gives only refer back
fahadh.getInfo.bind(jk)();
fahadh.getInfo.call(jk); //* Call will directly call function not like bind