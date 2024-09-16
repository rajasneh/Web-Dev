let args=process.argv;
// node Process_in_Node.js asneh bittu harsh sharad type this in terminal
for(let i=2;i<args.length;i++){// why i=2? cz first one is executable path node and second one is current file
    console.log("Hello to",args[i]);
}


