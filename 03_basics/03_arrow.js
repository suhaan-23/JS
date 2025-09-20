const user = {
    username: "suhaan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "suhaan"
//     console.log(this.username);
    
// }
// chai()
const chai = () => {
    let username="suhaan"
    console.log(this.username);
}

 
// chai()
// const addTwo = (num1,num2) => {
//     return num1 + num2
// } // explicit return

// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) =>  (num1 + num2)
 // implicit return

const addTwo = (num1,num2) =>  ({username: "suhaan"}) 

console.log(addTwo(3,4))

const myArray = [2,5,3,4]

// myArray.forEach(() => ())