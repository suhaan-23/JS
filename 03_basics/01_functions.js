function saymyname() {
    console.log("s");
    console.log("u");
    console.log("h");
    console.log("a");
    console.log("a");
    console.log("n");
}

// saymyname()

// function add2Num(num1,num2){//parameters
//     console.log(num1+num2);
// }
function add2Num(num1,num2){//parameters
    // let result=num1+num2
    // return result
    return num1+num2
}

add2Num(3,"4")//arguments
const result = add2Num(3,4)

// console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(username=== undefined){
       console.log("please enter a username");
       return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("suhaan"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1)//rest operator
{
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    username:"suhaan",
    price:999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myArray = [200,400,100,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400,100,500]));


