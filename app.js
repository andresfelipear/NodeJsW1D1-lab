//Exercise 1
const sum = require('./fsum')



//myArr
let myArr = [2,3,5,5]

//mySecondArr
let mySecondArr = myArr.map(num => num*2);

//Average mySecondArr
const avrgMySecond = mySecondArr.reduce((a,b)=> a+b)/mySecondArr.length

let result =  sum(...myArr)
let result2 = sum(...mySecondArr)

//function filter
const fFilter = (arr)=>{
    let result = arr.filter((num)=>num>avrgMySecond)
    return result
}

console.log("Exercise 1");
console.log("myArr: " +result);
console.log("mySecondArr: " +result2);
console.log("average: "+ avrgMySecond);
console.log("filter: "+ fFilter(mySecondArr));

//setTimeout
setTimeout(()=>{console.log("Goodbye")}, 3000);


//Employee object
const Employee = {
    "name":'Carlos',
    "email":'carlos@car.com',
    "deparment":'engineer',
    "startDate":'2022-01-04'
}

//Person object
const Person = {
    "name":Employee.name,
    "email":Employee.email,
}
console.log("Employee: ")
console.log(Employee)
console.log("Person: ")
console.log(Person)


