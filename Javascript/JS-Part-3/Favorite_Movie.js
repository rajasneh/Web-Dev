let favMovie="Avengers";

let guess=prompt("Guess my favorite movie");

while(guess!=favMovie && guess!="quit"){
    guess=prompt("You guessed wrong! Try again");
}
if(guess==favMovie){
    console.log("Congrats!");
}else{
    console.log("You quit");
}