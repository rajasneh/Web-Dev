let fruits=["mango","orange","litchi","pineapple","banana"];

for(fruit of fruits){
    console.log(fruit);
}

//nested for-of loop
let heroes=[["batman","superman","ironman"],["spiderman","thor","wonder woman"]];

for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}