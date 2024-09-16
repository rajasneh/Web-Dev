let url="https://catfact.ninja/fact";

console.log(fetch(url));//returns a promis

fetch(url)
.then((response)=>{
    console.log(response);
    return response.json();//this make the code readable
})
.then((data)=>{
    console.log(data); 
})
.catch((err)=>{
    console.log(err);
})



//using fetch with async and await

async function getfacts() {
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);
    }catch(e){
        console.log(e);
    }
}
getfacts(url);