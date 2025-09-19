// const tinderUser =  new Object()// singleton obj
const tinderUser={}//non singleton obj

tinderUser.id = "123abc"
tinderUser.name = "suhaan"
tinderUser.isloggedIn = "false"

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullName: {
            firstname:"suhaan",
            lastname:"ambwani"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 ={...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedIn'));

const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"suhaan"
}
const {courseInstructor: instructor} =  course
console.log(instructor);

// {
//    "name":"suhaan",
//     "coursename":"JS",
//     "price":"free"
// }

