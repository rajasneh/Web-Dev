// map method
//it stores the returning value of callback function in a new array

let nums=[1,2,3,4];

let sq=nums.map((num)=>{
    return num*num;
});

console.log(sq);


// filter method
//it also stores the returning value of callback function in a new array but only when the callback function return true

let nums2=[1,2,3,4,5,6,7,8,9];

let even=nums2.filter((numss)=>{
    return numss%2==0;
});

console.log(even);