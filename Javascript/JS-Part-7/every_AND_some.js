//every method
//return true if every element of array gives true for some function else return false
// similar to AND operator

let arr=[2,4,6,8];
let res=arr.every((num)=>{
    return num%2==0;
});

console.log(res);


//some method
//return true if any element of array gives true for some function else return false
//similat to OR operator

let arr2=[1,3,9,2,4,6,8];
let res2=arr2.some((nums)=>{
    return nums%2==0;
});

console.log(res2);