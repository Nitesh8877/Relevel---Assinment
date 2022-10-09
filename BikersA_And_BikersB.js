
const Bikers=(x,y,k,l,arr)=>{
    let counta=0;
    let countb=0;
    let BikeAKm=x*k;
    let BikeBkm=y*l;
    let TotalAKm=0;
    let TotalBKm=0;

    arr.map(item=>{
        TotalAKm+=parseInt(item);
        TotalBKm+=parseInt(item);
        if(BikeAKm>TotalAKm){
            counta++;
        }
        if(BikeBkm>TotalBKm){
            console.log(TotalBKm)
            countb++;
        }
    });

    return `${counta} ${countb}`
}


let a=10;
let b=12;
let k=20;
let l=15;
let arr=[40,98,134,179,211,248];
let res=Bikers(a,b,k,l,arr);
console.log(res);