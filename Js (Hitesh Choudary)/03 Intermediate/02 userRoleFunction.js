/*
Define a function that can answer the role of a user.
A user can be on following roles:
 admin - gets full access
 subadmin - gets access to create/delete courses
 testprep - gets access to create/delete tests
 user - gets access to consume content
 others - trail user.

 Input: getUserRole(name, role)
*/

function getUserRole(name, role)
{
    switch (role) {
        case "admin":
            return `${name} is a admin with all access.`;
            break;
        case "subadmin":
            return `${name} is a sub-admin with access to create/delete courses.`;
            break;
        case "testprep":
            return `${name} is a test prep with access to create/delete courses.`;
            break;
        case "user":
            return `${name} is a user to consume content.`;
            break;
        default:
            return `${name} is a trail user.`;
            break;
    }
}

console.log(getUserRole("Fahadh", "user"));
var message = getUserRole("Majidh", "admin");
console.log(message);

var getUserRole =  function (name, role) //this is also same
{
    switch (role) {
        case "admin":
            return `${name} is a admin with all access.`;
            break;
        case "subadmin":
            return `${name} is a sub-admin with access to create/delete courses.`;
            break;
        case "testprep":
            return `${name} is a test prep with access to create/delete courses.`;
            break;
        case "user":
            return `${name} is a user to consume content.`;
            break;
        default:
            return `${name} is a trail user.`;
            break;
    }
}

var getUserRole =  (name, role) => {//this is also same
    switch (role) {
        case "admin":
            return `${name} is a admin with all access.`;
            break;
        case "subadmin":
            return `${name} is a sub-admin with access to create/delete courses.`;
            break;
        case "testprep":
            return `${name} is a test prep with access to create/delete courses.`;
            break;
        case "user":
            return `${name} is a user to consume content.`;
            break;
        default:
            return `${name} is a trail user.`;
            break;
    }
}