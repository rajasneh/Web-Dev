let arr=[1,2,3,4,5,6,7,8,912,32,53,3,42,43];

let maxival=arr.reduce((res,el)=>{
    if(res>el){
        return res;
    }else{
        return el;
    }
});

console.log(maxival);