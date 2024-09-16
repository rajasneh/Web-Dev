let arr=[1,2,3,4,5,6,7,8];

function print(el){
    console.log(el);
}

arr.forEach(print);
console.log("--------------------------------------")
//using arrow funtion

let arr2=[
    {
        name:"aman",
        marks:80
    },
    {
        name:"harsh",
        marks:100
    },
    {
        name:"sumit",
        marks:90
    }
]

arr2.forEach((el)=>{
    console.log(el.marks)
});