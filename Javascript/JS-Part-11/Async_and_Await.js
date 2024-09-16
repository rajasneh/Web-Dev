//Example of async function

async function greet() {
    //throw("Weak connection");
    //throw will always throw error 
    return("Hello");
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was",result);
})
.catch((err)=>{
    console.log("error found");
    console.log("error was",err);
});


//Example of --------->Await keyword
let h1 = document.querySelector("h1");

function changecolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num=Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log("Color changed to", color);
            resolve("Promise resolved");
        }, delay);
    });
}

async function demo() {
    try{
        await changecolor("green", 1000);
        await changecolor("yellow", 1000);
        await changecolor("blue", 1000);
        await changecolor("pink", 1000);
        await changecolor("orange", 1000);
    }catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a=5;
    console.log(a);
}
demo();
