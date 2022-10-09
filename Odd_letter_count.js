
let word="WELCOME";

let n=word.length;
let str=""
let middle=Math.floor(n/2);
console.log(n,middle)

let m=middle;
let cop=""
for(let i=middle;i<n;i++){
    for(let j=m;j<i+1;j++){
        str+=word[j]
    }
    if(i==n-1){
    cop+=str;
    }
    console.log(str)
    str=""
}

let k=0;
for(let i=0;i<middle;i++){
    for(let j=k;j<=i;j++){
        str+=word[j];
    }
    console.log(cop+str)
    str=""
}