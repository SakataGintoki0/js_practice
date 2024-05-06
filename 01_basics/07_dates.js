

let myDate = new Date();

// console.table([myDate, myDate.toDateString(), myDate.toString(), myDate.toISOString(),myDate.toLocaleString(), myDate.toLocaleDateString(), myDate.toLocaleTimeString()]);
// console.log(myDate);
// console.log(myDate.toDateString);
// console.log(myDate.toISOString);
// console.log(myDate.toLocaleString);
// console.log(myDate.toLocaleDateString);
// console.log(myDate.toLocaleTimeString);

let newDate = new Date("01-14-2023")
// console.log(newDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);


let oneMoreDate = new Date();

console.log(oneMoreDate.getDate())

console.log(oneMoreDate.toLocaleString("default", {
    weekday : "long"
}))