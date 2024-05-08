const user = {
    username: "Yogesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    },
}

// user.welcomeMessage()


function one() {
    console.log(this)
}

// one()

const two = () => {
    console.log(this)
}
two();


const add = (num1, num2) => (num1 + num2)
const addd = (num1, num2) => num1 + num2
const sub = (num1, num2) => {
    return num1 - num2
}

console.table([add(3, 2), addd(3,2), sub(3, 2)])
