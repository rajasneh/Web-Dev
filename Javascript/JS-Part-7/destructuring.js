let names=["tony","bruce","peter","steve"];

let [winner,runerup,secondRUnnerup]=names;//stores index of 0 1 2 
console.log(winner,runerup,secondRUnnerup);

let [win,...others]=names;//win stores index 0 and others create an array of other remaining elements
console.log(win,others);



//Destructig-------->Object

let student={
    name:"Asneh",
    class:10,
    roll:10,
    city:"Jamshedpur",
    username:"asnehraj12",
    password:"abcd"
};

let{username,password}=student;
console.log(username);
console.log(password);

//if we want to use variable

let{username:user,city:place,bloodgrout:bg="N/A"}=student;// bloodgroup or bg is default value N/A if no value assigned in student then n only this value will be executed other wise the main value
console.log(user);//we can only acess with the given variable names
console.log(place);
console.log(bg);