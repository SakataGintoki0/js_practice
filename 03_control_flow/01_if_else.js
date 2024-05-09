// if(2 != "2") {
//     console.log("Hello")
// }else {
//     console.log("world")
// }

// if(2 > 1) console.log("test"), console.log("else statement") //not a good practise
// if(2 > 1) console.log("test")
// 2 > 3 ? console.log("hello") : console.log("world")

const balance = 501;


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course")
// }

// if(loggedInFromGoogle || userLoggedIn) {
//     console.log("Logged in")
// }

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;

    default:
        console.log("Not a month")
        break;
}