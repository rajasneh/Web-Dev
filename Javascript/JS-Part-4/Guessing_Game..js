const max=prompt("Enter the max number");
const random=Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");  

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }

    if(guess==random){
        console.log("Congrats you guesses the right number!..the number was",random);
        break;
    }else if(guess<random){
        guess=prompt("Your guess was to small! please try again");
    }else{
        guess=prompt("Your guess was to large! please try again")
    }
}