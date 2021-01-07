//User is allowed to make purchase when he is:
//logged in
//email verified
//cardInfo - valid
//If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = false;

// if(isLoggedIn)
// {
//     console.log("Loggedin Successful");
//     if(isEmailVerified)
//     {
//         console.log("Email is Vertified");
//         if(cardInfo)
//         {
//             console.log("You can make a purchase");
//         }
//     }
// }


if(isLoggedIn && isEmailVerified && cardInfo)
{
    console.log("Allow user to make purchase");
}else
{
    console.log("Something went wrong");
}