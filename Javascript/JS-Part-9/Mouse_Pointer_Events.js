let btns=document.querySelectorAll("button");

for(btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("You enterd a button");
    };
}


function sayHello(){
    alert("Hello!The button was clicked");
}
