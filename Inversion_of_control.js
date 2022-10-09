/**
 * Implement a map using the inversion of control principle that will perform
 * operation on an array such as:
 * 1. Squaring the elements
 * 2. Dividing them by 5
 * 3. The root of the element
 * 4. etc.
 */

function operation(arr,arrFunction){
    const mp=arr.map(arrFunction);
    return mp;
}
const nums=[1,2,4,8,16,24,32,40];

//Squaring the elements
let sqr=operation(nums,x=>x*2);
console.log(sqr);

//dividing them by 5
let divide=operation(nums,x=>x/5);
console.log(divide);

//the square root

let root=operation(nums,x=>Math.sqrt(x));
console.log(root);