//we will take example of saving a data to a database
// and another data will only saved when the first one is saved other wise  it will throw error

function savedb(data,sucess,failure){
    let speed=Math.floor(Math.random()*10)+1;
    if(speed>4){
        sucess();
    }else{
        failure();
    }
}

savedb(
    "asneh",
    ()=>{
        console.log("Sucess: your data1 is saved");
        savedb(
            "harsh",
            ()=>{
                console.log("sucess: your data2 is saved");
                savedb(
                    "bittu",
                    ()=>{
                        console.log("sucess:your data3 was saved");
                    },
                    ()=>{
                        console.log("weak connection data3 was not saved");
                    }
                )
            },
            ()=>{
                console.log("failure: weak connection data2 not saved");
            }
        );
    },
    ()=>{
        console.log("failure: weak connection data1 not saved");
    }
);