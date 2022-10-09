/**
 * Returns all the numbers of power is 3
*/

function powerOfThree(num){
    if(num<=0) return false;
    if(num==1) return true;
    if(num%3==0) return powerOfThree(num/3);
    
    return false;
}

let nums=27;
let res=powerOfThree(nums);
console.log(res);