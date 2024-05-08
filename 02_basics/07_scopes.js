const b = 20
let a = 10

{
//  const b = 20
//  let a = 10
//    var c = 30  //ganda hai, mat use karna
    a = 20
    // console.log(a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one() {
    const name = "Yogesh"

    function two() {
        const age = 6
        console.log(name)
    }
    // console.log(age)
    two()
}

// one()

addone(5)
function addone(num) {
    return num + 1
}


// addTwo(5)
const addTwo  = function (num) {
    return num + 2
}
addTwo(5)


