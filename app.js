//Exercise 1
const sum = require('./fsum')



//myArr
let myArr = [2,3,5,5]

//mySecondArr
let mySecondArr = myArr.map(num => num*2);
let result =  sum(...myArr)
let result2 = sum(...mySecondArr)

console.log("Exercise 1");
console.log("myArr: " +result);
console.log("mySecondArr: " +result2);

