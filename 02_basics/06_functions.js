function add(num1, num2) {
    // console.log(num1 + num2)
    const result = num1 + num2
    return result
}

const result = add(2, "3")
// console.log(result);

function calculateCartPrice(val1, val2, ...num1) {
    return num1 
}


// console.log(calculateCartPrice(2, 3, 4, 5))

const user = {
    username : "Yogesh",
    price : 199
}

function handleObj(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`)
}

// handleObj(user)

const myNewArray = [2,3,4,5]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))




