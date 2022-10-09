//using inbuilt function

let arr=["divya",
"seetha",
"shanmugi",
"mohan khan",
"mohan tata"]

for(let i=0;i<arr.length;i++){
    let res=arr[i].toUpperCase();
console.log(res)
}


//without inbuilt function

const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower='abcdefghijklmnopqrstuvwxyz';

const upperCase=(arr)=>{
    const lowerArr=lower.split('');
    const upperArr=upper.split('');
    const lowerObj={};
    const upperObj={};
    const res=[];

    lowerArr.map((item,index)=>
    lowerObj[item]=(index+1))
    
    upperArr.map((item,index)=>
    upperObj[index+1]=item)

    // console.log(lowerObj,upperObj);

    arr.map(inp=>{
        let newStr='';
        inp.split('').map(item=>{
            if(lowerObj[item]){
                newStr+=upperObj[lowerObj[item]];
            }else{
                newStr+=item;
            }
        })
        res.push(newStr);
    })
    return res;
}
upperCase(arr)