//Exercise 1

sum = (...nums)=>{
    let sum=0;
    for(let num of nums){
        sum+=num;
    }
    return sum;
}


console.log(sum(2,3,2,5,5,5,5));