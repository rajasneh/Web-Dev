let url="https://catfact.ninja/fact";

let btn=document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let res=await getFacts();
    let p=document.querySelector("p");
    p.innerText=res;
});

async function  getFacts() {
    try{
        let res=await axios.get(url);
        console.log(res);
        return res.data.fact;
        
    }
    catch(e){
        console.log("error-",e);
        return "No data found";
    }
}
    