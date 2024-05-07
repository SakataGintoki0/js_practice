const marvel = ["Ironman", "Thor", "Spiderman"]
const dc = ["Superman", "flash", "batman"]

// marvel.push(dc)


// const allHeroes  = marvel.concat(dc)
const allHeroes  = [...marvel, ...dc]

// console.log(allHeroes)

const anotherArray = [1,2,3, [4,5,6],7, [6,7, [8,9]]]

const oneMoreArray = anotherArray.flat(2)
// console.log(oneMoreArray)


// console.log(Array.isArray("Yoegsh"))
// console.log(Array.from("Yogesh"))
// console.log(Array.from({name: "Yogesh"}))


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2 , score3))
