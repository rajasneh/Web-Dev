function sum(...args){ // args store every value passed in an array so reduce method work on it
    return args.reduce((sum,el) => sum+el);
}

console.log(sum(1,2,4,6,4,6,3,6,8,5,3));