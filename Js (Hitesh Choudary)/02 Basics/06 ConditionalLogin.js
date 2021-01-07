// Alloe user to access course if he is:
// logged in from Email
// logged in from Google
// logged i from Facebook

var email = false;
var facebook = false;
var google = true;

if(email || facebook || google)
{
    console.log("Login Successful");
}else
{
    console.log("Something went wrong");
}