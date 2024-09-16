let input=document.querySelector("input");

input.addEventListener("keydown",function(event){//event is default parameter
    console.log(event.code);//event is a property 
    console.log("Key is pressed");
})