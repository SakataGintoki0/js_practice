const userEmail = ""

if(userEmail) {
    console.log("Got user email")
} else{
    console.log("Dont have email")
}

if(userEmail.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}


//Nullish coalescing operator (??)
let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? null ?? 20


//Terniary operator

//condition ? true : false

console.log(val1)

/*
Falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/*
Truthy values
"0", "false", " ", [], {}, function(){}
*/