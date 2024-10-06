const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:"delta_app",
    password:""//enter your password
});

let q="INSERT INTO user (id,username,email,password) VALUES ?";

let users=[
    ["123b","abcb","abc@gmail.comb","abcb"],
    ["123a","abca","abc@gmail.coma","abca"],
];


try{
    connection.query(q,[users],(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
} catch(err){
    console.log(err);
}

connection.end();
let getRandomUser= ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}