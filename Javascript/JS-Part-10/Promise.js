//refactoring with promises
function savedb(data){
    return new Promise((resolve,reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4){
            return resolve("sucess");
        }else{
            return reject("rejected");
        }
    });
}
 //console.log(savedb("asneh"));

//then and catch method
//if we want to certain work whenthe promise is reolved then we use .then

/*
savedb("asneh")
    .then(()=>{
        console.log("Promise was resolved");
    })
    .catch(()=>{
        console.log("Promise was failed");
    })
*/

//Promised chaining -------->Improved Version

function savedb2(data){
    return new Promise((resolve,reject)=>{
        let speed=Math.floor(Math.random()*10)+1;
        if(speed>4){
            return resolve();
        }else{
            return reject();
        }
    });
}

savedb2("asneh")
    .then(()=>{
        console.log("data1 is saved");
        return savedb2("Harsh");
    })
    .then(()=>{
        console.log("data2 is saved");
        return savedb2("harsh");
    })
    .then(()=>{
        console.log("data3 is saved");
    })
    .catch(()=>{
        console.log("Data not saved");
    })