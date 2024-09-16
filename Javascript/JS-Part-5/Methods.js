let calculator={
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}

console.log(calculator.add);//this will print thew defination of function

console.log(calculator.add(1,2));
console.log(calculator.mul(5,10));