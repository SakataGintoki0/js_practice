function myFilter() {
    return "something"
}


Array.prototype.printArray = function() {
    for (let index = 0; index < this.length; index++) {
        console.log(`${this[index]}`);
    }
}


Array.prototype.myFilter = function(callback) {
    const newArr = []
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index])){
            newArr.push(this[index])
        }       
    }
    return newArr;
}

myArr = [1,2,3,4]

// myArr.printArray();
console.log(myArr.myFilter((el) => el === 3))


const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        console.log(error)
    }
}

const asyncHandler2 = function (fn) {
    async function name(req, res, next) {
        try {
            await fn(req, res, next)
        } catch (error) {
            console.log(error)
            throw new Error
        }
    }
}
