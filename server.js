const express = require('express');
const cors = require('cors');

const app = express();
const port = 3300;

const db = require('./db')
app.use(express.json());
app.use(cors())

app.listen(port,() =>{
 console.log("Your server started")
});


app.post("/register",(request,response) =>{
    const {userName,userMail} = request.body;

    db.query(`INSERT INTO students (name,mail) VALUES ('${userName}','${userMail}')`,(error,result) =>{
        if(!error){
           response.send(result.rows);
        }
        else{
            console.log(error);

        }
    })

})

