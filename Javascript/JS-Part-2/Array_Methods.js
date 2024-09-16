let cars=["Toyota","Maruti"];
console.log(cars);


cars.push("Hyundai");//add to end
console.log(cars);


cars.unshift("BMW");//add to start
console.log(cars);


console.log(cars.pop());//delete from end and returns it
console.log(cars);


console.log(cars.shift());//delete from start and returns it
console.log(cars);



//Concatenation and reverse
let primary=["red","yellow","blue"];
let secondary=["orange","green","blue"];

let allcolors=primary.concat(secondary);
console.log(allcolors);

allcolors.reverse();
console.log(allcolors);
