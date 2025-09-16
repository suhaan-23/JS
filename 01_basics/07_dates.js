let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// let myCreatedDate = new Date(2025, 0, 11)
// let myCreatedDate = new Date(2025, 0, 11, 5, 3)
// let myCreatedDate = new Date("2020-01-23")
let myCreatedDate = new Date("01-23-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})
