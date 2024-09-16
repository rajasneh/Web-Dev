let btns=document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener("click",function(){
        console.log("button was  clicked");
    });
    
    btn.addEventListener("dblclick",function(){
        alert("button was double clicked");
    });
}