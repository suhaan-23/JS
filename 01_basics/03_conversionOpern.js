let score="33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);// will print 0 if score=null
// will print 0 or 1 if value is false or true
// will print NaN if score = 33a

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1=>true; 0=> false;
// ""=> false;
// "suhaan"=> true

let someNumber = 33
let stringNumber= String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

let str1="hello";
let str2="suhaan";
let str3= str1+str2
console.log(str3);

console.log("1"+2);// output-12
console.log(1 + "2");// output-12
console.log("1"+2+2);//output-122
console.log(1+2+"2");