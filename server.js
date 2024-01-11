require('dotenv').config();
const app = require('./src/app');
const configViewEngine = require('./src/config/viewEngine')
const webRouter = require('./src/routes/web')
const connection = require('./src/config/database')
const express = require("express")


// //config req.body
app.use(express.json())
app.use(express.urlencoded())

//config
configViewEngine(app)

//khai bao route
app.use('/', webRouter)

// execute will internally call prepare and query
connection.execute(
    'SELECT * FROM USER',
    function(err, results, fields) {
      // console.log(">>>check result:", results); // results contains rows returned by server
    })

const PORT = process.env.PORT || 3001;
const HOST_NAME = process.env.HOST_NAME;

// console.log(">>> check env: ", process.env)
app.listen(PORT, HOST_NAME, () =>{
    console.log(`Server is running on PORT ${PORT}`)
})