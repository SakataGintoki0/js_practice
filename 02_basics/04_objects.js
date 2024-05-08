const tinderUser = new Object(); //singleton object

//const tinderUser = {}; //object literal

tinderUser.id  = "abc123"
tinderUser.name = "Sam"
tinderUser.loggedIn = true

const regularUser = {
    email : "a@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Yogesh",
            lastName : "Sewada"
        }
    }
}



// console.log(regularUser.fullName);


const obj1 = {
    1:"a",
    2: "b"
}
const obj2 = {
    3:"a",
    4: "b"
}


const obj3 = {...obj1, ...obj2}
const obj4 = Object.assign({}, obj1, obj2, obj3)

// console.log(obj3, obj4)


const users = [
    {
        id: 1,
        name: "Yogesh"
    },
    {
        id: 2,
        name : "Someone"
    }
]

// users[1].email

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("name"))



