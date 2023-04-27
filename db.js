
const {Client} = require("pg");

const data = new Client({
    user:"postgres",
    host:"localhost",
    database:"parentheses",
    port : 7423,
    password : "sushma123",
})

data.connect((err,response) =>{
    if(!err){
        console.log("Databse is connected");
    }
    else{
        console.log("There is an error ");
    }
}) 

module.exports = data;