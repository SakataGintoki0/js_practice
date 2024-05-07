
const mySym = Symbol("key1")

const user = {
    name: "Yogesh",
    age : 24,
    location : "Earth",
    email : "yogeshsewada0@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "Full name" : "Yogesh Sewada",
    [mySym] : mySym
}

// console.log(user["Full name"]);
// console.log(typeof user[mySym]);
user.email = "S@gmail.com"
// Object.freeze(user)
user.email = "A@gmail.com"

user.greeting = function () {
    console.log("hello")
}
user.greeting2 = function () {
    console.log(`hello Js user, ${this.name}`)
}

console.log(user.greeting())
console.log(user.greeting2())