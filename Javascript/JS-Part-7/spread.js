//spread
//we cant take input an array in  math.min function

let arr=[1,2,3,4,6,7,5,85,32,45,65];
let minim=Math.min(...arr);//by ...arr one by one element is passed
console.log(minim);

//spread ----->with Array Literals
let arr2=[1,2,3,4,6];
let newarr2=[...arr2];
console.log(newarr2);

let chars=[..."hello"];
console.log(chars);

//spread -------->with i=object literals

const data={
    email:"xyz@gmail.com",
    password:"abcd"
};
const datacopy={...data,id:123,country:"INDIA"};
console.log(datacopy);