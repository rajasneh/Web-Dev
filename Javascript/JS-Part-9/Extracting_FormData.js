let form=document.querySelector("form");

form.addEventListener("submit",function(event){
    // we can use queryselector by giving id but there is a short way
    //form contains a collection name elements in that all data is stored
    event.preventDefault();
    let user=this.elements[0];
    let pass=this.elements[1];
    alert(`hi ${user.value},your password is set to ${pass.value}`);
});