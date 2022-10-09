/**
 * JavaScript Promis.race() vs Promise.all()
 * 
 * The Promise.all() static method accepts a list or iterable of Promises(Array) and
 * returns a new Promise that resolves when all Promise in the iterable has resolved or rejects if at 
 * least one of the promises in the iterale has rejected.When an empty iterable is passed, then this
 * method returns (synchronously) an already resolved promise.
 */

/**
 * Promise.all()
 */

const promise1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(3);
    },3000)
});

const promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res(2);
    },2000)
})

Promise.all([promise1,promise2]).then((res)=>{
    console.log(res[0]);
    console.log(res[1]);
})
 

/**
 * Promise.race()
 * -->The Promis.race() static method accepts a list or iterable of Promisses
 * and returns a new Promise that resolves or rejects as soon as there is one 
 * promise that is fulfilled or rejects, with the value or error message from
 * the promise
 */

function resolve(value,seconds){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(value)
        },seconds)
    })
}
function reject(reason,seconds){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(reason)
        },seconds)
    })
}

Promise.race([resolve(1,5000),resolve(2,4000),resizeBy(3,1000)])
.then(value => console.log(value));